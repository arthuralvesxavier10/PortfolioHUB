(function () {
  // Atualiza o ano do rodapé (se existir)
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const body = document.body;
  const btn = document.getElementById('modeToggle');

  // Restaura a preferência salva
  const saved = localStorage.getItem('theme');
  if (saved === 'light') body.classList.add('light');

  function setIcon() {
    if (!btn) return;
    btn.textContent = body.classList.contains('light') ? '☀️' : '🌙';
  }
  setIcon();

  // Toggle do tema
  if (btn) {
    btn.addEventListener('click', () => {
      body.classList.toggle('light');
      const theme = body.classList.contains('light') ? 'light' : 'dark';
      localStorage.setItem('theme', theme);
      setIcon();
    });
  }
})();
