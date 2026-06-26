import { useEffect, useRef } from 'react';
import '../styles/about-team.css';

const TEAM = [
  { name: 'Amara Osei',     role: 'Founder & Creative Director', img: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=400&q=80' },
  { name: 'David Kamau',    role: 'Lead Architect',               img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80' },
  { name: 'Naledi Mokoena', role: 'Interior Design Lead',         img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80' },
  { name: 'James Mwangi',   role: 'Head of Construction',         img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80' },
];

const AboutTeam = () => {
  const headerRef = useRef(null);
  const cardRefs  = useRef([]);

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
    <section className="aboutTeam">
      <div className="aboutTeamHeader" ref={headerRef}>
        <p className="aboutTeamLabel">The People Behind The Work</p>
        <h2 className="aboutTeamHeading">Meet Our <em>professionals</em></h2>
      </div>
      <div className="aboutTeamGrid">
        {TEAM.map((member, i) => (
          <div key={i} className="aboutTeamCard" ref={el => cardRefs.current[i] = el}>
            <div className="aboutTeamImgWrap">
              <img src={member.img} alt={member.name} className="aboutTeamImg" />
            </div>
            <h3 className="aboutTeamName">{member.name}</h3>
            <p className="aboutTeamRole">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutTeam;