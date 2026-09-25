import { sharedImages } from './generated/galleries';
import { type OptimizedImage, renderProgressiveImage } from './images';

export type PartnerDef = {
  name: string;
  url: string;
  image: OptimizedImage;
};

const partnerCatalog: Array<{ name: string; url: string; imageKey: keyof typeof sharedImages }> = [
  {
    name: 'Terapeutovna',
    url: 'https://www.facebook.com/p/Terapeutovna-33-61574175647950/',
    imageKey: 'partner_terapeutovna',
  },
];

export const partners: PartnerDef[] = partnerCatalog.map((entry) => ({
  name: entry.name,
  url: entry.url,
  image: sharedImages[entry.imageKey],
}));

function renderPartnerLogo(partner: PartnerDef): string {
  return renderProgressiveImage(partner.image, 'card', `Logo ${partner.name}`, {
    className: 'partner-logo',
    loading: 'lazy',
    decoding: 'async',
    width: partner.image.width,
    height: partner.image.height,
  });
}

export function renderPartnersSection(): string {
  if (partners.length === 0) {
    return '';
  }

  const items = partners
    .map(
      (partner) => `
        <li>
          <a
            class="partner-card"
            href="${partner.url}"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="${partner.name} – otevřít web partnera"
          >
            ${renderPartnerLogo(partner)}
          </a>
        </li>
      `,
    )
    .join('');

  return `
    <section id="partners" class="partners section" aria-labelledby="partners-heading">
      <div class="section-heading">
        <p class="eyebrow">Místní podnikatelé</p>
        <h2 id="partners-heading">Partneři a přátelé GongDrumu</h2>
        <p>
          Podporujeme malé místní podniky, které sdílejí podobné hodnoty. Kliknutím na logo
          přejdeš na stránky partnera.
        </p>
      </div>
      <ul class="partners-grid">
        ${items}
      </ul>
    </section>
  `;
}
