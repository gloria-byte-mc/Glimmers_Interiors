import { useEffect, useRef } from 'react';
import { Check } from 'lucide-react';
import '../styles/about-story.css'
const STORY_MAIN   = 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&w=800&q=80';
const STORY_SECOND = 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=400&q=80';

const POINTS = [
  {
    title: 'Over a decade of proven expertise',
    desc: '200+ completed projects across residential, commercial and interior design — each delivered on time and on budget.',
  },
  {
    title: 'Full-service, one team',
    desc: 'From architectural design and 3D renders through to full construction and interior styling — you deal with one dedicated team throughout.',
  },
  {
    title: 'Built for diaspora clients',
    desc: 'Our client portal gives you real-time progress updates, site photos and direct messaging — so you stay in control from anywhere in the world.',
  },
];

const AboutStory = () => {
  const imgRef  = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) entry.target.classList.add('inView'); },
      { threshold: 0.15 }
    );
    if (imgRef.current)  observer.observe(imgRef.current);
    if (textRef.current) observer.observe(textRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="aboutStory">

      {/* IMAGE */}
      <div className="aboutStoryImgWrap" ref={imgRef}>
        <div className="aboutStoryImgAccent" />
        <img src={STORY_MAIN}   alt="Glimmers story"  className="aboutStoryImgMain" />
        <img src={STORY_SECOND} alt="Glimmers detail" className="aboutStoryImgSecondary" />
      </div>

      {/* TEXT */}
      <div className="aboutStoryText" ref={textRef}>

        <p className="aboutStoryLabel">Our Story</p>

        <h2 className="aboutStoryHeading">
          Born From a Passion<br />
          for <em>Excellence.</em>
        </h2>

        <p className="aboutStoryBody">
          Glimmers was founded over a decade ago with a simple but bold idea
          that luxury design should be accessible to those who truly value it,
          and that every project deserves the same level of care, precision,
          and artistry. What began as a small interior design studio in Nairobi
          has grown into a full-service firm trusted by homeowners, business
          owners, and diaspora clients across the globe.
        </p>

        {/* TRUST POINTS */}
        <div className="aboutStoryPoints">
          {POINTS.map((point, i) => (
            <div className="aboutStoryPoint" key={i}>
              <Check size={15} strokeWidth={2} className="aboutStoryPointIcon" />
              <div className="aboutStoryPointText">
                <span className="aboutStoryPointTitle">{point.title}</span>
                <span className="aboutStoryPointDesc">{point.desc}</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA ROW */}
        <div className="aboutStoryCtaRow">
          <a href="/contact" className="aboutStoryCta">
            Start Your Project →
          </a>
          <a href="/portfolio" className="aboutStoryCtaSecondary">
            View Our Work
          </a>
        </div>

      </div>

    </section>
  );
};

export default AboutStory;