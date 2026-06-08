import Navbar from '../components/Navbar';
import '../styles/services-hero.css'

const BG_IMAGE =
  'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1920&q=80';

const ServicesHero = () => {
  return (
    <section className="servicesHero" id="servicesTop">

      {/* BACKGROUND */}
      <img src={BG_IMAGE} alt="Glimmers services" className="servicesHeroBg" />
      <div className="servicesHeroOverlay" />
      <div className="servicesHeroGrain" />

      {/* NAVBAR */}
      <Navbar />

      {/* CONTENT — split layout like homepage */}
      <div className="servicesHeroContent">

        {/* LEFT — first line alone */}
        <div className="servicesHeroLeft">
          <div className="servicesHeroLineOne">
            <span>Spaces Built</span>
          </div>
        </div>

        {/* RIGHT — remaining lines + desc + cta stacked */}
        <div className="servicesHeroRight">

          <div className="servicesHeroLineTwo">
            <span>With Purpose,</span>
          </div>

          <div className="servicesHeroLineThree">
            <span>With Precision.</span>
          </div>

          <p className="servicesHeroDesc">
            From bespoke luxury residences to exclusive commercial spaces
            every project we undertake is guided by intention, precision,
            and an unwavering commitment to excellence.
          </p>

          <a href="#servicesDetail" className="servicesHeroCta">
            Explore Services
            <span className="servicesHeroCtaArrow">→</span>
          </a>

        </div>

      </div>

      {/* SCROLL INDICATOR */}
      <div className="servicesHeroScroll">
        <div className="servicesHeroScrollLine" />
        <span>Scroll to explore</span>
      </div>

    </section>
  );
};

export default ServicesHero;