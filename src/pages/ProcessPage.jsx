import { useEffect, useRef } from 'react';
import { Check, Clock, FileText, Ruler, HardHat, Video } from 'lucide-react';
import Navbar from '../components/Navbar';
import '../styles/process-page.css'
import Footer from '../components/Footer';

const BG_HERO = 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1920&q=80';
const BG_CTA  = 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&w=1920&q=80';

const STEPS = [
  {
    number: '01',
    title: 'Book a Consultation',
    tag: 'Free - No Obligation',
    desc: 'Every project starts with a conversation. Reach out via our contact form, WhatsApp, or book directly through our calendar. We respond within 24 hours.',
    details: [
      'In-person or virtual consultation available',
      'Diaspora clients served via video call',
      'We respond within 24 hours',
    ],
    icon: <Video size={14} strokeWidth={1.5} />,
  },
  {
    number: '02',
    title: 'Site Visit & Needs Assessment',
    tag: 'Week 1',
    desc: 'Our team visits your site to assess the space and understand your vision, lifestyle, and goals in detail. This forms the foundation of everything we design.',
    details: [
      'Full site assessment by our lead designer',
      'Deep dive into your preferences and goals',
      'Initial feasibility and timeline discussion',
    ],
    icon: <Ruler size={14} strokeWidth={1.5} />,
  },
  {
    number: '03',
    title: '3D Designs & Renders',
    tag: 'Weeks 2-4 · Paid Step',
    desc: 'We develop detailed 3D renders of your space - photorealistic visualizations that let you see and approve the final look before a single brick is laid. Changes are made at this stage, not during construction.',
    details: [
      'Photorealistic interior and exterior renders',
      'Full revision rounds until you are satisfied',
      'Written approval before construction begins',
    ],
    icon: <FileText size={14} strokeWidth={1.5} />,
  },
  {
    number: '04',
    title: 'Quotation & Contract',
    tag: 'Week 4-5',
    desc: 'A comprehensive, itemised quotation is presented - no hidden costs, no surprises. Once approved, a detailed contract is signed covering scope, timelines, milestones, and payment schedule.',
    details: [
      'Fully itemised quotation transparent pricing',
      'Flexible payment plan options available',
      'Contract covers scope, timeline and quality standards',
    ],
    icon: <FileText size={14} strokeWidth={1.5} />,
  },
  {
    number: '05',
    title: 'Construction & Progress Updates',
    tag: 'Ongoing',
    desc: 'Building begins with your dedicated project manager overseeing every stage. You receive regular photo and video updates via your private client portal - so you are always in the loop, wherever you are.',
    details: [
      'Dedicated project manager throughout',
      'Real-time updates via client portal',
      'Milestone tracking and progress reports',
    ],
    icon: <HardHat size={14} strokeWidth={1.5} />,
  },
];

const ProcessPage = () => {
  const stepsRef = useRef(null);
  const ctaRef   = useRef(null);
  const stepRefs = useRef([]);

  useEffect(() => {
    const observers = [];

    [stepsRef, ctaRef].forEach(ref => {
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) entry.target.classList.add('inView'); },
        { threshold: 0.1 }
      );
      if (ref.current) { observer.observe(ref.current); observers.push(observer); }
    });

    stepRefs.current.forEach((el, i) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('inView'), i * 120);
          }
        },
        { threshold: 0.1 }
      );
      if (el) { observer.observe(el); observers.push(observer); }
    });

    return () => observers.forEach(o => o.disconnect());
  }, []);

  return (
    <div>

      {/*  HERO  */}
      <section className="processPageHero">
        <img src={BG_HERO} alt="Glimmers process" className="processPageHeroBg" />
        <div className="processPageHeroOverlay" />
        <div className="processPageHeroGrain" />

        <Navbar />

        <div className="processPageHeroContent">

   <div className="processPageHeroLeft">
  <p className="processPageHeroLabel">Our Process</p>
  <div className="processPageHeroLineOne">
    <span>How We Work.</span>
  </div>
</div>

          <div className="processPageHeroRight">
            <div className="processPageHeroBadge">
              <span className="processPageHeroBadgeDot" />
              Currently accepting new projects
            </div>
            <p className="processPageHeroSub">
              A clear, transparent five-step process designed to give you
              confidence, control, and a finished space that exceeds
              your expectations from first consultation to final reveal.
            </p>
            <a href="/contact" className="processPageHeroCta">
              Book a Free Consultation →
            </a>
          </div>

        </div>
      </section>

      {/* ════ INTRO STRIP ════ */}
      <div className="processPageIntro">
        <p className="processPageIntroText">
          Most projects begin within <em>2 weeks</em> of your first consultation -
          and are delivered on time, every time.
        </p>
        <div className="processPageIntroStats">
          <div className="processPageIntroStat">
            <span className="processPageIntroStatNum">5<span> Steps</span></span>
            <span className="processPageIntroStatLabel">Clear Process</span>
          </div>
          <div className="processPageIntroStat">
            <span className="processPageIntroStatNum">24<span>hrs</span></span>
            <span className="processPageIntroStatLabel">Response Time</span>
          </div>
          <div className="processPageIntroStat">
            <span className="processPageIntroStatNum">98<span>%</span></span>
            <span className="processPageIntroStatLabel">On-Time Delivery</span>
          </div>
        </div>
      </div>

      {/* ════ STEPS ════ */}
      <section className="processPageSteps" ref={stepsRef}>

        <div className="processPageStepsHeader">
          <div>
            <span className="processPageStepsLabel">The Process</span>
            <h2 className="processPageStepsHeading">
              Five Steps to Your <em>Dream Space</em>
            </h2>
          </div>
          <p className="processPageStepsSubtext">
            We have refined our process over 10 years and 200+ projects to make
            it as smooth, transparent, and stress-free as possible - for both
            local and diaspora clients.
          </p>
        </div>

        <div className="processPageStepsList">
          {STEPS.map((step, i) => (
            <div
              key={step.number}
              className="processPageStep"
              ref={el => stepRefs.current[i] = el}
            >
              <span className="processPageStepNum">{step.number}</span>

              <div className="processPageStepLeft">
                <h3 className="processPageStepTitle">{step.title}</h3>
                <span className="processPageStepTag">✦ {step.tag}</span>
              </div>

              <div className="processPageStepRight">
                <p className="processPageStepDesc">{step.desc}</p>
                <div className="processPageStepDetails">
                  {step.details.map((d, j) => (
                    <div className="processPageStepDetail" key={j}>
                      <Check size={13} strokeWidth={2} />
                      {d}
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </section>

      {/* ════ CTA ════ */}
      <section className="processPageCta" ref={ctaRef}>
        <img src={BG_CTA} alt="Start your project" className="processPageCtaBg" />
        <div className="processPageCtaOverlay" />
        <div className="processPageCtaContent">
          <p className="processPageCtaLabel">Ready To Begin?</p>
          <h2 className="processPageCtaHeading">
            Your Project Starts With <em>One Conversation</em>
          </h2>
          <p className="processPageCtaDesc">
            Book a free consultation today in person or virtually.
            We typically respond within 24 hours and most projects
            begin within 2 weeks of your first call.
          </p>
          <div className="processPageCtaBtns">
            <a href="/contact" className="processPageCtaBtnPrimary">
              Book a Free Consultation →
            </a>
            <a href="/portfolio" className="processPageCtaBtnSecondary">
              View Our Work
            </a>
          </div>
        </div>
      </section>

<Footer />
    </div>
  );
};

export default ProcessPage;