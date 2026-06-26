import { useEffect, useRef } from 'react';
import { Sparkles } from 'lucide-react';
import '../styles/services-pricing.css';

const PLANS = [
  {
    plan: 'Essentials',
    name: 'Interior Design',
    desc: 'Perfect for clients looking to refresh and elevate their existing space with expert design guidance.',
    features: [
      'Needs assessment & consultation',
      'Concept development & mood board',
      'Material & finish selection',
      'Furniture curation & sourcing',
      'Final styling',
    ],
    featured: false,
  },
  {
    plan: 'Signature',
    name: 'Full Build & Design',
    desc: 'Our most popular package a complete end-to-end service from architectural design through to construction and interior finishing.',
    features: [
      'Everything in Essentials',
      'Architectural design & renders',
      '3D visualization & walkthroughs',
      'Full construction management',
      'Progress updates via client portal',
      'Smart home integration',
    ],
    featured: true,
  },
  {
    plan: 'Prestige',
    name: 'Commercial & Custom',
    desc: 'For discerning clients with complex commercial projects or highly bespoke residential requirements.',
    features: [
      'Everything in Signature',
      'Commercial space planning',
      'Brand-aligned design strategy',
      'Dedicated project manager',
      'Priority scheduling',
      'Post-completion support',
    ],
    featured: false,
  },
];

const ServicesPricing = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) sectionRef.current.classList.add('inView');
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="servicesPricing" id="pricing" ref={sectionRef}>

      <div className="servicesPricingHeader">
        <span className="servicesPricingLabel">Packages</span>
        <h2 className="servicesPricingHeading">
          Tailored To Your <em>Vision</em>
        </h2>
      </div>

      <div className="servicesPricingGrid">
        {PLANS.map(plan => (
          <div
            key={plan.plan}
            className={`servicesPricingCard ${plan.featured ? 'featured' : ''}`}
          >
            {plan.featured && (
              <span className="servicesPricingFeaturedBadge">Most Popular</span>
            )}

            <p className="servicesPricingPlan">{plan.plan}</p>
            <h3 className="servicesPricingName">{plan.name}</h3>
            <p className="servicesPricingDesc">{plan.desc}</p>

            <div className="servicesPricingDivider" />

            <ul className="servicesPricingFeatures">
        {plan.features.map(f => (
      <li key={f}>
  <Sparkles size={13} strokeWidth={1.5} />
  {f}
</li>
      ))}
      </ul>

            <a href="/contact" className="servicesPricingBtn">
              Get a Quote →
            </a>

          </div>
        ))}
      </div>

      <p className="servicesPricingNote">
        All packages are fully customizable. Contact us for a tailored quotation.
      </p>

    </section>
  );
};

export default ServicesPricing;