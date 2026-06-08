import { useEffect, useRef } from 'react';
import '../styles/about-mission.css';

const AboutMission = () => {
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
    <section className="aboutMission">
      <div className="aboutMissionLeft" ref={leftRef}>
        <p className="aboutMissionLabel">Our Mission</p>
        <h2 className="aboutMissionHeading">
          Design With<br />
          <em>Intention,</em><br />
          Built to Last.
        </h2>
        <div className="aboutMissionAccent" />
      </div>

      <div className="aboutMissionRight" ref={rightRef}>
        <p className="aboutMissionStatement">
          "Crafting timeless designs where every detail shines."
        </p>
        <p className="aboutMissionBody">
          At Glimmers, we believe a great space is more than aesthetics it's a
          reflection of who you are and how you want to live. Every project begins
          with deep listening and ends with a space that feels inevitable, as though
          it could never have been any other way.
        </p>
        <p className="aboutMissionBody">
          We serve clients across Kenya and the diaspora with the same dedication
          combining world-class design sensibility with local craftsmanship and
          full transparency from brief to build.
        </p>
      </div>
    </section>
  );
};

export default AboutMission;