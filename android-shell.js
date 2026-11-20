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
    const render = () => {
      const rows = [...body.querySelectorAll('tr')];
      host.innerHTML = rows.map(row => {
        const cells = [...row.children];
        if (!cells.length || row.classList.contains('mock-empty-row')) return `<article class="kw-mobile-mock-card"><div>${row.textContent.trim() || 'No mock entries yet.'}</div></article>`;
        const val = i => (cells[i]?.innerText || '').trim();
        const actionCell = cells[24];
        const actions = actionCell ? [...actionCell.querySelectorAll('button')].map(b => b.cloneNode(true).outerHTML).join('') : '';
        return `<article class="kw-mobile-mock-card" data-mock-id="${row.dataset.mockId || ''}">
          <div class="kw-mobile-mock-top"><div><div class="kw-mobile-mock-title">${escapeText(val(3) || 'Mock test')} · ${escapeText(val(1) || 'Full')}</div><div class="kw-mobile-mock-meta">${escapeText(val(2))} · ${escapeText(val(5))}</div></div><div class="kw-mobile-mock-score">${escapeText(val(23) || val(21) || '—')}</div></div>
          <div class="kw-mobile-mock-stats"><div class="kw-mobile-mock-stat"><b>${escapeText(val(18) || '—')}</b><small>Attempted</small></div><div class="kw-mobile-mock-stat"><b>${escapeText(val(19) || '—')}</b><small>Correct</small></div><div class="kw-mobile-mock-stat"><b>${escapeText(val(20) || '—')}</b><small>Wrong</small></div></div>
          <div class="kw-mobile-mock-actions">${actions}</div>
        </article>`;
      }).join('');
      host.querySelectorAll('button').forEach(button => button.addEventListener('click', event => event.stopPropagation()));
    };
    const escapeText = value => String(value || '').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
    new MutationObserver(render).observe(body,{childList:true,subtree:true,characterData:true});
    render();
  }

  function patchSwitch() {
    if (typeof window.switchTab !== 'function' || window.switchTab.__kwWrapped) return;
    originalSwitchTab = window.switchTab;
    const wrapped = function(tab) { const result = originalSwitchTab.apply(this, arguments); setActiveTab(tab); if (isCompact()) setDrawer(false); return result; };
    wrapped.__kwWrapped = true;
    window.switchTab = wrapped;
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', makeShell, { once: true }); else makeShell();
  window.addEventListener('kk:core-ready', () => { makeShell(); installMobileMockCards(); });
})();
