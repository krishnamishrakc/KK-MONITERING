const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const androidRoot = path.join(root, 'android');
const patchRoot = path.join(root, 'android-native-patch', 'app', 'src', 'main');
const appMain = path.join(androidRoot, 'app', 'src', 'main');

function walk(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
    const full = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(full) : [full];
  });
}
function copyTree(src, dest) {
  if (!fs.existsSync(src)) throw new Error(`Missing native patch source: ${src}`);
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const from = path.join(src, entry.name);
    const to = path.join(dest, entry.name);
    if (entry.isDirectory()) copyTree(from, to);
    else fs.copyFileSync(from, to);
  }
}
function patchManifest() {
  const manifest = path.join(appMain, 'AndroidManifest.xml');
  if (!fs.existsSync(manifest)) throw new Error('AndroidManifest.xml not found. Run npx cap add android first.');
  let xml = fs.readFileSync(manifest, 'utf8');
  if (!xml.includes('android.permission.PACKAGE_USAGE_STATS')) {
    const appAt = xml.indexOf('<application');
    if (appAt < 0) throw new Error('Could not locate <application> in AndroidManifest.xml');
    xml = xml.slice(0, appAt) + '    <uses-permission android:name="android.permission.PACKAGE_USAGE_STATS" />\n' + xml.slice(appAt);
  }
  if (!xml.includes('<queries>')) {
    const appAt = xml.indexOf('<application');
    const queries = '    <queries>\n        <intent>\n            <action android:name="android.intent.action.MAIN" />\n            <category android:name="android.intent.category.LAUNCHER" />\n        </intent>\n    </queries>\n';
    xml = xml.slice(0, appAt) + queries + xml.slice(appAt);
  }
  if (!xml.includes('android:name=".FocusBlockActivity"')) {
    const appEnd = xml.lastIndexOf('</application>');
    if (appEnd < 0) throw new Error('Could not locate </application> in AndroidManifest.xml');
    const components = `        <activity\n            android:name=".FocusBlockActivity"\n            android:exported="false"\n            android:excludeFromRecents="true"\n            android:launchMode="singleTop"\n            android:theme="@android:style/Theme.Material.Light.NoActionBar" />\n        <service\n            android:name=".FocusGuardService"\n            android:permission="android.permission.BIND_ACCESSIBILITY_SERVICE"\n            android:exported="true"\n            android:label="KK Monitoring Focus Guard">\n            <intent-filter>\n                <action android:name="android.accessibilityservice.AccessibilityService" />\n            </intent-filter>\n            <meta-data\n                android:name="android.accessibilityservice"\n                android:resource="@xml/kk_focus_guard" />\n        </service>\n`;
    xml = xml.slice(0, appEnd) + components + xml.slice(appEnd);
  }
  fs.writeFileSync(manifest, xml);
}

