import { useEffect, useRef } from 'react';
import { Shield, Clock, Globe, Award, Layers, HeartHandshake } from 'lucide-react';
import '../styles/why-choose-us.css'

const STATS = [
  { number: '10', suffix: '+', label: 'Years Experience' },
  { number: '200', suffix: '+', label: 'Projects Completed' },
  { number: '98', suffix: '%', label: 'Client Satisfaction' },
  { number: 'KE', suffix: ' & Global', label: 'Clients Served' },
];

const REASONS = [
  {
    icon: <Award size={24} strokeWidth={1.5} />,
    number: '01',
    title: 'Luxury Without Compromise',
    desc: 'Every project is executed to the highest standard — from materials and finishes to project management and delivery. We never cut corners.',
    tag: 'Premium Quality',
  },
  {
    icon: <Clock size={24} strokeWidth={1.5} />,
    number: '02',
    title: 'On Time, Every Time',
    desc: 'We deliver on our promises. Detailed timelines, milestone tracking, and proactive communication mean your project stays on schedule.',
    tag: 'Reliable Delivery',
  },
  {
    icon: <Globe size={24} strokeWidth={1.5} />,
    number: '03',
    title: 'Diaspora-Ready Service',
    desc: 'Based abroad? No problem. Our client portal gives you real-time progress updates, photo and video reports, and direct access to your project manager — from anywhere in the world.',
    tag: 'Virtual Consultations Available',
  },
  {
    icon: <Layers size={24} strokeWidth={1.5} />,
    number: '04',
    title: 'Full-Service Capability',
    desc: 'From concept to construction, we handle everything under one roof — architecture, interior design, 3D renders, and full construction management.',
    tag: 'End-to-End Service',
  },
  {
    icon: <Shield size={24} strokeWidth={1.5} />,
    number: '05',
    title: 'Transparent & Trustworthy',
    desc: 'Clear contracts, itemised quotations, and no hidden costs. You know exactly what you are paying for — and why — at every stage.',
    tag: 'Full Transparency',
  },
  {
    icon: <HeartHandshake size={24} strokeWidth={1.5} />,
    number: '06',
    title: 'Your Vision, Our Mission',
    desc: 'We listen before we design. Every Glimmers project begins with a deep understanding of your lifestyle, goals, and aspirations — so the result is uniquely yours.',
    tag: 'Client-First Approach',
  },
];

const WhyChooseUs = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) sectionRef.current.classList.add('inView');
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="whyChooseUs" id="why" ref={sectionRef}>

      {/* HEADER */}
      <div className="whyChooseUsHeader">
        <div>
          <span className="whyChooseUsLabel">Why Glimmers</span>
          <h2 className="whyChooseUsHeading">
            The Standard You <em>Deserve</em>
          </h2>
        </div>
        <p className="whyChooseUsSubtext">
          Choosing the right firm for your luxury project is one of the most
          important decisions you will make. Here is why hundreds of clients
          across Kenya and the diaspora trust Glimmers to deliver.
        </p>
      </div>

      {/* STATS ROW */}
      <div className="whyChooseUsStats">
        {STATS.map(stat => (
          <div className="whyChooseUsStat" key={stat.label}>
            <span className="whyChooseUsStatNumber">
              {stat.number}<span>{stat.suffix}</span>
            </span>
            <span className="whyChooseUsStatLabel">{stat.label}</span>
          </div>
        ))}
      </div>

    </section>
  );
};

export default WhyChooseUs;