(() => {
  const root = document.documentElement;
  const system = matchMedia('(prefers-color-scheme: dark)');
  let preference = 'system';
  try {
    const saved = JSON.parse(localStorage.getItem('portfolio-theme') || 'null');
    if (saved && saved.expires > Date.now() && ['light', 'dark'].includes(saved.value)) preference = saved.value;
    else localStorage.removeItem('portfolio-theme');
  } catch { /* Browsing remains available with blocked storage. */ }
  function apply() {
    const dark = preference === 'dark' || (preference === 'system' && system.matches);
    root.dataset.theme = dark ? 'dark' : 'light';
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = dark ? '#18201e' : '#f5f6f4';
  }
  apply();
  system.addEventListener('change', apply);
  document.addEventListener('DOMContentLoaded', () => {
    const select = document.getElementById('theme-select');
    if (!select) return;
    select.value = preference;
    select.addEventListener('change', () => {
      preference = select.value;
      try {
        if (preference === 'system') localStorage.removeItem('portfolio-theme');
        else localStorage.setItem('portfolio-theme', JSON.stringify({ value: preference, expires: Date.now() + 180 * 86400000 }));
      } catch { /* Preference still works for this page. */ }
      apply();
    });
  });
})();
