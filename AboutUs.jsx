import React from 'react';
import { Link } from 'react-router-dom';
import './PageShared.css';

const VALUES = [
  { title: 'Client-First',  desc: 'Every decision starts with your business outcomes, not our convenience.' },
  { title: 'Ship Fast',      desc: 'Agile sprints, CI/CD pipelines, and weekly demos keep us honest.' },
  { title: 'Transparency',   desc: 'Open communication, honest estimates, and no hidden surprises.' },
  { title: 'Long-term View', desc: 'We write code that your future team will thank us for.' },
];

const TEAM = [
  { name: 'Rajiv Nair',    role: 'CEO & Co-founder',     initials: 'RN' },
  { name: 'Priya Sharma',  role: 'CTO',                  initials: 'PS' },
  { name: 'Arjun Mehta',   role: 'Head of Engineering',  initials: 'AM' },
  { name: 'Divya Reddy',   role: 'Head of Design',       initials: 'DR' },
];

export default function AboutUs() {
  return (
    <div className="page-layout">
      {/* ── Hero ─────────────────────────────────── */}
      <section className="page-hero">
        <div className="page-hero__inner">
          <span className="section-label anim-fadeUp">About Aedivix</span>
          <h1 className="page-hero__title anim-fadeUp delay-200">
            Built by engineers.<br />
            <span className="grad-text">Driven by outcomes.</span>
          </h1>
          <p className="page-hero__sub anim-fadeUp delay-400">
            Since 2016, we've been the trusted technology partner for startups
            and enterprises across India and beyond. We don't just write code —
            we engineer competitive advantage.
          </p>
        </div>
      </section>

      {/* ── Story ────────────────────────────────── */}
      <section className="section-pad">
        <div className="container">
          <div className="two-col">
            <div className="two-col__text anim-slideLeft">
              <span className="section-label">Our Story</span>
              <h2 className="section-title">From a small team<br />to a 80-person studio</h2>
              <p className="section-body">
                Aedivix started in a single room in Koramangala with three developers
                and one shared laptop. Eight years later, we've grown to 80+ engineers,
                designers, and strategists — but that scrappy founding energy still
                drives every project.
              </p>
              <p className="section-body">
                We believe the best software is built with deep domain understanding,
                honest communication, and a genuine obsession with the end user's experience.
              </p>
              <Link to="/contact" className="hero__btn hero__btn--primary btn-shimmer" style={{ display: 'inline-flex', marginTop: '1.5rem', textDecoration: 'none' }}>
                Work with us →
              </Link>
            </div>
            <div className="two-col__visual anim-slideRight delay-200">
              <div className="about-visual glass">
                <div className="about-visual__stat">
                  <span className="grad-text" style={{ fontSize: '3rem', fontWeight: 800, fontFamily: 'var(--ff-display)' }}>2016</span>
                  <span style={{ color: 'var(--clr-muted)', fontSize: '0.85rem' }}>Founded in Bangalore</span>
                </div>
                <div className="about-visual__divider" />
                <div className="about-visual__stat">
                  <span className="grad-text" style={{ fontSize: '3rem', fontWeight: 800, fontFamily: 'var(--ff-display)' }}>80+</span>
                  <span style={{ color: 'var(--clr-muted)', fontSize: '0.85rem' }}>Team members</span>
                </div>
                <div className="about-visual__divider" />
                <div className="about-visual__stat">
                  <span className="grad-text" style={{ fontSize: '3rem', fontWeight: 800, fontFamily: 'var(--ff-display)' }}>15+</span>
                  <span style={{ color: 'var(--clr-muted)', fontSize: '0.85rem' }}>Countries served</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ───────────────────────────────── */}
      <section className="section-pad">
        <div className="container">
          <div className="section-header anim-fadeUp">
            <span className="section-label">Core Values</span>
            <h2 className="section-title">How we show up <span className="grad-text">every day</span></h2>
          </div>
          <div className="card-grid card-grid--4 anim-fadeUp delay-200">
            {VALUES.map((v, i) => (
              <div key={v.title} className={`card glass glass-hover delay-${(i+1)*100}`}>
                <span style={{ fontSize: '2rem' }}>{v.icon}</span>
                <h3 className="card__title">{v.title}</h3>
                <p className="card__desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ─────────────────────────────────── */}
      <section className="section-pad">
        <div className="container">
          <div className="section-header anim-fadeUp">
            <span className="section-label">Leadership</span>
            <h2 className="section-title">The people <span className="grad-text">steering the ship</span></h2>
          </div>
          <div className="card-grid card-grid--4 anim-fadeUp delay-200">
            {TEAM.map((m, i) => (
              <div key={m.name} className={`card glass glass-hover delay-${(i+1)*100}`} style={{ alignItems: 'center', textAlign: 'center' }}>
                <div className="team-avatar">
                  <span className="grad-text" style={{ fontSize: '1.4rem', fontWeight: 700 }}>{m.initials}</span>
                </div>
                <h3 className="card__title" style={{ marginTop: '0.5rem' }}>{m.name}</h3>
                <p className="card__desc" style={{ fontSize: '0.82rem', color: 'var(--clr-primary-lt)' }}>{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}