import React, { useState } from 'react';
import '../styles/process-flow.css'

const BG_IMAGE =
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1920&q=80';

const STEPS = [
  {
    number: '01',
    total: '05',
    title: 'Appointment & Site Visit',
    description:
      'We begin with a consultation to understand your vision. Our team visits the site to assess the space and lay the groundwork for your project.',
    image:
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=600&q=80',
  },
  {
    number: '02',
    total: '05',
    title: 'Needs Assessment',
    description:
      'We dive deep into your preferences, lifestyle, and goals gathering every detail needed to craft a space that is uniquely yours.',
    image:
      'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&q=80',
  },
  {
    number: '03',
    total: '05',
    title: '3D Designs & Renders',
    description:
      'We refine every element, curating furnishings, lighting, and finishes with quiet precision shaping a space that feels balanced and complete.',
    image:
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80',
  },
  {
    number: '04',
    total: '05',
    title: 'Quotation & Contract',
    description:
      'A comprehensive quotation is presented with full transparency. Once approved, contracts are signed and the project is officially set in motion.',
    image:
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=600&q=80',
  },
  {
    number: '05',
    total: '05',
    title: 'Construction & Updates',
    description:
      'Building begins with regular progress updates via your client portal keeping you informed and in control every step of the way.',
    image:
      'https://images.unsplash.com/photo-1503174971373-b1f69850bded?auto=format&fit=crop&w=600&q=80',
  },
];

const ProcessFlow = () => {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = (idx) => {
    if (animating || idx === current) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent(idx);
      setAnimating(false);
    }, 400);
  };

  const goToNext = () => {
    const next = (current + 1) % STEPS.length;
    goTo(next);
  };

  const step = STEPS[current];

  return (
    <section className="process" id="process">

      {/* BACKGROUND */}
      <img src={BG_IMAGE} alt="Glimmers process" className="processBg" />
      <div className="processOverlay" />

      {/* HEADER */}
      <div className="processHeader">
        <p className="processLabel">Process</p>
        <h2 className="processHeading">
          <em>O</em>ur Approach
        </h2>
      </div>

      {/* URGENCY BAR */}
      <p className="processUrgency">
        Currently accepting Q3 2025 projects
      </p>

      {/* STEP TRAIL */}
      <div className="processTrail">
        {STEPS.map((s, i) => (
          <React.Fragment key={i}>
            <div className="processTrailStep">
              <button
                className={`processTrailDot ${i === current ? 'active' : i < current ? 'done' : ''}`}
                onClick={() => goTo(i)}
              />
              <span className={`processTrailLabel ${i === current ? 'active' : ''}`}>
                {s.title}
              </span>
            </div>
            {i < STEPS.length - 1 && (
              <div className={`processTrailLine ${i < current ? 'done' : ''}`} />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* SIDE LABELS */}
      <span className="processSideLeft">Design in steps</span>

      <button className="processSideRight" onClick={goToNext}>
        Scroll to explore ↓
      </button>

      {/* CENTER CARD */}
      <div className={`processCard ${animating ? 'exiting' : ''}`}>

        <p className="processStep">
          {step.number} / {step.total}
        </p>

        <img
          src={step.image}
          alt={step.title}
          className="processCardImg"
        />

        <h3 className="processCardTitle">{step.title}</h3>

        <p className="processCardDesc">{step.description}</p>

        {current === STEPS.length - 1 && (
          <a href="/contact" className="processBookCta">
            Book a Consultation →
          </a>
        )}

      </div>

      {/* CHEVRON BUTTON */}
      <button className="processChevron" onClick={goToNext}>
        <span>Scroll to explore</span>
        <span className="processChevronIcon">↓</span>
      </button>

    </section>
  );
};

export default ProcessFlow;