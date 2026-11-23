## V72 — Android UI, Digital Wellbeing & Interactive Fixes
- **Progress / Deep Analytics Charts**: Switched `.charts-wrapper` to single-column full-width layout on mobile with `265px` canvas height and responsive filter bar so Radar, Percentile, Accuracy, and Speed Maths graphs never clip or squish.
- **Digital Wellbeing-Accurate Screen Time (`KKWellnessPlugin.kt` & `FocusGuardService.kt`)**: Replaced overlapping `INTERVAL_DAILY` `queryUsageStats()` rollups with exact `UsageEvents` (`ACTIVITY_RESUMED` → `ACTIVITY_PAUSED` / `SCREEN_NON_INTERACTIVE`) tracking filtered to launchable user apps (excluding launchers, SystemUI, and dialers).
- **App Classification Collapse & Search (`digital-wellness.js`)**: Shows Top 5 apps by default with a **View All Apps / Show Top 5** toggle and instant search input, plus smarter Study/Mixed defaults for ChatGPT, Gemini, Chrome, Brave, YouTube, Telegram, and WhatsApp.
- **Dismissible Fixed Toast (`android-theme.css`, `index.html`, `app.js`)**: Fixed the permanently stuck/cut-off bottom-left notification pill so toasts only appear when triggered, align cleanly above the bottom nav, and include a manual `✕` close button.
- **Today Tab 7-Day Charts (`android-shell.js`)**: Added native high-DPI Canvas renderers for `Focus Time · 7 Days`, `Tasks · 7 Days`, `XP · 7 Days`, and `Focus vs Waste` so all Today analytics cards display live 7-day data.
- **Edge-to-Edge Full-Width Cards (`android-theme.css`)**: Removed double horizontal gutters on `.main-content` and `.view-section` so all cards stretch cleanly from left to right on Android screens.
- **Clickable Portrait Excel Tracker Cards (`android-shell.js`)**: Wired `.kw-mobile-mock-card` tap events to `window.showMockAnalysis(id)` and Edit/Delete actions so portrait mode matches landscape mode interactivity.
- **Header Brand Visibility**: Ensured `KK'S MONITORING` top bar title remains crisp and visible on every tab including Progress.

# V69 — stable Mock Tracker sorting (consolidated V68 base)

- Added the missing `getRandIdx()` Learn Hub helper.
- Implemented `calcWorkPipes`, `calcProbability`, `calcPC`, `calcMensuration` and `calcRace` in the core calculator.
- Fixed numbered Excel Tracker pagination so a click jumps to the selected page.
- Removed the undefined `FRESH_MARKER` reset reference and aligned runtime unlock checks on `kkUnlocked_v65`.
- Moved local data to the V68 key with a one-time migration from the immediately previous store.
- Made mock deletion durable across cloud logins/devices through Firestore deletion tombstones and authoritative replacement after deletion.
- Repaired legacy RRB records so hidden English marks cannot inflate the corrected /80 total score.
- Added a lifetime mock summary to the top of Deep Analytics, including lifetime mocks, attempted questions, mean score, accuracy, subject-wise right/wrong/attempted totals, and mistake insights.
- Expanded Speed Maths to 20-question banking-exam style sets covering simplification, percentages, ratio, average, profit/loss, discount, SI/CI, time-work, speed-distance, number series, squares, cubes and arithmetic.
- Consolidated the previous runtime scripts into one `app.js`; styling and the lock-screen wallpaper remain as their own required assets.
- V69: Added stable Mock Tracker sorting by latest/oldest mock date, recently added, highest/lowest normalized score percentage, highest/lowest accuracy, exam name, and mock type.
- V69: Added Full/Sectional type filtering and persisted the user's sort preference locally (not in cloud study data).
- V69: Sorting uses deterministic date, creation-time and ID tie-breakers, so cloud array order changes no longer randomly move rows. Pagination returns to page 1 when the sorted row sequence changes.


# V70 Android refresh source pack

- Added a distinct Android-first glass UI shell and floating bottom navigation while preserving V69 core application logic.
- Added Digital Wellness summaries, 7-day chart, editable app categories, targets, rule-based suggestions and provisional Productivity Score.
- Added cloud merge support for digitalWellness snapshots and settings.
- Added Capacitor 6 native source patch for UsageStats and optional Accessibility-based Focus Guard with explicit disclosure, emergency pass and manual end-session.
- Fixed Daily Study Logs mobile overlap with labelled responsive rows; wide mock tables remain in their own horizontal scrollers.

## V70.0.1 build fix
- Enable Kotlin Gradle plugin in the generated Capacitor Android project before copying/compiling the native Kotlin wellness plugin and Focus Guard classes.
- Fixes the missing `KKWellnessPlugin` Java compile symbol seen when Capacitor generated a Java `MainActivity` but Kotlin support was not enabled.


## V71.0 — Gallery-inspired Android refinement
- Replaced the Android bottom-navigation Plan slot with a direct Add Mock action; Daily Plan remains available in the navigation drawer.
- Added a persistent Midnight/Ivory Gallery appearance selector in Settings.
- Added responsive mobile mock summary cards generated from existing tracker rows while preserving the desktop table.
- Refined mobile glass surfaces, typography, navigation safe-area spacing, chart sizing and table overflow behavior.
- Existing app data schema, cloud sync code, mock form, and desktop layout are retained.
