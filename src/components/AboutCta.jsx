import { useEffect, useRef } from 'react';
import '../styles/about-cta.css';

const AboutCta = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) entry.target.classList.add('inView'); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="aboutCta" ref={sectionRef}>
      <h2 className="aboutCtaHeading">
        Ready to Begin Your<br />
        <em>Glimmers</em> Story?
      </h2>
      <p className="aboutCtaBody">
        Whether you're building your dream home, designing a landmark commercial
        space, or planning from abroad we'd love to hear from you.
      </p>
      <a href="/contact" className="aboutCtaBtn">
        Get In Touch
        <span className="aboutCtaBtnArrow">→</span>
      </a>
    </section>
  );
};

export default AboutCta;