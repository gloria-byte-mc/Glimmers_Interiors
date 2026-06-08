import { useEffect, useRef } from 'react';
import '../styles/services-cta.css'

const BG_IMAGE =
  'https://images.unsplash.com/photo-1503174971373-b1f69850bded?auto=format&fit=crop&w=1920&q=80';

const ServicesCTA = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) sectionRef.current.classList.add('inView');
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="servicesCTA" ref={sectionRef}>

      <img src={BG_IMAGE} alt="Glimmers CTA" className="servicesCTABg" />
      <div className="servicesCTAOverlay" />

      <div className="servicesCTAContent">
        <p className="servicesCTALabel">Ready To Begin?</p>
        <h2 className="servicesCTAHeading">
          Let's Build Something <em>Extraordinary</em>
        </h2>
        <p className="servicesCTADesc">
          Whether you have a clear vision or are just starting to explore the
          possibilities our team is ready to guide you every step of the way.
        </p>
        <div className="servicesCTABtns">
          <a href="/contact" className="servicesCTABtnPrimary">
            Book a Consultation →
          </a>
          <a href="/portfolio" className="servicesCTABtnSecondary">
            View Our Work
          </a>
        </div>
      </div>

    </section>
  );
};

export default ServicesCTA;