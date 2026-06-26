import React, { useState, useEffect, useRef } from 'react';
import '../styles/portfolio.css'
import { useNavigate } from 'react-router-dom';

const PROJECTS = [
  {
    id: 1,
    location: 'Nairobi, Kenya',
    year: '2024',
    name: 'Serene Residency',
    description:
      'A contemporary luxury home where warm textures meet refined architecture. Every space crafted to feel both grand and deeply personal.',
    imgMain:
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80',
    imgSecondary:
      'https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&w=400&q=80',
    imgCaption: '5-bedroom residence · 320 sqm · Completed in 14 weeks',
  },
  {
    id: 2,
    location: 'Mombasa, Kenya',
    year: '2023',
    name: 'Azure Commercial Hub',
    description:
      'A bold commercial space designed to inspire productivity and leave a lasting impression on every visitor who walks through the doors.',
    imgMain:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    imgSecondary:
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=400&q=80',
    imgCaption: 'Commercial office · 480 sqm · Completed in 10 weeks',
  },
  {
    id: 3,
    location: 'Nairobi, Kenya',
    year: '2024',
    name: 'The Golden Suite',
    description:
      'An exclusive penthouse interior where luxury meets intimacy. Curated finishes and bespoke furnishings define every corner of this masterpiece.',
    imgMain:
      'https://images.unsplash.com/photo-1618221469555-7f3ad97540d6?auto=format&fit=crop&w=800&q=80',
    imgSecondary:
      'https://images.unsplash.com/photo-1503174971373-b1f69850bded?auto=format&fit=crop&w=400&q=80',
    imgCaption: 'Penthouse · 3 bedrooms · 210 sqm · Completed in 8 weeks',
  },
];

const Portfolio = () => {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
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

  const navigate = (direction) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent((prev) => {
        if (direction === 'next') return (prev + 1) % PROJECTS.length;
        return (prev - 1 + PROJECTS.length) % PROJECTS.length;
      });
      setAnimating(false);
    }, 400);
  };

  const project = PROJECTS[current];
  const counter = `${String(current + 1).padStart(2, '0')}/${String(PROJECTS.length).padStart(2, '0')}`;

  return (
    <section className="portfolio" id="portfolio" ref={sectionRef}>

      {/* HEADER */}
      <div className="portfolioHeader">
        <p className="portfolioLabel">Portfolio</p>
        <h2 className="portfolioHeading">
          Impressions That <em>E</em>ndure
        </h2>
      </div>

      {/* CONTENT */}
      <div className={`portfolioContent ${animating ? 'exiting' : ''}`}>

        {/* LEFT — large image */}
        <img
          src={project.imgMain}
          alt={project.name}
          className="portfolioImgMain"
        />

        {/* MIDDLE — text and link pushed to bottom */}
        <div className="portfolioMiddle">

          <div className="portfolioMeta">
            <span className="portfolioLocation">
              {project.location}, {project.year}
            </span>
          </div>

          <h3 className="portfolioProjectName">{project.name}</h3>
          <p className="portfolioDesc">{project.description}</p>

          <div className="portfolioSpacer" />

          <a href="/contact" className="portfolioSimilarLink">
            Start a similar project →
          </a>

        </div>

        <div className="portfolioRight">

          <p className="portfolioCounterRight">{counter}</p>

          <img
            src={project.imgSecondary}
            alt={`${project.name} detail`}
            className="portfolioImgSecondary"
          />

          <p className="portfolioImgCaption">{project.imgCaption}</p>

          <div className="portfolioSpacer" />

          <div className="portfolioNav">

            <button
              className="portfolioNavBtn"
              onClick={() => navigate('next')}
              aria-label="Next project"
            >
              →
            </button>

            <button
              className="portfolioNavBtn"
              onClick={() => navigate('prev')}
              aria-label="Previous project"
            >
              ←
            </button>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Portfolio;