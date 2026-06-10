import '../styles/footer.css';
import { FaInstagram, FaPinterest, FaBehance, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  const year = new Date().getFullYear();

  // Marquee repeated enough times to fill screen and loop seamlessly
  const marqueeItems = Array(6).fill(null);

  return (
    <footer className="footer">

      {/* ── Top Grid ──────────────────────────────────────────── */}
      <div className="footerGrid">

        {/* Logo */}
        <div className="footerLogo">
          <span className="footerLogoName">Glimmers</span>
          <p className="footerLogoTagline">
            Interiors & Construction<br />
            Transforming visions into<br />
            glamorous masterpieces.
          </p>
        </div>

        {/* Menu */}
        <div className="footerCol">
          <p className="footerColLabel">Menu</p>
          <a href="#about" className="footerLink">About Us</a>
          <a href="#services" className="footerLink">Services</a>
          <a href="#portfolio" className="footerLink">Portfolio</a>
          <a href="#process" className="footerLink">Our Process</a>
          <a href="#contact" className="footerLink">Contact</a>
        </div>

 {/* Follow Us */}
<div className="footerCol">
  <p className="footerColLabel">Follow Us</p>
  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footerLink">
    <FaInstagram size={14} /> Instagram
  </a>
  <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="footerLink">
    <FaPinterest size={14} /> Pinterest
  </a>
  <a href="https://behance.net" target="_blank" rel="noopener noreferrer" className="footerLink">
    <FaBehance size={14} /> Behance
  </a>
  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footerLink">
    <FaLinkedinIn size={14} /> LinkedIn
  </a>
</div>

        {/* Contact */}
        <div className="footerContact">
          <p className="footerColLabel">Contact</p>
          <p className="footerContactItem">
            Nairobi, Kenya
          </p>
          <p className="footerContactItem">
            <a href="mailto:hello@glimmersinteriors.com">
              hello@glimmersinteriors.com
            </a>
          </p>
          <p className="footerContactItem">
            <a href="tel:+254700000000">
              +254 707 203223
            </a>
          </p>
        </div>

      </div>

      {/*  Marquee  */}
      <div className="footerMarquee" aria-hidden="true">
        <div className="footerMarqueeTrack">
          {marqueeItems.map((_, i) => (
            <span key={i}>
              <span className="footerMarqueeText">GET IN TOUCH</span>
              <span className="footerMarqueeDot"> • </span>
            </span>
          ))}
        </div>
      </div>

      {/*  Bottom Bar */}
      <div className="footerBottom">
        <p className="footerCopyright">
          © {year} Glimmers Interiors & Construction. All rights reserved.
        </p>
        <div className="footerBottomLinks">
          <a href="/privacy" className="footerBottomLink">Privacy Policy</a>
          <a href="/terms" className="footerBottomLink">Terms of Use</a>
        </div>
      </div>

    </footer>
  );
};

export default Footer;