export const ASSET_BASE = 'https://hrubyvojtech.cz';

export type FeaturedDrum = {
  slug: string;
  name: string;
  meta: string;
  description: string;
  image: string;
  imageAlt: string;
  gallery: string[];
  audio?: string;
};

function galleryPaths(...paths: string[]): string[] {
  return paths.map((path) => `${ASSET_BASE}/${path}`);
}

export const featuredDrums: FeaturedDrum[] = [
  {
    slug: 'window-to-the-universe',
    name: 'Window to the Universe',
    meta: 'průměr 1000 mm',
    description:
      'Hluboký základ inspirovaný solfeggio frekvencí stability 174 Hz a zářivé alikvoty pro nové začátky.',
    image: `${ASSET_BASE}/obrazky/Window_to_the_Universe/img_5357-2_optimized.jpg`,
    imageAlt: 'GongDrum Window to the Universe',
    gallery: galleryPaths(
      'obrazky/Window_to_the_Universe/img_5347-2_optimized.jpg',
      'obrazky/Window_to_the_Universe/img_5356-2_optimized.jpg',
      'obrazky/Window_to_the_Universe/img_5357-2_optimized.jpg',
      'obrazky/Window_to_the_Universe/img_5358-2_optimized.jpg',
      'obrazky/Window_to_the_Universe/img_5359-2_optimized.jpg',
      'obrazky/Window_to_the_Universe/img_5360-2_optimized.jpg',
      'obrazky/Window_to_the_Universe/img_5362-2_optimized.jpg',
    ),
    audio: `${ASSET_BASE}/audio/window_to_the_universe.mp3`,
  },
  {
    slug: 'radegast',
    name: 'Radegast',
    meta: 'průměr 1000 mm',
    description: 'Temný zvuk hlubokého vesmíru laděný do devíti tónů.',
    image: `${ASSET_BASE}/obrazky/Radegast/IMG_3054.JPG`,
    imageAlt: 'GongDrum Radegast',
    gallery: galleryPaths(
      'obrazky/Radegast/IMG_3060.JPG',
      'obrazky/Radegast/IMG_3059.JPG',
      'obrazky/Radegast/IMG_3054.JPG',
      'obrazky/Radegast/IMG_3052.JPG',
      'obrazky/Radegast/IMG_3050.JPG',
      'obrazky/Radegast/IMG_3049.JPG',
    ),
    audio: `${ASSET_BASE}/audio/Radegast.mp3`,
  },
  {
    slug: 'little-thai',
    name: 'Little Thai',
    meta: 'průměr 480 mm',
    description: 'Hravý, pozitivní nástroj s jasnou odezvou a přátelským charakterem.',
    image: `${ASSET_BASE}/obrazky/Little_Thai/IMG_3982.JPG`,
    imageAlt: 'GongDrum Little Thai',
    gallery: galleryPaths(
      'obrazky/Little_Thai/IMG_3982.JPG',
      'obrazky/Little_Thai/IMG_3974.JPG',
      'obrazky/Little_Thai/IMG_3981.JPG',
      'obrazky/Little_Thai/IMG_3986.JPG',
      'obrazky/Little_Thai/IMG_3992.JPG',
      'obrazky/Little_Thai/IMG_3969.JPG',
    ),
    audio: `${ASSET_BASE}/audio/Little_Thai.mp3`,
  },
  {
    slug: 'insight',
    name: 'Insight',
    meta: 'průměr 450 mm',
    description: 'Podmanivě drnčivý zvuk vhodný pro soustředěnou osobní praxi.',
    image: `${ASSET_BASE}/obrazky/Insight/IMG_3882.JPG`,
    imageAlt: 'GongDrum Insight',
    gallery: galleryPaths(
      'obrazky/Insight/IMG_3882.JPG',
      'obrazky/Insight/IMG_3883.JPG',
      'obrazky/Insight/IMG_3884.JPG',
      'obrazky/Insight/IMG_3893.JPG',
      'obrazky/Insight/IMG_3894.JPG',
      'obrazky/Insight/IMG_3910.JPG',
      'obrazky/Insight/IMG_3921.JPG',
    ),
    audio: `${ASSET_BASE}/audio/Insight.mp3`,
  },
  {
    slug: 'lotus-flower',
    name: 'Lotus Flower',
    meta: 'průměr 500 mm',
    description: 'Klidný, meditativní a pročišťující zvuk pro ztišení mysli.',
    image: `${ASSET_BASE}/obrazky/Lotus_flower/IMG_4007.JPG`,
    imageAlt: 'GongDrum Lotus Flower',
    gallery: galleryPaths(
      'obrazky/Lotus_flower/IMG_4007.JPG',
      'obrazky/Lotus_flower/IMG_4010.JPG',
      'obrazky/Lotus_flower/IMG_4012.JPG',
      'obrazky/Lotus_flower/IMG_4014.JPG',
      'obrazky/Lotus_flower/IMG_4025.JPG',
      'obrazky/Lotus_flower/IMG_4037.JPG',
      'obrazky/Lotus_flower/IMG_4043.JPG',
    ),
    audio: `${ASSET_BASE}/audio/Lotus_flower.mp3`,
  },
  {
    slug: 'octopus',
    name: 'Octopus',
    meta: 'průměr 800 mm',
    description: 'Transformační, mocný a hluboký tón F v ladění 432 Hz s bohatými alikvoty.',
    image: `${ASSET_BASE}/obrazky/Octopus/IMG_4983.JPG`,
    imageAlt: 'GongDrum Octopus',
    gallery: galleryPaths(
      'obrazky/Octopus/IMG_4983.JPG',
      'obrazky/Octopus/IMG_4986.JPG',
      'obrazky/Octopus/IMG_4987.JPG',
      'obrazky/Octopus/IMG_4993.JPG',
      'obrazky/Octopus/IMG_4996.JPG',
      'obrazky/Octopus/IMG_4997.JPG',
      'obrazky/Octopus/IMG_4998.JPG',
      'obrazky/Octopus/IMG_5006.JPG',
    ),
    audio: `${ASSET_BASE}/audio/Octopus_long.mp3`,
  },
  {
    slug: 'sun',
    name: 'Sun',
    meta: 'průměr 700 mm',
    description: 'Živý a svěží zvuk laděný na G# ve 432 Hz, zaměřený na oblast solar plexu.',
    image: `${ASSET_BASE}/obrazky/Sun/IMG_5012.JPG`,
    imageAlt: 'GongDrum Sun',
    gallery: galleryPaths(
      'obrazky/Sun/IMG_5012.JPG',
      'obrazky/Sun/IMG_5014.JPG',
      'obrazky/Sun/IMG_5015.JPG',
      'obrazky/Sun/IMG_5018.JPG',
      'obrazky/Sun/IMG_5019.JPG',
      'obrazky/Sun/IMG_5020.JPG',
      'obrazky/Sun/IMG_5022.JPG',
      'obrazky/Sun/IMG_5024.JPG',
    ),
    audio: `${ASSET_BASE}/audio/Sun.mp3`,
  },
  {
    slug: 'tesla',
    name: 'Tesla',
    meta: 'průměr 600 mm',
    description: 'Jemný, elektrizující zvuk, který otevírá a rozšiřuje prostor.',
    image: `${ASSET_BASE}/obrazky/Tesla/IMG_5030.JPG`,
    imageAlt: 'GongDrum Tesla',
    gallery: galleryPaths(
      'obrazky/Tesla/IMG_5030.JPG',
      'obrazky/Tesla/IMG_5031.JPG',
      'obrazky/Tesla/IMG_5034.JPG',
      'obrazky/Tesla/IMG_5037.JPG',
      'obrazky/Tesla/IMG_5047.JPG',
      'obrazky/Tesla/IMG_5049.JPG',
      'obrazky/Tesla/IMG_5050.JPG',
    ),
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
    gallery: galleryPaths(
      'obrazky/Mandala/img_3853_optimized.jpg',
      'obrazky/Mandala/img_3859_optimized.jpg',
      'obrazky/Mandala/img_3867_optimized.jpg',
      'obrazky/Mandala/img_3869_optimized.jpg',
      'obrazky/Mandala/img_3871_optimized.jpg',
      'obrazky/Mandala/img_3936_optimized.jpg',
      'obrazky/Mandala/img_3939_optimized.jpg',
    ),
    audio: `${ASSET_BASE}/audio/Mandala.mp3`,
  },
  {
    slug: 'stand',
    name: 'Stojan na GongDrum',
    meta: 'nastavitelná výška',
    description: 'Teleskopický, rozložitelný a skladný stojan pro pohodlné hraní i transport.',
    image: `${ASSET_BASE}/obrazky/Stojan/img_5053_optimized.jpg`,
    imageAlt: 'Stojan na GongDrum',
    gallery: galleryPaths(
      'obrazky/Stojan/img_5053_optimized.jpg',
      'obrazky/Stojan/img_5054_optimized.jpg',
      'obrazky/Stojan/img_5055_optimized.jpg',
      'obrazky/Stojan/img_5056_optimized.jpg',
      'obrazky/Stojan/img_5057_optimized.jpg',
    ),
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
  const galleryStart = drum.gallery.indexOf(drum.image);
  const startIndex = galleryStart >= 0 ? galleryStart : 0;

  return `
    <article class="product-card">
      <button
        type="button"
        class="product-image-button"
        data-gallery-opener
        data-gallery="${drum.gallery.join(',')}"
        data-gallery-fallback="${drum.image}"
        data-gallery-start="${startIndex}"
        data-gallery-caption="${drum.name}"
        aria-label="Otevřít galerii: ${drum.name}"
      >
        <img class="product-image" src="${drum.image}" alt="${drum.imageAlt}" loading="lazy" />
      </button>
      <div class="product-meta">${drum.meta}</div>
      <h3>${drum.name}</h3>
      <p>${drum.description}</p>
      ${renderGongPlayer(drum)}
      <a href="#contact">Mám zájem</a>
    </article>
  `;
}
