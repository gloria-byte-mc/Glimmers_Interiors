import { useEffect, useRef } from 'react';
import '../styles/about-story.css';

const STORY_MAIN   = 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&w=800&q=80';
const STORY_SECOND = 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=400&q=80';

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
      <div className="aboutStoryImgWrap" ref={imgRef}>
        <img src={STORY_MAIN}   alt="Glimmers story"  className="aboutStoryImgMain"      />
        <img src={STORY_SECOND} alt="Glimmers detail" className="aboutStoryImgSecondary" />
      </div>

      <div className="aboutStoryText" ref={textRef}>
        <p className="aboutStoryLabel">Our Story</p>
        <h2 className="aboutStoryHeading">
          Born From a<br />
          <em>Passion</em> for<br />
          Excellence.
        </h2>
        <p className="aboutStoryBody">
          Glimmers was founded over a decade ago with a simple but bold idea
          that luxury design should be accessible to those who truly value it,
          and that every project, regardless of scale, deserves the same level
          of care, precision, and artistry.
        </p>
        <p className="aboutStoryBody">
          What began as a small interior design studio in Nairobi has grown into
          a full-service interiors and construction firm trusted by homeowners,
          business owners, and diaspora clients across the globe. Our team of
          architects, designers, and builders share one obsession spaces that
          make people feel something.
        </p>
      </div>
    </section>
  );
};

export default AboutStory;