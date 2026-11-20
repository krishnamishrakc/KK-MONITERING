const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const dest = path.join(root, 'www');
fs.rmSync(dest, { recursive: true, force: true });
fs.mkdirSync(dest, { recursive: true });
for (const name of ['index.html','app.js','app.css','android-theme.css','android-shell.js','digital-wellness.js','assets','icon-192.png','icon-512.png','logo.png','favicon.png','manifest.json']) {
  const source = path.join(root, name);
  if (fs.existsSync(source)) fs.cpSync(source, path.join(dest, name), { recursive: true });
}
console.log('Built KK Monitoring web assets into www/.');
