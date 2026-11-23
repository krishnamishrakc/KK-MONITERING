/* KK Monitoring Android navigation shell — leaves desktop navigation intact. */
(() => {
  'use strict';
  if (window.__kkAndroidShellLoaded) return;
  window.__kkAndroidShellLoaded = true;
  const isNative = () => {
    try { return !!(window.Capacitor?.isNativePlatform?.() || window.Capacitor?.getPlatform?.() === 'android'); }
    catch (_) { return false; }
  };
  const isCompact = () => isNative() || window.matchMedia('(max-width: 820px)').matches;
  let drawerOpen = false;
  let shellReady = false;
  let originalSwitchTab = null;

  function setActiveTab(tab) {
    document.querySelectorAll('#kkAndroidBottomNav .kw-bnav-btn[data-tab]').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.tab === tab);
      btn.setAttribute('aria-current', btn.dataset.tab === tab ? 'page' : 'false');
    });
  }
  function setDrawer(open) {
    const sidebar = document.querySelector('.sidebar');
    const backdrop = document.getElementById('kkSidebarBackdrop');
    drawerOpen = !!open;
    sidebar?.classList.toggle('mobile-open', drawerOpen);
    backdrop?.classList.toggle('show', drawerOpen);
    document.body.classList.toggle('kw-drawer-open', drawerOpen);
    document.getElementById('kwMenuButton')?.setAttribute('aria-expanded', drawerOpen ? 'true' : 'false');
  }
  function switchTo(tab) {
    if (!tab || typeof window.switchTab !== 'function') return;
    window.switchTab(tab);
    setActiveTab(tab);
    setDrawer(false);
  }

  function installGalleryAppearance() {
    const settings = document.querySelector('#view-settings .settings-grid');
    if (settings && !document.getElementById('kwGalleryAppearance')) {
      const card = document.createElement('section');
      card.id = 'kwGalleryAppearance';
      card.className = 'glass-panel settings-card kw-gallery-settings';
      card.innerHTML = `<h3><i class="ph ph-swatch-book"></i> Gallery Appearance</h3>
        <p>Choose a calm, premium finish. Your choice is saved on this device.</p>
        <div class="kw-gallery-options">
          <button type="button" data-gallery-mode="dark" class="kw-gallery-choice"><span class="kw-swatch kw-swatch-dark"></span><b>Midnight</b><small>Charcoal · warm ivory</small></button>
          <button type="button" data-gallery-mode="light" class="kw-gallery-choice"><span class="kw-swatch kw-swatch-light"></span><b>Ivory</b><small>Soft paper · graphite</small></button>
        </div>`;
      settings.insertBefore(card, settings.firstElementChild);
      card.addEventListener('click', event => {
        const button = event.target.closest('[data-gallery-mode]');
        if (!button) return;
        const mode = button.dataset.galleryMode;
        document.documentElement.dataset.kwGallery = mode;
        document.body.dataset.kwGallery = mode;
        try { localStorage.setItem('kkGalleryAppearance', mode); } catch (_) {}
        syncGalleryAppearance();
      });
    }
    let mode = 'dark';
    try { mode = localStorage.getItem('kkGalleryAppearance') || 'dark'; } catch (_) {}
    document.documentElement.dataset.kwGallery = mode;
    document.body.dataset.kwGallery = mode;
    syncGalleryAppearance();
  }
  function syncGalleryAppearance() {
    const mode = document.documentElement.dataset.kwGallery || 'dark';
    document.querySelectorAll('[data-gallery-mode]').forEach(button => button.classList.toggle('active', button.dataset.galleryMode === mode));
  }

  function makeShell() {
    if (!isCompact()) return;
    const main = document.querySelector('.main-content');
    const sidebar = document.querySelector('.sidebar');
    if (!main || !sidebar) return;
    document.documentElement.classList.add('kw-android-ui');
    document.body.classList.add('kw-android-ui');
    if (!document.getElementById('kkMobileTopBar')) {
      const top = document.createElement('header');
      top.id = 'kkMobileTopBar';
      top.innerHTML = `<button id="kwMenuButton" type="button" aria-label="Open navigation" aria-expanded="false"><i class="ph ph-squares-four"></i></button><div class="kw-top-brand"><img src="icon-192.png" alt=""><span>KK'S MONITORING</span></div><button id="kwCloudButton" type="button" aria-label="Cloud sync"><i class="ph ph-cloud-check"></i><span>Cloud</span></button>`;
      main.insertBefore(top, main.firstElementChild);
    }
    if (!document.getElementById('kkSidebarBackdrop')) {
      const backdrop = document.createElement('div'); backdrop.id = 'kkSidebarBackdrop';
      sidebar.parentElement.insertBefore(backdrop, sidebar);
    }
    if (!document.getElementById('kkAndroidBottomNav')) {
      const nav = document.createElement('nav'); nav.id = 'kkAndroidBottomNav'; nav.setAttribute('aria-label', 'Main navigation');
      nav.innerHTML = `<button type="button" class="kw-bnav-btn active" data-tab="view-dashboard"><i class="ph-fill ph-house"></i><span>Today</span></button><button type="button" class="kw-bnav-btn" data-tab="view-study-room"><i class="ph-fill ph-timer"></i><span>Focus</span></button><button type="button" class="kw-bnav-btn kw-bnav-add" data-action="add-mock" aria-label="Add mock"><i class="ph-bold ph-plus"></i><span>Add Mock</span></button><button type="button" class="kw-bnav-btn" data-tab="view-analytics"><i class="ph-fill ph-chart-line-up"></i><span>Progress</span></button><button type="button" class="kw-bnav-btn" data-action="menu"><i class="ph-fill ph-squares-four"></i><span>More</span></button>`;
      document.body.appendChild(nav);
    }
    installGalleryAppearance();
    if (shellReady) return;
    shellReady = true;
    installMobileMockCards();
    removeFloatingSettingsPrompt();
    document.getElementById('kwMenuButton')?.addEventListener('click', () => setDrawer(!drawerOpen));
    document.getElementById('kkSidebarBackdrop')?.addEventListener('click', () => setDrawer(false));
    document.getElementById('kwCloudButton')?.addEventListener('click', () => {
      if (typeof window.kkCloudOpenAuth === 'function') window.kkCloudOpenAuth();
      else window.dispatchEvent(new Event('kk:cloud-open-request'));
    });
    document.getElementById('kkAndroidBottomNav')?.addEventListener('click', event => {
      const btn = event.target.closest('.kw-bnav-btn'); if (!btn) return;
      if (btn.dataset.action === 'menu') { setDrawer(!drawerOpen); return; }
      if (btn.dataset.action === 'add-mock') {
        const form = document.getElementById('mockForm');
        if (form) form.reset();
        const editing = document.getElementById('editingMockId'); if (editing) editing.value = '';
        const dateField = document.getElementById('mockDate'); if (dateField) dateField.value = new Date().toLocaleDateString('en-CA');
        const title = document.getElementById('mockFormTitle'); if (title) title.textContent = 'Add Mock Test Performance';
        if (typeof window.setMockType === 'function') window.setMockType('full');
        if (typeof window.switchTab === 'function') window.switchTab('view-add-data');
        else document.querySelector('.nav-links li[data-tab="view-add-data"]')?.click();
        setActiveTab('view-add-data'); setDrawer(false);
        setTimeout(() => document.getElementById('mockDate')?.focus({preventScroll:true}), 180);
        return;
      }
      switchTo(btn.dataset.tab);
    });
    sidebar.addEventListener('click', event => {
      const item = event.target.closest('.nav-links li[data-tab]');
      if (item?.dataset.tab) { setActiveTab(item.dataset.tab); setDrawer(false); }
    });
    document.addEventListener('click', event => {
      const link = event.target.closest('[data-tab].kw-link-btn');
      if (link?.dataset.tab) { event.preventDefault(); switchTo(link.dataset.tab); }
    });
    if (typeof window.switchTab === 'function') patchSwitch();
    window.addEventListener('kk:core-ready', patchSwitch, { once: true });
    window.addEventListener('resize', () => { if (!isCompact()) setDrawer(false); else makeShell(); }, { passive: true });
    window.addEventListener('orientationchange', () => setTimeout(() => window.dispatchEvent(new Event('resize')), 180));
    window.addEventListener('popstate', () => { if (drawerOpen) { setDrawer(false); return; } });
    const active = document.querySelector('.view-section.active')?.id || 'view-dashboard';
    setActiveTab(active);
  }


  let floatingPromptObserverInstalled = false;
  function removeFloatingSettingsPrompt() {
    if (floatingPromptObserverInstalled) return;
    floatingPromptObserverInstalled = true;
    const scan = () => {
      document.querySelectorAll('body *').forEach(el => {
        if (el.children.length > 2) return;
        const text = (el.innerText || el.textContent || '').trim();
        if (!/access(?:ibility)?\s+in\s+android\s+settings/i.test(text)) return;
        const rect = el.getBoundingClientRect(), style = getComputedStyle(el);
        const floating = style.position === 'fixed' || style.position === 'sticky' ||
          (rect.width > 180 && rect.height > 35 && rect.bottom > innerHeight - 180);
        if (floating && !el.closest('#view-wellness')) {
          el.classList.add('kw-hidden-floating-settings-prompt');
          el.setAttribute('aria-hidden','true');
        }
      });
    };
    scan();
    new MutationObserver(scan).observe(document.body,{childList:true,subtree:true,characterData:true});
  }

  function installMobileMockCards() {
    const body = document.getElementById('trackerBody');
    if (!body || body.dataset.kwCardsReady) return;
    body.dataset.kwCardsReady = '1';
    const tableWrap = body.closest('.table-responsive');
    if (!tableWrap) return;
    let host = document.getElementById('kwMobileMockList');
    if (!host) { host = document.createElement('div'); host.id='kwMobileMockList'; host.className='kw-mobile-mock-list'; tableWrap.insertAdjacentElement('afterend',host); }

    if (!host.dataset.kwClickBound) {
      host.dataset.kwClickBound = '1';
      host.addEventListener('click', event => {
        const actionBtn = event.target.closest('[data-mock-action]');
        if (actionBtn) {
          event.stopPropagation();
          const id = actionBtn.dataset.mockId || actionBtn.closest('.kw-mobile-mock-card')?.dataset.mockId;
          if (!id) return;
          if (actionBtn.dataset.mockAction === 'edit' && typeof window.editMock === 'function') window.editMock(id);
          if (actionBtn.dataset.mockAction === 'delete' && typeof window.deleteMock === 'function') window.deleteMock(id);
          return;
        }
        const card = event.target.closest('.kw-mobile-mock-card[data-mock-id]');
        if (card && card.dataset.mockId && typeof window.showMockAnalysis === 'function') {
          window.showMockAnalysis(card.dataset.mockId);
        }
      });
      host.addEventListener('keydown', event => {
        if (event.key !== 'Enter' && event.key !== ' ') return;
        const card = event.target.closest('.kw-mobile-mock-card[data-mock-id]');
        if (card && card.dataset.mockId && typeof window.showMockAnalysis === 'function') {
          event.preventDefault();
          window.showMockAnalysis(card.dataset.mockId);
        }
      });
    }

    const escapeText = value => String(value || '').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
    const render = () => {
      const rows = [...body.querySelectorAll('tr')];
      host.innerHTML = rows.map(row => {
        const cells = [...row.children];
        const mockId = row.dataset.mockId || '';
        if (!cells.length || row.classList.contains('mock-empty-row') || !mockId) {
          return `<article class="kw-mobile-mock-card kw-mobile-mock-empty"><div>${escapeText(row.textContent.trim() || 'No mock entries yet.')}</div></article>`;
        }
        const val = i => (cells[i]?.innerText || '').trim();
        const actionCell = cells[24];
        const actions = actionCell ? [...actionCell.querySelectorAll('button')].map(b => b.cloneNode(true).outerHTML).join('') : '';
        return `<article class="kw-mobile-mock-card kw-mobile-mock-clickable" data-mock-id="${escapeText(mockId)}" role="button" tabindex="0" aria-label="View mock analysis for ${escapeText(val(3) || 'Mock test')}">
          <div class="kw-mobile-mock-top"><div><div class="kw-mobile-mock-title">${escapeText(val(3) || 'Mock test')} · ${escapeText(val(1) || 'Full')}</div><div class="kw-mobile-mock-meta">${escapeText(val(2))} · ${escapeText(val(5))}</div></div><div class="kw-mobile-mock-score">${escapeText(val(23) || val(21) || '—')}</div></div>
          <div class="kw-mobile-mock-stats"><div class="kw-mobile-mock-stat"><b>${escapeText(val(18) || '—')}</b><small>Attempted</small></div><div class="kw-mobile-mock-stat"><b>${escapeText(val(19) || '—')}</b><small>Correct</small></div><div class="kw-mobile-mock-stat"><b>${escapeText(val(20) || '—')}</b><small>Wrong</small></div></div>
          <div class="kw-mobile-mock-tap-hint"><span>Tap card for full mock analysis</span><i class="ph ph-arrow-up-right"></i></div>
          <div class="kw-mobile-mock-actions">${actions}</div>
        </article>`;
      }).join('');
    };
    new MutationObserver(render).observe(body,{childList:true,subtree:true,characterData:true});
    render();
  }

  /* ===== Today Tab 7-Day Charts (Focus Time, Tasks, XP, Focus vs Waste) ===== */
  function last7DayKeys() {
    const keys = [];
    for (let i = 6; i >= 0; i--) {
      const dt = new Date();
      dt.setHours(0, 0, 0, 0);
      dt.setDate(dt.getDate() - i);
      const y = dt.getFullYear();
      const m = String(dt.getMonth() + 1).padStart(2, '0');
      const d = String(dt.getDate()).padStart(2, '0');
      keys.push({ key: `${y}-${m}-${d}`, label: dt.toLocaleDateString(undefined, { weekday: 'short' }) });
    }
    return keys;
  }

  function prepMiniCanvas(canvasId) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return null;
    const parent = canvas.parentElement;
    if (!parent) return null;
    const rect = parent.getBoundingClientRect();
    const width = Math.max(240, Math.round((rect.width || parent.clientWidth || 320) - 4));
    const height = 165;
    const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    canvas.style.width = '100%';
    canvas.style.height = `${height}px`;
    const ctx = canvas.getContext('2d');
    if (!ctx) return null;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, width, height);
    return { ctx, width, height };
  }

  function drawRoundedBar(ctx, x, y, w, h, r) {
    const rr = Math.min(r, w / 2, h / 2);
    ctx.beginPath();
    ctx.moveTo(x + rr, y);
    ctx.arcTo(x + w, y, x + w, y + h, rr);
    ctx.arcTo(x + w, y + h, x, y + h, rr);
    ctx.arcTo(x, y + h, x, y, rr);
    ctx.arcTo(x, y, x + w, y, rr);
    ctx.closePath();
    ctx.fill();
  }

  function drawSevenDayBars(canvasId, labels, values, opts) {
    const prep = prepMiniCanvas(canvasId);
    if (!prep) return;
    const { ctx, width, height } = prep;
    const isLight = document.documentElement.dataset.kwGallery === 'light';
    const textCol = isLight ? '#242321' : '#f5f2ec';
    const mutedCol = isLight ? '#77736c' : '#9ba6b8';
    const gridCol = isLight ? 'rgba(36,34,30,0.09)' : 'rgba(255,255,255,0.08)';
    const trackCol = isLight ? 'rgba(36,34,30,0.06)' : 'rgba(255,255,255,0.045)';

    const pad = { l: 10, r: 10, t: 24, b: 26 };
    const plotW = width - pad.l - pad.r;
    const plotH = height - pad.t - pad.b;
    const maxVal = Math.max(opts.minMax || 1, ...values);
    const slot = plotW / labels.length;
    const bw = Math.max(14, Math.min(34, slot * 0.56));

    // Horizontal guide lines
    ctx.strokeStyle = gridCol;
    ctx.lineWidth = 1;
    for (let g = 0; g <= 2; g++) {
      const gy = pad.t + (plotH * g) / 2;
      ctx.beginPath();
      ctx.moveTo(pad.l, gy);
      ctx.lineTo(width - pad.r, gy);
      ctx.stroke();
    }

    labels.forEach((lbl, idx) => {
      const val = Math.max(0, Number(values[idx]) || 0);
      const x = pad.l + slot * idx + (slot - bw) / 2;

      // Subtle background track
      ctx.fillStyle = trackCol;
      drawRoundedBar(ctx, x, pad.t, bw, plotH, 7);

      // Value bar
      const barH = val > 0 ? Math.max(6, (val / maxVal) * plotH) : 3;
      const y = pad.t + plotH - barH;
      const grad = ctx.createLinearGradient(0, y, 0, pad.t + plotH);
      grad.addColorStop(0, opts.colorTop);
      grad.addColorStop(1, opts.colorBottom);
      ctx.fillStyle = val > 0 ? grad : gridCol;
      drawRoundedBar(ctx, x, y, bw, barH, 7);

      // Value label above bar
      ctx.fillStyle = val > 0 ? textCol : mutedCol;
      ctx.font = '700 10px system-ui, -apple-system, sans-serif';
      ctx.textAlign = 'center';
      const formatted = opts.formatVal ? opts.formatVal(val) : String(Math.round(val));
      ctx.fillText(formatted, x + bw / 2, Math.max(13, y - 6));

      // Weekday label below bar
      ctx.fillStyle = mutedCol;
      ctx.font = '600 10px system-ui, -apple-system, sans-serif';
      ctx.fillText(lbl, x + bw / 2, height - 8);
    });
  }

  function drawFocusVsWaste(canvasId, focusMins, wasteMins) {
    const prep = prepMiniCanvas(canvasId);
    if (!prep) return;
    const { ctx, width, height } = prep;
    const isLight = document.documentElement.dataset.kwGallery === 'light';
    const textCol = isLight ? '#242321' : '#f5f2ec';
    const mutedCol = isLight ? '#77736c' : '#9ba6b8';
    const trackCol = isLight ? 'rgba(36,34,30,0.08)' : 'rgba(255,255,255,0.07)';
    const total = focusMins + wasteMins;
    const focusPct = total > 0 ? Math.round((focusMins / total) * 100) : 0;
    const wastePct = total > 0 ? 100 - focusPct : 0;

    const fmtM = m => (m >= 60 ? `${(m / 60).toFixed(1)}h` : `${Math.round(m)}m`);

    // Donut on left
    const cx = Math.min(72, width * 0.24);
    const cy = height / 2;
    const radius = 44;
    ctx.lineWidth = 13;
    ctx.lineCap = 'round';

    ctx.strokeStyle = trackCol;
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, Math.PI * 2);
    ctx.stroke();

    if (total > 0) {
      const start = -Math.PI / 2;
      const focusAngle = (focusMins / total) * Math.PI * 2;
      if (focusMins > 0) {
        ctx.strokeStyle = '#68e5dc';
        ctx.beginPath();
        ctx.arc(cx, cy, radius, start, start + focusAngle);
        ctx.stroke();
      }
      if (wasteMins > 0) {
        ctx.strokeStyle = '#ff8da1';
        ctx.beginPath();
        ctx.arc(cx, cy, radius, start + focusAngle, start + Math.PI * 2);
        ctx.stroke();
      }
    }

    ctx.fillStyle = textCol;
    ctx.font = '800 17px system-ui, -apple-system, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(total > 0 ? `${focusPct}%` : '0%', cx, cy + 3);
    ctx.fillStyle = mutedCol;
    ctx.font = '600 9px system-ui, -apple-system, sans-serif';
    ctx.fillText('FOCUS', cx, cy + 16);

    // Legend & horizontal bars on right
    const rx = cx + radius + 28;
    const rw = Math.max(90, width - rx - 14);
    const rows = [
      { label: 'Focus (7d)', value: fmtM(focusMins), pct: focusPct, color: '#68e5dc' },
      { label: 'Waste (7d)', value: fmtM(wasteMins), pct: wastePct, color: '#ff8da1' }
    ];
    rows.forEach((row, i) => {
      const ry = 42 + i * 54;
      ctx.fillStyle = mutedCol;
      ctx.font = '700 11px system-ui, -apple-system, sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText(row.label, rx, ry);

      ctx.fillStyle = textCol;
      ctx.textAlign = 'right';
      ctx.fillText(`${row.value} (${row.pct}%)`, rx + rw, ry);

      ctx.fillStyle = trackCol;
      drawRoundedBar(ctx, rx, ry + 8, rw, 10, 5);

      if (row.pct > 0) {
        ctx.fillStyle = row.color;
        drawRoundedBar(ctx, rx, ry + 8, Math.max(8, (row.pct / 100) * rw), 10, 5);
      }
    });
  }

  function renderToday7DayCharts() {
    const data = window.appData || {};
    const days = last7DayKeys();
    const labels = days.map(d => d.label);
    const logs = Array.isArray(data.studyLogs) ? data.studyLogs : [];
    const sessions = data.dailySessions && typeof data.dailySessions === 'object' ? data.dailySessions : {};
    const tasksMap = data.tasks && typeof data.tasks === 'object' ? data.tasks : {};
    const xpDaily = data.xp && data.xp.daily && typeof data.xp.daily === 'object' ? data.xp.daily : {};

    let totalFocusMin = 0;
    let totalWasteMin = 0;

    const focusValues = days.map(d => {
      const focusSec = logs
        .filter(l => l && l.date === d.key && String(l.type || '').toLowerCase() === 'focus')
        .reduce((s, l) => s + (Number(l.duration) || 0), 0);
      const sessSec = Number(sessions[d.key]) || 0;
      const mins = Math.max(focusSec, sessSec) / 60;
      totalFocusMin += mins;

      const wasteSec = logs
        .filter(l => l && l.date === d.key && String(l.type || '').toLowerCase() === 'waste')
        .reduce((s, l) => s + (Number(l.duration) || 0), 0);
      totalWasteMin += wasteSec / 60;
      return mins;
    });

    const taskValues = days.map(d => {
      const dayTasks = tasksMap[d.key];
      if (!dayTasks || typeof dayTasks !== 'object') return 0;
      return Object.values(dayTasks).filter(Boolean).length;
    });

    const xpValues = days.map(d => Number(xpDaily[d.key]) || 0);

    drawSevenDayBars('ccFocusChart', labels, focusValues, {
      minMax: 60,
      colorTop: '#74c8ff',
      colorBottom: '#3b82f6',
      formatVal: m => (m >= 60 ? `${(m / 60).toFixed(1)}h` : `${Math.round(m)}m`)
    });

    drawSevenDayBars('ccTaskChart', labels, taskValues, {
      minMax: 5,
      colorTop: '#75e5c0',
      colorBottom: '#10b981',
      formatVal: v => String(Math.round(v))
    });

    drawSevenDayBars('ccXPChart', labels, xpValues, {
      minMax: 50,
      colorTop: '#e8ddca',
      colorBottom: '#b89f78',
      formatVal: v => `${Math.round(v)}`
    });

    drawFocusVsWaste('ccBalanceChart', totalFocusMin, totalWasteMin);
  }
  window.renderKKToday7DayCharts = renderToday7DayCharts;

  function patchSwitch() {
    if (typeof window.switchTab !== 'function' || window.switchTab.__kwWrapped) return;
    originalSwitchTab = window.switchTab;
    const wrapped = function(tab) {
      const result = originalSwitchTab.apply(this, arguments);
      setActiveTab(tab);
      if (isCompact()) setDrawer(false);
      if (tab === 'view-dashboard') setTimeout(renderToday7DayCharts, 60);
      if (tab === 'view-analytics') setTimeout(() => { try { window.renderCharts?.(); } catch (_) {} }, 150);
      return result;
    };
    wrapped.__kwWrapped = true;
    window.switchTab = wrapped;
  }

  const bootTodayCharts = () => {
    setTimeout(renderToday7DayCharts, 120);
    setTimeout(renderToday7DayCharts, 600);
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', makeShell, { once: true }); else makeShell();
  window.addEventListener('kk:core-ready', () => { makeShell(); installMobileMockCards(); bootTodayCharts(); });
  window.addEventListener('kk:data-saved', () => setTimeout(renderToday7DayCharts, 50));
  window.addEventListener('resize', () => setTimeout(renderToday7DayCharts, 120), { passive: true });
})();
