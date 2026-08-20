(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(){let e=Array.from(document.querySelectorAll(`[data-gong-player]`));function t(e,t){if(!Number.isFinite(t.duration)||t.duration<=0){e.style.setProperty(`--progress`,`0%`);return}let n=t.currentTime/t.duration*100;e.style.setProperty(`--progress`,`${n}%`)}function n(e){e.style.setProperty(`--progress`,`0%`)}function r(e,n,r){if(!Number.isFinite(n.duration)||n.duration<=0)return;let i=e.getBoundingClientRect();n.currentTime=Math.min(1,Math.max(0,(r-i.left)/i.width))*n.duration,t(e,n)}function i(e,t){let n=e.querySelector(`.gong-player-toggle`);n&&(n.setAttribute(`aria-pressed`,t?`true`:`false`),e.classList.toggle(`is-playing`,t))}function a(t){e.forEach(e=>{if(e===t)return;let n=e.querySelector(`audio`);!n||n.paused||(n.pause(),i(e,!1))})}e.forEach(e=>{let o=e.querySelector(`.gong-player-toggle`),s=e.querySelector(`.gong-player-seek`),c=e.querySelector(`audio`);!o||!s||!c||(o.addEventListener(`click`,async()=>{if(c.paused){a(e);try{await c.play(),i(e,!0)}catch{i(e,!1)}return}c.pause(),i(e,!1)}),s.addEventListener(`click`,e=>{r(s,c,e.clientX)}),s.addEventListener(`pointerdown`,e=>{if(e.button!==0)return;e.preventDefault(),s.setPointerCapture(e.pointerId),r(s,c,e.clientX);let t=t=>{t.pointerId===e.pointerId&&r(s,c,t.clientX)},n=r=>{r.pointerId===e.pointerId&&(s.releasePointerCapture(e.pointerId),s.removeEventListener(`pointermove`,t),s.removeEventListener(`pointerup`,n),s.removeEventListener(`pointercancel`,n))};s.addEventListener(`pointermove`,t),s.addEventListener(`pointerup`,n),s.addEventListener(`pointercancel`,n)}),c.addEventListener(`timeupdate`,()=>t(s,c)),c.addEventListener(`ended`,()=>{n(s),i(e,!1)}),c.addEventListener(`pause`,()=>i(e,!1)))})}var t={insight:[],"little-thai":[],"lotus-flower":[],mandala:[],octopus:[],radegast:[],stand:[],sun:[],tesla:[],"window-to-the-universe":[]},n={},r=new Set([`window-to-the-universe`,`radegast`,`insight`,`lotus-flower`,`sun`,`mandala`,`stand`,`nova-genesis`]),i=[{slug:`window-to-the-universe`,name:`Window to the Universe`,meta:`průměr 1000 mm`,description:`Hluboký základ inspirovaný solfeggio frekvencí stability 174 Hz a zářivé alikvoty pro nové začátky.`},{slug:`radegast`,name:`Radegast`,meta:`průměr 1000 mm`,description:`Temný zvuk hlubokého vesmíru laděný do devíti tónů.`},{slug:`little-thai`,name:`Little Thai`,meta:`průměr 480 mm`,description:`Hravý, pozitivní nástroj s jasnou odezvou a přátelským charakterem.`},{slug:`insight`,name:`Insight`,meta:`průměr 450 mm`,description:`Podmanivě drnčivý zvuk vhodný pro soustředěnou osobní praxi.`},{slug:`lotus-flower`,name:`Lotus Flower`,meta:`průměr 500 mm`,description:`Klidný, meditativní a pročišťující zvuk pro ztišení mysli.`},{slug:`octopus`,name:`Octopus`,meta:`průměr 800 mm`,description:`Transformační, mocný a hluboký tón F v ladění 432 Hz s bohatými alikvoty.`},{slug:`sun`,name:`Sun`,meta:`průměr 700 mm`,description:`Živý a svěží zvuk laděný na G# ve 432 Hz, zaměřený na oblast solar plexu.`},{slug:`tesla`,name:`Tesla`,meta:`průměr 600 mm`,description:`Jemný, elektrizující zvuk, který otevírá a rozšiřuje prostor.`},{slug:`mandala`,name:`Mandala`,meta:`rituální gong`,description:`Menší rituální nástroj s jemným, plným a zpřítomňujícím zvukem v ladění 432 Hz.`},{slug:`nova-genesis`,name:`Nova Genesis`,meta:`Nova Genesis`,description:`TODO popis`},{slug:`stand`,name:`Stojan na GongDrum`,meta:`nastavitelná výška`,description:`Teleskopický, rozložitelný a skladný stojan pro pohodlné hraní i transport.`}];function a(e){let i=t[e.slug]??[],a=i[0]??``;return{...e,gallery:i,image:a,imageAlt:`GongDrum ${e.name}`,audio:n[e.slug],sold:r.has(e.slug)}}var o=i.map(a).sort((e,t)=>Number(e.sold)-Number(t.sold));function s(e){return e.audio?`
    <div class="gong-player" data-gong-player>
      <div class="gong-player-bar">
        <button
          type="button"
          class="gong-player-toggle"
          aria-pressed="false"
          aria-label="Přehrát ukázku: ${e.name}"
        >
          <span class="gong-player-icon" aria-hidden="true"></span>
        </button>
        <button
          type="button"
          class="gong-player-seek"
          aria-label="Posunout přehrávání ukázky: ${e.name}"
        >
          <span class="gong-player-label">Poslech ukázky</span>
        </button>
      </div>
      <audio preload="none" src="${e.audio}"></audio>
    </div>
  `:``}function c(e){let t=e.sold?` (Prodáno)`:``,n=e.sold?`Chci podobný kus`:`Mám zájem`,r=e.image?`<img class="product-image" src="${e.image}" alt="${e.imageAlt}" loading="lazy" />`:`<span class="product-image product-image-placeholder" role="img" aria-label="${e.imageAlt}"></span>`;return`
    <article class="product-card${e.sold?` is-sold`:``}">
      <button
        type="button"
        class="product-image-button${e.gallery.length?``:` is-disabled`}"
        data-gallery-opener
        data-gallery="${e.gallery.join(`,`)}"
        data-gallery-fallback="${e.image}"
        data-gallery-start="0"
        data-gallery-caption="${e.name}"
        aria-label="Otevřít galerii: ${e.name}${t}"
        ${e.gallery.length?``:`disabled`}
      >
        <span class="product-image-wrap">
          ${r}
          ${e.sold?`<span class="sold-banner" aria-hidden="true">Prodáno</span>`:``}
        </span>
      </button>
      <div class="product-meta">${e.meta}</div>
      <h3>${e.name}</h3>
      <p>${e.description}</p>
      ${s(e)}
      <a href="#contact">${n}</a>
    </article>
  `}function l(){return`
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
  `}function u(){let e=document.getElementById(`gdLightbox`),t=document.getElementById(`gdSlide`),n=document.getElementById(`gdCaption`),r=document.getElementById(`gdCounter`),i=e?.querySelector(`.gd-prev`),a=e?.querySelector(`.gd-next`);if(!e||!t||!n||!r||!i||!a)return;let o=[],s=0,c=null,l=null,u=()=>{r.textContent=`${s+1}/${o.length||1}`},d=()=>{[s-1,s+1].forEach(e=>{let t=(e+o.length)%o.length,n=new Image;n.src=o[t]})},f=e=>{o.length&&(s=(e+o.length)%o.length,t.src=o[s],t.alt=n.textContent||``,u(),d())},p=()=>{e.classList.remove(`open`),e.setAttribute(`aria-hidden`,`true`),document.body.style.overflow=``,t.removeAttribute(`src`),o=[],c?.focus()},m=(t,r,i)=>{t.length&&(c=document.activeElement,o=t,n.textContent=i,e.classList.add(`open`),e.setAttribute(`aria-hidden`,`false`),document.body.style.overflow=`hidden`,f(r),a.focus())};i.addEventListener(`click`,()=>f(s-1)),a.addEventListener(`click`,()=>f(s+1)),e.querySelectorAll(`[data-close]`).forEach(e=>{e.addEventListener(`click`,p)}),document.addEventListener(`keydown`,t=>{e.classList.contains(`open`)&&(t.key===`Escape`&&p(),t.key===`ArrowLeft`&&f(s-1),t.key===`ArrowRight`&&f(s+1))}),t.addEventListener(`touchstart`,e=>{l=e.changedTouches[0].clientX},{passive:!0}),t.addEventListener(`touchend`,e=>{if(l===null)return;let t=e.changedTouches[0].clientX-l;Math.abs(t)>40&&f(t>0?s-1:s+1),l=null},{passive:!0}),document.querySelectorAll(`[data-gallery-opener]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=(e.getAttribute(`data-gallery`)||``).split(`,`).map(e=>e.trim()).filter(Boolean),n=e.getAttribute(`data-gallery-fallback`),r=t.length?t:n?[n]:[],i=Number.parseInt(e.getAttribute(`data-gallery-start`)||`0`,10),a=e.getAttribute(`data-gallery-caption`)||``;m(r,Number.isNaN(i)?0:i,a)})})}function d(){let e=document.querySelector(`.nav`),t=document.querySelector(`.nav-toggle`),n=document.querySelector(`#nav-menu`);if(!e||!t||!n)return;let r=()=>{e.classList.remove(`nav--open`),t.setAttribute(`aria-expanded`,`false`),t.setAttribute(`aria-label`,`Otevřít menu`)},i=()=>{e.classList.add(`nav--open`),t.setAttribute(`aria-expanded`,`true`),t.setAttribute(`aria-label`,`Zavřít menu`)};t.addEventListener(`click`,()=>{e.classList.contains(`nav--open`)?r():i()}),n.querySelectorAll(`a`).forEach(e=>{e.addEventListener(`click`,r)}),document.addEventListener(`keydown`,e=>{e.key===`Escape`&&r()})}var f=[`Každý kus vzniká ručně v dílně Gong Drum`,`Spojuje proporce gongu, handpanu a rytmiku šamanského bubnu`,`Ladění respektuje specifické frekvence, harmonii a živý dozvuk`],p=[{title:`Workshop hry na GongDrum`,copy:`Vyzkoušej různé GongDrumy, objev jejich zvukové možnosti a zažij, jak rytmus vede k meditaci i transovému naladění.`},{title:`Workshop výroby GongDrumu`,copy:`Intenzivní pobyt v kovárně, kde pod vedením Vojtěcha vzniká vlastní menší nebo orchestrální GongDrum.`,infoImage:`./obrazky/workshop_vyroby_gongdrumu.jpg`,infoCaption:`Workshop výroby GongDrumu`}];function m(e){let t=e.infoImage?`
        <button
          type="button"
          class="workshop-info-link"
          data-gallery-opener
          data-gallery-fallback="${e.infoImage}"
          data-gallery-caption="${e.infoCaption||e.title}"
          aria-label="Více informací: ${e.title}"
        >
          Více informací
        </button>
      `:``;return`
    <article class="workshop-card">
      <h3>${e.title}</h3>
      <p>${e.copy}</p>
      ${t}
    </article>
  `}var h=[`Meditace s GongDrumy: záměr uzdravení, CVČ Jabloňka v Brně-Medlánkách.`,`Nové termíny workshopů budou postupně oznámeny na sociálních sítích.`,`Ve vývoji je GongDrum laděný do devíti solfeggio frekvencí.`];document.querySelector(`#app`).innerHTML=`
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
        <a href="#news">Aktuality</a>
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
        ${o.map(e=>c(e)).join(``)}
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
        ${f.map(e=>`<li>${e}</li>`).join(``)}
      </ul>
    </section>

    <section id="workshops" class="section">
      <div class="section-heading">
        <p class="eyebrow">Workshopy v dílně</p>
        <h2>Vyzkoušej hru, nebo si vytvoř vlastní nástroj.</h2>
      </div>
      <div class="workshop-grid">
        ${p.map(e=>m(e)).join(``)}
      </div>
      <div class="pricing-strip">
        <span>2 dny v kovárně: GongDrum 50 cm / 6 900 Kč</span>
        <span>4 dny v kovárně: GongDrum 60-70 cm / 10 900 Kč</span>
      </div>
    </section>

    <section id="news" class="news section">
      <div class="section-heading">
        <p class="eyebrow">Aktuality & festivaly</p>
        <h2>Krátké zprávy z dílny.</h2>
      </div>
      <ul>
        ${h.map(e=>`<li>${e}</li>`).join(``)}
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
  ${l()}
`,d(),e(),u();