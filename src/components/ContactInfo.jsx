import { useEffect, useRef } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import '../styles/contact-info.css';

const ITEMS = [
  { icon: <Mail size={22} />,    label: 'Email Us',  value: <a href="mailto:hello@glimmersinteriors.com">hello@glimmersinteriors.com</a> },
  { icon: <Phone size={22} />,   label: 'Call Us',   value: <a href="tel:+254700000000">+254 700 000 000</a> },
  { icon: <MapPin size={22} />,  label: 'Visit Us',  value: <>Nairobi, Kenya</> },
];

const ContactInfo = () => {
  const itemRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('inView'); }),
      { threshold: 0.1 }
    );
    itemRefs.current.filter(Boolean).forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="contactInfo">
      {ITEMS.map((item, i) => (
        <div key={i} className="contactInfoItem" ref={el => itemRefs.current[i] = el}>
          <span className="contactInfoIcon">{item.icon}</span>
          <p className="contactInfoLabel">{item.label}</p>
          <p className="contactInfoValue">{item.value}</p>
        </div>
      ))}
    </section>
  );
};

export default ContactInfo;