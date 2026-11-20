# KK Monitoring — V69 Base

V69 continues the consolidated V68 base. It keeps the same compact runtime structure and adds a stable Mock Tracker sorting and filtering toolbar.

## Files

- `index.html` — app shell, PIN screen and single-bundle loader.
- `app.js` — all application logic and Learn Hub question data in one runtime file.
- `app.css` — the complete interface styling.
- `assets/studytrack-wallpaper.webp` — the lock-screen wallpaper.

## Mock Tracker sorting

The tracker can be filtered by exam and Full/Sectional type, and sorted by latest date, oldest date, recently added, highest/lowest score percentage, highest/lowest accuracy, exam name, or mock type. The selected sort order is stored locally as a small UI preference; it is not synced as study data. Rows use deterministic tie-breakers so a different cloud array order does not arbitrarily move records.

## Install / update

1. Keep a backup of the current app folder and any local data export.
2. Replace the deployed app source with the full contents of this folder. Do not copy only `index.html`.
3. Keep the `assets` folder beside `index.html` so the lock-screen wallpaper resolves.
4. Open the app and unlock it. The app retains the existing V68 local-data migration and cloud-sync flow.
5. Sign in to the same cloud account to restore the latest cloud snapshot.

Do not clear browser/app storage during a routine source update. Existing study data and mock deletion tombstones are retained by the V68 data layer.

## Validation

The updated JavaScript bundle should be syntax-checked and the complete ZIP should be extracted before deployment. A live Firebase round-trip still depends on the user's configured Firebase project and account.
