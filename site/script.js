document.getElementById('year').textContent = new Date().getFullYear();
const toggle = document.getElementById('themeToggle');
if (toggle) {
  toggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('light');
  });
}
