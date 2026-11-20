package com.kkcreation.studytrack

import android.app.Activity
import android.content.Context
import android.graphics.Color
import android.graphics.Typeface
import android.os.Bundle
import android.view.Gravity
import android.view.ViewGroup
import android.widget.Button
import android.widget.LinearLayout
import android.widget.TextView

/** Blocking explainer with an always-available emergency pass and end-session control. */
class FocusBlockActivity : Activity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        val prefs = getSharedPreferences(FocusGuardService.PREFS, Context.MODE_PRIVATE)
        val blockedPackage = intent.getStringExtra("blockedPackage") ?: "Selected app"
        val root = LinearLayout(this).apply {
            orientation = LinearLayout.VERTICAL
            gravity = Gravity.CENTER
            setPadding(28, 34, 28, 34)
            setBackgroundColor(Color.rgb(9, 14, 26))
        }
        val eyebrow = TextView(this).apply { text = "KK  ·  FOCUS GUARD"; setTextColor(Color.rgb(110, 220, 215)); textSize = 12f; letterSpacing = .16f; gravity = Gravity.CENTER }
        val title = TextView(this).apply { text = "Stay with your plan"; setTextColor(Color.WHITE); textSize = 28f; typeface = Typeface.DEFAULT_BOLD; gravity = Gravity.CENTER; setPadding(0, 18, 0, 8) }
        val message = TextView(this).apply { text = "$blockedPackage is blocked during this focus session. This is your reminder to return to the task you chose."; setTextColor(Color.rgb(178, 190, 210)); textSize = 15f; gravity = Gravity.CENTER; setPadding(0, 0, 0, 30) }
        root.addView(eyebrow, LinearLayout.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.WRAP_CONTENT))
        root.addView(title, LinearLayout.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.WRAP_CONTENT))
        root.addView(message, LinearLayout.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.WRAP_CONTENT))
        val emergency = Button(this).apply {
            text = "Emergency pass · 5 minutes"
            setOnClickListener {
                prefs.edit().putLong("bypassUntil", System.currentTimeMillis() + 5 * 60_000L).apply()
                val pkg = intent.getStringExtra("blockedPackage")
                val launch = pkg?.let { packageManager.getLaunchIntentForPackage(it) }
                finish()
                if (launch != null) startActivity(launch)
            }
        }
        val end = Button(this).apply {
            text = "End focus session"
            setOnClickListener { prefs.edit().putBoolean("focusEnabled", false).putLong("bypassUntil", 0L).apply(); finish() }
        }
        root.addView(emergency, LinearLayout.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.WRAP_CONTENT).apply { bottomMargin = 12 })
        root.addView(end, LinearLayout.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.WRAP_CONTENT))
        setContentView(root)
    }
}
