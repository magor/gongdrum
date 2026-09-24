import { sharedImages } from './generated/galleries';
import { renderProgressiveImage } from './images';

export type PartnerDef = {
  name: string;
  href: string;
  /** Key in `sharedImages` (basename under `site/public/obrazky/`). */
  logoKey: keyof typeof sharedImages;
  logoWidth: number;
  logoHeight: number;
};

export const partnerCatalog: PartnerDef[] = [
  {
    name: 'Terapeutovna',
    href: 'https://www.facebook.com/p/Terapeutovna-33-61574175647950/',
    logoKey: 'partner_terapeutovna',
    logoWidth: 800,
    logoHeight: 507,
  },
];

export function renderPartnersSection(): string {
  if (partnerCatalog.length === 0) return '';

  const items = partnerCatalog
    .map((partner) => {
      const logo = sharedImages[partner.logoKey];
      const logoMarkup = renderProgressiveImage(logo, 'card', `${partner.name} – logo`, {
        className: 'partner-logo',
        loading: 'lazy',
        decoding: 'async',
        width: partner.logoWidth,
        height: partner.logoHeight,
      });

      return `
        <li>
          <a
            class="partner-card"
            href="${partner.href}"
            target="_blank"
            rel="noopener noreferrer"
          >
            ${logoMarkup}
            <span class="partner-name">${partner.name}</span>
          </a>
        </li>
      `;
    })
    .join('');

  return `
    <section id="partners" class="partners section" aria-labelledby="partners-heading">
      <div class="section-heading">
        <p class="eyebrow">Podporujeme</p>
        <h2 id="partners-heading">Místní podnikatelé &amp; terapeuti</h2>
        <p>
          Gong Drum podporuje malé podniky a terapeuty v okolí. Níže najdete partnery,
          které rádi doporučujeme — kliknutím přejdete na jejich stránky.
        </p>
      </div>
      <ul class="partner-grid">
        ${items}
      </ul>
    </section>
  `;
}
