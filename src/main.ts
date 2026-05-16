import './styles.css';

const featuredDrums = [
  {
    name: 'Temple Gong Drum',
    description: 'A deep, grounding tone for meditation rooms, studios, and ceremonial spaces.',
    price: 'From $420',
  },
  {
    name: 'Travel Resonance Gong',
    description: 'Compact bronze body with a warm bloom that carries beautifully outdoors.',
    price: 'From $260',
  },
  {
    name: 'Full Moon Set',
    description: 'Three matched gong drums tuned for layered sound baths and ensemble work.',
    price: 'From $980',
  },
];

const benefits = [
  'Hand-selected instruments with long, even sustain',
  'Ideal for sound healing, meditation, yoga, and stage performance',
  'Starter guidance included with every drum',
];

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <main class="site-shell">
    <nav class="nav" aria-label="Main navigation">
      <a class="logo" href="#top" aria-label="Resonant Gong Drums home">
        <span class="logo-mark"></span>
        Resonant Gong Drums
      </a>
      <div class="nav-links">
        <a href="#collection">Collection</a>
        <a href="#experience">Experience</a>
        <a class="nav-cta" href="#contact">Book a demo</a>
      </div>
    </nav>

    <section id="top" class="hero">
      <div class="hero-copy">
        <p class="eyebrow">Gong drums for mindful spaces</p>
        <h1>Bring a fuller, deeper resonance into every ritual.</h1>
        <p class="hero-text">
          Explore handcrafted gong drums chosen for clarity, sustain, and presence. This test
          site is ready for GitHub Pages now and can move to your custom domain when you are.
        </p>
        <div class="hero-actions">
          <a class="button primary" href="#collection">Browse test collection</a>
          <a class="button secondary" href="#contact">Ask about availability</a>
        </div>
      </div>
      <div class="hero-card" aria-label="Featured gong drum">
        <div class="gong-illustration">
          <span class="gong-ring ring-one"></span>
          <span class="gong-ring ring-two"></span>
          <span class="gong-ring ring-three"></span>
        </div>
        <p>Featured tone</p>
        <strong>Low C# ceremonial gong drum</strong>
      </div>
    </section>

    <section id="collection" class="section">
      <div class="section-heading">
        <p class="eyebrow">Test collection</p>
        <h2>Simple product highlights</h2>
        <p>
          Replace these placeholder cards with your real instruments, photos, pricing, and
          ordering flow as the site grows.
        </p>
      </div>
      <div class="product-grid">
        ${featuredDrums
          .map(
            (drum) => `
              <article class="product-card">
                <div class="product-image" aria-hidden="true"></div>
                <h3>${drum.name}</h3>
                <p>${drum.description}</p>
                <span>${drum.price}</span>
              </article>
            `,
          )
          .join('')}
      </div>
    </section>

    <section id="experience" class="experience">
      <div>
        <p class="eyebrow">Why these instruments</p>
        <h2>Built for both first-time players and professional facilitators.</h2>
      </div>
      <ul>
        ${benefits.map((benefit) => `<li>${benefit}</li>`).join('')}
      </ul>
    </section>

    <section id="contact" class="contact">
      <p class="eyebrow">Next step</p>
      <h2>Ready to test the site on GitHub Pages.</h2>
      <p>
        Add product photos, a contact form provider, or a checkout link when you are ready.
        For now, use this call-to-action as a placeholder.
      </p>
      <a class="button primary" href="mailto:hello@example.com?subject=Gong%20drum%20demo">
        Email for a demo
      </a>
    </section>
  </main>
`;
