import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const QUICK_LINKS = [
  { label: 'Home',         to: '/' },
  { label: 'About Us',     to: '/about' },
  { label: 'Services',     to: '/services' },
  { label: 'Case Studies', to: '/case-studies' },
  { label: 'Careers',      to: '/careers' },
  { label: 'Contact',      to: '/contact' },
];

const SERVICES = [
  { label: 'IT Services',            to: '/services' },
  { label: 'Payroll Services',       to: '/services' },
  { label: 'Empanelment Services',   to: '/services' },
  { label: 'BPO Services',           to: '/services' },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="footer">
      <div className="footer__inner container">

        {/* ── Col 1: Brand ─────────────────────── */}
        <div className="footer__brand">
          <Link to="/" className="footer__logo" onClick={scrollToTop}>
            <span className="footer__logo-text">Aedivix</span>
            <span className="footer__logo-dot" />
          </Link>
          <p className="footer__tagline">
            Agile for Startups. Scalable for Enterprises. Your trusted partner for IT
            solutions, payroll services, and business process outsourcing.
          </p>
          <div className="footer__socials">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-btn"
              aria-label="LinkedIn"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-btn"
              aria-label="Twitter / X"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-btn"
              aria-label="GitHub"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
              </svg>
            </a>
          </div>
        </div>

        {/* ── Col 2: Quick Links ───────────────── */}
        <div className="footer__col">
          <h4 className="footer__col-title">Quick Links</h4>
          <ul className="footer__links">
            {QUICK_LINKS.map(link => (
              <li key={link.to + link.label}>
                <Link
                  to={link.to}
                  className="footer__link"
                  onClick={scrollToTop}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Col 3: Services ──────────────────── */}
        <div className="footer__col">
          <h4 className="footer__col-title">Services</h4>
          <ul className="footer__links">
            {SERVICES.map(s => (
              <li key={s.label}>
                <Link
                  to={s.to}
                  className="footer__link"
                  onClick={scrollToTop}
                >
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Col 4: Contact ───────────────────── */}
        <div className="footer__col">
          <h4 className="footer__col-title">Contact</h4>
          <ul className="footer__contact-list">
            <li className="footer__contact-item">
              <span className="footer__contact-icon">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </span>
              <a href="mailto:hr@aedivix.com" className="footer__link">hr@aedivix.com</a>
            </li>
            <li className="footer__contact-item">
              <span className="footer__contact-icon">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.56 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </span>
              <a href="tel:+917019206802" className="footer__link">+91 7019206802</a>
            </li>
            <li className="footer__contact-item footer__contact-item--addr">
              <span className="footer__contact-icon">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </span>
              <address className="footer__address">
                Govindarajanagar, PF Layout<br />
                Vijayanagar, Bangalore North<br />
                Bangalore – 560040<br />
                Karnataka, India
              </address>
            </li>
          </ul>
        </div>

      </div>

      {/* ── Bottom Bar ───────────────────────────── */}
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <span>© 2025 Aedivix IT Services. All Rights Reserved.</span>
          <div className="footer__bottom-links">
            <Link to="/contact" className="footer__link" onClick={scrollToTop}>Privacy Policy</Link>
            <Link to="/contact" className="footer__link" onClick={scrollToTop}>Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}