function enableKotlinForNativePatch() {
  // The Capacitor Android template creates MainActivity.java, while the
  // optional native wellness plugin/service sources are Kotlin (.kt).
  // Explicitly enable Kotlin in the generated Android Gradle project.
  const rootGradle = path.join(androidRoot, 'build.gradle');
  const appGradle = path.join(androidRoot, 'app', 'build.gradle');
  if (!fs.existsSync(rootGradle) || !fs.existsSync(appGradle)) {
    throw new Error('Expected Android Gradle files were not found.');
  }

  let rootText = fs.readFileSync(rootGradle, 'utf8');
  const kotlinClasspath = `classpath 'org.jetbrains.kotlin:kotlin-gradle-plugin:1.9.22'`;
  if (!rootText.includes('kotlin-gradle-plugin')) {
    const deps = /dependencies\s*\{/m;
    if (!deps.test(rootText)) throw new Error('Could not find root buildscript dependencies block to add Kotlin Gradle plugin.');
    rootText = rootText.replace(deps, match => `${match}\n        ${kotlinClasspath}`);
    fs.writeFileSync(rootGradle, rootText);
  }

  let appText = fs.readFileSync(appGradle, 'utf8');
  if (!appText.includes("kotlin-android") && !appText.includes("org.jetbrains.kotlin.android")) {
    if (/apply plugin:\s*['"]com\.android\.application['"]/.test(appText)) {
      appText = appText.replace(/apply plugin:\s*['"]com\.android\.application['"]/, match => `${match}\napply plugin: 'kotlin-android'`);
    } else if (/plugins\s*\{/.test(appText)) {
      appText = appText.replace(/plugins\s*\{/, match => `${match}\n    id 'org.jetbrains.kotlin.android' version '1.9.22'`);
    } else {
      throw new Error('Could not find Android application plugin declaration in app/build.gradle.');
    }
    fs.writeFileSync(appGradle, appText);
  }
}

function addImport(source, line, kotlin) {
  if (source.split(/\r?\n/).some(existing => existing.trim() === line)) return source;
  const packageRegex = kotlin ? /^package [^\r\n]+/m : /^package [^;\r\n]+;/m;
  const match = source.match(packageRegex);
  if (match) {
    const end = match.index + match[0].length;
    return source.slice(0, end) + `\n\n${line}` + source.slice(end);
  }
  const firstImport = source.search(/^import /m);
  if (firstImport >= 0) return source.slice(0, firstImport) + `${line}\n` + source.slice(firstImport);
  return `${line}\n${source}`;
}
function patchMainActivity() {
  const javaRoot = path.join(appMain, 'java');
  const mains = walk(javaRoot).filter(file => /^MainActivity\.(java|kt)$/.test(path.basename(file)));
  if (mains.length !== 1) throw new Error(`Expected exactly one generated MainActivity.java/.kt, found ${mains.length}`);
  const file = mains[0];
  let source = fs.readFileSync(file, 'utf8');
  const isKotlin = file.endsWith('.kt');
  source = addImport(source, isKotlin ? 'import com.kkcreation.studytrack.KKWellnessPlugin' : 'import com.kkcreation.studytrack.KKWellnessPlugin;', isKotlin);
  if (isKotlin) {
    if (!source.includes('registerPlugin(KKWellnessPlugin::class.java)')) {
      const onCreate = /override\s+fun\s+onCreate\s*\(\s*savedInstanceState\s*:\s*Bundle\?\s*\)\s*\{/;
      if (onCreate.test(source)) {
        source = source.replace(onCreate, match => `${match}\n        registerPlugin(KKWellnessPlugin::class.java)`);
      } else {
        const classOpen = /class\s+MainActivity\s*:\s*BridgeActivity\s*\(\s*\)\s*\{/;
        if (!classOpen.test(source)) throw new Error('Unsupported Kotlin MainActivity shape; add plugin registration manually.');
        source = source.replace(classOpen, match => `${match}\n    override fun onCreate(savedInstanceState: android.os.Bundle?) {\n        registerPlugin(KKWellnessPlugin::class.java)\n        super.onCreate(savedInstanceState)\n    }\n`);
      }
    }
  } else {
    if (!source.includes('registerPlugin(KKWellnessPlugin.class)')) {
      const onCreate = /@Override\s+protected\s+void\s+onCreate\s*\(\s*Bundle\s+savedInstanceState\s*\)\s*\{/;
      if (onCreate.test(source)) {
        source = source.replace(onCreate, match => `${match}\n        registerPlugin(KKWellnessPlugin.class);`);
      } else {
        const classOpen = /class\s+MainActivity\s+extends\s+BridgeActivity\s*\{/;
        if (!classOpen.test(source)) throw new Error('Unsupported Java MainActivity shape; add plugin registration manually.');
        source = source.replace(classOpen, match => `${match}\n    @Override\n    protected void onCreate(Bundle savedInstanceState) {\n        registerPlugin(KKWellnessPlugin.class);\n        super.onCreate(savedInstanceState);\n    }\n`);
      }
      source = addImport(source, 'import android.os.Bundle;', false);
    }
  }
  fs.writeFileSync(file, source);
}

if (!fs.existsSync(androidRoot)) throw new Error('Android folder is missing. Run `npx cap add android` first.');
copyTree(path.join(patchRoot, 'java', 'com', 'kkcreation', 'studytrack'), path.join(appMain, 'java', 'com', 'kkcreation', 'studytrack'));
copyTree(path.join(patchRoot, 'res', 'xml'), path.join(appMain, 'res', 'xml'));
copyTree(path.join(patchRoot, 'res', 'values'), path.join(appMain, 'res', 'values'));
enableKotlinForNativePatch();
patchManifest();
patchMainActivity();
console.log('Applied KK Monitoring UsageStats and optional Focus Guard native patch.');
