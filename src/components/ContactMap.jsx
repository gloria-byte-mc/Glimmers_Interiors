import { useEffect, useRef } from 'react';
import '../styles/contact-map.css';

// Replace this with the embed URL you copy from Google Maps
// (Share -> Embed a map -> copy the src="..." value)
const MAP_EMBED_URL =
  'https://www.google.com/maps/embed?pb=YOUR_EMBED_URL_HERE';

const ContactMap = () => {
  const textRef = useRef(null);
  const mapRef  = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) entry.target.classList.add('inView'); },
      { threshold: 0.15 }
    );
    if (textRef.current) observer.observe(textRef.current);
    if (mapRef.current)  observer.observe(mapRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="contactMap">

      <div className="contactMapText" ref={textRef}>
        <p className="contactMapLabel">Visit Us</p>
        <h2 className="contactMapHeading">
          Come See Us<br />
          <em>In Person.</em>
        </h2>
        <p className="contactMapBody">
          Our studio is based in Nairobi, Kenya. We welcome visits by
          appointment come see our material library, portfolio, and meet
          the team behind your future space.
        </p>

        <div className="contactMapDetails">
          <div className="contactMapDetail">
            <span className="contactMapDetailLabel">Address</span>
            <span className="contactMapDetailValue">Nairobi, Kenya</span>
          </div>
          <div className="contactMapDetail">
            <span className="contactMapDetailLabel">Hours</span>
            <span className="contactMapDetailValue">Monday - Friday, 8am - 5pm</span>
          </div>
          <div className="contactMapDetail">
            <span className="contactMapDetailLabel">Appointments</span>
            <span className="contactMapDetailValue">By appointment only book via the form above or Calendly</span>
          </div>
        </div>
      </div>

      <div className="contactMapEmbed" ref={mapRef}>
        <iframe
          src={MAP_EMBED_URL}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Glimmers Interiors location map"
        />
      </div>

    </section>
  );
};

export default ContactMap;