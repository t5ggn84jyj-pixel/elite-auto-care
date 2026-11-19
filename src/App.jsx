import { useState } from "react";
import './App.css'
function App() {
 const [openService, setOpenService] = useState(null);

const services = [
  {
    number: "01",
    title: "Außenaufbereitung",
    description: "Gründliche Handwäsche, Reinigung der Felgen und Pflege der Außenflächen. Für einen sauberen Auftritt und ein gepflegtes Erscheinungsbild.",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=900"
  },
  {
    number: "02",
    title: "Innenraumaufbereitung",
    description: "Sorgfältige Reinigung von Sitzen, Teppichen, Fußmatten und Kunststoffflächen. Wir bringen Frische und Ordnung in deinen Innenraum.",
    image: "https://hepworthbros.com/assets/hero-xKChWyXe.jpeg"
  },
  {
    number: "03",
    title: "Lackkorrektur",
    description: "Professionelle Lackaufbereitung zur Reduzierung geeigneter feiner Kratzer und Waschspuren. Für mehr Klarheit und einen gepflegten Lackglanz.",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=900"
  },
  {
    number: "04",
    title: "Keramikversiegelung",
    description: "Eine hochwertige Schutzschicht für den Fahrzeuglack. Sie unterstützt den Glanz, lässt Wasser leichter abperlen und erleichtert die Pflege.",
    image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=900"
  }
];



  return (
    <main>
      
<nav className="navbar">
  <a href="#" className="logo">
    ELITE<span> AUTO CARE.</span>
  </a>

  <div className="nav-links">
    
<a
  href="#leistungen"
  onClick={(e) => {
    e.preventDefault();

    const ziel = document.getElementById("leistungen");
    if (!ziel) return;

    const start = window.scrollY;
    const ende = ziel.getBoundingClientRect().top + window.scrollY;
    const dauer = 1000;
    const startzeit = performance.now();

    function animieren(zeit) {
      const fortschritt = Math.min((zeit - startzeit) / dauer, 1);
      const weich = fortschritt < 0.5
        ? 2 * fortschritt * fortschritt
        : 1 - Math.pow(-2 * fortschritt + 2, 2) / 2;

      window.scrollTo(0, start + (ende - start) * weich);

      if (fortschritt < 1) {
        requestAnimationFrame(animieren);
      }
    }

    requestAnimationFrame(animieren);
  }}
>
  Leistungen
</a>

    <a
  href="#preise"
  onClick={(e) => {
    e.preventDefault();

    const ziel = document.getElementById("preise");
    if (!ziel) return;

    const start = window.scrollY;
    const ende = ziel.getBoundingClientRect().top + window.scrollY;
    const dauer = 1000;
    const startzeit = performance.now();

    function animieren(zeit) {
      const fortschritt = Math.min((zeit - startzeit) / dauer, 1);
      const weich = fortschritt < 0.5
        ? 2 * fortschritt * fortschritt
        : 1 - Math.pow(-2 * fortschritt + 2, 2) / 2;

      window.scrollTo(0, start + (ende - start) * weich);

      if (fortschritt < 1) requestAnimationFrame(animieren);
    }

    requestAnimationFrame(animieren);
  }}
>
  Preise
</a>
    <a
  href="#ueber-uns"
  onClick={(e) => {
    e.preventDefault();

    const ziel = document.getElementById("ueber-uns");
    if (!ziel) return;

    const start = window.scrollY;
    const ende = ziel.getBoundingClientRect().top + window.scrollY;
    const dauer = 1000;
    const startzeit = performance.now();

    function animieren(zeit) {
      const fortschritt = Math.min((zeit - startzeit) / dauer, 1);
      const weich = fortschritt < 0.5
        ? 2 * fortschritt * fortschritt
        : 1 - Math.pow(-2 * fortschritt + 2, 2) / 2;

      window.scrollTo(0, start + (ende - start) * weich);

      if (fortschritt < 1) requestAnimationFrame(animieren);
    }

    requestAnimationFrame(animieren);
  }}
>
  Über uns
</a>
    <a
  href="#bewertungen"
  onClick={(e) => {
    e.preventDefault();

    const ziel = document.getElementById("bewertungen");
    if (!ziel) return;

    const start = window.scrollY;
    const ende = ziel.getBoundingClientRect().top + window.scrollY;
    const dauer = 1000;
    const startzeit = performance.now();

    function animieren(zeit) {
      const fortschritt = Math.min((zeit - startzeit) / dauer, 1);
      const weich = fortschritt < 0.5
        ? 2 * fortschritt * fortschritt
        : 1 - Math.pow(-2 * fortschritt + 2, 2) / 2;

      window.scrollTo(0, start + (ende - start) * weich);

      if (fortschritt < 1) requestAnimationFrame(animieren);
    }

    requestAnimationFrame(animieren);
  }}
>
  Bewertungen
</a>
    <a
  href="#kontakt"
  onClick={(e) => {
    e.preventDefault();

    const ziel = document.getElementById("kontakt");
    if (!ziel) return;

    const start = window.scrollY;
    const ende = ziel.getBoundingClientRect().top + window.scrollY;
    const dauer = 1000;
    const startzeit = performance.now();

    function animieren(zeit) {
      const fortschritt = Math.min((zeit - startzeit) / dauer, 1);
      const weich = fortschritt < 0.5
        ? 2 * fortschritt * fortschritt
        : 1 - Math.pow(-2 * fortschritt + 2, 2) / 2;

      window.scrollTo(0, start + (ende - start) * weich);

      if (fortschritt < 1) requestAnimationFrame(animieren);
    }

    requestAnimationFrame(animieren);
  }}
>
  Kontakt
</a>
  </div>

  <a href="#kontakt" className="nav-button">
    TERMIN ANFRAGEN ↗
  </a>
</nav>


      <section className="hero">
      
        <div className="hero-content">
          <p className="eyebrow">PREMIUM FAHRZEUGAUFBEREITUNG · KÄRNTEN</p>
          <h1>PERFEKTION.<br />IN JEDEM <span>DETAIL.</span></h1>
          <p className="hero-text">
            Professionelle Fahrzeugaufbereitung.
            Leidenschaft für Details. Glanz auf höchstem Niveau.
          </p>
          <a href="#leistungen" className="primary-button">
            UNSERE LEISTUNGEN ↗
          </a>
        </div>
        <div className="hero-bottom">
          <span>01 / 04</span>
          <span>DESIGNED FOR PERFECTION</span>
        </div>
      </section>

      <section className="intro" id="ueber-uns">
        <p className="eyebrow">ELITE AUTO CARE</p>
        <h2>Dein Fahrzeug verdient<br />mehr als nur eine Reinigung.</h2>
        <p>
          Wir verbinden Leidenschaft, Präzision und hochwertige Pflege,
          damit dein Fahrzeug wieder in bestem Glanz erstrahlt.
        </p>
      </section>

      
<section className="services" id="leistungen">
  <p className="eyebrow">WAS WIR ANBIETEN</p>
  <h2>UNSERE LEISTUNGEN<span>.</span></h2>

  <div className="service-grid">
    {services.map((service, index) => (
      <article className="service-card" key={service.number}>
        <img
  className="service-image"
  src={service.image}
  alt={service.title}
/>
        <div className="service-top">
          <span className="service-number">
            {service.number}
          </span>
          <span className="service-arrow">↗</span>
        </div>

        <div className="service-info">
          <h3>{service.title}</h3>
          <p>{service.description}</p>
          <button
  className="service-more"
  type="button"
  onClick={() => setOpenService(
    openService === service.number ? null : service.number
  )}
>
  {openService === service.number ? "WENIGER ANZEIGEN ↑" : "MEHR ERFAHREN ↗"}
</button>

{openService === service.number && (
  <div className="service-details">
    {service.number === "01" && (
      <p>
        Gründliche Handwäsche, Felgenreinigung,
        Reinigung der Scheiben und Pflege der
        Außenflächen. Für ein gepflegtes Gesamtbild.
      </p>
    )}

    {service.number === "02" && (
      <p>
        Reinigung von Sitzen, Teppichen, Fußmatten,
        Armaturen und Kunststoffflächen. Auch
        schwer erreichbare Bereiche werden gepflegt.
      </p>
    )}

    {service.number === "03" && (
      <p>
        Aufbereitung des Fahrzeuglacks zur
        Reduzierung geeigneter feiner Kratzer
        und Waschspuren. Für mehr Glanz und Klarheit.
      </p>
    )}

    {service.number === "04" && (
      <p>
        Eine Schutzschicht für den Fahrzeuglack.
        Sie unterstützt den Glanz, lässt Wasser
        leichter abperlen und erleichtert die Pflege.
      </p>
    )}
  </div>
)}

        </div>
      </article>
    ))}
  </div>
</section>

<section className="pricing" id="preise">
  <p className="eyebrow">TRANSPARENTE PREISE</p>
  <h2>UNSER <span>ANGEBOT.</span></h2>
  <p className="pricing-intro">
    Qualität und Pflege für jeden Anspruch.
  </p>

  <div className="pricing-grid">
    <div className="price-card">
      <span className="price-label">01 / BASIC</span>
      <h3>Essential</h3>
      <p className="price">ab € 89</p>
      <p>Die perfekte Pflege für den Alltag.</p>
      <ul>
        <li>Außenwäsche</li>
        <li>Felgenreinigung</li>
        <li>Innenraum saugen</li>
        <li>Fensterreinigung</li>
      </ul>
      <a href="#kontakt">ANFRAGE SENDEN ↗</a>
    </div>

    <div className="price-card featured">
      <span className="price-label">02 / PREMIUM</span>
      <h3>Signature</h3>
      <p className="price">ab € 179</p>
      <p>Für einen rundum gepflegten Auftritt.</p>
      <ul>
        <li>Alle Essential-Leistungen</li>
        <li>Intensive Innenraumreinigung</li>
        <li>Lackpflege</li>
        <li>Kunststoffpflege</li>
      </ul>
      <a href="#kontakt">ANFRAGE SENDEN ↗</a>
    </div>

    <div className="price-card">
      <span className="price-label">03 / EXCLUSIVE</span>
      <h3>Ultimate</h3>
      <p className="price">ab € 349</p>
      <p>Das Maximum an Pflege und Glanz.</p>
      <ul>
        <li>Alle Signature-Leistungen</li>
        <li>Intensive Lackaufbereitung</li>
        <li>Hochwertige Lackversiegelung</li>
        <li>Individuelle Fahrzeugpflege</li>
      </ul>
      <a href="#kontakt">ANFRAGE SENDEN ↗</a>
    </div>
  </div>
  <p className="price-note">
    Beispielpreise – tatsächliche Kosten nach Fahrzeuggröße und Zustand.
  </p>
</section>


<section className="story" id="ueber-uns">
  <div className="story-content">
    <p className="eyebrow">UNSERE GESCHICHTE</p>

    <h2>
      AUS LEIDENSCHAFT.
      <span> MIT PRÄZISION.</span>
    </h2>

    <p>
      Autos waren schon seit meiner Kindheit eine große
      Leidenschaft. Besonders die Faszination für Fahrzeuge
      und ihre Details hat mich geprägt.
    </p>

    <p>
      Im Jahr 2026 habe ich mit Elite Auto Care den Schritt
      gemacht, diese Leidenschaft in die Fahrzeugaufbereitung
      zu bringen.
    </p>

    <p>
      Was mir bei meiner Arbeit besonders wichtig ist,
      ist Genauigkeit. Jedes Detail zählt. Mit Sorgfalt,
      Geduld und Leidenschaft möchte ich jedem Fahrzeug
      die Aufmerksamkeit geben, die es verdient.
    </p>

    <h3>ELITE AUTO CARE – LEIDENSCHAFT FÜR AUTOS.
      PRÄZISION IN JEDEM DETAIL.</h3>
  </div>

  <div className="story-image">
    <img
      src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200"
      alt="Sportwagen von Elite Auto Care"
    />
  </div>
</section>

    
<section className="reviews" id="bewertungen">
  <p className="eyebrow">DEINE MEINUNG ZÄHLT</p>
  <h2>KUNDENBEWERTUNGEN<span>.</span></h2>
  <p className="reviews-intro">
    Teile deine Erfahrung mit Elite Auto Care.
    Dein Feedback hilft uns, noch besser zu werden.
  </p>

  <form
    className="review-form"
    action="https://formspree.io/f/mqpqlgrl"
    method="POST"
  >
    <input
      type="text"
      name="Name"
      placeholder="Dein Name"
      required
    />

    <select name="Sterne" defaultValue="" required>
      <option value="" disabled>Bewertung auswählen</option>
      <option value="5 Sterne">★★★★★ – 5 Sterne</option>
      <option value="4 Sterne">★★★★ – 4 Sterne</option>
      <option value="3 Sterne">★★★ – 3 Sterne</option>
      <option value="2 Sterne">★★ – 2 Sterne</option>
      <option value="1 Stern">★ – 1 Stern</option>
    </select>

    <textarea
      name="Bewertung"
      placeholder="Wie war deine Erfahrung mit uns?"
      rows="5"
      required
    />

    <button type="submit">
      BEWERTUNG ABSENDEN ↗
    </button>
  </form>

  <p className="review-note">
    Bewertungen werden vor einer Veröffentlichung geprüft.
  </p>

<div className="review-display">
  <p className="eyebrow">ECHTE ERFAHRUNGEN</p>
  <h3>WAS UNSERE KUNDEN SAGEN<span>.</span></h3>

  <div className="review-cards">
    <div className="review-card">
      <div className="review-stars">★★★★★</div>
      <p>
        Hier erscheint bald die erste echte Kundenbewertung.
      </p>
      <span>Kundenbewertungen</span>
    </div>
  </div>
</div>

</section>
  
<section className="contact" id="kontakt">
  <p className="eyebrow">WIR SIND FÜR DICH DA</p>
  <h2>DEIN FAHRZEUG. <span>UNSERE LEIDENSCHAFT.</span></h2>

  <div className="contact-links">
  <a href="tel:+436769707764">
    +43 676 9707764
  </a>

  <a href="mailto:albinzeneli08@gmail.com">
    albinzeneli08@gmail.com
  </a>
</div>

  
<form
  className="contact-form"
  action="https://formspree.io/f/xdegdpbg"
  method="POST"
>
  <input
    name="name"
    type="text"
    placeholder="Dein Name"
    required
  />

  <input
    name="email"
    type="email"
    placeholder="Deine E-Mail"
    required
  />

  <select name="leistung" required defaultValue="">
    <option value="" disabled>Leistung auswählen</option>
    <option>Außenaufbereitung</option>
    <option>Innenraumaufbereitung</option>
    <option>Lackkorrektur</option>
    <option>Keramikversiegelung</option>
  </select>

  <textarea
    name="nachricht"
    placeholder="Deine Nachricht..."
    rows="5"
    required
  />

  <button type="submit">ANFRAGE SENDEN ↗</button>
</form>

</section>

      <footer>
        <a href="#" className="logo">ELITE<span> AUTO CARE.</span></a>
        <p>© 2026 Elite Auto Care · Kärnten, Österreich</p>
      </footer>
    </main>
  );
}

export default App;
