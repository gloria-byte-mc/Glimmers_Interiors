import Navbar from './Navbar';
import '../styles/about-hero.css'

const HERO_IMG = 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1920&q=80';

const AboutHero = () => {
  return (
    <section className="aboutHero">

      {/* BACKGROUND */}
      <img src={HERO_IMG} alt="Glimmers luxury interior" className="aboutHeroBg" />
      <div className="aboutHeroOverlay" />
      <div className="aboutHeroGrain" />

      {/* NAVBAR */}
      <Navbar />

      {/* CONTENT — split layout */}
      <div className="aboutHeroContent">

        {/* LEFT — two heading lines */}
        <div className="aboutHeroLeft">
          <div className="aboutHeroLineOne">
            <span>Crafting Spaces</span>
          </div>
          <div className="aboutHeroLineTwo">
            <span>That Endure.</span>
          </div>
        </div>

        {/* RIGHT — label + paragraph + cta sitting lower */}
        <div className="aboutHeroRight">
          <p className="aboutHeroLabel"></p>
          <p className="aboutHeroSub">
            Over a decade of luxury interiors and construction across Kenya
            and beyond built on trust, precision, and an unrelenting
            pursuit of beauty.
          </p>
          <a href="#about" className="aboutHeroCta">
            Our Story
            <span className="aboutHeroCtaArrow">→</span>
          </a>
        </div>

      </div>

    </section>
  );
};

export default AboutHero;