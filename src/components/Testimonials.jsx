import React, { useEffect, useRef } from 'react';
import '../styles/testimonials.css'

const CARDS = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=600&q=80',
    alt: 'Luxury living space',
    title: 'Spaces That Breathe',
    quote: '"Glimmers turned our house into a home we are truly proud of. Every detail was perfect."',
    client: 'James & Amara K.',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&w=600&q=80',
    alt: 'Interior textures',
    title: 'Textures of Stillness',
    quote: '"The team understood our vision from day one. Truly world-class craftsmanship."',
    client: 'David M.',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?auto=format&fit=crop&w=600&q=80',
    alt: 'Light through windows',
    title: 'Light as a Material',
    quote: '"Working with Glimmers was seamless even from abroad. Our home exceeded expectations."',
    client: 'Sandra O. - Diaspora Client',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80',
    alt: 'Elegant architecture',
    title: 'The Beauty of Restraint',
    quote: '"From the first site visit to the final reveal professional, transparent, and stunning."',
    client: 'The Wanjiku Family',
  },
];

const Testimonials = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sectionRef.current.classList.add('inView');
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="testimonials" id="testimonials" ref={sectionRef}>

      {/* HEADER */}
      <div className="testimonialsHeader">
        <p className="testimonialsLabel">Testimonials</p>
        <h2 className="testimonialsHeading">
          Notes From The <em>S</em>tudio
        </h2>
      </div>

      <div className="testimonialsGrid">

        {/* ITEM 1 — full image fills entire grid height */}
      <div className="testimonialsItem testimonialsItem1">
  <div className="itemImgWrap item1Wrap">
    <img src={CARDS[0].image} alt={CARDS[0].alt} />
    <div className="itemOverlay">
      <p className="overlayTitle">{CARDS[0].title}</p>
      <p className="overlayQuote">{CARDS[0].quote}</p>
      <p className="overlayClient">{CARDS[0].client}</p>
      <a href="#contact" className="overlayCta">Get In Touch →</a>
    </div>
  </div>
  <p className="itemTitle">{CARDS[0].title}</p>
</div>

        {/* ITEM 2 — image specific height, title below, aligned bottom */}
        <div className="testimonialsItem testimonialsItem2">
          <div className="itemImgWrap">
            <img src={CARDS[1].image} alt={CARDS[1].alt} />
            <div className="itemOverlay">
              <p className="overlayTitle">{CARDS[1].title}</p>
              <p className="overlayQuote">{CARDS[1].quote}</p>
              <p className="overlayClient">{CARDS[1].client}</p>
              <a href="#contact" className="overlayCta">Get In Touch →</a>
            </div>
          </div>
          <p className="itemTitle">{CARDS[1].title}</p>
        </div>

        {/* ITEM 3 — space top, shorter image, title below, aligned bottom */}
        <div className="testimonialsItem testimonialsItem3">
          <div className="itemImgWrap">
            <img src={CARDS[2].image} alt={CARDS[2].alt} />
            <div className="itemOverlay">
              <p className="overlayTitle">{CARDS[2].title}</p>
              <p className="overlayQuote">{CARDS[2].quote}</p>
              <p className="overlayClient">{CARDS[2].client}</p>
              <a href="#contact" className="overlayCta">Get In Touch →</a>
            </div>
          </div>
          <p className="itemTitle">{CARDS[2].title}</p>
        </div>

        {/* ITEM 4 — same as item 2 */}
        <div className="testimonialsItem testimonialsItem4">
          <div className="itemImgWrap">
            <img src={CARDS[3].image} alt={CARDS[3].alt} />
            <div className="itemOverlay">
              <p className="overlayTitle">{CARDS[3].title}</p>
              <p className="overlayQuote">{CARDS[3].quote}</p>
              <p className="overlayClient">{CARDS[3].client}</p>
              <a href="#contact" className="overlayCta">Get In Touch →</a>
            </div>
          </div>
          <p className="itemTitle">{CARDS[3].title}</p>
        </div>

      </div>

    </section>
  );
};

export default Testimonials;