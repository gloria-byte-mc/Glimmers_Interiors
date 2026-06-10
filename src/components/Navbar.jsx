import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../styles/navbar.css';

const NAV_LINKS = [
  { label: 'Home',  href: '/'    },
  { label: 'About Us',  href: '/about'    },
  { label: 'Services',  href: '/services'  },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Process',   href: '/process'   },
  { label: 'Contact',   href: '/contact'   },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawer] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);


  useEffect(() => {
    if (drawerOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    return () => document.body.classList.remove('no-scroll');
  }, [drawerOpen]);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>

  <Link to="/" className="navbarLogo">
  <img src="/images/glimmerLogo.png" alt="Glimmers" className="navbarLogoImg" />
  </Link>

    
<ul className="navbarLinks">
  {NAV_LINKS.map(link => (
    <li key={link.label}>
      <NavLink to={link.href}>{link.label}</NavLink>
    </li>
  ))}
</ul>

        <a href="#contact" className="navbarCta">Book Now</a>

        <button
          className="navbarMenuBtn"
          aria-label="Open menu"
          onClick={() => setDrawer(true)}
        >
          <span /><span /><span />
        </button>

      </nav>

      <div className={`navbarDrawer ${drawerOpen ? 'open' : ''}`}>
        <button className="navbarDrawerClose" onClick={() => setDrawer(false)}>
          Close ✕
        </button>
        <ul className="navbarDrawerLinks">
          {NAV_LINKS.map(link => (
            <li key={link.label}>
              <a href={link.href} onClick={() => setDrawer(false)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="navbarDrawerCta" onClick={() => setDrawer(false)}>
          Book Now
        </a>
      </div>
    </>
  );
};

export default Navbar;