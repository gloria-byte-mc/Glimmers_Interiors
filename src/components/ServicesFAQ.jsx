import { useState, useEffect, useRef } from 'react';
import '../styles/services-faq.css'

const FAQS = [
  {
    q: 'How do I get started with Glimmers?',
    a: 'Simply reach out via our contact form or book a site visit through our calendar. We will schedule an initial consultation to understand your vision and walk you through our process.',
  },
  {
    q: 'Do you work with clients based abroad?',
    a: 'Absolutely. We offer virtual consultations via video call for diaspora clients. Our client portal keeps you fully updated on progress, with regular photo and video updates throughout the project.',
  },
  {
    q: 'What does the 3D render process involve?',
    a: 'After your needs assessment, our team develops detailed 3D renders of your space. These are presented for your review and approval before any construction begins. The render service is a paid step that ensures full alignment before we proceed.',
  },
  {
    q: 'How long does a typical project take?',
    a: 'Timelines vary based on the scope and complexity of the project. A detailed timeline with milestones is included in every contract, and you can track progress in real time via your client portal.',
  },
  {
    q: 'What is included in the client portal?',
    a: 'Your portal includes a project dashboard with milestones, progress photos and videos, document storage for contracts and approvals, and direct messaging with your project manager.',
  },
  {
    q: 'Do you handle both design and construction?',
    a: 'Yes — Glimmers is a full-service firm. We handle everything from initial concept and 3D renders through to full construction, interior design, and final styling. You have one dedicated team throughout.',
  },
];

const ServicesFAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);
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
    <section className="servicesFAQ" id="faq" ref={sectionRef}>

      {/* LEFT */}
      <div className="servicesFAQLeft">
        <p className="servicesFAQLabel">FAQ</p>
        <h2 className="servicesFAQHeading">
          Questions <em>Answered</em>
        </h2>
        <p className="servicesFAQDesc">
          Have more questions? We are always happy to walk you through our
          process and help you understand what working with Glimmers looks like.
        </p>
        <a href="/contact" className="servicesFAQCta">
          Talk To Us →
        </a>
      </div>

      {/* RIGHT — accordion */}
      <div className="servicesFAQRight">
        {FAQS.map((faq, i) => (
          <div
            key={i}
            className={`servicesFAQItem ${openIndex === i ? 'open' : ''}`}
          >
            <button
              className="servicesFAQQuestion"
              onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
            >
              <span className="servicesFAQQuestionText">{faq.q}</span>
              <span className="servicesFAQIcon">+</span>
            </button>
            <p className="servicesFAQAnswer">{faq.a}</p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default ServicesFAQ;