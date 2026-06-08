import Navbar from './Navbar';
import '../styles/contact-hero.css';

const HERO_IMG = 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1920&q=80';

const ContactHero = () => {
  return (
    <section className="contactHero">

      {/* BACKGROUND */}
      <img src={HERO_IMG} alt="Glimmers contact" className="contactHeroBg" />
      <div className="contactHeroOverlay" />
      <div className="contactHeroGrain" />

      {/* NAVBAR */}
      <Navbar />

      {/* CONTENT — split layout */}
      <div className="contactHeroContent">

        {/* LEFT — two heading lines */}
        <div className="contactHeroLeft">
          <div className="contactHeroLineOne">
            <span>Let's Begin A</span>
          </div>
          <div className="contactHeroLineTwo">
            <span>Conversation.</span>
          </div>
        </div>

        {/* RIGHT — label + paragraph + CTA sitting lower */}
        <div className="contactHeroRight">
          <p className="contactHeroLabel">Contact Us</p>
          <p className="contactHeroSub">
            Tell us about your space, your ideas, and your aspirations.
            We'll guide you through the next steps with care and intention.
          </p>
          <a href="#contact" className="contactHeroCta">
            Get In Touch
            <span className="contactHeroCtaArrow">→</span>
          </a>
        </div>

      </div>

    </section>
  );
};

export default ContactHero;