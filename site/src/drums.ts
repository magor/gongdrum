import { drumAudio, galleries } from './generated/galleries';

export type DrumDef = {
  slug: string;
  name: string;
  meta: string;
  description: string;
};

export type FeaturedDrum = DrumDef & {
  image: string;
  imageAlt: string;
  gallery: string[];
  audio?: string;
  sold?: boolean;
};

/** Add a drum slug here when it sells. Remove to mark available again. */
const SOLD_DRUM_SLUGS = new Set([
  'window-to-the-universe',
  'radegast',
  'insight',
  'lotus-flower',
  'sun',
  'mandala',
  'stand',
  'nova-genesis',
]);

const drumCatalog: DrumDef[] = [
  {
    slug: 'window-to-the-universe',
    name: 'Window to the Universe',
    meta: 'průměr 1000 mm',
    description:
      'Hluboký základ inspirovaný solfeggio frekvencí stability 174 Hz a zářivé alikvoty pro nové začátky.',
  },
  {
    slug: 'radegast',
    name: 'Radegast',
    meta: 'průměr 1000 mm',
    description: 'Temný zvuk hlubokého vesmíru laděný do devíti tónů.',
  },
  {
    slug: 'little-thai',
    name: 'Little Thai',
    meta: 'průměr 480 mm',
    description: 'Hravý, pozitivní nástroj s jasnou odezvou a přátelským charakterem.',
  },
  {
    slug: 'insight',
    name: 'Insight',
    meta: 'průměr 450 mm',
    description: 'Podmanivě drnčivý zvuk vhodný pro soustředěnou osobní praxi.',
  },
  {
    slug: 'lotus-flower',
    name: 'Lotus Flower',
    meta: 'průměr 500 mm',
    description: 'Klidný, meditativní a pročišťující zvuk pro ztišení mysli.',
  },
  {
    slug: 'octopus',
    name: 'Octopus',
    meta: 'průměr 800 mm',
    description: 'Transformační, mocný a hluboký tón F v ladění 432 Hz s bohatými alikvoty.',
  },
  {
    slug: 'sun',
    name: 'Sun',
    meta: 'průměr 700 mm',
    description: 'Živý a svěží zvuk laděný na G# ve 432 Hz, zaměřený na oblast solar plexu.',
  },
  {
    slug: 'tesla',
    name: 'Tesla',
    meta: 'průměr 600 mm',
    description: 'Jemný, elektrizující zvuk, který otevírá a rozšiřuje prostor.',
  },
  {
    slug: 'mandala',
    name: 'Mandala',
    meta: 'rituální gong',
    description:
      'Menší rituální nástroj s jemným, plným a zpřítomňujícím zvukem v ladění 432 Hz.',
  },
  {
    slug: 'nova-genesis',
    name: 'Nova Genesis',
    meta: 'Nova Genesis',
    description:
      'TODO popis',
  },
  {
    slug: 'nobody',
    name: 'Nobody',
    meta: 'Nobody',
    description:
      'TODO popis',
  },
  {
    slug: 'om-spiral',
    name: 'Om Spiral',
    meta: 'Om Spiral',
    description:
      'TODO popis',
  },
  {
    slug: 'stand',
    name: 'Stojan na GongDrum',
    meta: 'nastavitelná výška',
    description: 'Teleskopický, rozložitelný a skladný stojan pro pohodlné hraní i transport.',
  },
];

function enrichDrum(drum: DrumDef): FeaturedDrum {
  const gallery = galleries[drum.slug] ?? [];
  const image = gallery[0] ?? '';

  return {
    ...drum,
    gallery,
    image,
    imageAlt: `GongDrum ${drum.name}`,
    audio: drumAudio[drum.slug],
    sold: SOLD_DRUM_SLUGS.has(drum.slug),
  };
}

export const featuredDrums: FeaturedDrum[] = drumCatalog
  .map(enrichDrum)
  .sort((a, b) => Number(a.sold) - Number(b.sold));

export function renderGongPlayer(drum: FeaturedDrum): string {
  if (!drum.audio) return '';

  return `
    <div class="gong-player" data-gong-player>
      <div class="gong-player-bar">
        <button
          type="button"
          class="gong-player-toggle"
          aria-pressed="false"
          aria-label="Přehrát ukázku: ${drum.name}"
        >
          <span class="gong-player-icon" aria-hidden="true"></span>
        </button>
        <button
          type="button"
          class="gong-player-seek"
          aria-label="Posunout přehrávání ukázky: ${drum.name}"
        >
          <span class="gong-player-label">Poslech ukázky</span>
        </button>
      </div>
      <audio preload="none" src="${drum.audio}"></audio>
    </div>
  `;
}

export function renderProductCard(drum: FeaturedDrum): string {
  const soldLabel = drum.sold ? ' (Prodáno)' : '';
  const ctaLabel = drum.sold ? 'Chci podobný kus' : 'Mám zájem';
  const imageMarkup = drum.image
    ? `<img class="product-image" src="${drum.image}" alt="${drum.imageAlt}" loading="lazy" />`
    : `<span class="product-image product-image-placeholder" role="img" aria-label="${drum.imageAlt}"></span>`;

  return `
    <article class="product-card${drum.sold ? ' is-sold' : ''}">
      <button
        type="button"
        class="product-image-button${drum.gallery.length ? '' : ' is-disabled'}"
        data-gallery-opener
        data-gallery="${drum.gallery.join(',')}"
        data-gallery-fallback="${drum.image}"
        data-gallery-start="0"
        data-gallery-caption="${drum.name}"
        aria-label="Otevřít galerii: ${drum.name}${soldLabel}"
        ${drum.gallery.length ? '' : 'disabled'}
      >
        <span class="product-image-wrap">
          ${imageMarkup}
          ${drum.sold ? '<span class="sold-banner" aria-hidden="true">Prodáno</span>' : ''}
        </span>
      </button>
      <div class="product-meta">${drum.meta}</div>
      <h3>${drum.name}</h3>
      <p>${drum.description}</p>
      ${renderGongPlayer(drum)}
      <a href="#contact">${ctaLabel}</a>
    </article>
  `;
}
