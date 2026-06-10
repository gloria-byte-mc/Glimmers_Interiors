import { useState, useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/portfolio-page.css'


const PROJECTS = [
  {
    id: 1,
    name: 'Serene Residency',
    category: 'Residential',
    location: 'Nairobi, Kenya',
    year: '2024',
    description: 'A contemporary luxury home where warm textures meet refined architecture. Every space crafted to feel both grand and deeply personal.',
    caption: 'Design concept for a luxury residential interior.',
    imgMain: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80',
    imgSecondary: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&w=400&q=80',
    imgCaption: 'Accent palette: warm ivory, brushed gold, and natural oak.',
  },
  {
    id: 2,
    name: 'Azure Commercial Hub',
    category: 'Commercial',
    location: 'Mombasa, Kenya',
    year: '2023',
    description: 'A bold commercial space designed to inspire productivity and leave a lasting impression on every visitor who walks through the doors.',
    caption: 'Design concept for a boutique commercial environment.',
    imgMain: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    imgSecondary: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=400&q=80',
    imgCaption: 'Material palette: concrete, glass, and polished steel.',
  },
  {
    id: 3,
    name: 'The Golden Suite',
    category: 'Interiors',
    location: 'Nairobi, Kenya',
    year: '2024',
    description: 'An exclusive penthouse interior where luxury meets intimacy. Curated finishes and bespoke furnishings define every corner.',
    caption: 'Design concept for a high-end penthouse interior.',
    imgMain: 'https://images.unsplash.com/photo-1618221469555-7f3ad97540d6?auto=format&fit=crop&w=800&q=80',
    imgSecondary: 'https://images.unsplash.com/photo-1503174971373-b1f69850bded?auto=format&fit=crop&w=400&q=80',
    imgCaption: 'Accent palette: champagne gold, cream, and deep walnut.',
  },
  {
    id: 4,
    name: 'Ivory Villa',
    category: 'Residential',
    location: 'Karen, Kenya',
    year: '2023',
    description: 'A sweeping family villa with open-plan living and seamless indoor-outdoor flow, finished in natural materials and warm tones.',
    caption: 'Full construction and interior design.',
    imgMain: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
    imgSecondary: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=400&q=80',
    imgCaption: 'Material palette: limestone, oak, and brushed brass.',
  },
  {
    id: 5,
    name: 'Lumina Office',
    category: 'Commercial',
    location: 'Westlands, Kenya',
    year: '2024',
    description: 'A modern creative office designed to foster collaboration and inspire innovation, with refined finishes throughout.',
    caption: 'Commercial interior design project.',
    imgMain: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80',
    imgSecondary: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=400&q=80',
    imgCaption: 'Material palette: white oak, frosted glass, and matte black.',
  },
  {
    id: 6,
    name: 'Casa Amara',
    category: 'Interiors',
    location: 'Lavington, Kenya',
    year: '2022',
    description: 'A warm, layered interior that balances elegance with everyday comfort — designed for a growing family with an eye for beauty.',
    caption: 'Interior design and furnishing project.',
    imgMain: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&w=800&q=80',
    imgSecondary: 'https://images.unsplash.com/photo-1618221469555-7f3ad97540d6?auto=format&fit=crop&w=400&q=80',
    imgCaption: 'Palette: terracotta, linen, and aged brass.',
  },
];

const FILTERS = ['All', 'Residential', 'Commercial', 'Interiors'];

const PortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const gridRef = useRef(null);
  const featureRef = useRef(null);
  const ctaRef = useRef(null);

  const filtered = activeFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeFilter);

  const featured = filtered[featuredIndex] || filtered[0];

  useEffect(() => {
    const observers = [gridRef, featureRef, ctaRef].map(ref => {
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) entry.target.classList.add('inView'); },
        { threshold: 0.1 }
      );
      if (ref.current) observer.observe(ref.current);
      return observer;
    });
    return () => observers.forEach(o => o.disconnect());
  }, []);

  const navigate = (dir) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setFeaturedIndex(prev => {
        if (dir === 'next') return (prev + 1) % filtered.length;
        return (prev - 1 + filtered.length) % filtered.length;
      });
      setAnimating(false);
    }, 400);
  };

  const handleFilter = (f) => {
    setActiveFilter(f);
    setFeaturedIndex(0);
  };

  return (
    <div>

      {/* ════ HERO ════ */}
      <section className="portfolioHero">
        <img
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1920&q=80"
          alt="Glimmers Portfolio"
          className="portfolioHeroBg"
        />
        <div className="portfolioHeroOverlay" />
        <div className="portfolioHeroGrain" />

        <Navbar />

        <div className="portfolioHeroContent">
          <div className="portfolioHeroLeft">
            <div className="portfolioHeroLineOne">
              <span>Work That</span>
            </div>
            <div className="portfolioHeroLineTwo">
              <span>Speaks Volumes.</span>
            </div>
          </div>

          <div className="portfolioHeroRight">
            <p className="portfolioHeroLabel">Portfolio</p>
            <p className="portfolioHeroSub">
              A curated selection of our most celebrated projects 
              each one a testament to our commitment to luxury,
              precision, and timeless design.
            </p>
          </div>
        </div>
      </section>

    
      <section className="portfolioGrid" ref={gridRef}>

        <div className="portfolioGridHeader">
          <div className="portfolioGridHeadingWrap">
            <p className="portfolioGridLabel">Our Projects</p>
            <h2 className="portfolioGridHeading">
              Impressions That <em>Endure</em>
            </h2>
          </div>

          <div className="portfolioFilters">
            {FILTERS.map(f => (
              <button
                key={f}
                className={`portfolioFilterBtn ${activeFilter === f ? 'active' : ''}`}
                onClick={() => handleFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

      
        <div className="portfolioMainLayout">
          <div className="portfolioFeatured" onClick={() => setFeaturedIndex(0)}>
            <img src={filtered[0]?.imgMain} alt={filtered[0]?.name} />
            <div className="portfolioFeaturedOverlay" />
            <div className="portfolioFeaturedInfo">
              <p className="portfolioFeaturedCategory">{filtered[0]?.category}</p>
              <h3 className="portfolioFeaturedName">{filtered[0]?.name}</h3>
              <p className="portfolioFeaturedLocation">{filtered[0]?.location}</p>
            </div>
          </div>

          <div className="portfolioSmallCards">
            {filtered.slice(1, 3).map((p, i) => (
              <div key={p.id} className="portfolioSmallCard" onClick={() => setFeaturedIndex(i + 1)}>
                <img src={p.imgMain} alt={p.name} />
                <div className="portfolioSmallOverlay" />
                <div className="portfolioSmallInfo">
                  <p className="portfolioSmallCategory">{p.category}</p>
                  <h3 className="portfolioSmallName">{p.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        
        {filtered.length > 3 && (
          <div className="portfolioBottomRow">
            {filtered.slice(3, 6).map((p, i) => (
              <div key={p.id} className="portfolioBottomCard" onClick={() => setFeaturedIndex(i + 3)}>
                <img src={p.imgMain} alt={p.name} />
                <div className="portfolioBottomOverlay" />
                <div className="portfolioBottomInfo">
                  <p className="portfolioBottomCategory">{p.category}</p>
                  <h3 className="portfolioBottomName">{p.name}</h3>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="portfolioViewMore">
          <button className="portfolioViewMoreBtn">
            Load More Projects →
          </button>
        </div>

      </section>

      
      <section className="portfolioFeature" ref={featureRef}>

        <img
          src={featured.imgMain}
          alt={featured.name}
          className="portfolioFeatureImg"
        />

        <div className="portfolioFeatureMiddle">
          <p className="portfolioFeatureLabel">Featured Project</p>
          <div className="portfolioFeatureMeta">
            <span className="portfolioFeatureLocation">
              {featured.location}, {featured.year}
            </span>
          </div>
          <h3 className="portfolioFeatureName">{featured.name}</h3>
          <p className="portfolioFeatureDesc">{featured.description}</p>
          <div className="portfolioFeatureSpacer" />
          <p className="portfolioFeatureCaption">{featured.caption}</p>
          <div className="portfolioFeatureNav">
            <button className="portfolioFeatureNavBtn" onClick={() => navigate('prev')}>←</button>
            <button className="portfolioFeatureNavBtn" onClick={() => navigate('next')}>→</button>
          </div>
        </div>

        <div className="portfolioFeatureRight">
          <p className="portfolioFeatureCounter">
            {String(featuredIndex + 1).padStart(2, '0')}/{String(filtered.length).padStart(2, '0')}
          </p>
          <img
            src={featured.imgSecondary}
            alt={featured.name}
            className="portfolioFeatureSecondImg"
          />
          <p className="portfolioFeatureImgCaption">{featured.imgCaption}</p>
        </div>

      </section>

    
      <section className="portfolioCTA" ref={ctaRef}>
        <img
          src="https://images.unsplash.com/photo-1503174971373-b1f69850bded?auto=format&fit=crop&w=1920&q=80"
          alt="CTA background"
          className="portfolioCTABg"
        />
        <div className="portfolioCTAOverlay" />
        <div className="portfolioCTAContent">
          <p className="portfolioCTALabel">Ready To Begin?</p>
          <h2 className="portfolioCTAHeading">
            Let's Build Something <em>Extraordinary</em>
          </h2>
          <p className="portfolioCTADesc">
            Your vision deserves to be brought to life with precision,
            elegance, and an unwavering eye for detail.
          </p>
          <div className="portfolioCTABtns">
            <a href="/contact" className="portfolioCTABtnPrimary">
              Book a Consultation →
            </a>
            <a href="/services" className="portfolioCTABtnSecondary">
              Our Services
            </a>
          </div>
        </div>
      </section>

      <Footer />

    </div>
  
  );
};



export default PortfolioPage;