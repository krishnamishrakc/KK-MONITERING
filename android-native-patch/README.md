# Native Android patch — Capacitor 6

This patch adds the `KKWellness` Capacitor plugin and optional Focus Guard to the existing Android project.

## Files to copy

Copy `app/src/main/java/com/kkcreation/studytrack/` into the matching source package under `android/app/src/main/java/`.
Copy `app/src/main/res/xml/kk_focus_guard.xml` and `app/src/main/res/values/kk_focus_guard_strings.xml` into the matching `res` folders.

## Manifest

Merge `AndroidManifest.merge-snippet.xml` into the existing `android/app/src/main/AndroidManifest.xml`. Do not replace the existing manifest. Check that the manifest root already has the Android XML namespace; do not duplicate it.

## MainActivity

Merge the registration import and `registerPlugin(KKWellnessPlugin::class.java)` call shown in `MainActivity.registration.kt.txt` into the existing Capacitor `BridgeActivity`. Register before `super.onCreate(savedInstanceState)`.

## Build

From the repository root:

```bash
npm install
npm run build
npx cap sync android
cd android
./gradlew assembleDebug
```

On Windows use `gradlew.bat assembleDebug`.

## Permissions and first-run setup

1. Launch KK Monitoring and open Digital Wellness.
2. Tap **Enable Usage Access** and enable KK Monitoring under Android's Usage Access settings.
3. For app blocking only, read the in-app disclosure, check the consent box, open Android Accessibility settings, and manually enable **KK Monitoring Focus Guard**.
4. Return to KK Monitoring, classify the apps, set limits, select blocked apps and start Focus Guard.
5. Emergency pass and End Focus Session remain available from the blocking screen.

The service observes only `TYPE_WINDOW_STATE_CHANGED` and the event package name. `canRetrieveWindowContent=false`; it does not inspect visible text or user input. Users can disable the service from Android Settings at any time.

### Distribution caution

Google Play requires an Accessibility API declaration and prominent in-app disclosure/affirmative consent for non-accessibility-tool uses. This feature is optional and must be declared accurately if the app is published on Google Play. Review Google's current policy before release. A sideloaded/debug APK may still require user confirmation in Android settings.

### Device limits

Usage Access is special app access, not a normal runtime permission. Some OEM battery controls can delay background refresh. The report updates when the app is opened/resumed and periodically while active; it is not a second-by-second exact meter. App-level foreground duration and screen-interactive duration are distinct metrics.
