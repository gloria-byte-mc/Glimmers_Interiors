import { useEffect, useRef } from 'react';
import '../styles/about-values.css';

const VALUES = [
  { number: '01', title: 'Luxury Without Compromise',  body: 'Every material, every finish, every detail is chosen with intention. We never cut corners only refine them.' },
  { number: '02', title: 'Client-Centered Design',     body: 'Your vision drives everything. We listen deeply, question boldly, and craft spaces that reflect who you truly are.' },
  { number: '03', title: 'Transparency & Trust',       body: 'From the first consultation to the final handover, we keep you informed, involved, and confident every step of the way.' },
  { number: '04', title: 'Precision in Execution',     body: 'Great design is only as good as the build. Our construction team brings the same obsession with quality to every surface.' },
  { number: '05', title: 'Diaspora-First Thinking',    body: 'We understand the trust it takes to build from abroad. Our portal and communication are built to give you peace of mind across any distance.' },
  { number: '06', title: 'Timeless Over Trendy',       body: 'We design for decades, not seasons. Every Glimmers space is built to age beautifully and hold its meaning long after completion.' },
];

const AboutValues = () => {
  const headerRef  = useRef(null);
  const cardRefs   = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('inView'); }),
      { threshold: 0.1 }
    );
    if (headerRef.current) observer.observe(headerRef.current);
    cardRefs.current.filter(Boolean).forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="aboutValues">
      <div className="aboutValuesHeader" ref={headerRef}>
        <p className="aboutValuesLabel">What We Stand For</p>
        <h2 className="aboutValuesHeading">Our <em>Core</em> Values</h2>
      </div>
      <div className="aboutValuesGrid">
        {VALUES.map((v, i) => (
          <div key={i} className="aboutValueCard" ref={el => cardRefs.current[i] = el}>
            <span className="aboutValueNumber">{v.number}</span>
            <h3 className="aboutValueTitle">{v.title}</h3>
            <p className="aboutValueBody">{v.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutValues;