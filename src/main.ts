import './styles.css';
import { initAudioPlayers } from './audio-players';
import { featuredDrums, renderProductCard } from './drums';
import { initNav } from './nav';

const benefits = [
  'Každý kus vzniká ručně v dílně Gong Drum',
  'Spojuje proporce gongu, handpanu a rytmiku šamanského bubnu',
  'Ladění respektuje specifické frekvence, harmonii a živý dozvuk',
];

const workshops = [
  {
    title: 'Workshop hry na GongDrum',
    copy:
      'Vyzkoušej různé GongDrumy, objev jejich zvukové možnosti a zažij, jak rytmus vede k meditaci i transovému naladění.',
  },
  {
    title: 'Workshop výroby GongDrumu',
    copy:
      'Intenzivní pobyt v kovárně, kde pod vedením Vojtěcha vzniká vlastní menší nebo orchestrální GongDrum.',
  },
];

const news = [
  'Meditace s GongDrumy: záměr uzdravení, CVČ Jabloňka v Brně-Medlánkách.',
  'Nové termíny workshopů budou postupně oznámeny na sociálních sítích.',
  'Ve vývoji je GongDrum laděný do devíti solfeggio frekvencí.',
];

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <main class="site-shell">
    <nav class="nav" aria-label="Hlavní navigace">
      <a class="logo" href="#top" aria-label="Gong Drum home">
        <img
          src="./obrazky/logo_upraveno.png"
          alt="Gong Drum"
          class="logo-image"
          width="861"
          height="850"
        />
      </a>
      <button
        class="nav-toggle"
        type="button"
        aria-expanded="false"
        aria-controls="nav-menu"
        aria-label="Otevřít menu"
      >
        <span class="nav-toggle-bar" aria-hidden="true"></span>
        <span class="nav-toggle-bar" aria-hidden="true"></span>
        <span class="nav-toggle-bar" aria-hidden="true"></span>
      </button>
      <div id="nav-menu" class="nav-links">
        <a href="#collection">Galerie</a>
        <a href="#about">O nástroji</a>
        <a href="#workshops">Workshopy</a>
        <a class="nav-cta" href="#contact">Poptávka</a>
      </div>
    </nav>

    <section id="top" class="hero">
      <div class="hero-copy">
        <img
          src="./obrazky/logo_upraveno.png"
          alt="Gong Drum logo"
          class="logo-hero"
          width="861"
          height="850"
        />
        <p class="slogan">Tvoř vesmír!</p>
        <p class="eyebrow">Ručně kované GongDrumy</p>
        <h1>Ručně vyráběné GongDrumy pro hluboký, živý zvuk</h1>
        <p class="hero-text">
          Originální nástroje Vojtěcha Hrubého spojují gong a šamanský buben.
          Každý kus je laděn s respektem k proporcím, harmonii a osobitému příběhu.
        </p>
        <div class="hero-actions">
          <a class="button primary" href="#collection">Prohlédnout galerii</a>
          <a class="button secondary" href="#contact">Chci podobný kus</a>
        </div>
      </div>
      <div class="hero-card" aria-label="Vybraný GongDrum">
        <div class="gong-illustration">
          <span class="gong-ring ring-one"></span>
          <span class="gong-ring ring-two"></span>
          <span class="gong-ring ring-three"></span>
        </div>
        <p>Vyrobeno v dílně Gong Drum</p>
        <strong>Nástroj pro meditaci, rituál i společné hraní</strong>
      </div>
    </section>

    <section id="collection" class="section">
      <div class="section-heading">
        <p class="eyebrow">Galerie GongDrumů</p>
        <h2>Každý nástroj má vlastní hlas.</h2>
        <p>
          Ukázkový výběr nástrojů přibližuje velikosti, ladění a nálady GongDrumů.
          U každého kusu si můžeš poslechnout krátkou audio ukázku.
        </p>
      </div>
      <div class="product-grid">
        ${featuredDrums.map((drum) => renderProductCard(drum)).join('')}
      </div>
    </section>

    <section id="about" class="about section">
      <div class="section-heading">
        <p class="eyebrow">O GongDrumu</p>
        <h2>Hudební i spirituální nástroj pro cestu do nitra.</h2>
      </div>
      <div class="about-copy">
        <p>
          GongDrum propojuje elementy gongu a šamanského bubnu. Vzniká ručně, s důrazem
          na ladění bossů do specifických frekvencí, jejich vzájemnou harmonii a dlouhý
          organický dozvuk.
        </p>
        <p>
          Hra je především rytmická. Pravidelný puls může hráče i posluchače přivést
          do změněného, transového stavu, ve kterém se zvuk stává oporou pro meditaci,
          osobní praxi i společný rituál.
        </p>
      </div>
    </section>

    <section id="experience" class="experience">
      <div>
        <p class="eyebrow">Proč GongDrum</p>
        <h2>Živá kovová rezonance s tělem bubnu.</h2>
      </div>
      <ul>
        ${benefits.map((benefit) => `<li>${benefit}</li>`).join('')}
      </ul>
    </section>

    <section id="workshops" class="section">
      <div class="section-heading">
        <p class="eyebrow">Workshopy v dílně</p>
        <h2>Vyzkoušej hru, nebo si vytvoř vlastní nástroj.</h2>
      </div>
      <div class="workshop-grid">
        ${workshops
          .map(
            (workshop) => `
              <article class="workshop-card">
                <h3>${workshop.title}</h3>
                <p>${workshop.copy}</p>
              </article>
            `,
          )
          .join('')}
      </div>
      <div class="pricing-strip">
        <span>2 dny v kovárně: GongDrum 50 cm / 6 900 Kč</span>
        <span>4 dny v kovárně: GongDrum 60-70 cm / 10 900 Kč</span>
      </div>
    </section>

    <section class="news section">
      <div class="section-heading">
        <p class="eyebrow">Aktuality & festivaly</p>
        <h2>Krátké zprávy z dílny.</h2>
      </div>
      <ul>
        ${news.map((item) => `<li>${item}</li>`).join('')}
      </ul>
    </section>

    <section id="contact" class="contact">
      <p class="eyebrow">Nezávazná poptávka</p>
      <h2>Máš zájem o GongDrum nebo workshop?</h2>
      <p>
        Napiš, jaký zvuk hledáš, jestli tě zajímá hotový nástroj, podobný kus na míru,
        nebo nejbližší termín workshopu.
      </p>
      <a class="button primary" href="mailto:hello@example.com?subject=GongDrum%20poptavka">
        Odeslat poptávku
      </a>
    </section>
  </main>
`;

initNav();
initAudioPlayers();
