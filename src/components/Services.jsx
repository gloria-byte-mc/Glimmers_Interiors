import React, { useEffect, useRef } from 'react';
import '../styles/services.css'

const Services = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sectionRef.current.classList.add('in-view');
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="services" id="services" ref={sectionRef}>

      {/* ════ TOP ROW: text | card 01 | card 02 ════ */}
      <div className="services__top">

        {/* Left text */}
        <div className="services__left">
          <p className="services__label">Services</p>
          <h2 className="services__heading">
            <span className="normal">Design That</span>
            <span className="italic">Resonates.</span>
          </h2>
          <p className="services__body">
            We offer a full suite of luxury design and construction services
            from bespoke high-end homes and exclusive commercial environments
            to stunning interiors and precise architectural renders.
          </p>
          <a href="#contact" className="services__cta">
            Get In Touch
            <span className="services__cta-arrow">→</span>
          </a>
        </div>

        {/* Card 01 */}
        <div className="services__card">
          <img src="https://images.unsplash.com/photo-1618221469555-7f3ad97540d6?auto=format&fit=crop&w=600&q=80" alt="High-End Homes" />
          <div className="services__card-overlay" />
          <span className="services__card-number">01</span>
          <div className="services__card-bottom">
            <span className="services__card-name">High-End Homes</span>
            <span className="services__card-link">→</span>
          </div>
        </div>

        {/* Card 02 */}
        <div className="services__card">
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80" alt="Commercial Spaces" />
          <div className="services__card-overlay" />
          <span className="services__card-number">02</span>
          <div className="services__card-bottom">
            <span className="services__card-name">Commercial Spaces</span>
            <span className="services__card-link">→</span>
          </div>
        </div>

      </div>

      {/* ════ BOTTOM ROW: card 03 | card 04 | right text ════ */}
      <div className="services__bottom">

        {/* Card 03 */}
        <div className="services__card">
          <img src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&w=600&q=80" alt="Interior Design" />
          <div className="services__card-overlay" />
          <span className="services__card-number">03</span>
          <div className="services__card-bottom">
            <span className="services__card-name">Interior Design</span>
            <span className="services__card-link">→</span>
          </div>
        </div>

        {/* Card 04 */}
        <div className="services__card">
          <img src="https://images.unsplash.com/photo-1503174971373-b1f69850bded?auto=format&fit=crop&w=600&q=80" alt="Architectural Renders" />
          <div className="services__card-overlay" />
          <span className="services__card-number">04</span>
          <div className="services__card-bottom">
            <span className="services__card-name">Architectural Renders</span>
            <span className="services__card-link">→</span>
          </div>
        </div>

        {/* Right text gap */}
        <div className="services__bottom-text">
          <p>
            Crafting environments that inspire with precision and elegance at every stage of the journey.
          </p>
        </div>

      </div>

    </section>
  );
};

export default Services;