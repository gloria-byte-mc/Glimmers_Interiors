import { useEffect, useRef } from 'react';
import '../styles/about-vision.css';

const AboutVision = () => {
  const leftRef  = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) entry.target.classList.add('inView'); },
      { threshold: 0.15 }
    );
    if (leftRef.current)  observer.observe(leftRef.current);
    if (rightRef.current) observer.observe(rightRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="aboutVision">
      <div className="aboutVisionLeft" ref={leftRef}>
        <p className="aboutVisionLabel">Our Vision</p>
        <h2 className="aboutVisionHeading">
          Spaces That<br />
          <em>Inspire,</em><br />
          Built to Endure.
        </h2>
        <div className="aboutVisionAccent" />
      </div>

      <div className="aboutVisionRight" ref={rightRef}>
        <p className="aboutVisionStatement">
          "A future where every space tells a story of elegance and belonging."
        </p>
        <p className="aboutVisionBody">
          We see Glimmers becoming Africa's defining name in luxury design,
          a studio whose work is recognised not just for how it looks, but
          for how it makes people feel at home.
        </p>
        <p className="aboutVisionBody">
          As we grow across Kenya and into new markets, that vision stays
          rooted in craftsmanship, innovation, and genuine respect for the
          people and cultures we design for.
        </p>
      </div>
    </section>
  );
};

export default AboutVision;