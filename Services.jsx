import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './PageShared.css';

const SERVICES = [
  {
    
    category: 'Development',
    title: 'Custom Software Development',
    desc: 'We architect and build bespoke software that solves your unique business problems — from microservices to monoliths done right.',
    features: ['Full-stack Web Apps', 'API Design & Integration', 'Legacy Modernization', 'SaaS Platforms'],
  },
  {
    
    category: 'Mobile',
    title: 'Web & Mobile Applications',
    desc: 'Pixel-perfect, performant applications for every screen. React Native, Flutter, or native — we choose the right tool for your users.',
    features: ['iOS & Android Apps', 'React Native / Flutter', 'Progressive Web Apps', 'App Store Optimization'],
  },
  {
    
    category: 'Cloud',
    title: 'Cloud Solutions & DevOps',
    desc: 'Infrastructure that scales automatically and never sleeps. We design, migrate, and manage your cloud architecture on AWS, GCP, and Azure.',
    features: ['Cloud Migration', 'Kubernetes & Docker', 'CI/CD Pipelines', 'Cost Optimization'],
  },
  {
    
    category: 'Enterprise',
    title: 'Enterprise IT Services',
    desc: 'Mission-critical systems that enterprises trust. ERP integrations, security audits, and 24/7 managed support.',
    features: ['ERP & CRM Integration', 'Security & Compliance', 'Managed IT Support', 'Digital Transformation'],
  },
  {
    
    category: 'AI / ML',
    title: 'AI & Data Engineering',
    desc: 'From data pipelines to production ML models — we help you turn raw data into competitive advantage.',
    features: ['ML Model Development', 'Data Pipelines', 'LLM Integration', 'Business Intelligence'],
  },
  {
    
    category: 'Design',
    title: 'UI/UX Design',
    desc: 'Research-driven design that users love and executives can demo with pride. We prototype fast and validate faster.',
    features: ['UX Research', 'UI Design Systems', 'Prototyping', 'Usability Testing'],
  },
];

export default function Services() {
  const [active, setActive] = useState(null);

  return (
    <div className="page-layout">
      <section className="page-hero">
        <div className="page-hero__inner">
          <span className="section-label anim-fadeUp">Services</span>
          <h1 className="page-hero__title anim-fadeUp delay-200">
            Everything you need to<br />
            <span className="grad-text">build and scale.</span>
          </h1>
          <p className="page-hero__sub anim-fadeUp delay-400">
            From zero-to-one startups to enterprise transformations —
            we've built the team and processes to handle any challenge.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <div className="services-grid">
            {SERVICES.map((svc, i) => (
              <div
                key={svc.title}
                className={`services-card glass glass-hover anim-fadeUp delay-${(i % 4 + 1) * 100}`}
                onClick={() => setActive(active === i ? null : i)}
              >
                <div className="services-card__head">
                  <span className="services-card__icon">{svc.icon}</span>
                  <span className="services-card__cat">{svc.category}</span>
                </div>
                <h3 className="services-card__title">{svc.title}</h3>
                <p className="services-card__desc">{svc.desc}</p>

                {/* Expandable features */}
                <div className={`services-card__features ${active === i ? 'services-card__features--open' : ''}`}>
                  <ul>
                    {svc.features.map(f => (
                      <li key={f}>
                        <span style={{ color: 'var(--clr-primary-lt)' }}>✓</span> {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="services-card__toggle">
                  {active === i ? '− Less detail' : '+ More detail'}
                </button>
              </div>
            ))}
          </div>

          <div className="section-header" style={{ marginTop: '4rem' }}>
            <p className="section-body" style={{ textAlign: 'center' }}>
              Not sure which service fits your needs?
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
              <Link to="/contact" className="hero__btn hero__btn--primary btn-shimmer">
                Let's talk about your project →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}