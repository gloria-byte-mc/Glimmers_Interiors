import React, { useEffect, useRef } from 'react';
import '../styles/services.css'

const CARDS = [
  {
    number: '01',
    name: 'High-End Homes',
    desc: 'Bespoke luxury residences crafted to reflect your lifestyle from foundations to the finest finishes.',
    from: 'From KES 2,000,000',
    img: 'https://images.unsplash.com/photo-1618221469555-7f3ad97540d6?auto=format&fit=crop&w=600&q=80',
    link: '/services#homes',
  },
  {
    number: '02',
    name: 'Commercial Spaces',
    desc: 'Exclusive commercial environments designed to inspire, impress, and perform at the highest level.',
    from: 'From KES 1,500,000',
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80',
    link: '/services#commercial',
  },
  {
    number: '03',
    name: 'Interior Design',
    desc: 'Curated interiors where every detail texture, tone, and light is intentional and timeless.',
    from: 'From KES 150,000',
    img: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&w=600&q=80',
    link: '/services#interiors',
  },
  {
    number: '04',
    name: 'Architectural Renders',
    desc: 'Photorealistic 3D renders that bring your vision to life before a single brick is laid.',
    from: 'From KES 80,000',
    img: 'https://images.unsplash.com/photo-1503174971373-b1f69850bded?auto=format&fit=crop&w=600&q=80',
    link: '/services#renders',
  },
];

const Services = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) sectionRef.current.classList.add('in-view');
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const Card = ({ card }) => (
    <div className="services__card">
      {/* Top row: number left, image right */}
      <div className="services__card-top">
        <span className="services__card-number">{card.number}</span>
        <div className="services__card-img-wrap">
          <img src={card.img} alt={card.name} />
        </div>
      </div>

      {/* Bottom: name always visible, desc+price+arrow revealed on hover */}
      <div className="services__card-bottom">
        <span className="services__card-name">{card.name}</span>
        <div className="services__card-reveal">
          <p className="services__card-desc">{card.desc}</p>
          <div className="services__card-footer">
            <span className="services__card-from">{card.from}</span>
            <a href={card.link} className="services__card-link">→</a>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="services" id="services" ref={sectionRef}>

      {/* ════ TOP ROW ════ */}
      <div className="services__top">
        <div className="services__left">
          <p className="services__label">Services</p>
          <h2 className="services__heading">
            <span className="normal">Design That</span>
            <span className="italic">Resonates.</span>
          </h2>
          <p className="services__body">
            We offer a full suite of luxury design and construction services —
            from bespoke high-end homes and exclusive commercial environments
            to stunning interiors and precise architectural renders.
          </p>
          <a href="/services" className="services__cta">
            View All Services
            <span className="services__cta-arrow">→</span>
          </a>
        </div>

        <Card card={CARDS[0]} />
        <Card card={CARDS[1]} />
      </div>

      {/* ════ BOTTOM ROW ════ */}
      <div className="services__bottom">
        <Card card={CARDS[2]} />
        <Card card={CARDS[3]} />
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