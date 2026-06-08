import { useState } from 'react';
import '../styles/contact-booking.css'

// ─── Icons (inline SVG to avoid extra deps) ──────────────────
const PhoneIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.82 12 19.79 19.79 0 0 1 1.72 3.37 2 2 0 0 1 3.69 1.17h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.81a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

const MailIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);

const MapPinIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const ArrowRightIcon = () => (
  <svg className="arrow-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);

const CalendarIcon = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
    <line x1="16" x2="16" y1="2" y2="6"/>
    <line x1="8" x2="8" y1="2" y2="6"/>
    <line x1="3" x2="21" y1="10" y2="10"/>
  </svg>
);

const CheckIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6 9 17l-5-5"/>
  </svg>
);

// ─── Component ───────────────────────────────────────────────
const ContactBooking = () => {
  const [activeTab, setActiveTab] = useState('message'); // 'message' | 'virtual'
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: wire up to backend / email service
    setSubmitted(true);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-inner">

        {/* ── Left Column ─────────────────────────────────── */}
        <div className="contact-left">
          <span className="contact-label">Contact Us</span>

          <h2 className="contact-heading">
            Let's Begin A<br />
            <em>Conversation</em>
          </h2>

          <div className="contact-divider" />

          <p className="contact-description">
            Tell us more about your space, your ideas, and your aspirations.
            We'll guide you through the next steps with care and intention.
          </p>

          <div className="contact-info">
            <div className="contact-info-item">
              <PhoneIcon />
              <span>+254 700 000 000</span>
            </div>
            <div className="contact-info-item">
              <MailIcon />
              <span>hello@glimmersinteriors.com</span>
            </div>
            <div className="contact-info-item">
              <MapPinIcon />
              <span>Nairobi, Kenya</span>
            </div>
          </div>

          <div className="virtual-badge">
            <span className="dot" />
            Virtual Consultations Available
          </div>
        </div>

       
        <div className="contact-right">

          {/* Tab toggle */}
          <div className="form-tabs">
            <button
              className={`form-tab ${activeTab === 'message' ? 'active' : ''}`}
              onClick={() => setActiveTab('message')}
            >
              Send a Message
            </button>
            <button
              className={`form-tab ${activeTab === 'virtual' ? 'active' : ''}`}
              onClick={() => setActiveTab('virtual')}
            >
              Book Virtual Consultation
            </button>
          </div>

          {/* ── Contact Form ─────────────────────────────── */}
          {activeTab === 'message' && (
            <>
              {!submitted ? (
                <form className="contact-form" onSubmit={handleSubmit}>
                  {/* Name — full width */}
                  <div className="form-row full">
                    <div className="form-field">
                      <label htmlFor="name">Name</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your full name"
                        value={form.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  {/* Phone + Email */}
                  <div className="form-row">
                    <div className="form-field">
                      <label htmlFor="phone">Phone</label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+254 700 000 000"
                        value={form.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-field">
                      <label htmlFor="email">Email</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@email.com"
                        value={form.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  {/* Service */}
                  <div className="form-row full">
                    <div className="form-field">
                      <label htmlFor="service">Service of Interest</label>
                      <select
                        id="service"
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                      >
                        <option value="">Select a service</option>
                        <option value="high-end-home">High-End Home Construction</option>
                        <option value="commercial">Exclusive Commercial Spaces</option>
                        <option value="interior-design">Interior Design</option>
                        <option value="architectural-renders">Architectural Renders</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="form-row full">
                    <div className="form-field">
                      <label htmlFor="message">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your project..."
                        value={form.message}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  {/* Submit */}
                  <div className="submit-row">
                    <span className="submit-note">We respond within 24 hours</span>
                    <button type="submit" className="btn-submit">
                      Send Request <ArrowRightIcon />
                    </button>
                  </div>
                </form>
              ) : (
                <div className="form-success visible">
                  <div className="success-icon">
                    <CheckIcon />
                  </div>
                  <h3>Message Received</h3>
                  <p>Thank you for reaching out. We'll be in touch within 24 hours.</p>
                </div>
              )}
            </>
          )}

          {/* ── Virtual Consultation — Calendly ──────────── */}
          {activeTab === 'virtual' && (
            <div className="calendly-panel visible">
              <p className="calendly-notice">
                Ideal for diaspora clients book a video consultation directly in your timezone.
                Select a slot and we'll send you a secure video link.
              </p>

              {/*
                DEVELOPER NOTE:
                Replace the placeholder below with your actual Calendly embed:

                import { InlineWidget } from 'react-calendly';
                <InlineWidget url="https://calendly.com/your-glimmers-link" />

                Or use the script embed:
                <div
                  className="calendly-inline-widget"
                  data-url="https://calendly.com/your-link"
                  style={{ minWidth: '320px', height: '630px' }}
                />
              */}
              <div className="calendly-embed-placeholder">
                <CalendarIcon />
                <span>Calendly widget loads here</span>
                <span style={{ fontSize: '11px', letterSpacing: '0.1em', opacity: 0.7 }}>
                  Replace with your Calendly embed URL
                </span>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default ContactBooking;