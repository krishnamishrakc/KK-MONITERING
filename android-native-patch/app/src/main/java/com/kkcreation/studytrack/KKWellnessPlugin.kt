package com.kkcreation.studytrack

import android.app.AppOpsManager
import android.app.usage.UsageEvents
import android.app.usage.UsageStatsManager
import android.content.ComponentName
import android.content.Context
import android.content.Intent
import android.content.pm.PackageManager
import android.os.Build
import android.os.Process
import android.provider.Settings
import android.text.TextUtils
import com.getcapacitor.JSArray
import com.getcapacitor.JSObject
import com.getcapacitor.Plugin
import com.getcapacitor.PluginCall
import com.getcapacitor.PluginMethod
import com.getcapacitor.annotation.CapacitorPlugin
import java.text.SimpleDateFormat
import java.util.Calendar
import java.util.Date
import java.util.Locale

@CapacitorPlugin(name = "KKWellness")
class KKWellnessPlugin : Plugin() {
    companion object {
        private val SYSTEM_EXCLUDED_FRAGMENTS = listOf(
            "systemui",
            "launcher",
            "trebuchet",
            "nexuslauncher",
            "miui.home",
            "oplus.launcher",
            "oppo.launcher",
            "realme.launcher",
            "sec.android.app.launcher",
            "dialer",
            "incallui",
            "server.telecom",
            "packageinstaller",
            "permissioncontroller",
            "inputmethod",
            "gboard",
            "latinime",
            "keyguard",
            "wallpaper"
        )
        private const val MIN_TRACKED_APP_MS = 30_000L
        private const val MAX_OPEN_SESSION_MS = 2 * 60 * 60 * 1000L
    }

    private fun hasUsageAccess(): Boolean {
        val appOps = context.getSystemService(Context.APP_OPS_SERVICE) as AppOpsManager
        return try {
            appOps.checkOpNoThrow(AppOpsManager.OPSTR_GET_USAGE_STATS, Process.myUid(), context.packageName) == AppOpsManager.MODE_ALLOWED
        } catch (_: Exception) { false }
    }

    private fun focusServiceEnabled(): Boolean {
        val expected = ComponentName(context, FocusGuardService::class.java).flattenToString()
        val raw = Settings.Secure.getString(context.contentResolver, Settings.Secure.ENABLED_ACCESSIBILITY_SERVICES) ?: return false
        val splitter = TextUtils.SimpleStringSplitter(':')
        splitter.setString(raw)
        while (splitter.hasNext()) if (splitter.next().equals(expected, ignoreCase = true)) return true
        return false
    }

    private fun getHomeLauncherPackages(): Set<String> {
        val homes = HashSet<String>()
        try {
            val intent = Intent(Intent.ACTION_MAIN).addCategory(Intent.CATEGORY_HOME)
            val resolved = context.packageManager.queryIntentActivities(intent, 0)
            for (info in resolved) {
                info.activityInfo?.packageName?.let { homes.add(it) }
            }
        } catch (_: Exception) { }
        return homes
    }

    private fun getLaunchablePackageSet(): Set<String> {
        val launchable = HashSet<String>()
        try {
            val intent = Intent(Intent.ACTION_MAIN, null).addCategory(Intent.CATEGORY_LAUNCHER)
            val results = context.packageManager.queryIntentActivities(intent, 0)
            for (info in results) {
                info.activityInfo?.packageName?.let { launchable.add(it) }
            }
        } catch (_: Exception) { }
        return launchable
    }

    private fun isExcludedSystemPackage(pkg: String, homePackages: Set<String>): Boolean {
        if (pkg.isBlank() || pkg == context.packageName) return true
        if (homePackages.contains(pkg)) return true
        val lower = pkg.lowercase(Locale.US)
        if (lower == "android" || lower == "com.android.settings") return true
        return SYSTEM_EXCLUDED_FRAGMENTS.any { lower.contains(it) }
    }

