(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(){let e=Array.from(document.querySelectorAll(`[data-gong-player]`));function t(e,t){let n=e.querySelector(`.gong-player-button`);n&&(n.setAttribute(`aria-pressed`,t?`true`:`false`),e.classList.toggle(`is-playing`,t))}function n(n){e.forEach(e=>{if(e===n)return;let r=e.querySelector(`audio`);!r||r.paused||(r.pause(),t(e,!1))})}e.forEach(e=>{let r=e.querySelector(`.gong-player-button`),i=e.querySelector(`audio`);!r||!i||(r.addEventListener(`click`,async()=>{if(i.paused){n(e);try{await i.play(),t(e,!0)}catch{t(e,!1)}return}i.pause(),t(e,!1)}),i.addEventListener(`ended`,()=>t(e,!1)),i.addEventListener(`pause`,()=>t(e,!1)))})}var t=`https://hrubyvojtech.cz`,n=[{slug:`window-to-the-universe`,name:`Window to the Universe`,meta:`průměr 1000 mm`,description:`Hluboký základ inspirovaný solfeggio frekvencí stability 174 Hz a zářivé alikvoty pro nové začátky.`,image:`${t}/obrazky/Window_to_the_Universe/img_5357-2_optimized.jpg`,imageAlt:`GongDrum Window to the Universe`,audio:`${t}/audio/window_to_the_universe.mp3`},{slug:`radegast`,name:`Radegast`,meta:`průměr 1000 mm`,description:`Temný zvuk hlubokého vesmíru laděný do devíti tónů.`,image:`${t}/obrazky/Radegast/IMG_3054.JPG`,imageAlt:`GongDrum Radegast`,audio:`${t}/audio/Radegast.mp3`},{slug:`little-thai`,name:`Little Thai`,meta:`průměr 480 mm`,description:`Hravý, pozitivní nástroj s jasnou odezvou a přátelským charakterem.`,image:`${t}/obrazky/Little_Thai/IMG_3982.JPG`,imageAlt:`GongDrum Little Thai`,audio:`${t}/audio/Little_Thai.mp3`},{slug:`insight`,name:`Insight`,meta:`průměr 450 mm`,description:`Podmanivě drnčivý zvuk vhodný pro soustředěnou osobní praxi.`,image:`${t}/obrazky/Insight/IMG_3882.JPG`,imageAlt:`GongDrum Insight`,audio:`${t}/audio/Insight.mp3`},{slug:`lotus-flower`,name:`Lotus Flower`,meta:`průměr 500 mm`,description:`Klidný, meditativní a pročišťující zvuk pro ztišení mysli.`,image:`${t}/obrazky/Lotus_flower/IMG_4007.JPG`,imageAlt:`GongDrum Lotus Flower`,audio:`${t}/audio/Lotus_flower.mp3`},{slug:`octopus`,name:`Octopus`,meta:`průměr 800 mm`,description:`Transformační, mocný a hluboký tón F v ladění 432 Hz s bohatými alikvoty.`,image:`${t}/obrazky/Octopus/IMG_4983.JPG`,imageAlt:`GongDrum Octopus`,audio:`${t}/audio/Octopus_long.mp3`},{slug:`sun`,name:`Sun`,meta:`průměr 700 mm`,description:`Živý a svěží zvuk laděný na G# ve 432 Hz, zaměřený na oblast solar plexu.`,image:`${t}/obrazky/Sun/IMG_5012.JPG`,imageAlt:`GongDrum Sun`,audio:`${t}/audio/Sun.mp3`},{slug:`tesla`,name:`Tesla`,meta:`průměr 600 mm`,description:`Jemný, elektrizující zvuk, který otevírá a rozšiřuje prostor.`,image:`${t}/obrazky/Tesla/IMG_5030.JPG`,imageAlt:`GongDrum Tesla`,audio:`${t}/audio/Tesla.mp3`},{slug:`mandala`,name:`Mandala`,meta:`rituální gong`,description:`Menší rituální nástroj s jemným, plným a zpřítomňujícím zvukem v ladění 432 Hz.`,image:`${t}/obrazky/Mandala/img_3939_optimized.jpg`,imageAlt:`GongDrum Mandala`,audio:`${t}/audio/Mandala.mp3`},{slug:`stand`,name:`Stojan na GongDrum`,meta:`nastavitelná výška`,description:`Teleskopický, rozložitelný a skladný stojan pro pohodlné hraní i transport.`,image:`${t}/obrazky/Stojan/img_5053_optimized.jpg`,imageAlt:`Stojan na GongDrum`}];function r(e){return e.audio?`
    <div class="gong-player" data-gong-player>
      <button
        type="button"
        class="gong-player-button"
        aria-pressed="false"
        aria-label="Přehrát ukázku: ${e.name}"
      >
        <span class="gong-player-icon" aria-hidden="true"></span>
        <span class="gong-player-label">Poslech ukázky</span>
      </button>
      <audio preload="none" src="${e.audio}"></audio>
    </div>
  `:``}function i(e){return`
    <article class="product-card">
      <img class="product-image" src="${e.image}" alt="${e.imageAlt}" loading="lazy" />
      <div class="product-meta">${e.meta}</div>
      <h3>${e.name}</h3>
      <p>${e.description}</p>
      ${r(e)}
      <a href="#contact">Mám zájem</a>
    </article>
  `}function a(){let e=document.querySelector(`.nav`),t=document.querySelector(`.nav-toggle`),n=document.querySelector(`#nav-menu`);if(!e||!t||!n)return;let r=()=>{e.classList.remove(`nav--open`),t.setAttribute(`aria-expanded`,`false`),t.setAttribute(`aria-label`,`Otevřít menu`)},i=()=>{e.classList.add(`nav--open`),t.setAttribute(`aria-expanded`,`true`),t.setAttribute(`aria-label`,`Zavřít menu`)};t.addEventListener(`click`,()=>{e.classList.contains(`nav--open`)?r():i()}),n.querySelectorAll(`a`).forEach(e=>{e.addEventListener(`click`,r)}),document.addEventListener(`keydown`,e=>{e.key===`Escape`&&r()})}var o=[`Každý kus vzniká ručně v dílně Gong Drum`,`Spojuje proporce gongu, handpanu a rytmiku šamanského bubnu`,`Ladění respektuje specifické frekvence, harmonii a živý dozvuk`],s=[{title:`Workshop hry na GongDrum`,copy:`Vyzkoušej různé GongDrumy, objev jejich zvukové možnosti a zažij, jak rytmus vede k meditaci i transovému naladění.`},{title:`Workshop výroby GongDrumu`,copy:`Intenzivní pobyt v kovárně, kde pod vedením Vojtěcha vzniká vlastní menší nebo orchestrální GongDrum.`}],c=[`Meditace s GongDrumy: záměr uzdravení, CVČ Jabloňka v Brně-Medlánkách.`,`Nové termíny workshopů budou postupně oznámeny na sociálních sítích.`,`Ve vývoji je GongDrum laděný do devíti solfeggio frekvencí.`];document.querySelector(`#app`).innerHTML=`
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
        ${n.map(e=>i(e)).join(``)}
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
        ${o.map(e=>`<li>${e}</li>`).join(``)}
      </ul>
    </section>

    <section id="workshops" class="section">
      <div class="section-heading">
        <p class="eyebrow">Workshopy v dílně</p>
        <h2>Vyzkoušej hru, nebo si vytvoř vlastní nástroj.</h2>
      </div>
      <div class="workshop-grid">
        ${s.map(e=>`
              <article class="workshop-card">
                <h3>${e.title}</h3>
                <p>${e.copy}</p>
              </article>
            `).join(``)}
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
        ${c.map(e=>`<li>${e}</li>`).join(``)}
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
`,a(),e();