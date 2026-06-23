import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const STATS = [
  { value: '120+', label: 'Projects Delivered' },
  { value: '50+',  label: 'Enterprise Clients' },
  { value: '8+',   label: 'Years of Excellence' },
  { value: '99%',  label: 'Client Satisfaction' },
];

const SERVICES = [
  {
    
    title: 'Custom Software',
    desc: 'Tailored applications built from the ground up for your unique business needs.',
  },
  {
    
    title: 'Web & Mobile Apps',
    desc: 'Cross-platform experiences that scale from MVP to millions of users.',
  },
  {
   
    title: 'Cloud Solutions',
    desc: 'AWS, GCP & Azure architectures that grow with your ambitions.',
  },
  {
    
    title: 'Enterprise IT',
    desc: 'Mission-critical infrastructure with 99.9% uptime guarantees.',
  },
];

export default function Home() {
  return (
    <div className="home">
      {/* ── Hero ───────────────────────────────────── */}
      <section className="hero">
        <div className="hero__content">
          {/* Badge */}
          <div className="hero__badge anim-fadeUp">
            <span className="hero__badge-dot" />
            IT Company in Bangalore
          </div>

          {/* Headline */}
          <h1 className="hero__headline anim-fadeUp delay-200">
            Agile for&nbsp;
            <span className="grad-text">Startups.</span>
            <br />
            Scalable for&nbsp;
            <span className="grad-text">Enterprises.</span>
          </h1>

          {/* Sub */}
          <p className="hero__sub anim-fadeUp delay-400">
            Custom Software Development, Web &amp; Mobile Applications,
            <br className="hero__sub-br" />
            Cloud Solutions &amp; Enterprise IT Services.
          </p>

          {/* CTAs */}
          <div className="hero__ctas anim-fadeUp delay-500">
            <Link to="/contact" className="hero__btn hero__btn--primary btn-shimmer">
              Schedule a Free Consultation
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M1 8h14M8 1l7 7-7 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link to="/case-studies" className="hero__btn hero__btn--secondary">
              View Our Work
            </Link>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="hero__scroll anim-fadeIn delay-800">
          <div className="hero__scroll-mouse">
            <div className="hero__scroll-dot" />
          </div>
        </div>
      </section>

      {/* ── Stats ──────────────────────────────────── */}
      <section className="stats">
        <div className="container">
          <div className="stats__grid">
            {STATS.map((s, i) => (
              <div
                key={s.label}
                className={`stats__card glass glass-hover anim-fadeUp delay-${(i + 1) * 100}`}
              >
                <span className="stats__value grad-text">{s.value}</span>
                <span className="stats__label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services Preview ───────────────────────── */}
      <section className="home-services section-pad">
        <div className="container">
          <div className="home-services__header anim-fadeUp">
            <span className="section-label">What We Do</span>
            <h2 className="home-services__title">
              End-to-end technology
              <br /><span className="grad-text">solutions for every stage</span>
            </h2>
          </div>

          <div className="home-services__grid">
            {SERVICES.map((svc, i) => (
              <div
                key={svc.title}
                className={`home-services__card glass glass-hover anim-fadeUp delay-${(i + 1) * 100}`}
              >
                <span className="home-services__icon">{svc.icon}</span>
                <h3 className="home-services__card-title">{svc.title}</h3>
                <p className="home-services__card-desc">{svc.desc}</p>
                <Link to="/services" className="home-services__card-link">
                  Learn more →
                </Link>
              </div>
            ))}
          </div>

          <div className="home-services__footer anim-fadeUp delay-500">
            <Link to="/services" className="hero__btn hero__btn--secondary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ─────────────────────────────── */}
      <section className="home-cta section-pad">
        <div className="container">
          <div className="home-cta__card glass anim-scaleIn">
            <div className="home-cta__glow" aria-hidden="true" />
            <span className="section-label">Ready to Build?</span>
            <h2 className="home-cta__title">
              Let's turn your vision into reality
            </h2>
            <p className="home-cta__desc">
              From ideation to deployment — we're your technology partner for the long run.
            </p>
            <Link to="/contact" className="hero__btn hero__btn--primary btn-shimmer">
              Start the Conversation →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}