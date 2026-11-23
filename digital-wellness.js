/* Digital Wellness v1 — Android UsageStats bridge, categorisation, score and cloud-ready snapshots. */
(() => {
  'use strict';
  if (window.__kkDigitalWellnessLoaded) return;
  window.__kkDigitalWellnessLoaded = true;
  const DAY = 86400000;
  const studyDefaults = ['guidely', 'testbook', 'yes officer', 'learning capsule', 'mahendras', 'oliveboard', 'adda247', 'unacademy', 'physics wallah', 'chatgpt', 'gemini', 'claude', 'perplexity', 'anki', 'notion', 'duolingo', 'khan'];
  const mixedDefaults = ['youtube', 'telegram', 'whatsapp', 'chrome', 'brave', 'browser', 'google', 'drive', 'docs', 'sheets', 'maps', 'gmail', 'outlook'];
  let plugin = null, refreshBusy = false, refreshTimer = null, initialized = false;
  let showAllApps = false, appSearchQuery = '';
  const COLLAPSED_APP_LIMIT = 5;
  const todayKey = (date = new Date()) => `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`;
  const escapeHTML = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const fmt = ms => {
    const mins = Math.max(0, Math.round((Number(ms)||0)/60000));
    if (mins < 60) return `${mins}m`;
    return `${Math.floor(mins/60)}h ${String(mins%60).padStart(2,'0')}m`;
  };
  const appData = () => {
    if (!window.appData || typeof window.appData !== 'object') window.appData = {};
    const current = window.appData.digitalWellness;
    if (!current || typeof current !== 'object' || Array.isArray(current)) {
      window.appData.digitalWellness = { version: 1, dailySnapshots: {}, categories: {}, appLimits: {}, blockedPackages: [], focusEnabled: false, focusConsent: false, settings: { dailyStudyTargetHours: 6, dailyScreenTargetHours: 5, dailyDistractionTargetMinutes: 60 } };
    }
    const d = window.appData.digitalWellness;
    d.dailySnapshots = d.dailySnapshots && typeof d.dailySnapshots === 'object' ? d.dailySnapshots : {};
    d.categories = d.categories && typeof d.categories === 'object' ? d.categories : {};
    d.appLimits = d.appLimits && typeof d.appLimits === 'object' ? d.appLimits : {};
    d.blockedPackages = Array.isArray(d.blockedPackages) ? d.blockedPackages : [];
    d.settings = { dailyStudyTargetHours: 6, dailyScreenTargetHours: 5, dailyDistractionTargetMinutes: 60, ...(d.settings || {}) };
    return d;
  };
  function getPlugin() {
    if (plugin) return plugin;
    try {
      plugin = window.Capacitor?.Plugins?.KKWellness || window.Capacitor?.registerPlugin?.('KKWellness') || null;
    } catch (_) { plugin = null; }
    return plugin;
  }
  const isNative = () => {
    try { return !!(window.Capacitor?.isNativePlatform?.() || window.Capacitor?.getPlatform?.() === 'android'); } catch (_) { return false; }
  };
  function guessCategory(label) {
    const name = String(label || '').toLowerCase();
    if (studyDefaults.some(x => name.includes(x))) return 'study';
    if (mixedDefaults.some(x => name.includes(x))) return 'mixed';
    return 'distraction';
  }
  function categoryFor(app) {
    const d = appData();
    return d.categories[app.packageName] || guessCategory(app.label || app.packageName);
  }
  function classifyApps(apps) {
    const totals = { study: 0, distraction: 0, mixed: 0 };
    for (const app of (Array.isArray(apps) ? apps : [])) {
      const category = categoryFor(app);
      if (category in totals) totals[category] += Number(app.foregroundMs) || 0;
    }
    return totals;
  }
  function focusStudySeconds(date) {
    return (Array.isArray(window.appData?.studyLogs) ? window.appData.studyLogs : [])
      .filter(x => x?.date === date && x?.type === 'Focus')
      .reduce((sum,x) => sum + (Number(x.duration) || 0), 0);
  }
  function scoreData() {
    const d = appData(), today = todayKey(), snap = d.dailySnapshots[today];
    const studyAppSec = snap ? classifyApps(snap.apps || []).study / 1000 : 0;
    // Use the higher signal rather than summing timer + app time; their intervals may overlap.
    const studySec = Math.max(focusStudySeconds(today), studyAppSec);
    const studyTarget = Math.max(.5, Number(d.settings.dailyStudyTargetHours) || 6) * 3600;
    const studyScore = Math.min(100, studySec / studyTarget * 100);
    const logs = Array.isArray(window.appData?.studyLogs) ? window.appData.studyLogs : [];
    const activeDates = new Set(logs.filter(x => x?.type === 'Focus' && x.date && focusStudySeconds(x.date) > 0).map(x => x.date));
    const weekActive = Array.from({length:7},(_,i)=>{const dt=new Date();dt.setHours(0,0,0,0);dt.setDate(dt.getDate()-i);return activeDates.has(todayKey(dt));}).filter(Boolean).length;
    const consistencyScore = weekActive / 7 * 100;
    const mocks = Array.isArray(window.appData?.mocks) ? window.appData.mocks.slice() : [];
    const quiz = Array.isArray(window.appData?.quizHistory) ? window.appData.quizHistory.slice() : [];
    const accuracies = [];
    for (const m of mocks.slice(-5)) {
      const right = ['eR','qR','rR'].reduce((s,k)=>s+(Number(m?.[k])||0),0);
      const wrong = ['eW','qW','rW'].reduce((s,k)=>s+(Number(m?.[k])||0),0);
      const attempted = right + wrong;
      const value = attempted > 0 ? right / attempted * 100 : Number(m?.accuracy);
      if (Number.isFinite(value) && value >= 0 && value <= 100) accuracies.push(value);
    }
    for (const q of quiz.slice(-5)) { const total=Number(q?.attempted)||((Number(q?.correct)||0)+(Number(q?.wrong)||0)); if(total>0) accuracies.push(Math.max(0,Math.min(100,(Number(q?.correct)||0)/total*100))); }
    const mockScore = accuracies.length ? accuracies.reduce((a,b)=>a+b,0)/accuracies.length : null;
    let digitalScore = null;
    if (snap) {
      const distractionMin = (Number(snap.distractionMs)||0)/60000;
      const goal = Math.max(0, Number(d.settings.dailyDistractionTargetMinutes) || 60);
      digitalScore = goal === 0 ? (distractionMin === 0 ? 100 : 0) : Math.max(0, Math.min(100, 100 - Math.max(0, distractionMin-goal) / Math.max(goal,1) * 100));
    }
    const parts = [{key:'study',label:'Study time',score:studyScore,weight:35},{key:'mock',label:'Mock performance',score:mockScore,weight:25},{key:'consistency',label:'Consistency',score:consistencyScore,weight:20},{key:'digital',label:'Digital wellness',score:digitalScore,weight:20}].filter(x=>Number.isFinite(x.score));
    const weight = parts.reduce((s,x)=>s+x.weight,0);
    const overall = weight ? Math.round(parts.reduce((s,x)=>s+x.score*x.weight,0)/weight) : null;
    return { overall, parts, studySec, weekActive, mockScore, snap, isComplete: parts.length === 4 };
  }
  function suggestions() {
    const d=appData(), today=todayKey(), snap=d.dailySnapshots[today], list=[];
    const studyAppSec=snap?classifyApps(snap.apps||[]).study/1000:0;
    const study=Math.max(focusStudySeconds(today),studyAppSec), studyGoal=Math.max(.5,Number(d.settings.dailyStudyTargetHours)||6)*3600;
    if (study < studyGoal*.6) list.push(`Your current study signal is ${fmt(study*1000)} against your ${Number(d.settings.dailyStudyTargetHours)||6}h target. Log Focus sessions or use your apps classified as Study, then plan one distraction-free block next.`);
    if (snap) {
      const disc=Number(snap.distractionMs)||0, screen=Number(snap.screenInteractiveMs)||0;
      const screenGoal=(Number(d.settings.dailyScreenTargetHours)||5)*3600000;
      const discGoal=(Number(d.settings.dailyDistractionTargetMinutes)||60)*60000;
      if (disc > discGoal) list.push(`Apps you marked as Distraction used ${fmt(disc)}; that's above your ${fmt(discGoal)} target. Consider a Focus Guard block for your top two apps.`);
      if (screen > screenGoal) list.push(`Screen-active time reached ${fmt(screen)}, above your ${Number(d.settings.dailyScreenTargetHours)||5}h target. Try a phone-free break between study blocks.`);
      const appList=(snap.apps||[]).slice().sort((a,b)=>(Number(b.foregroundMs)||0)-(Number(a.foregroundMs)||0));
      const top=appList[0]; if(top && categoryFor(top)==='distraction') list.push(`${top.label} is your most-used distraction app today at ${fmt(top.foregroundMs)}. Set a daily limit in App Classification.`);
    }
    const last7=Array.from({length:7},(_,i)=>{const dt=new Date();dt.setDate(dt.getDate()-i);return d.dailySnapshots[todayKey(dt)];}).filter(Boolean);
    if (last7.length >= 4) {
      const avg=last7.reduce((s,x)=>s+(Number(x.distractionMs)||0),0)/last7.length;
      if (avg > (Number(d.settings.dailyDistractionTargetMinutes)||60)*60000) list.push(`Your 7-day average distraction time is ${fmt(avg)} per day. Reduce it gradually by 10–15 minutes rather than making an unrealistic sudden change.`);
    }
    if (!list.length) list.push('Your latest recorded pattern looks balanced. Keep logging study sessions and review your 7-day trend each evening.');
    return list;
  }
  function renderWeekly() {
    const d=appData(), host=document.getElementById('kwWeeklyBars'); if(!host)return;
    const dates=Array.from({length:7},(_,i)=>{const dt=new Date();dt.setHours(0,0,0,0);dt.setDate(dt.getDate()-(6-i));return dt;});
    const data=dates.map(dt=>({date:todayKey(dt),label:dt.toLocaleDateString(undefined,{weekday:'short'}),snap:d.dailySnapshots[todayKey(dt)]}));
    const max=Math.max(1,...data.map(x=>Number(x.snap?.screenInteractiveMs)||0));
    if(!data.some(x=>x.snap)){host.innerHTML='<div class="kw-empty">No Android usage history recorded yet. Enable Usage Access and refresh.</div>';return;}
    host.innerHTML=data.map(x=>{
      const s=x.snap||{}, screen=Number(s.screenInteractiveMs)||0, dayTotals=classifyApps(s.apps||[]), study=dayTotals.study, disc=dayTotals.distraction;
      const h=Math.max(2,Math.round(screen/max*100));
      const sh=Math.max(0,Math.round(study/max*100)), dh=Math.max(0,Math.round(disc/max*100));
      return `<div class="kw-day-col" title="${escapeHTML(x.date)} · Screen ${fmt(screen)} · Study apps ${fmt(study)} · Distraction ${fmt(disc)}"><div class="kw-day-stack"><i class="kw-day-bar kw-day-screen" style="height:${h}%"></i><i class="kw-day-bar kw-day-study" style="height:${Math.min(100,sh)}%"></i><i class="kw-day-bar kw-day-distraction" style="height:${Math.min(100,dh)}%"></i></div><small>${escapeHTML(x.label)}</small></div>`;
    }).join('');
    const valid=data.filter(x=>x.snap), latest=valid[valid.length-1]?.snap, previous=valid[valid.length-2]?.snap;
    const trend=document.getElementById('kwWeekTrend');
    if(trend && latest && previous) { const delta=(Number(latest.screenInteractiveMs)||0)-(Number(previous.screenInteractiveMs)||0); trend.textContent=delta<=0?`${fmt(Math.abs(delta))} less vs previous day`:`${fmt(delta)} more vs previous day`; }
    else if(trend) trend.textContent=`${valid.length}/7 days recorded`;
  }
  function renderApps() {
    const d=appData(), host=document.getElementById('kwAppList'); if(!host)return;
    const snap=d.dailySnapshots[todayKey()];
    const allApps=(Array.isArray(snap?.apps)?snap.apps:[]).filter(a=>a?.packageName).sort((a,b)=>(Number(b.foregroundMs)||0)-(Number(a.foregroundMs)||0));
    if(!allApps.length){host.innerHTML='<div class="kw-empty">No apps returned yet. Enable Usage Access and tap Refresh usage.</div>';return;}

    const q = appSearchQuery.trim().toLowerCase();
    const filtered = q ? allApps.filter(a => String(a.label||'').toLowerCase().includes(q) || String(a.packageName||'').toLowerCase().includes(q)) : allApps;
    const visible = (q || showAllApps) ? filtered : filtered.slice(0, COLLAPSED_APP_LIMIT);
    const hiddenCount = Math.max(0, filtered.length - visible.length);

    let toolbar = document.getElementById('kwAppListToolbar');
    if (!toolbar) {
      toolbar = document.createElement('div');
      toolbar.id = 'kwAppListToolbar';
      toolbar.className = 'kw-app-toolbar';
      toolbar.innerHTML = `<input type="search" id="kwAppSearchInput" class="kw-app-search" placeholder="Search apps (${allApps.length})…" aria-label="Search apps"><span class="kw-app-count" id="kwAppCountBadge"></span>`;
      host.insertAdjacentElement('beforebegin', toolbar);
      toolbar.querySelector('#kwAppSearchInput')?.addEventListener('input', e => {
        appSearchQuery = e.target.value || '';
        renderApps();
      });
    }
    const searchInput = document.getElementById('kwAppSearchInput');
    if (searchInput) {
      searchInput.placeholder = `Search ${allApps.length} apps…`;
      if (document.activeElement !== searchInput && searchInput.value !== appSearchQuery) searchInput.value = appSearchQuery;
    }
    const countBadge = document.getElementById('kwAppCountBadge');
    if (countBadge) countBadge.textContent = q ? `${filtered.length} match${filtered.length===1?'':'es'}` : `Showing ${visible.length} of ${allApps.length}`;

    const rowsHtml = visible.length ? visible.map(a=>{
      const name=escapeHTML(a.label||a.packageName), pkg=escapeHTML(a.packageName), cat=categoryFor(a), limit=Number(d.appLimits[a.packageName])||0, blocked=d.blockedPackages.includes(a.packageName);
      return `<div class="kw-app-row" data-package="${pkg}"><div class="kw-app-ident"><span class="kw-app-icon">${escapeHTML((a.label||a.packageName||'?').slice(0,1).toUpperCase())}</span><div><b>${name}</b><small>${fmt(a.foregroundMs)} today · ${pkg}</small></div></div><select class="kw-category-select" aria-label="Category for ${name}"><option value="study" ${cat==='study'?'selected':''}>Study</option><option value="mixed" ${cat==='mixed'?'selected':''}>Mixed</option><option value="distraction" ${cat==='distraction'?'selected':''}>Distraction</option></select><label class="kw-app-limit">Limit <input class="kw-limit-input" type="number" min="0" max="720" step="5" value="${limit}" aria-label="Daily limit minutes">m</label><label class="kw-app-block"><input class="kw-block-check" type="checkbox" ${blocked?'checked':''}> Block in Focus</label></div>`;
    }).join('') : '<div class="kw-empty">No matching apps found.</div>';

    const toggleHtml = (!q && allApps.length > COLLAPSED_APP_LIMIT)
      ? `<button type="button" id="kwToggleAllAppsBtn" class="kw-secondary-btn kw-view-all-apps-btn">${showAllApps ? `Show Top ${COLLAPSED_APP_LIMIT} Apps ▲` : `View All Apps (${allApps.length} total, +${hiddenCount} more) ▼`}</button>`
      : '';

    host.innerHTML = rowsHtml + toggleHtml;
    host.querySelectorAll('.kw-app-row').forEach(row=>{
      const pkg=row.dataset.package;
      row.querySelector('.kw-category-select')?.addEventListener('change',e=>{d.categories[pkg]=e.target.value; save(); renderAll();});
      row.querySelector('.kw-limit-input')?.addEventListener('change',e=>{const n=Math.max(0,Math.min(720,Number(e.target.value)||0)); if(n)d.appLimits[pkg]=n;else delete d.appLimits[pkg];e.target.value=n; save(); syncFocusPolicy();});
      row.querySelector('.kw-block-check')?.addEventListener('change',e=>{d.blockedPackages=d.blockedPackages.filter(x=>x!==pkg);if(e.target.checked)d.blockedPackages.push(pkg);save();syncFocusPolicy();});
    });
    document.getElementById('kwToggleAllAppsBtn')?.addEventListener('click', () => {
      showAllApps = !showAllApps;
      renderApps();
    });
  }
  function renderAll() {
    const d=appData(), key=todayKey(), snap=d.dailySnapshots[key], apps=snap?.apps||[], totals=classifyApps(apps);
    const values={kwTodayScreen:snap?fmt(snap.screenInteractiveMs):'—',kwTodayStudy:snap?fmt(totals.study):'—',kwTodayDistraction:snap?fmt(totals.distraction):'—',kwScreenTime:snap?fmt(snap.screenInteractiveMs):'—',kwStudyTime:snap?fmt(totals.study):'—',kwDistractionTime:snap?fmt(totals.distraction):'—',kwMixedTime:snap?fmt(totals.mixed):'—'};
    for(const [id,value] of Object.entries(values)){const el=document.getElementById(id);if(el)el.textContent=value;}
    const status=document.getElementById('kwTodayStatus');if(status)status.textContent=snap?'Latest Android usage snapshot is available.':'Connect Android Usage Access to see today’s report.';
    const perm=document.getElementById('kwUsagePermissionCard');if(perm)perm.style.display=(!isNative() || !d.usageAccessGranted)?'flex':'none';
    const score=scoreData(), scoreEl=document.getElementById('kwTodayScore'), ring=document.getElementById('kwTodayScoreRing'), hint=document.getElementById('kwTodayScoreHint');
    if(scoreEl)scoreEl.textContent=score.overall==null?'—':String(score.overall);
    if(ring)ring.style.background=`conic-gradient(from -90deg, rgba(112,222,192,.9) ${score.overall||0}%, rgba(255,255,255,.08) 0)`;
    if(hint)hint.textContent=score.overall==null?'Add study sessions, mocks and Android usage data to begin scoring.':`${score.isComplete?'All four signals are active.':'Provisional · waiting for some data.'} Study score uses the higher of Focus Timer or Study-app time to avoid obvious overlap double-counting. ${score.parts.map(x=>`${x.label} ${Math.round(x.score)}`).join(' · ')}`;
    const help=document.getElementById('kwScreenHint');if(help)help.textContent=snap?`Active screen use · ${apps.length} app${apps.length===1?'':'s'} today`:'Android Usage Access required';
    const studyHint=document.getElementById('kwStudyHint');if(studyHint)studyHint.textContent=snap?`${apps.filter(a=>categoryFor(a)==='study').length} apps classified as Study · included in score`:'Categorise your learning apps';
    const discHint=document.getElementById('kwDistractionHint');if(discHint)discHint.textContent=snap?`${apps.filter(a=>categoryFor(a)==='distraction').length} apps classified as Distraction`:'Only apps you mark Distraction';
    const focus=document.getElementById('kwFocusStatus');if(focus)focus.textContent=d.focusEnabled?(d.focusServiceEnabled?'ACTIVE':'PERMISSION OFF'):'OFF';
    const toggle=document.getElementById('kwToggleFocus');if(toggle)toggle.textContent=d.focusEnabled?'Focus Guard is ON':'Start Focus Guard';
    const suggest=document.getElementById('kwSuggestions');if(suggest)suggest.innerHTML=suggestions().map(x=>`<div class="kw-suggestion">${escapeHTML(x)}</div>`).join('');
    const sTarget=document.getElementById('kwStudyTarget'),scTarget=document.getElementById('kwScreenTarget'),dTarget=document.getElementById('kwDistractionTarget');
    if(sTarget && document.activeElement!==sTarget)sTarget.value=Number(d.settings.dailyStudyTargetHours)||6;
    if(scTarget && document.activeElement!==scTarget)scTarget.value=Number(d.settings.dailyScreenTargetHours)||5;
    if(dTarget && document.activeElement!==dTarget)dTarget.value=Number(d.settings.dailyDistractionTargetMinutes)||60;
    renderWeekly(); renderApps();
  }
  function save() { try { window.saveDataLocally?.('save'); } catch (_) { try { localStorage.setItem('kkMonitoringV68',JSON.stringify(window.appData)); } catch (_) {} } renderAll(); }
  async function nativeCall(method, args={}) {
    const p=getPlugin(); if(!p || typeof p[method]!=='function') throw new Error('Native Android module is not installed in this build.');
    return p[method](args);
  }
  async function refreshUsage() {
    if(refreshBusy)return; refreshBusy=true;
    const btn=document.getElementById('kwRefreshUsage');if(btn){btn.disabled=true;btn.textContent='Refreshing…';}
    try {
      if(!isNative()) { window.showToast?.('Usage tracking works inside the Android APK. Cloud data can still be viewed here.'); renderAll(); return; }
      const result=await nativeCall('getUsageData',{days:7});
      const d=appData();
      d.usageAccessGranted=!!result.permissionGranted;
      if(!result.permissionGranted){renderAll();window.showToast?.('Enable Usage Access in Android Settings first.',true);return;}
      for(const day of (result.daily||[])){
        const apps=(day.apps||[]).map(a=>({packageName:String(a.packageName||''),label:String(a.label||a.packageName||'App'),foregroundMs:Number(a.foregroundMs)||0})).filter(a=>a.packageName);
        const totals=classifyApps(apps);
        d.dailySnapshots[day.date]={date:day.date,screenInteractiveMs:Number(day.screenInteractiveMs)||0,totalForegroundMs:apps.reduce((s,a)=>s+a.foregroundMs,0),studyMs:totals.study,distractionMs:totals.distraction,mixedMs:totals.mixed,apps};
      }
      // Keep 30 daily snapshots on device/cloud; the visible report focuses on the last seven.
      const keys=Object.keys(d.dailySnapshots).sort(); for(const old of keys.slice(0,Math.max(0,keys.length-30)))delete d.dailySnapshots[old];
      if(result.focusServiceEnabled!==undefined)d.focusServiceEnabled=!!result.focusServiceEnabled;
      save();
    } catch(e) { console.warn('KK Wellness refresh:',e); window.showToast?.(e.message||'Could not read Android usage.',true); }
    finally { refreshBusy=false;if(btn){btn.disabled=false;btn.innerHTML='<i class="ph ph-arrows-clockwise"></i> Refresh usage';} }
  }
  async function syncFocusPolicy() {
    const d=appData();
    try { await nativeCall('setFocusPolicy',{enabled:!!d.focusEnabled,blockedPackages:d.blockedPackages,limits:d.appLimits}); }
    catch(e) { if(isNative())console.warn('Focus policy not applied:',e); }
  }
  async function setupUsage() {
    if(!isNative()){window.showToast?.('Usage Access can only be enabled from the Android app.');return;}
    try{await nativeCall('openUsageAccessSettings');}catch(e){window.showToast?.(e.message||'Unable to open Usage Access settings.',true);}
  }
  async function setupAccessibility() {
    const d=appData();
    if(!d.focusConsent){window.showToast?.('Please read and accept the Focus Guard disclosure first.',true);return;}
    try{await nativeCall('openAccessibilitySettings');}catch(e){window.showToast?.(e.message||'Unable to open Accessibility settings.',true);}
  }
  async function toggleFocus() {
    const d=appData();
    if(!isNative()){window.showToast?.('Focus Guard requires the Android APK.');return;}
    try {
      const status=await nativeCall('getFocusStatus');
      d.focusServiceEnabled=!!status.enabled;
      if(!status.enabled){window.showToast?.('Enable KK Monitoring Focus Guard in Android Accessibility Settings.',true);await setupAccessibility();return;}
      d.focusEnabled=!d.focusEnabled; await syncFocusPolicy(); save();
      window.showToast?.(d.focusEnabled?'Focus Guard enabled. Selected apps will be blocked.':'Focus Guard paused.');
    } catch(e){window.showToast?.(e.message||'Could not change Focus Guard.',true);}
  }
  async function endFocus() { const d=appData();d.focusEnabled=false;await syncFocusPolicy();save();window.showToast?.('Focus Guard ended.'); }
  function bind() {
    document.getElementById('kwRefreshUsage')?.addEventListener('click',refreshUsage);
    document.getElementById('kwGrantUsage')?.addEventListener('click',setupUsage);
    document.getElementById('kwOpenAccessibility')?.addEventListener('click',setupAccessibility);
    document.getElementById('kwToggleFocus')?.addEventListener('click',toggleFocus);
    document.getElementById('kwEndFocus')?.addEventListener('click',endFocus);
    document.getElementById('kwSaveTargets')?.addEventListener('click',()=>{
      const d=appData();d.settings.dailyStudyTargetHours=Math.max(.5,Math.min(18,Number(document.getElementById('kwStudyTarget')?.value)||6));d.settings.dailyScreenTargetHours=Math.max(.5,Math.min(24,Number(document.getElementById('kwScreenTarget')?.value)||5));d.settings.dailyDistractionTargetMinutes=Math.max(0,Math.min(720,Number(document.getElementById('kwDistractionTarget')?.value)||0));save();window.showToast?.('Your personal targets were saved.');
    });
    document.getElementById('kwA11yConsent')?.addEventListener('change',e=>{appData().focusConsent=!!e.target.checked;save();});
    const d=appData();const consent=document.getElementById('kwA11yConsent');if(consent)consent.checked=!!d.focusConsent;
  }
  function renderAllSafe(){try{renderAll();}catch(e){console.warn('Wellness render:',e);}}
  async function init() {
    if(initialized || !window.appData) return; initialized=true; appData(); bind(); renderAllSafe();
    if(isNative()) {
      try { const p=getPlugin(); if(p?.getFocusStatus){const st=await p.getFocusStatus();appData().focusServiceEnabled=!!st.enabled;renderAllSafe();} } catch(_) {}
      await refreshUsage();
      if(!refreshTimer)refreshTimer=setInterval(()=>{if(!document.hidden)refreshUsage();},15*60*1000);
    }
    window.addEventListener('kk:data-saved',renderAllSafe);
    document.addEventListener('visibilitychange',()=>{if(!document.hidden){renderAllSafe();if(isNative())refreshUsage();}});
  }
  window.renderKKDigitalWellness=renderAllSafe;
  window.refreshKKDigitalWellness=refreshUsage;
  window.addEventListener('kk:core-ready',init,{once:true});
  window.addEventListener('kk:unlocked',()=>{if(window.__kkCoreReady)init();},{once:true});
  if(window.__kkCoreReady)init();
})();
