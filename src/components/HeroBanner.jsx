
import '../styles/hero-banner.css';


const HERO_IMAGE =
  'https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&w=1920&q=80';

const HeroBanner = () => {
  return (
    <section className="hero" id="home">

      {/* ── Background ── */}
      <img src={HERO_IMAGE} alt="Glimmers luxury interior" className="hero__bg" />
      <div className="hero__overlay" />
      <div className="hero__grain" />

      {/* ── Navbar transparent over image ── */}
    
      {/* ════ CONTENT ════ */}
      <div className="hero__content">

        {/* ── LEFT: "Transforming" alone ── */}
        <div className="hero__left">
          <div className="hero__line-transforming">
            <span>Transforming</span>
          </div>
        </div>

        {/* ── RIGHT COLUMN ── */}
        <div className="hero__right">

          <div className="hero__line-visions">
            <span>Visions Into</span>
          </div>

          <div className="hero__line-masterpieces">
            <span>Masterpieces.</span>
          </div>

          <p className="hero__description">
            Glimmers Interiors &amp; Construction crafts timeless luxury spaces
            where every detail shines from high-end residences to exclusive
            commercial environments, built with precision and elegance.
          </p>

          <a href="#contact" className="hero__cta">
            Book a Site Visit
            <span className="hero__cta-arrow">→</span>
          </a>

        </div>

      </div>

    </section>
  );
};

export default HeroBanner;