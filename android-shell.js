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
      nav.innerHTML = `<button type="button" class="kw-bnav-btn active" data-tab="view-dashboard"><i class="ph-fill ph-house"></i><span>Today</span></button><button type="button" class="kw-bnav-btn" data-tab="view-study-room"><i class="ph-fill ph-timer"></i><span>Focus</span></button><button type="button" class="kw-bnav-btn" data-tab="view-daily-tasks"><i class="ph-fill ph-list-checks"></i><span>Plan</span></button><button type="button" class="kw-bnav-btn" data-tab="view-analytics"><i class="ph-fill ph-chart-line-up"></i><span>Progress</span></button><button type="button" class="kw-bnav-btn" data-action="menu"><i class="ph-fill ph-squares-four"></i><span>More</span></button>`;
      document.body.appendChild(nav);
    }
    if (shellReady) return;
    shellReady = true;
    document.getElementById('kwMenuButton')?.addEventListener('click', () => setDrawer(!drawerOpen));
    document.getElementById('kkSidebarBackdrop')?.addEventListener('click', () => setDrawer(false));
    document.getElementById('kwCloudButton')?.addEventListener('click', () => {
      if (typeof window.kkCloudOpenAuth === 'function') window.kkCloudOpenAuth();
      else window.dispatchEvent(new Event('kk:cloud-open-request'));
    });
    document.getElementById('kkAndroidBottomNav')?.addEventListener('click', event => {
      const btn = event.target.closest('.kw-bnav-btn'); if (!btn) return;
      if (btn.dataset.action === 'menu') { setDrawer(!drawerOpen); return; }
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
  function patchSwitch() {
    if (typeof window.switchTab !== 'function' || window.switchTab.__kwWrapped) return;
    originalSwitchTab = window.switchTab;
    const wrapped = function(tab) { const result = originalSwitchTab.apply(this, arguments); setActiveTab(tab); if (isCompact()) setDrawer(false); return result; };
    wrapped.__kwWrapped = true;
    window.switchTab = wrapped;
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', makeShell, { once: true }); else makeShell();
  window.addEventListener('kk:core-ready', makeShell);
})();
