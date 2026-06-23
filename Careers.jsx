import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './PageShared.css';
import './Careers.css';

const PERKS = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
    title: 'Health Benefits',
    desc: 'Comprehensive health insurance for you and your family',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
    title: 'Learning Budget',
    desc: 'Annual budget for courses, books, and conferences',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    title: 'Remote Flexibility',
    desc: 'Hybrid work model with flexibility to work from home',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/>
        <line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/>
      </svg>
    ),
    title: 'Work-Life Balance',
    desc: 'Flexible hours and generous paid time off',
  },
];

const JOBS = [
  {
    title: 'Senior Full Stack Developer',
    type: 'Full-time',
    location: 'Bangalore, India (Hybrid)',
    exp: '5+ years experience',
    skills: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
  },
  {
    title: 'Cloud Solutions Architect',
    type: 'Full-time',
    location: 'Bangalore, India (Hybrid)',
    exp: '7+ years experience',
    skills: ['AWS', 'Azure', 'Kubernetes', 'Terraform'],
  },
  {
    title: 'UI/UX Designer',
    type: 'Full-time',
    location: 'Bangalore, India (Hybrid)',
    exp: '3+ years experience',
    skills: ['Figma', 'Adobe XD', 'User Research', 'Prototyping'],
  },
  {
    title: 'Mobile App Developer',
    type: 'Full-time',
    location: 'Bangalore, India (Hybrid)',
    exp: '3+ years experience',
    skills: ['Flutter', 'React Native', 'Kotlin', 'Swift'],
  },
];

const POSITIONS = JOBS.map(j => j.title);

const INIT = { name: '', email: '', phone: '', position: '', resume: null, cover: '' };

export default function Careers() {
  const [form, setForm]   = useState(INIT);
  const [sent, setSent]   = useState(false);
  const [fileName, setFileName] = useState('');

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleFile = e => {
    const file = e.target.files[0];
    if (file) { setForm(f => ({ ...f, resume: file })); setFileName(file.name); }
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Application submitted:', form);
    setSent(true);
    setForm(INIT);
    setFileName('');
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <div className="page-layout">

      {/* ── Hero ─────────────────────────────────── */}
      <section className="page-hero">
        <div className="page-hero__inner">
          <span className="section-label anim-fadeUp">Careers at Aedivix</span>
          <h1 className="page-hero__title anim-fadeUp delay-200">
            Join Our <span className="grad-text">Growing Team</span>
          </h1>
          <p className="page-hero__sub anim-fadeUp delay-400">
            Be part of a team that's shaping the future of technology.
            We're looking for passionate individuals who want to make a difference.
          </p>
        </div>
      </section>

      {/* ── Perks ────────────────────────────────── */}
      <section className="section-pad">
        <div className="container">
          <div className="section-header anim-fadeUp">
            <span className="section-label">Perks &amp; Benefits</span>
            <h2 className="section-title">Why Join <span className="grad-text">Aedivix?</span></h2>
          </div>
          <div className="perks-grid anim-fadeUp delay-200">
            {PERKS.map((p, i) => (
              <div key={p.title} className={`perk-card glass glass-hover delay-${(i+1)*100}`}>
                <div className="perk-card__icon">{p.icon}</div>
                <h3 className="perk-card__title">{p.title}</h3>
                <p className="perk-card__desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Open Positions ───────────────────────── */}
      <section className="section-pad">
        <div className="container">
          <div className="section-header anim-fadeUp">
            <span className="section-label">Open Positions</span>
            <h2 className="section-title">Current <span className="grad-text">Opportunities</span></h2>
          </div>
          <div className="jobs-grid anim-fadeUp delay-200">
            {JOBS.map((job, i) => (
              <div key={job.title} className={`job-card glass glass-hover delay-${(i%2+1)*100}`}>
                <h3 className="job-card__title">{job.title}</h3>
                <div className="job-card__meta">
                  <span className="job-card__meta-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                    {job.type}
                  </span>
                  <span className="job-card__meta-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    {job.location}
                  </span>
                  <span className="job-card__meta-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                    {job.exp}
                  </span>
                </div>
                <div className="job-card__skills">
                  {job.skills.map(s => (
                    <span key={s} className="skill-tag">{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Application Form ─────────────────────── */}
      <section className="section-pad">
        <div className="container">
          <div className="section-header anim-fadeUp">
            <span className="section-label">Submit Your Application</span>
            <h2 className="section-title"><span className="grad-text">Apply Now</span></h2>
          </div>

          <div className="apply-form-wrap glass anim-scaleIn delay-200">
            {sent ? (
              <div className="apply-success">
                <span style={{ fontSize: '3rem' }}>✅</span>
                <h3>Application Submitted!</h3>
                <p>Thank you for applying. We'll review your application and get back to you within 3–5 business days.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="apply-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input id="name" name="name" type="text" placeholder="Enter your full name"
                    value={form.name} onChange={handleChange} required />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input id="email" name="email" type="email" placeholder="your.email@example.com"
                    value={form.email} onChange={handleChange} required />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone *</label>
                  <input id="phone" name="phone" type="tel" placeholder="+91 XXXXX XXXXX"
                    value={form.phone} onChange={handleChange} required />
                </div>

                <div className="form-group">
                  <label htmlFor="position">Position Applying For *</label>
                  <select id="position" name="position" value={form.position} onChange={handleChange} required>
                    <option value="">Select a position</option>
                    {POSITIONS.map(p => <option key={p} value={p}>{p}</option>)}
                  </select>
                </div>

                <div className="form-group">
                  <label>Resume Upload</label>
                  <label htmlFor="resume" className="resume-upload">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                      <polyline points="17 8 12 3 7 8"/>
                      <line x1="12" y1="3" x2="12" y2="15"/>
                    </svg>
                    <span>{fileName || 'Click to upload resume'}</span>
                    <span className="resume-upload__hint">PDF, DOC, DOCX (Max 5MB)</span>
                    <input id="resume" name="resume" type="file"
                      accept=".pdf,.doc,.docx" onChange={handleFile} style={{ display: 'none' }} />
                  </label>
                </div>

                <div className="form-group">
                  <label htmlFor="cover">Cover Letter / Message</label>
                  <textarea id="cover" name="cover" rows={5}
                    placeholder="Tell us why you'd be a great fit..."
                    value={form.cover} onChange={handleChange} />
                </div>

                <button type="submit" className="apply-submit btn-shimmer">
                  Submit Application
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

    </div>
  );
}