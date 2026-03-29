document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.getElementById('navToggle');
  const nav = document.querySelector('.nav');

  navToggle?.addEventListener('click', () => {
    if (!nav) return;
    const shown = getComputedStyle(nav).display !== 'none';
    nav.style.display = shown ? 'none' : 'flex';
    nav.style.flexDirection = 'column';
    nav.style.gap = '12px';
    nav.style.marginTop = '12px';
  });

  // subtle entrance animation
  const cards = document.querySelectorAll('.card');
  cards.forEach((c,i) => {
    c.style.opacity = 0;
    c.style.transform = 'translateY(10px)';
    setTimeout(()=> {
      c.style.transition = 'all 420ms cubic-bezier(.2,.9,.2,1)';
      c.style.opacity = 1;
      c.style.transform = 'translateY(0)';
    }, 120 + i*80);
  });
});