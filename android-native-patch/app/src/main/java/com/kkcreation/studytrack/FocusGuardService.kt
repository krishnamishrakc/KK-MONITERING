package com.kkcreation.studytrack

import android.accessibilityservice.AccessibilityService
import android.app.usage.UsageEvents
import android.app.usage.UsageStatsManager
import android.content.Context
import android.content.Intent
import android.os.Handler
import android.os.Looper
import android.view.accessibility.AccessibilityEvent
import org.json.JSONObject
import java.util.Calendar

/** Optional user-enabled focus guard. Observes package names only; never reads window text. */
class FocusGuardService : AccessibilityService() {
    companion object { const val PREFS = "kk_wellness_focus" }
    private var lastBlockedPackage = ""
    private var lastBlockedAt = 0L

    override fun onAccessibilityEvent(event: AccessibilityEvent?) {
        if (event == null || event.eventType != AccessibilityEvent.TYPE_WINDOW_STATE_CHANGED) return
        val packageName = event.packageName?.toString()?.takeIf { it.isNotBlank() } ?: return
        if (packageName == applicationContext.packageName || packageName == "com.android.systemui") return
        val prefs = getSharedPreferences(PREFS, Context.MODE_PRIVATE)
        if (!prefs.getBoolean("focusEnabled", false)) return
        val now = System.currentTimeMillis()
        if (prefs.getLong("bypassUntil", 0L) > now) return
        val blocked = prefs.getStringSet("blockedPackages", emptySet()) ?: emptySet()
        val isBlocked = blocked.contains(packageName) || isLimitReached(packageName, prefs.getString("appLimits", "{}") ?: "{}")
        if (!isBlocked) return
        if (packageName == lastBlockedPackage && now - lastBlockedAt < 2500L) return
        lastBlockedPackage = packageName
        lastBlockedAt = now
        performGlobalAction(GLOBAL_ACTION_HOME)
        Handler(Looper.getMainLooper()).postDelayed({
            try {
                val intent = Intent(this, FocusBlockActivity::class.java)
                    .putExtra("blockedPackage", packageName)
                    .addFlags(Intent.FLAG_ACTIVITY_NEW_TASK or Intent.FLAG_ACTIVITY_CLEAR_TOP or Intent.FLAG_ACTIVITY_SINGLE_TOP)
                startActivity(intent)
            } catch (_: Exception) { }
        }, 180L)
    }

    private fun isLimitReached(packageName: String, rawLimits: String): Boolean {
        return try {
            val limitMinutes = JSONObject(rawLimits).optInt(packageName, 0)
            if (limitMinutes <= 0) return false
            val cal = Calendar.getInstance().apply {
                set(Calendar.HOUR_OF_DAY, 0)
                set(Calendar.MINUTE, 0)
                set(Calendar.SECOND, 0)
                set(Calendar.MILLISECOND, 0)
            }
            val start = cal.timeInMillis
            val now = System.currentTimeMillis()
            val manager = getSystemService(Context.USAGE_STATS_SERVICE) as UsageStatsManager
            val events = manager.queryEvents(start, now) ?: return false
            val ev = UsageEvents.Event()
            var totalMs = 0L
            var activeStart = 0L
            while (events.hasNextEvent()) {
                events.getNextEvent(ev)
                val ts = ev.timeStamp.coerceIn(start, now)
                when (ev.eventType) {
                    UsageEvents.Event.ACTIVITY_RESUMED,
                    UsageEvents.Event.MOVE_TO_FOREGROUND -> {
                        if (ev.packageName == packageName && activeStart == 0L) {
                            activeStart = ts
                        } else if (ev.packageName != packageName && activeStart > 0L) {
                            totalMs += (ts - activeStart)
                            activeStart = 0L
                        }
                    }
                    UsageEvents.Event.ACTIVITY_PAUSED,
                    UsageEvents.Event.MOVE_TO_BACKGROUND,
                    UsageEvents.Event.ACTIVITY_STOPPED -> {
                        if (ev.packageName == packageName && activeStart > 0L) {
                            totalMs += (ts - activeStart)
                            activeStart = 0L
                        }
                    }
                    UsageEvents.Event.SCREEN_NON_INTERACTIVE,
                    UsageEvents.Event.KEYGUARD_SHOWN,
                    UsageEvents.Event.DEVICE_SHUTDOWN -> {
                        if (activeStart > 0L) {
                            totalMs += (ts - activeStart)
                            activeStart = 0L
                        }
                    }
                }
            }
            if (activeStart > 0L && now > activeStart) {
                totalMs += (now - activeStart)
            }
            totalMs >= limitMinutes * 60_000L
        } catch (_: Exception) { false }
    }

    override fun onInterrupt() { }
}
