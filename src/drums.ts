export const ASSET_BASE = 'https://hrubyvojtech.cz';

export type FeaturedDrum = {
  slug: string;
  name: string;
  meta: string;
  description: string;
  image: string;
  imageAlt: string;
  audio?: string;
};

export const featuredDrums: FeaturedDrum[] = [
  {
    slug: 'window-to-the-universe',
    name: 'Window to the Universe',
    meta: 'průměr 1000 mm',
    description:
      'Hluboký základ inspirovaný solfeggio frekvencí stability 174 Hz a zářivé alikvoty pro nové začátky.',
    image: `${ASSET_BASE}/obrazky/Window_to_the_Universe/img_5357-2_optimized.jpg`,
    imageAlt: 'GongDrum Window to the Universe',
    audio: `${ASSET_BASE}/audio/window_to_the_universe.mp3`,
  },
  {
    slug: 'radegast',
    name: 'Radegast',
    meta: 'průměr 1000 mm',
    description: 'Temný zvuk hlubokého vesmíru laděný do devíti tónů.',
    image: `${ASSET_BASE}/obrazky/Radegast/IMG_3054.JPG`,
    imageAlt: 'GongDrum Radegast',
    audio: `${ASSET_BASE}/audio/Radegast.mp3`,
  },
  {
    slug: 'little-thai',
    name: 'Little Thai',
    meta: 'průměr 480 mm',
    description: 'Hravý, pozitivní nástroj s jasnou odezvou a přátelským charakterem.',
    image: `${ASSET_BASE}/obrazky/Little_Thai/IMG_3982.JPG`,
    imageAlt: 'GongDrum Little Thai',
    audio: `${ASSET_BASE}/audio/Little_Thai.mp3`,
  },
  {
    slug: 'insight',
    name: 'Insight',
    meta: 'průměr 450 mm',
    description: 'Podmanivě drnčivý zvuk vhodný pro soustředěnou osobní praxi.',
    image: `${ASSET_BASE}/obrazky/Insight/IMG_3882.JPG`,
    imageAlt: 'GongDrum Insight',
    audio: `${ASSET_BASE}/audio/Insight.mp3`,
  },
  {
    slug: 'lotus-flower',
    name: 'Lotus Flower',
    meta: 'průměr 500 mm',
    description: 'Klidný, meditativní a pročišťující zvuk pro ztišení mysli.',
    image: `${ASSET_BASE}/obrazky/Lotus_flower/IMG_4007.JPG`,
    imageAlt: 'GongDrum Lotus Flower',
    audio: `${ASSET_BASE}/audio/Lotus_flower.mp3`,
  },
  {
    slug: 'octopus',
    name: 'Octopus',
    meta: 'průměr 800 mm',
    description: 'Transformační, mocný a hluboký tón F v ladění 432 Hz s bohatými alikvoty.',
    image: `${ASSET_BASE}/obrazky/Octopus/IMG_4983.JPG`,
    imageAlt: 'GongDrum Octopus',
    audio: `${ASSET_BASE}/audio/Octopus_long.mp3`,
  },
  {
    slug: 'sun',
    name: 'Sun',
    meta: 'průměr 700 mm',
    description: 'Živý a svěží zvuk laděný na G# ve 432 Hz, zaměřený na oblast solar plexu.',
    image: `${ASSET_BASE}/obrazky/Sun/IMG_5012.JPG`,
    imageAlt: 'GongDrum Sun',
    audio: `${ASSET_BASE}/audio/Sun.mp3`,
  },
  {
    slug: 'tesla',
    name: 'Tesla',
    meta: 'průměr 600 mm',
    description: 'Jemný, elektrizující zvuk, který otevírá a rozšiřuje prostor.',
    image: `${ASSET_BASE}/obrazky/Tesla/IMG_5030.JPG`,
    imageAlt: 'GongDrum Tesla',
    audio: `${ASSET_BASE}/audio/Tesla.mp3`,
  },
  {
    slug: 'mandala',
    name: 'Mandala',
    meta: 'rituální gong',
    description:
      'Menší rituální nástroj s jemným, plným a zpřítomňujícím zvukem v ladění 432 Hz.',
    image: `${ASSET_BASE}/obrazky/Mandala/img_3939_optimized.jpg`,
    imageAlt: 'GongDrum Mandala',
    audio: `${ASSET_BASE}/audio/Mandala.mp3`,
  },
  {
    slug: 'stand',
    name: 'Stojan na GongDrum',
    meta: 'nastavitelná výška',
    description: 'Teleskopický, rozložitelný a skladný stojan pro pohodlné hraní i transport.',
    image: `${ASSET_BASE}/obrazky/Stojan/img_5053_optimized.jpg`,
    imageAlt: 'Stojan na GongDrum',
  },
];

export function renderGongPlayer(drum: FeaturedDrum): string {
  if (!drum.audio) return '';

  return `
    <div class="gong-player" data-gong-player>
      <button
        type="button"
        class="gong-player-button"
        aria-pressed="false"
        aria-label="Přehrát ukázku: ${drum.name}"
      >
        <span class="gong-player-icon" aria-hidden="true"></span>
        <span class="gong-player-label">Poslech ukázky</span>
      </button>
      <audio preload="none" src="${drum.audio}"></audio>
    </div>
  `;
}

export function renderProductCard(drum: FeaturedDrum): string {
  return `
    <article class="product-card">
      <img class="product-image" src="${drum.image}" alt="${drum.imageAlt}" loading="lazy" />
      <div class="product-meta">${drum.meta}</div>
      <h3>${drum.name}</h3>
      <p>${drum.description}</p>
      ${renderGongPlayer(drum)}
      <a href="#contact">Mám zájem</a>
    </article>
  `;
}
