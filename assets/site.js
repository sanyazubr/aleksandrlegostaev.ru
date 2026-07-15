(() => {
  const menu = document.querySelector('.mobile-menu');
  if (!menu) return;
  menu.addEventListener('click', (event) => {
    if (event.target.closest('a[href^="#"]')) menu.removeAttribute('open');
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menu.open) {
      menu.removeAttribute('open');
      menu.querySelector('summary').focus();
    }
  });
})();
