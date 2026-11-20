package com.kkcreation.studytrack

import android.app.AppOpsManager
import android.app.usage.UsageStatsManager
import android.content.ComponentName
import android.content.Context
import android.content.Intent
import android.content.pm.PackageManager
import android.os.Process
import android.os.Build
import android.provider.Settings
import android.text.TextUtils
import com.getcapacitor.JSArray
import com.getcapacitor.JSObject
import com.getcapacitor.Plugin
import com.getcapacitor.PluginCall
import com.getcapacitor.PluginMethod
import com.getcapacitor.annotation.CapacitorPlugin
import org.json.JSONObject
import java.text.SimpleDateFormat
import java.util.Calendar
import java.util.Date
import java.util.Locale

@CapacitorPlugin(name = "KKWellness")
class KKWellnessPlugin : Plugin() {
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
            val today = Calendar.getInstance().apply { set(Calendar.HOUR_OF_DAY, 0); set(Calendar.MINUTE, 0); set(Calendar.SECOND, 0); set(Calendar.MILLISECOND, 0) }
            val dateFormat = SimpleDateFormat("yyyy-MM-dd", Locale.US)
            val pm = context.packageManager
            for (offset in (days - 1) downTo 0) {
                val startCal = (today.clone() as Calendar).apply { add(Calendar.DAY_OF_YEAR, -offset) }
                val start = startCal.timeInMillis
                val endCal = (startCal.clone() as Calendar).apply { add(Calendar.DAY_OF_YEAR, 1) }
                val end = minOf(endCal.timeInMillis, System.currentTimeMillis())
                if (end <= start) continue
                val dayObject = JSObject()
                dayObject.put("date", dateFormat.format(Date(start)))
                val screenMs = try {
                    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.P) {
                        manager.queryEventStats(UsageStatsManager.INTERVAL_DAILY, start, end)
                            .orEmpty()
                            .filter { it.eventType == android.app.usage.UsageEvents.Event.SCREEN_INTERACTIVE }
                            .sumOf { it.totalTime }
                    } else 0L
                } catch (_: Exception) { 0L }
                dayObject.put("screenInteractiveMs", screenMs)
                val appArray = JSArray()
                val usage = try { manager.queryUsageStats(UsageStatsManager.INTERVAL_DAILY, start, end).orEmpty() } catch (_: Exception) { emptyList() }
                val aggregated = usage.groupBy { it.packageName }.mapValues { (_, list) -> list.sumOf { it.totalTimeInForeground } }
                for ((packageName, foregroundMs) in aggregated) {
                    if (foregroundMs <= 0L || packageName == context.packageName) continue
                    val label = try {
                        val info = pm.getApplicationInfo(packageName, 0)
                        pm.getApplicationLabel(info).toString()
                    } catch (_: PackageManager.NameNotFoundException) { packageName.substringAfterLast('.') }
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
            val intent = Intent(Intent.ACTION_MAIN, null).addCategory(Intent.CATEGORY_LAUNCHER)
            val results = context.packageManager.queryIntentActivities(intent, 0)
            val seen = HashSet<String>()
            for (resolveInfo in results) {
                val activity = resolveInfo.activityInfo ?: continue
                val pkg = activity.packageName
                if (pkg == context.packageName || !seen.add(pkg)) continue
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
