export function renderGalleryLightbox(): string {
  return `
    <div
      id="gdLightbox"
      class="gd-lightbox"
      aria-hidden="true"
      role="dialog"
      aria-modal="true"
      aria-label="Prohlížeč fotek"
    >
      <div class="gd-backdrop" data-close></div>
      <div class="gd-frame" role="document">
        <button class="gd-close" type="button" aria-label="Zavřít" data-close>✕</button>
        <button class="gd-nav gd-prev" type="button" aria-label="Předchozí snímek">‹</button>
        <figure class="gd-stage">
          <img id="gdSlide" alt="" />
          <figcaption id="gdCaption"></figcaption>
        </figure>
        <button class="gd-nav gd-next" type="button" aria-label="Další snímek">›</button>
        <div class="gd-counter" id="gdCounter">1/1</div>
      </div>
    </div>
  `;
}

export function initGallery(): void {
  const lightbox = document.getElementById('gdLightbox');
  const slideEl = document.getElementById('gdSlide') as HTMLImageElement | null;
  const captionEl = document.getElementById('gdCaption');
  const counterEl = document.getElementById('gdCounter');
  const btnPrev = lightbox?.querySelector<HTMLButtonElement>('.gd-prev');
  const btnNext = lightbox?.querySelector<HTMLButtonElement>('.gd-next');

  if (!lightbox || !slideEl || !captionEl || !counterEl || !btnPrev || !btnNext) {
    return;
  }

  let gallery: string[] = [];
  let index = 0;
  let lastFocus: HTMLElement | null = null;
  let touchX: number | null = null;

  const setCounter = (): void => {
    counterEl.textContent = `${index + 1}/${gallery.length || 1}`;
  };

  const preloadNeighbors = (): void => {
    [index - 1, index + 1].forEach((n) => {
      const j = (n + gallery.length) % gallery.length;
      const img = new Image();
      img.src = gallery[j];
    });
  };

  const show = (nextIndex: number): void => {
    if (!gallery.length) return;

    index = (nextIndex + gallery.length) % gallery.length;
    slideEl.src = gallery[index];
    slideEl.alt = captionEl.textContent || '';
    setCounter();
    preloadNeighbors();
  };

  const close = (): void => {
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    slideEl.removeAttribute('src');
    gallery = [];
    lastFocus?.focus();
  };

  const open = (images: string[], startIndex: number, caption: string): void => {
    if (!images.length) return;

    lastFocus = document.activeElement as HTMLElement | null;
    gallery = images;
    captionEl.textContent = caption;
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    show(startIndex);
    btnNext.focus();
  };

  btnPrev.addEventListener('click', () => show(index - 1));
  btnNext.addEventListener('click', () => show(index + 1));

  lightbox.querySelectorAll('[data-close]').forEach((element) => {
    element.addEventListener('click', close);
  });

  document.addEventListener('keydown', (event) => {
    if (!lightbox.classList.contains('open')) return;

    if (event.key === 'Escape') close();
    if (event.key === 'ArrowLeft') show(index - 1);
    if (event.key === 'ArrowRight') show(index + 1);
  });

  slideEl.addEventListener(
    'touchstart',
    (event) => {
      touchX = event.changedTouches[0].clientX;
    },
    { passive: true },
  );

  slideEl.addEventListener(
    'touchend',
    (event) => {
      if (touchX === null) return;

      const deltaX = event.changedTouches[0].clientX - touchX;
      if (Math.abs(deltaX) > 40) {
        show(deltaX > 0 ? index - 1 : index + 1);
      }
      touchX = null;
    },
    { passive: true },
  );

  document.querySelectorAll<HTMLElement>('[data-gallery-opener]').forEach((opener) => {
    opener.addEventListener('click', () => {
      const images = (opener.getAttribute('data-gallery') || '')
        .split(',')
        .map((item) => item.trim())
        .filter(Boolean);
      const fallback = opener.getAttribute('data-gallery-fallback');
      const resolved = images.length ? images : fallback ? [fallback] : [];
      const startIndex = Number.parseInt(opener.getAttribute('data-gallery-start') || '0', 10);
      const caption = opener.getAttribute('data-gallery-caption') || '';

      open(resolved, Number.isNaN(startIndex) ? 0 : startIndex, caption);
    });
  });
}
