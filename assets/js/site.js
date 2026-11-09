// Theme toggle, footer year and reduced-motion handling shared by every page.
// The initial theme is set by the inline script in each page's <head> to avoid a flash.
(function () {
  const root = document.documentElement;
  const toggle = document.getElementById('theme-toggle');
  const systemDark = window.matchMedia('(prefers-color-scheme: dark)');

  function saved() {
    try { return localStorage.getItem('theme'); } catch (e) { return null; }
  }
  function apply(mode) {
    root.setAttribute('data-theme', mode);
    if (toggle) toggle.setAttribute('aria-pressed', String(mode === 'dark'));
  }

  apply(root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light');

  if (toggle) {
    toggle.addEventListener('click', () => {
      const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      apply(next);
      try { localStorage.setItem('theme', next); } catch (e) {}
    });
  }

  // Follow the OS setting until the visitor picks a theme themselves.
  systemDark.addEventListener('change', e => {
    const s = saved();
    if (s !== 'light' && s !== 'dark') apply(e.matches ? 'dark' : 'light');
  });

  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('video[autoplay]').forEach(v => { v.removeAttribute('autoplay'); v.pause(); });
  }
})();
