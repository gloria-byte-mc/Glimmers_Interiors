import { useEffect, useRef } from 'react';
import '../styles/about-stats.css';

const STATS = [
  { number: '10', suffix: '+', label: 'Years of Experience' },
  { number: '200', suffix: '+', label: 'Projects Completed'  },
  { number: '98',  suffix: '%', label: 'Client Satisfaction'  },
  { number: '12',  suffix: '+', label: 'Diaspora Projects'    },
];

const AboutStats = () => {
  const itemRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('inView'); }),
      { threshold: 0.1 }
    );
    itemRefs.current.filter(Boolean).forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="aboutStats">
      {STATS.map((s, i) => (
        <div key={i} className="aboutStatItem" ref={el => itemRefs.current[i] = el}>
          <span className="aboutStatNumber">
            {s.number}<span>{s.suffix}</span>
          </span>
          <span className="aboutStatLabel">{s.label}</span>
        </div>
      ))}
    </section>
  );
};

export default AboutStats;