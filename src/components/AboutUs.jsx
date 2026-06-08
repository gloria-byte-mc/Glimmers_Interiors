import React, { useEffect, useRef } from 'react';
import '../styles/about-us.css'

// ── Placeholder images ──
const IMG_MAIN =
  'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80';
const IMG_SECONDARY =
  'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=400&q=80';

const AboutUs = () => {
  const sectionRef = useRef(null);

  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sectionRef.current.classList.add('in-view');
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="about" id="about" ref={sectionRef}>

    
      <div className="about__grid">

        {/* ════ LEFT ════ */}
        <div className="about__left">
          <p className="about__label">About Us</p>


          {/* Heading — mixed normal + italic like reference */}
          <h2 className="about__heading">
            <span className="normal">Design With </span>
           
            <span className="italic">Intention,</span>
            <br />
            <span className="normal">Built to Last.</span>
          </h2>

          {/* Body */}
          <p className="about__body">
            At Glimmers Interiors &amp; Construction, we believe every space
            tells a story. With over 10 years of expertise in luxury design and
            construction, we craft environments that are as functional as they
            are breathtaking from high-end residences to exclusive commercial
            spaces, built with precision and elegance. We also proudly serve
            diaspora clients, bringing their vision to life back home with full
            transparency and trust.
          </p>

          {/* Stats */}
          <div className="about__stats">
            <div className="about__stat">
              <span className="about__stat-number">10<span>+</span></span>
              <span className="about__stat-label">Years Experience</span>
            </div>
            <div className="about__stat">
              <span className="about__stat-number">200<span>+</span></span>
              <span className="about__stat-label">Projects Completed</span>
            </div>
            <div className="about__stat">
              <span className="about__stat-number">98<span>%</span></span>
              <span className="about__stat-label">Client Satisfaction</span>
            </div>
          </div>

          {/* CTA */}
          <a href="#contact" className="about__cta">
            Learn More
            <span className="about__cta-arrow">→</span>
          </a>

        </div>

      
        <div className="about__right">

          {/* Large image */}
          <img
            src={IMG_MAIN}
            alt="Glimmers luxury interior design"
            className="about__img-main"
          />

          {/* Small overlapping image */}
          <img
            src={IMG_SECONDARY}
            alt="Glimmers construction detail"
            className="about__img-secondary"
          />

          {/* Gold accent line */}
          <div className="about__accent" />

        </div>

      </div>

    </section>
  );
};

export default AboutUs;