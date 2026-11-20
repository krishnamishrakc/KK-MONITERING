package com.kkcreation.studytrack

import android.accessibilityservice.AccessibilityService
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
            val cal = Calendar.getInstance().apply { set(Calendar.HOUR_OF_DAY,0);set(Calendar.MINUTE,0);set(Calendar.SECOND,0);set(Calendar.MILLISECOND,0) }
            val manager = getSystemService(Context.USAGE_STATS_SERVICE) as UsageStatsManager
            val used = manager.queryAndAggregateUsageStats(cal.timeInMillis, System.currentTimeMillis())?.get(packageName)?.totalTimeInForeground ?: 0L
            used >= limitMinutes * 60_000L
        } catch (_: Exception) { false }
    }

    override fun onInterrupt() { }
}
