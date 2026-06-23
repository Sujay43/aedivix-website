import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'Home',         to: '/' },
  { label: 'About Us',     to: '/about' },
  { label: 'Services',     to: '/services' },
  { label: 'Case Studies', to: '/case-studies' },
  { label: 'Careers',      to: '/careers' },
  { label: 'Contact',      to: '/contact' },
];

export default function Navbar() {
  const [scrolled,     setScrolled]     = useState(false);
  const [menuOpen,     setMenuOpen]     = useState(false);

  /* Scroll detection for background change */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Close menu on route change (click) */
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      {/* Logo */}
      <Link to="/" className="navbar__logo" onClick={closeMenu}>
        <span className="navbar__logo-text">Aedivix</span>
        <span className="navbar__logo-dot" />
      </Link>

      {/* Desktop nav */}
      <nav className="navbar__links" aria-label="Primary navigation">
        {NAV_LINKS.map((link, i) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === '/'}
            className={({ isActive }) =>
              `navbar__link ${isActive ? 'navbar__link--active' : ''}`
            }
            style={{ animationDelay: `${i * 60}ms` }}
            onClick={closeMenu}
          >
            {link.label}
            <span className="navbar__link-indicator" />
          </NavLink>
        ))}
      </nav>

      {/* CTA */}
      <Link to="/contact" className="navbar__cta btn-shimmer" onClick={closeMenu}>
        Get in Touch
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </Link>

      {/* Mobile hamburger */}
      <button
        className={`navbar__burger ${menuOpen ? 'navbar__burger--open' : ''}`}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(o => !o)}
      >
        <span /><span /><span />
      </button>

      {/* Mobile drawer */}
      <div className={`navbar__drawer ${menuOpen ? 'navbar__drawer--open' : ''}`}>
        <nav className="navbar__drawer-links">
          {NAV_LINKS.map((link, i) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `navbar__drawer-link ${isActive ? 'navbar__drawer-link--active' : ''}`
              }
              style={{ animationDelay: menuOpen ? `${i * 60 + 100}ms` : '0ms' }}
              onClick={closeMenu}
            >
              {link.label}
            </NavLink>
          ))}
          <Link to="/contact" className="navbar__drawer-cta btn-shimmer" onClick={closeMenu}>
            Get in Touch →
          </Link>
        </nav>
      </div>

      {/* Backdrop for mobile */}
      {menuOpen && (
        <div
          className="navbar__backdrop"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
    </header>
  );
}