import { useState, useEffect, useRef } from 'react';
import { Calendar } from 'lucide-react';
import '../styles/contact-form.css';

const ContactForm = () => {
  const leftRef  = useRef(null);
  const rightRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', service: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) entry.target.classList.add('inView'); },
      { threshold: 0.15 }
    );
    if (leftRef.current)  observer.observe(leftRef.current);
    if (rightRef.current) observer.observe(rightRef.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: wire up to backend / email service
    setSubmitted(true);
  };

  return (
    <section className="contactFormSection" id="contact">

      {/* ── Left ── */}
      <div className="contactFormLeft" ref={leftRef}>
        <p className="contactFormLabel">Send Us A Message</p>
        <h2 className="contactFormHeading">
          Let's Build
          <em>Something</em>
          Together.
        </h2>
        <p className="contactFormBody">
          Tell us more about your space, your ideas, and your aspirations.
          We'll guide you through the next steps with care and intention.
        </p>

        <div className="contactFormDetails">
          <div className="contactFormDetail">
            <span className="contactFormDetailIcon">✦</span>
            <span>info@glimmersinteriors.com</span>
          </div>
          <div className="contactFormDetail">
            <span className="contactFormDetailIcon">✦</span>
            <span>+254 707 203223</span>
          </div>
          <div className="contactFormDetail">
            <span className="contactFormDetailIcon">✦</span>
            <span>Nairobi, Kenya</span>
          </div>
        </div>

        <p className="contactFormVirtual">
          Based abroad? We offer virtual consultations for diaspora clients —
          book a video call at your convenience.
        </p>
      </div>

      {/* ── Right — Form ── */}
      <div className="contactFormRight" ref={rightRef}>

        {submitted ? (
          <div className="contactSuccess">
            <h3 className="contactSuccessHeading">Message Received.</h3>
            <p className="contactSuccessBody">
              Thank you for reaching out. We'll be in touch within 24 hours.
            </p>
          </div>
        ) : (
          <form className="contactForm" onSubmit={handleSubmit}>

            {/* Name */}
            <div className="contactFormGroup">
              <label className="contactInputLabel">Name</label>
              <input
                className="contactInput"
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
                  <label className="contactInputLabel">Phone</label>
                  <input
                    className="contactInput"
                    type="tel"
                    name="phone"
                    placeholder="+254 700 000 000"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="contactInputLabel">Email</label>
                  <input
                    className="contactInput"
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
              <label className="contactInputLabel">Service</label>
              <select
                className="contactSelect"
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
              <label className="contactInputLabel">Message</label>
              <textarea
                className="contactTextarea"
                name="message"
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={handleChange}
                rows={4}
              />
            </div>

            {/* Submit */}
            <button type="submit" className="contactSubmitBtn">
              Send Request
              <span className="contactSubmitArrow">→</span>
            </button>

          </form>
        )}

        {/* Calendly */}
        <div className="contactCalendlyDivider">
          <div className="contactCalendlyLine" />
          <span className="contactCalendlyText">Or book a consultation</span>
          <div className="contactCalendlyLine" />
        </div>

        <a
          href="https://calendly.com"
          target="_blank"
          rel="noopener noreferrer"
          className="contactCalendlyBtn"
        >
          <Calendar size={16} />
          Schedule a Site Visit or Virtual Call
        </a>

      </div>
    </section>
  );
};

export default ContactForm;