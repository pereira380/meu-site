// Ano atual no rodapé
document.getElementById('ano-atual').textContent = new Date().getFullYear();

// Anima um "pulso" percorrendo os traços do circuito no hero,
// dando um único momento de destaque em vez de animações espalhadas
const traces = document.querySelectorAll('.traces path');
if (traces.length && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const randomPath = traces[Math.floor(Math.random() * traces.length)];
  randomPath.classList.add('pulse-path');
}

// Header muda de aparência sutilmente ao rolar a página
const header = document.querySelector('.site-header');
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const current = window.scrollY;
  header.style.borderBottomColor = current > 8 ? 'var(--line)' : 'transparent';
  lastScroll = current;
}, { passive: true });

// Fecha suavemente para links internos (fallback para navegadores sem scroll-behavior)
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    const targetId = link.getAttribute('href');
    if (targetId.length > 1) {
      const target = document.querySelector(targetId);
      if (target) {
        event.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  });
});