    /**
     * Calculates exact foreground usage per app for [start, end] using UsageEvents
     * (ACTIVITY_RESUMED -> ACTIVITY_PAUSED / SCREEN_NON_INTERACTIVE), matching
     * Google Digital Wellbeing rather than overlapping INTERVAL_DAILY buckets.
     */
    private fun queryAccurateDayUsage(
        manager: UsageStatsManager,
        start: Long,
        end: Long,
        isToday: Boolean,
        launchablePackages: Set<String>,
        homePackages: Set<String>
    ): Map<String, Long> {
        val durations = HashMap<String, Long>()
        val events = try { manager.queryEvents(start, end) } catch (_: Exception) { null } ?: return durations
        val event = UsageEvents.Event()

        var activePkg: String? = null
        var activeStart = 0L

        fun closeActive(atTime: Long) {
            val pkg = activePkg
            if (pkg != null && atTime > activeStart) {
                val delta = (atTime - activeStart).coerceAtMost(end - start)
                if (delta > 0L) {
                    durations[pkg] = (durations[pkg] ?: 0L) + delta
                }
            }
            activePkg = null
            activeStart = 0L
        }

        while (events.hasNextEvent()) {
            events.getNextEvent(event)
            val ts = event.timeStamp.coerceIn(start, end)
            val pkg = event.packageName ?: ""
            when (event.eventType) {
                UsageEvents.Event.ACTIVITY_RESUMED,
                UsageEvents.Event.MOVE_TO_FOREGROUND -> {
                    if (activePkg != pkg) {
                        closeActive(ts)
                        if (!isExcludedSystemPackage(pkg, homePackages) &&
                            (launchablePackages.isEmpty() || launchablePackages.contains(pkg))) {
                            activePkg = pkg
                            activeStart = ts
                        }
                    }
                }
                UsageEvents.Event.ACTIVITY_PAUSED,
                UsageEvents.Event.MOVE_TO_BACKGROUND,
                UsageEvents.Event.ACTIVITY_STOPPED -> {
                    if (activePkg == pkg) {
                        closeActive(ts)
                    }
                }
                UsageEvents.Event.SCREEN_NON_INTERACTIVE,
                UsageEvents.Event.KEYGUARD_SHOWN,
                UsageEvents.Event.DEVICE_SHUTDOWN -> {
                    closeActive(ts)
                }
            }
        }

        if (isToday && activePkg != null && end > activeStart) {
            val tail = (end - activeStart).coerceAtMost(MAX_OPEN_SESSION_MS)
            if (tail > 0L) {
                val pkg = activePkg!!
                durations[pkg] = (durations[pkg] ?: 0L) + tail
            }
        }

        return durations.filterValues { it >= MIN_TRACKED_APP_MS }
    }

    @PluginMethod
    fun getFocusStatus(call: PluginCall) {
        val result = JSObject()
        result.put("enabled", focusServiceEnabled())
        result.put("policyActive", context.getSharedPreferences(FocusGuardService.PREFS, Context.MODE_PRIVATE).getBoolean("focusEnabled", false))
        call.resolve(result)
    }

