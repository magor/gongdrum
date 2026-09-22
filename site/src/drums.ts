import { drumAudio, galleries } from './generated/galleries';
import { type OptimizedImage, renderProgressiveImage } from './images';

export type DrumDef = {
  slug: string;
  name: string;
  meta: string;
  description: string;
};

export type FeaturedDrum = DrumDef & {
  image: OptimizedImage | null;
  imageAlt: string;
  gallery: OptimizedImage[];
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
  'nova-genesis',
  'little-thai',
]);

const drumCatalog: DrumDef[] = [
  {
    slug: 'pentakl',
    name: 'Pentakl',
    meta: 'F2 / A = 432 Hz',
    description:
      'Tento GongDrum v sobě nese záměr ochrany pěti živlů proti černé magii. Má jediný příkaz: <strong>neubližovat</strong>. Pokud by jej někdo chtěl použít k nekalým účelům, nebude mu sloužit. Tento program je do něj vložen natrvalo.<br><br>Ve svém středu si Pentakl vybral tón <strong>F2 v ladění A = 432 Hz</strong>, který se rozeznívá také v cípech <strong>vzduchu a vody</strong>. Cíp <strong>země</strong> nese tón G, <strong>oheň</strong> tón B/H a v horním cípu <strong>ducha</strong> zní A♯ společně s frekvencí <strong>111 Hz</strong>, někdy označovanou jako andělská.<br><br>Každý z pěti cípů má navíc vlastní charakter a rozeznívá jiné alikvoty. Například v cípu země se objevuje <strong>174 Hz</strong>, frekvence řazená k modernímu systému Solfeggio.<br><br><strong>Pět živlů. Pět cípů. Jeden záměr – ochrana.</strong>',
  },
  {
    slug: 'stormy-full-moon',
    name: 'Stormy Full Moon',
    meta: '196 / 121 / 85,7 Hz',
    description:
      'Vznikl během jediné noci při bouřkovém úplňku <strong>29. 7. 2026</strong>. Poté několikrát prošel popouštěním plamenem a postupným dolaďováním, až si našel své frekvence: <strong>196 Hz (G v ladění A = 440 Hz), 121 Hz (B/H v A = 432 Hz) a 85,7 Hz (F v A = 432 Hz).</strong><br><br>Jeho zvuk je hluboký, vrstevnatý a plný vzájemně se prolínajících vibrací. <strong>Stormy Full Moon působí jako vesmírná loď, která vás vezme na cestu kolem Slunce a Měsíce – a možná ještě o kus dál.</strong>',
  },
  {
    slug: 'quasar',
    name: 'Quasar',
    meta: '128,4 Hz / A = 432 Hz',
    description:
      'Naladěný na <strong>128,4 Hz (C v ladění A = 432 Hz)</strong>. Široký, plný zvuk s bohatým spektrem alikvot, které se při rozehrání postupně vynořují, prolínají a zářivě rozpínají do prostoru.<br><br>Stejně jako skutečný kvazar, jehož obrovská energie vychází z oblasti kolem supermasivní černé díry, i tento GongDrum působí, jako by měl svůj <strong>energetický střed</strong>, ze kterého se zvuk šíří do všech směrů. Čím déle hraje, tím více vrstev odhaluje – od hlubokého základního tónu až po jasné, vzdálené alikvoty.',
  },
  {
    slug: 'sexy-om',
    name: 'Sexy Om',
    meta: '69 Hz / Óm 136,1 Hz',
    description:
      'Podmanivý zvuk tohoto GongDrumu si po kvantování sexuální energií vybral frekvenci <strong>69 Hz</strong> s alikvotou na <strong>136,1 Hz</strong>, tedy Óm.',
  },
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
    meta: 'F / A = 432 Hz',
    description:
      'Experimentální GongDrum laděný jako obvykle v osmi směrech. Jeho zvláštnost spočívá v samotném rozložení tónů: <strong>protilehlé strany jsou naladěny podobně, zatímco sousední směry nesou odlišné tóny.</strong><br><br>Při hře na 2 protilehlé strany zároveň se tak pokaždé probouzí trochu jiná alikvota a charakter zvuku se mění podle toho, kudy nástrojem „procházíte“. Nobody díky tomu nabízí široké možnosti rytmické i melodické hry. Jeho základní středový tón je F (ve 432 Hz).<br><br>Je vyroben ze <strong>silnějšího plechu</strong>, takže snese energičtější způsob hraní a dokáže odpovědět výrazným, hutným zvukem.',
  },
  {
    slug: 'om-spiral',
    name: 'Om Spiral',
    meta: '136,1 Hz / Óm',
    description:
      'Zvuky GongDrumů spirály milují. Tento kousek je v základu naladěn na <strong>136,1 Hz (C♯, Óm)</strong> a jeho výrazné alikvoty se pohybují velmi blízko základnímu tónu, kolem <strong>D (144 Hz)</strong> a <strong>D♯ (152,7 Hz)</strong>. Díky tomu se jednotlivé frekvence prolínají a vytvářejí nezvykle živý, široký zvuk.<br><br>Přiznávám, že chvíli trvalo, než jsem si k jeho specifickému charakteru našel cestu. O to víc mě ale dnes baví – stal se jedním z mých nejoblíbenějších malých GongDrumů.',
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
  const image = gallery[0] ?? null;

  return {
    ...drum,
    gallery,
    image,
    imageAlt: `GongDrum ${drum.name}`,
    audio: drumAudio[drum.slug],
    sold: SOLD_DRUM_SLUGS.has(drum.slug),
  };
}

function serializeGallery(images: OptimizedImage[]): string {
  return images
    .map((image) => encodeURIComponent(JSON.stringify(image)))
    .join(',');
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
    ? renderProgressiveImage(drum.image, 'card', drum.imageAlt, {
        className: 'product-image',
        loading: 'lazy',
        decoding: 'async',
      })
    : `<span class="product-image product-image-placeholder" role="img" aria-label="${drum.imageAlt}"></span>`;

  const galleryFallback = drum.image ? encodeURIComponent(JSON.stringify(drum.image)) : '';

  return `
    <article class="product-card${drum.sold ? ' is-sold' : ''}">
      <button
        type="button"
        class="product-image-button${drum.gallery.length ? '' : ' is-disabled'}"
        data-gallery-opener
        data-gallery="${serializeGallery(drum.gallery)}"
        data-gallery-fallback="${galleryFallback}"
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
      <div class="product-description">${drum.description}</div>
      ${renderGongPlayer(drum)}
      <a href="#contact">${ctaLabel}</a>
    </article>
  `;
}
