export function initNav(): void {
  const nav = document.querySelector<HTMLElement>('.nav');
  const toggle = document.querySelector<HTMLButtonElement>('.nav-toggle');
  const menu = document.querySelector<HTMLElement>('#nav-menu');

  if (!nav || !toggle || !menu) {
    return;
  }

  const close = (): void => {
    nav.classList.remove('nav--open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Otevřít menu');
  };

  const open = (): void => {
    nav.classList.add('nav--open');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Zavřít menu');
  };

  toggle.addEventListener('click', () => {
    if (nav.classList.contains('nav--open')) {
      close();
    } else {
      open();
    }
  });

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', close);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      close();
    }
  });
}
