# V70 Android refresh — test checklist

## Before installation
- [ ] Back up the previous APK, GitHub project and data export.
- [ ] Confirm package ID remains `com.kkcreation.studytrack`.
- [ ] Merge the native patch into the existing Capacitor Android project.
- [ ] Build a debug APK and install it beside/over the old APK only when signing key/package ID match.

## Core app
- [ ] Unlock with the existing PIN.
- [ ] Today, Focus, Plan, Progress and More navigation work.
- [ ] All original V69 screens and existing buttons still work.
- [ ] Mock Tracker exam/type filters and all nine sort options still work.
- [ ] Deep Analytics lifetime mock summary remains intact.
- [ ] Cloud sign-in and study/mock data restore work.

## Mobile UI
- [ ] No horizontal page overflow on the Today / Focus / Plan / Tracker / Analytics / Wellness views.
- [ ] Bottom navigation stays above Android gesture navigation and responds to taps.
- [ ] Drawer opens/closes and back navigation closes it first.
- [ ] Daily Study Logs rows wrap without Date/Subject overlap.
- [ ] Mock tables scroll inside their own container.
- [ ] Screen keyboard does not cover form buttons.
- [ ] Rotate to landscape and return to portrait.

## Digital Wellness
- [ ] Usage Access is off by default; explanatory text is shown.
- [ ] Enable Usage Access from Android Settings and return to the app.
- [ ] Today and last-seven-day summaries load from Android.
- [ ] Guidely, Testbook, Yes Officer, Learning Capsule, Mahendras default to Study.
- [ ] YouTube and Telegram default to Mixed.
- [ ] Change an app category and verify counts recalculate.
- [ ] Set targets and verify suggestions/score recalculate.
- [ ] Sign in to cloud on Android, then confirm Digital Wellness appears in the PC website under the same account.

## Focus Guard
- [ ] Read the disclosure and explicitly accept it.
- [ ] Enable the service manually in Android Accessibility settings.
- [ ] Select a harmless test app, set a short test limit, start Focus Guard.
- [ ] Verify only selected apps are intercepted.
- [ ] Verify Emergency Pass and End Focus Session work.
- [ ] Turn off the Accessibility service in Android Settings and confirm normal device use is restored.