    @PluginMethod
    fun openUsageAccessSettings(call: PluginCall) {
        try {
            val intent = Intent(Settings.ACTION_USAGE_ACCESS_SETTINGS).addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)
            context.startActivity(intent)
            call.resolve()
        } catch (e: Exception) { call.reject("Unable to open Usage Access settings", e) }
    }

    @PluginMethod
    fun openAccessibilitySettings(call: PluginCall) {
        try {
            context.startActivity(Intent(Settings.ACTION_ACCESSIBILITY_SETTINGS).addFlags(Intent.FLAG_ACTIVITY_NEW_TASK))
            call.resolve()
        } catch (e: Exception) { call.reject("Unable to open Accessibility settings", e) }
    }

    @PluginMethod
    fun getUsageData(call: PluginCall) {
        val result = JSObject()
        val granted = hasUsageAccess()
        result.put("permissionGranted", granted)
        result.put("focusServiceEnabled", focusServiceEnabled())
        val daily = JSArray()
        if (!granted) {
            result.put("daily", daily)
            call.resolve(result)
            return
        }
        try {
            val manager = context.getSystemService(Context.USAGE_STATS_SERVICE) as UsageStatsManager
            val days = (call.getInt("days", 7) ?: 7).coerceIn(1, 30)
            val now = System.currentTimeMillis()
            val today = Calendar.getInstance().apply {
                set(Calendar.HOUR_OF_DAY, 0)
                set(Calendar.MINUTE, 0)
                set(Calendar.SECOND, 0)
                set(Calendar.MILLISECOND, 0)
            }
            val dateFormat = SimpleDateFormat("yyyy-MM-dd", Locale.US)
            val pm = context.packageManager
            val launchable = getLaunchablePackageSet()
            val homes = getHomeLauncherPackages()

            for (offset in (days - 1) downTo 0) {
                val startCal = (today.clone() as Calendar).apply { add(Calendar.DAY_OF_YEAR, -offset) }
                val start = startCal.timeInMillis
                val endCal = (startCal.clone() as Calendar).apply { add(Calendar.DAY_OF_YEAR, 1) }
                val end = minOf(endCal.timeInMillis, now)
                if (end <= start) continue

                val dayObject = JSObject()
                dayObject.put("date", dateFormat.format(Date(start)))

                val aggregated = queryAccurateDayUsage(
                    manager = manager,
                    start = start,
                    end = end,
                    isToday = (offset == 0),
                    launchablePackages = launchable,
                    homePackages = homes
                )

                val totalAppScreenMs = aggregated.values.sum().coerceAtMost(end - start)
                dayObject.put("screenInteractiveMs", totalAppScreenMs)

                val appArray = JSArray()
                val sortedApps = aggregated.entries.sortedByDescending { it.value }
                for ((packageName, foregroundMs) in sortedApps) {
                    val label = try {
                        val info = pm.getApplicationInfo(packageName, 0)
                        pm.getApplicationLabel(info).toString()
                    } catch (_: PackageManager.NameNotFoundException) {
                        packageName.substringAfterLast('.')
                    }
                    val app = JSObject()
                    app.put("packageName", packageName)
                    app.put("label", label)
                    app.put("foregroundMs", foregroundMs)
                    appArray.put(app)
                }
                dayObject.put("apps", appArray)
                daily.put(dayObject)
            }
            result.put("daily", daily)
        } catch (e: Exception) {
            call.reject("Could not query Android usage statistics", e)
            return
        }
        call.resolve(result)
    }

    @PluginMethod
    fun getLaunchableApps(call: PluginCall) {
        val array = JSArray()
        try {
            val homes = getHomeLauncherPackages()
            val intent = Intent(Intent.ACTION_MAIN, null).addCategory(Intent.CATEGORY_LAUNCHER)
            val results = context.packageManager.queryIntentActivities(intent, 0)
            val seen = HashSet<String>()
            for (resolveInfo in results) {
                val activity = resolveInfo.activityInfo ?: continue
                val pkg = activity.packageName
                if (isExcludedSystemPackage(pkg, homes) || !seen.add(pkg)) continue
                val item = JSObject()
                item.put("packageName", pkg)
                item.put("label", resolveInfo.loadLabel(context.packageManager).toString())
                array.put(item)
            }
        } catch (_: Exception) { }
        val result = JSObject()
        result.put("apps", array)
        call.resolve(result)
    }

    @PluginMethod
    fun setFocusPolicy(call: PluginCall) {
        try {
            val enabled = call.getBoolean("enabled", false) ?: false
            val blocked = call.getArray("blockedPackages") ?: JSArray()
            val blockedSet = mutableSetOf<String>()
            for (i in 0 until blocked.length()) blocked.optString(i)?.takeIf { it.isNotBlank() }?.let { blockedSet.add(it) }
            val limits = call.getObject("limits") ?: JSObject()
            val prefs = context.getSharedPreferences(FocusGuardService.PREFS, Context.MODE_PRIVATE)
            prefs.edit()
                .putBoolean("focusEnabled", enabled)
                .putStringSet("blockedPackages", blockedSet)
                .putString("appLimits", limits.toString())
                .apply()
            call.resolve(JSObject().put("saved", true))
        } catch (e: Exception) { call.reject("Could not save Focus Guard policy", e) }
    }
}
