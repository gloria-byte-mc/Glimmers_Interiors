import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import '../styles/services-detail.css'

const SERVICES = [
  {
    number: '01',
    name: 'High-End Homes',
    description:
      'We design and build bespoke luxury residences that reflect your personality and lifestyle. Every detail from the foundation to the finishing touches is crafted with precision and intention.',
    features: [
      'Custom architectural design',
      'Full construction management',
      'Interior design & furnishing',
      'Smart home integration',
      'Landscape & exterior design',
    ],
    image: 'https://images.unsplash.com/photo-1618221469555-7f3ad97540d6?auto=format&fit=crop&w=800&q=80',
    reverse: false,
  },
  {
    number: '02',
    name: 'Commercial Spaces',
    description:
      'We transform commercial environments into spaces that inspire productivity, leave lasting impressions, and reflect your brand identity from offices to hospitality venues.',
    features: [
      'Office & workspace design',
      'Retail & hospitality interiors',
      'Brand-aligned aesthetics',
      'Space planning & optimization',
      'Project management end-to-end',
    ],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    reverse: true,
  },
  {
    number: '03',
    name: 'Interior Design',
    description:
      'Our interior design service covers every element of your space from concept development and material selection to furniture curation and final styling creating environments that feel both beautiful and livable.',
    features: [
      'Concept development & mood boards',
      'Material & finish selection',
      'Custom furniture curation',
      'Lighting design',
      'Final styling & installation',
    ],
    image: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&w=800&q=80',
    reverse: false,
  },
  {
    number: '04',
    name: 'Architectural Renders',
    description:
      'Before a single brick is laid, we bring your vision to life through stunning 3D architectural renders giving you a clear, photorealistic preview of your completed project.',
    features: [
      'Photorealistic 3D renders',
      'Interior & exterior visualizations',
      'Virtual walkthroughs',
      'Design iteration support',
      'Client approval process',
    ],
    image: 'https://images.unsplash.com/photo-1503174971373-b1f69850bded?auto=format&fit=crop&w=800&q=80',
    reverse: true,
  },
];

const ServicesDetail = () => {
  const rowRefs = useRef([]);

  useEffect(() => {
    const observers = rowRefs.current.map((row, i) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('inView');
            }, i * 100);
          }
        },
        { threshold: 0.15 }
      );
      if (row) observer.observe(row);
      return observer;
    });
    return () => observers.forEach(o => o.disconnect());
  }, []);

  return (
    <section className="servicesDetail" id="servicesDetail">

      <p className="servicesDetailLabel">What We Offer</p>
      <h2 className="servicesDetailHeading">
        Every Service, <em>Crafted With Care</em>
      </h2>

      {SERVICES.map((service, i) => (
        <div
          key={service.number}
          className={`servicesDetailRow ${service.reverse ? 'reverse' : ''}`}
          ref={el => rowRefs.current[i] = el}
        >
          <img
            src={service.image}
            alt={service.name}
            className="servicesDetailImg"
          />

          <div className="servicesDetailText">
            <span className="servicesDetailNumber">{service.number}</span>
            <h3 className="servicesDetailName">{service.name}</h3>
            <p className="servicesDetailDesc">{service.description}</p>
           <ul className="servicesDetailFeatures">
  {service.features.map(f => (
   <li key={f}>
  <ArrowRight size={13} strokeWidth={1.5} />
  {f}
</li>
  ))}
</ul>
            <a href="#contact" className="servicesDetailCta">
              Get Started →
            </a>
          </div>

        </div>
      ))}

    </section>
  );
};

export default ServicesDetail;