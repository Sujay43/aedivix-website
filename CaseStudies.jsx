import React from 'react';
import { Link } from 'react-router-dom';
import './PageShared.css';
import './Services.css';

const CASES = [
  {
    tag: 'FinTech',
    title: 'Neobank onboarding system — 0 to 1M users in 18 months',
    outcome: '60% drop in onboarding drop-off rate',
    tech: ['React Native', 'Node.js', 'AWS', 'PostgreSQL'],
    color: '#6366f1',
  },
  {
    tag: 'HealthTech',
    title: 'Hospital management platform for 40+ clinics',
    outcome: '3× faster appointment scheduling',
    tech: ['React', 'Django', 'GCP', 'Redis'],
    color: '#38bdf8',
  },
  {
    tag: 'E-Commerce',
    title: 'Multi-vendor marketplace with AI product recommendations',
    outcome: '28% increase in average order value',
    tech: ['Next.js', 'FastAPI', 'PyTorch', 'Elasticsearch'],
    color: '#34d399',
  },
  {
    tag: 'Logistics',
    title: 'Real-time fleet tracking for 5000+ vehicles',
    outcome: '99.8% uptime, sub-200ms updates',
    tech: ['Flutter', 'Go', 'Kafka', 'MongoDB'],
    color: '#f59e0b',
  },
  {
    tag: 'EdTech',
    title: 'Adaptive learning LMS deployed across 200+ schools',
    outcome: '41% improvement in student outcomes',
    tech: ['Vue.js', 'Laravel', 'MySQL', 'Azure'],
    color: '#ec4899',
  },
  {
    tag: 'SaaS',
    title: 'B2B analytics dashboard processing 2TB/day',
    outcome: 'Query time reduced from 30s to 1.2s',
    tech: ['React', 'Rust', 'ClickHouse', 'Kubernetes'],
    color: '#8b5cf6',
  },
];

export default function CaseStudies() {
  return (
    <div className="page-layout">
      <section className="page-hero">
        <div className="page-hero__inner">
          <span className="section-label anim-fadeUp">Case Studies</span>
          <h1 className="page-hero__title anim-fadeUp delay-200">
            Problems solved.<br />
            <span className="grad-text">Results delivered.</span>
          </h1>
          <p className="page-hero__sub anim-fadeUp delay-400">
            Real projects. Real metrics. See how we've helped companies
            across industries build technology that moves the needle.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <div className="cases-grid">
            {CASES.map((c, i) => (
              <div
                key={c.title}
                className={`case-card glass glass-hover anim-fadeUp delay-${(i % 3 + 1) * 100}`}
              >
                {/* Colored accent line */}
                <div className="case-card__accent" style={{ background: c.color }} />

                <div className="case-card__tag" style={{ color: c.color, borderColor: c.color + '40', background: c.color + '18' }}>
                  {c.tag}
                </div>
                <h3 className="case-card__title">{c.title}</h3>

                <div className="case-card__outcome">
                  <span className="case-card__outcome-icon">📈</span>
                  <span>{c.outcome}</span>
                </div>

                <div className="case-card__tech">
                  {c.tech.map(t => (
                    <span key={t} className="tech-chip">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <p className="section-body">Want results like these?</p>
            <Link to="/contact" className="hero__btn hero__btn--primary btn-shimmer" style={{ marginTop: '1rem', display: 'inline-flex', textDecoration: 'none' }}>
              Start your project →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}