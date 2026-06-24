(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(){let e=Array.from(document.querySelectorAll(`[data-gong-player]`));function t(e,t){if(!Number.isFinite(t.duration)||t.duration<=0){e.style.setProperty(`--progress`,`0%`);return}let n=t.currentTime/t.duration*100;e.style.setProperty(`--progress`,`${n}%`)}function n(e){e.style.setProperty(`--progress`,`0%`)}function r(e,n,r){if(!Number.isFinite(n.duration)||n.duration<=0)return;let i=e.getBoundingClientRect();n.currentTime=Math.min(1,Math.max(0,(r-i.left)/i.width))*n.duration,t(e,n)}function i(e,t){let n=e.querySelector(`.gong-player-toggle`);n&&(n.setAttribute(`aria-pressed`,t?`true`:`false`),e.classList.toggle(`is-playing`,t))}function a(t){e.forEach(e=>{if(e===t)return;let n=e.querySelector(`audio`);!n||n.paused||(n.pause(),i(e,!1))})}e.forEach(e=>{let o=e.querySelector(`.gong-player-toggle`),s=e.querySelector(`.gong-player-seek`),c=e.querySelector(`audio`);!o||!s||!c||(o.addEventListener(`click`,async()=>{if(c.paused){a(e);try{await c.play(),i(e,!0)}catch{i(e,!1)}return}c.pause(),i(e,!1)}),s.addEventListener(`click`,e=>{r(s,c,e.clientX)}),s.addEventListener(`pointerdown`,e=>{if(e.button!==0)return;e.preventDefault(),s.setPointerCapture(e.pointerId),r(s,c,e.clientX);let t=t=>{t.pointerId===e.pointerId&&r(s,c,t.clientX)},n=r=>{r.pointerId===e.pointerId&&(s.releasePointerCapture(e.pointerId),s.removeEventListener(`pointermove`,t),s.removeEventListener(`pointerup`,n),s.removeEventListener(`pointercancel`,n))};s.addEventListener(`pointermove`,t),s.addEventListener(`pointerup`,n),s.addEventListener(`pointercancel`,n)}),c.addEventListener(`timeupdate`,()=>t(s,c)),c.addEventListener(`ended`,()=>{n(s),i(e,!1)}),c.addEventListener(`pause`,()=>i(e,!1)))})}var t=`https://hrubyvojtech.cz`;function n(...e){return e.map(e=>`${t}/${e}`)}var r=[{slug:`window-to-the-universe`,name:`Window to the Universe`,meta:`průměr 1000 mm`,description:`Hluboký základ inspirovaný solfeggio frekvencí stability 174 Hz a zářivé alikvoty pro nové začátky.`,image:`${t}/obrazky/Window_to_the_Universe/img_5357-2_optimized.jpg`,imageAlt:`GongDrum Window to the Universe`,gallery:n(`obrazky/Window_to_the_Universe/img_5347-2_optimized.jpg`,`obrazky/Window_to_the_Universe/img_5356-2_optimized.jpg`,`obrazky/Window_to_the_Universe/img_5357-2_optimized.jpg`,`obrazky/Window_to_the_Universe/img_5358-2_optimized.jpg`,`obrazky/Window_to_the_Universe/img_5359-2_optimized.jpg`,`obrazky/Window_to_the_Universe/img_5360-2_optimized.jpg`,`obrazky/Window_to_the_Universe/img_5362-2_optimized.jpg`),audio:`${t}/audio/window_to_the_universe.mp3`,sold:!0},{slug:`radegast`,name:`Radegast`,meta:`průměr 1000 mm`,description:`Temný zvuk hlubokého vesmíru laděný do devíti tónů.`,image:`${t}/obrazky/Radegast/IMG_3054.JPG`,imageAlt:`GongDrum Radegast`,gallery:n(`obrazky/Radegast/IMG_3060.JPG`,`obrazky/Radegast/IMG_3059.JPG`,`obrazky/Radegast/IMG_3054.JPG`,`obrazky/Radegast/IMG_3052.JPG`,`obrazky/Radegast/IMG_3050.JPG`,`obrazky/Radegast/IMG_3049.JPG`),audio:`${t}/audio/Radegast.mp3`,sold:!0},{slug:`little-thai`,name:`Little Thai`,meta:`průměr 480 mm`,description:`Hravý, pozitivní nástroj s jasnou odezvou a přátelským charakterem.`,image:`${t}/obrazky/Little_Thai/IMG_3982.JPG`,imageAlt:`GongDrum Little Thai`,gallery:n(`obrazky/Little_Thai/IMG_3982.JPG`,`obrazky/Little_Thai/IMG_3974.JPG`,`obrazky/Little_Thai/IMG_3981.JPG`,`obrazky/Little_Thai/IMG_3986.JPG`,`obrazky/Little_Thai/IMG_3992.JPG`,`obrazky/Little_Thai/IMG_3969.JPG`),audio:`${t}/audio/Little_Thai.mp3`},{slug:`insight`,name:`Insight`,meta:`průměr 450 mm`,description:`Podmanivě drnčivý zvuk vhodný pro soustředěnou osobní praxi.`,image:`${t}/obrazky/Insight/IMG_3882.JPG`,imageAlt:`GongDrum Insight`,gallery:n(`obrazky/Insight/IMG_3882.JPG`,`obrazky/Insight/IMG_3883.JPG`,`obrazky/Insight/IMG_3884.JPG`,`obrazky/Insight/IMG_3893.JPG`,`obrazky/Insight/IMG_3894.JPG`,`obrazky/Insight/IMG_3910.JPG`,`obrazky/Insight/IMG_3921.JPG`),audio:`${t}/audio/Insight.mp3`,sold:!0},{slug:`lotus-flower`,name:`Lotus Flower`,meta:`průměr 500 mm`,description:`Klidný, meditativní a pročišťující zvuk pro ztišení mysli.`,image:`${t}/obrazky/Lotus_flower/IMG_4007.JPG`,imageAlt:`GongDrum Lotus Flower`,gallery:n(`obrazky/Lotus_flower/IMG_4007.JPG`,`obrazky/Lotus_flower/IMG_4010.JPG`,`obrazky/Lotus_flower/IMG_4012.JPG`,`obrazky/Lotus_flower/IMG_4014.JPG`,`obrazky/Lotus_flower/IMG_4025.JPG`,`obrazky/Lotus_flower/IMG_4037.JPG`,`obrazky/Lotus_flower/IMG_4043.JPG`),audio:`${t}/audio/Lotus_flower.mp3`,sold:!0},{slug:`octopus`,name:`Octopus`,meta:`průměr 800 mm`,description:`Transformační, mocný a hluboký tón F v ladění 432 Hz s bohatými alikvoty.`,image:`${t}/obrazky/Octopus/IMG_4983.JPG`,imageAlt:`GongDrum Octopus`,gallery:n(`obrazky/Octopus/IMG_4983.JPG`,`obrazky/Octopus/IMG_4986.JPG`,`obrazky/Octopus/IMG_4987.JPG`,`obrazky/Octopus/IMG_4993.JPG`,`obrazky/Octopus/IMG_4996.JPG`,`obrazky/Octopus/IMG_4997.JPG`,`obrazky/Octopus/IMG_4998.JPG`,`obrazky/Octopus/IMG_5006.JPG`),audio:`${t}/audio/Octopus_long.mp3`},{slug:`sun`,name:`Sun`,meta:`průměr 700 mm`,description:`Živý a svěží zvuk laděný na G# ve 432 Hz, zaměřený na oblast solar plexu.`,image:`${t}/obrazky/Sun/IMG_5012.JPG`,imageAlt:`GongDrum Sun`,gallery:n(`obrazky/Sun/IMG_5012.JPG`,`obrazky/Sun/IMG_5014.JPG`,`obrazky/Sun/IMG_5015.JPG`,`obrazky/Sun/IMG_5018.JPG`,`obrazky/Sun/IMG_5019.JPG`,`obrazky/Sun/IMG_5020.JPG`,`obrazky/Sun/IMG_5022.JPG`,`obrazky/Sun/IMG_5024.JPG`),audio:`${t}/audio/Sun.mp3`,sold:!0},{slug:`tesla`,name:`Tesla`,meta:`průměr 600 mm`,description:`Jemný, elektrizující zvuk, který otevírá a rozšiřuje prostor.`,image:`${t}/obrazky/Tesla/IMG_5030.JPG`,imageAlt:`GongDrum Tesla`,gallery:n(`obrazky/Tesla/IMG_5030.JPG`,`obrazky/Tesla/IMG_5031.JPG`,`obrazky/Tesla/IMG_5034.JPG`,`obrazky/Tesla/IMG_5037.JPG`,`obrazky/Tesla/IMG_5047.JPG`,`obrazky/Tesla/IMG_5049.JPG`,`obrazky/Tesla/IMG_5050.JPG`),audio:`${t}/audio/Tesla.mp3`},{slug:`mandala`,name:`Mandala`,meta:`rituální gong`,description:`Menší rituální nástroj s jemným, plným a zpřítomňujícím zvukem v ladění 432 Hz.`,image:`${t}/obrazky/Mandala/img_3939_optimized.jpg`,imageAlt:`GongDrum Mandala`,gallery:n(`obrazky/Mandala/img_3853_optimized.jpg`,`obrazky/Mandala/img_3859_optimized.jpg`,`obrazky/Mandala/img_3867_optimized.jpg`,`obrazky/Mandala/img_3869_optimized.jpg`,`obrazky/Mandala/img_3871_optimized.jpg`,`obrazky/Mandala/img_3936_optimized.jpg`,`obrazky/Mandala/img_3939_optimized.jpg`),audio:`${t}/audio/Mandala.mp3`,sold:!0},{slug:`stand`,name:`Stojan na GongDrum`,meta:`nastavitelná výška`,description:`Teleskopický, rozložitelný a skladný stojan pro pohodlné hraní i transport.`,image:`${t}/obrazky/Stojan/img_5053_optimized.jpg`,imageAlt:`Stojan na GongDrum`,gallery:n(`obrazky/Stojan/img_5053_optimized.jpg`,`obrazky/Stojan/img_5054_optimized.jpg`,`obrazky/Stojan/img_5055_optimized.jpg`,`obrazky/Stojan/img_5056_optimized.jpg`,`obrazky/Stojan/img_5057_optimized.jpg`),sold:!0}];function i(e){return e.audio?`
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
  `:``}function a(e){let t=e.gallery.indexOf(e.image),n=t>=0?t:0,r=e.sold?` (Prodáno)`:``;return`
    <article class="product-card${e.sold?` is-sold`:``}">
      <button
        type="button"
        class="product-image-button"
        data-gallery-opener
        data-gallery="${e.gallery.join(`,`)}"
        data-gallery-fallback="${e.image}"
        data-gallery-start="${n}"
        data-gallery-caption="${e.name}"
        aria-label="Otevřít galerii: ${e.name}${r}"
      >
        <span class="product-image-wrap">
          <img class="product-image" src="${e.image}" alt="${e.imageAlt}" loading="lazy" />
          ${e.sold?`<span class="sold-banner" aria-hidden="true">Prodáno</span>`:``}
        </span>
      </button>
      <div class="product-meta">${e.meta}</div>
      <h3>${e.name}</h3>
      <p>${e.description}</p>
      ${i(e)}
      <a href="#contact">Mám zájem</a>
    </article>
  `}function o(){return`
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
  `}function s(){let e=document.getElementById(`gdLightbox`),t=document.getElementById(`gdSlide`),n=document.getElementById(`gdCaption`),r=document.getElementById(`gdCounter`),i=e?.querySelector(`.gd-prev`),a=e?.querySelector(`.gd-next`);if(!e||!t||!n||!r||!i||!a)return;let o=[],s=0,c=null,l=null,u=()=>{r.textContent=`${s+1}/${o.length||1}`},d=()=>{[s-1,s+1].forEach(e=>{let t=(e+o.length)%o.length,n=new Image;n.src=o[t]})},f=e=>{o.length&&(s=(e+o.length)%o.length,t.src=o[s],t.alt=n.textContent||``,u(),d())},p=()=>{e.classList.remove(`open`),e.setAttribute(`aria-hidden`,`true`),document.body.style.overflow=``,t.removeAttribute(`src`),o=[],c?.focus()},m=(t,r,i)=>{t.length&&(c=document.activeElement,o=t,n.textContent=i,e.classList.add(`open`),e.setAttribute(`aria-hidden`,`false`),document.body.style.overflow=`hidden`,f(r),a.focus())};i.addEventListener(`click`,()=>f(s-1)),a.addEventListener(`click`,()=>f(s+1)),e.querySelectorAll(`[data-close]`).forEach(e=>{e.addEventListener(`click`,p)}),document.addEventListener(`keydown`,t=>{e.classList.contains(`open`)&&(t.key===`Escape`&&p(),t.key===`ArrowLeft`&&f(s-1),t.key===`ArrowRight`&&f(s+1))}),t.addEventListener(`touchstart`,e=>{l=e.changedTouches[0].clientX},{passive:!0}),t.addEventListener(`touchend`,e=>{if(l===null)return;let t=e.changedTouches[0].clientX-l;Math.abs(t)>40&&f(t>0?s-1:s+1),l=null},{passive:!0}),document.querySelectorAll(`[data-gallery-opener]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=(e.getAttribute(`data-gallery`)||``).split(`,`).map(e=>e.trim()).filter(Boolean),n=e.getAttribute(`data-gallery-fallback`),r=t.length?t:n?[n]:[],i=Number.parseInt(e.getAttribute(`data-gallery-start`)||`0`,10),a=e.getAttribute(`data-gallery-caption`)||``;m(r,Number.isNaN(i)?0:i,a)})})}function c(){let e=document.querySelector(`.nav`),t=document.querySelector(`.nav-toggle`),n=document.querySelector(`#nav-menu`);if(!e||!t||!n)return;let r=()=>{e.classList.remove(`nav--open`),t.setAttribute(`aria-expanded`,`false`),t.setAttribute(`aria-label`,`Otevřít menu`)},i=()=>{e.classList.add(`nav--open`),t.setAttribute(`aria-expanded`,`true`),t.setAttribute(`aria-label`,`Zavřít menu`)};t.addEventListener(`click`,()=>{e.classList.contains(`nav--open`)?r():i()}),n.querySelectorAll(`a`).forEach(e=>{e.addEventListener(`click`,r)}),document.addEventListener(`keydown`,e=>{e.key===`Escape`&&r()})}var l=[`Každý kus vzniká ručně v dílně Gong Drum`,`Spojuje proporce gongu, handpanu a rytmiku šamanského bubnu`,`Ladění respektuje specifické frekvence, harmonii a živý dozvuk`],u=[{title:`Workshop hry na GongDrum`,copy:`Vyzkoušej různé GongDrumy, objev jejich zvukové možnosti a zažij, jak rytmus vede k meditaci i transovému naladění.`},{title:`Workshop výroby GongDrumu`,copy:`Intenzivní pobyt v kovárně, kde pod vedením Vojtěcha vzniká vlastní menší nebo orchestrální GongDrum.`}],d=[`Meditace s GongDrumy: záměr uzdravení, CVČ Jabloňka v Brně-Medlánkách.`,`Nové termíny workshopů budou postupně oznámeny na sociálních sítích.`,`Ve vývoji je GongDrum laděný do devíti solfeggio frekvencí.`];document.querySelector(`#app`).innerHTML=`
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
        ${r.map(e=>a(e)).join(``)}
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
        ${l.map(e=>`<li>${e}</li>`).join(``)}
      </ul>
    </section>

    <section id="workshops" class="section">
      <div class="section-heading">
        <p class="eyebrow">Workshopy v dílně</p>
        <h2>Vyzkoušej hru, nebo si vytvoř vlastní nástroj.</h2>
      </div>
      <div class="workshop-grid">
        ${u.map(e=>`
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

    <section id="news" class="news section">
      <div class="section-heading">
        <p class="eyebrow">Aktuality & festivaly</p>
        <h2>Krátké zprávy z dílny.</h2>
      </div>
      <ul>
        ${d.map(e=>`<li>${e}</li>`).join(``)}
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
  ${o()}
`,c(),e(),s();