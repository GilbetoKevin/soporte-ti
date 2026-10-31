(function () {
  var sunIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>';
  var moonIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z"/></svg>';
  var themeBtn = document.getElementById('theme-toggle');
  if (!themeBtn) return;

  function systemPrefersDark() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  function paintToggle(theme) {
    var isDark = theme === 'dark' || (!theme && systemPrefersDark());
    themeBtn.innerHTML = isDark ? moonIcon : sunIcon;
  }
  function getStoredTheme() {
    try { return localStorage.getItem('kb-theme'); } catch (e) { return null; }
  }

  var stored = getStoredTheme();
  if (stored === 'light' || stored === 'dark') {
    document.documentElement.setAttribute('data-theme', stored);
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
  }
  paintToggle(stored === 'dark' ? 'dark' : 'light');

  themeBtn.addEventListener('click', function () {
    var current = document.documentElement.getAttribute('data-theme');
    if (!current) current = systemPrefersDark() ? 'dark' : 'light';
    var next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try { localStorage.setItem('kb-theme', next); } catch (e) {}
    paintToggle(next);
  });
})();
