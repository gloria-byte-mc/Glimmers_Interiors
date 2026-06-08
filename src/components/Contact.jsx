import React, { useEffect, useRef, useState } from 'react';
import '../styles/contact.css'
import { Calendar } from 'lucide-react';

const Contact = () => {
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="contact" id="contact" ref={sectionRef}>

      {/* LEFT */}
      <div className="contactLeft">

        <p className="contactLabel">Contact Us</p>

        <h2 className="contactHeading">
          Let's Begin A
          <em>Conversation</em>
        </h2>

        <p className="contactBody">
          Tell us more about your space, your ideas, and your aspirations.
          We'll guide you through the next steps with care and intention.
        </p>

        <div className="contactDetails">
          <div className="contactDetail">
            <span className="contactDetailIcon">✦</span>
            <span>info@glimmersinteriors.com</span>
          </div>
          <div className="contactDetail">
            <span className="contactDetailIcon">✦</span>
            <span>+254 707 203223</span>
          </div>
          <div className="contactDetail">
            <span className="contactDetailIcon">✦</span>
            <span>Nairobi, Kenya</span>
          </div>
        </div>

        <p className="contactVirtual">
          Based abroad? We offer virtual consultations for diaspora clients
          book a video call at your convenience.
        </p>

      </div>

      {/* RIGHT — form */}
      <div className="contactRight">

        {submitted ? (
          <div style={{ padding: '2rem 0' }}>
            <p style={{ fontFamily: 'Jost, sans-serif', fontSize: '0.9rem', color: '#6b6b6b', lineHeight: 1.9 }}>
              Thank you for reaching out. We'll be in touch shortly.
            </p>
          </div>
        ) : (
          <form className="contactForm" onSubmit={handleSubmit}>

            {/* Name */}
            <div className="contactFormGroup">
              <label className="contactFormLabel">Name</label>
              <input
                className="contactFormInput"
                type="text"
                name="name"
                placeholder="Your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            {/* Phone + Email */}
            <div className="contactFormGroup">
              <div className="contactFormRow">
                <div>
                  <label className="contactFormLabel">Phone</label>
                  <input
                    className="contactFormInput"
                    type="tel"
                    name="phone"
                    placeholder="+254 700 000 000"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="contactFormLabel">Email</label>
                  <input
                    className="contactFormInput"
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>

            {/* Service */}
            <div className="contactFormGroup">
              <label className="contactFormLabel">Service</label>
              <select
                className="contactFormSelect"
                name="service"
                value={formData.service}
                onChange={handleChange}
              >
                <option value="">Select a service</option>
                <option value="residential">High-End Homes</option>
                <option value="commercial">Commercial Spaces</option>
                <option value="interior">Interior Design</option>
                <option value="renders">Architectural Renders</option>
                <option value="diaspora">Diaspora Virtual Consultation</option>
              </select>
            </div>

            {/* Message */}
            <div className="contactFormGroup">
              <label className="contactFormLabel">Message</label>
              <textarea
                className="contactFormTextarea"
                name="message"
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={handleChange}
                rows={4}
              />
            </div>

            {/* Submit */}
            <button type="submit" className="contactSubmit">
              Send Request
              <span className="contactSubmitArrow">→</span>
            </button>

          </form>
        )}

        {/* Calendly divider */}
        <div className="contactDivider">
          <div className="contactDividerLine" />
          <span className="contactDividerText">Or book a consultation</span>
          <div className="contactDividerLine" />
        </div>

      {/* Calendly button */}
    <a href="https://calendly.com" target="_blank" rel="noopener noreferrer" className="contactCalendly">
    <Calendar size={16} />
  Schedule a Site Visit or Virtual Call
   </a>

      </div>

    </section>
  );
};

export default Contact;