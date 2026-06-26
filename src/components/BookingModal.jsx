import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import '../styles/booking-modal.css';

const SERVICES = [
  'High-End Homes',
  'Commercial Spaces',
  'Interior Design',
  'Architectural Renders',
  'Routine Repairs & Re-designs',
  'Diaspora Virtual Consultation',
];

const PAYMENT_OPTIONS = ['M-Pesa', 'Card', 'PayPal'];

const BookingModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    service: '',
    date: '',
    payment: '',
  });
  const [submitted, setSubmitted] = useState(false);

 
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    return () => document.body.classList.remove('no-scroll');
  }, [isOpen]);

  
  useEffect(() => {
    if (!isOpen) {
      setSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        location: '',
        service: '',
        date: '',
        payment: '',
      });
    }
  }, [isOpen]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (!isOpen) return null;

  return (
    <div className="bookingOverlay" onClick={onClose}>
      <div className="bookingModal" onClick={(e) => e.stopPropagation()}>

        <button className="bookingClose" onClick={onClose} aria-label="Close booking form">
          <X size={18} />
        </button>

        <p className="bookingLabel">Book Now</p>
        <h2 className="bookingHeading">
          Reserve Your
          <em>Consultation</em>
        </h2>

        {submitted ? (
          <div className="bookingSuccess">
            <p>Thank you. Your booking request has been received we'll confirm shortly.</p>
            <button className="bookingSubmit" onClick={onClose}>
              Done
            </button>
          </div>
        ) : (
          <form className="bookingForm" onSubmit={handleSubmit}>

            <div className="bookingFormGroup">
              <label className="bookingFormLabel">Full Name</label>
              <input
                className="bookingFormInput"
                type="text"
                name="name"
                placeholder="Your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="bookingFormGroup">
              <div className="bookingFormRow">
                <div>
                  <label className="bookingFormLabel">Phone Number</label>
                  <input
                    className="bookingFormInput"
                    type="tel"
                    name="phone"
                    placeholder="+254 700 000 000"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label className="bookingFormLabel">Email</label>
                  <input
                    className="bookingFormInput"
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

            <div className="bookingFormGroup">
              <label className="bookingFormLabel">Location</label>
              <input
                className="bookingFormInput"
                type="text"
                name="location"
                placeholder="e.g. Karen, Nairobi"
                value={formData.location}
                onChange={handleChange}
                required
              />
             {/* <span className="bookingHint">Helps us calculate your site visit fee</span> */} 
            </div>

            <div className="bookingFormGroup">
              <div className="bookingFormRow">
                <div>
                  <label className="bookingFormLabel">Service</label>
                  <select
                    className="bookingFormSelect"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a service</option>
                    {SERVICES.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="bookingFormLabel">Date</label>
                  <input
                    className="bookingFormInput"
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="bookingFormGroup">
              <label className="bookingFormLabel">Payment Option</label>
              <select
                className="bookingFormSelect"
                name="payment"
                value={formData.payment}
                onChange={handleChange}
                required
              >
                <option value="">Select payment method</option>
                {PAYMENT_OPTIONS.map((p) => (
                  <option key={p} value={p}>{p}</option>
                ))}
              </select>
            </div>

            <button type="submit" className="bookingSubmit">
              Confirm Booking
              <span className="bookingSubmitArrow">→</span>
            </button>

          </form>
        )}

      </div>
    </div>
  );
};

export default BookingModal;