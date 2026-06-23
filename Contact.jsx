import React, { useState } from 'react';
import './PageShared.css';
import './Contact.css';

const CONTACTS = [
  { icon: '📍', label: 'Location', value: 'Koramangala, Bangalore — 560034' },
  { icon: '📧', label: 'Email',    value: 'hello@aedivix.com' },
  { icon: '📞', label: 'Phone',    value: '+91 80 1234 5678' },
  { icon: '🕐', label: 'Hours',    value: 'Mon–Fri, 9AM–7PM IST' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', service: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    // Replace with your form API / EmailJS / Formspree endpoint
    console.log('Form submitted:', form);
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: '', email: '', company: '', service: '', message: '' });
  };

  return (
    <div className="page-layout">
      <section className="page-hero">
        <div className="page-hero__inner">
          <span className="section-label anim-fadeUp">Contact</span>
          <h1 className="page-hero__title anim-fadeUp delay-200">
            Let's build something<br />
            <span className="grad-text">great together.</span>
          </h1>
          <p className="page-hero__sub anim-fadeUp delay-400">
            Tell us about your project and we'll get back to you within 24 hours.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <div className="contact-layout">
            {/* Info */}
            <div className="contact-info anim-slideLeft">
              <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '2rem' }}>
                Get in <span className="grad-text">Touch</span>
              </h2>
              <div className="contact-details">
                {CONTACTS.map(c => (
                  <div key={c.label} className="contact-detail glass">
                    <span className="contact-detail__icon">{c.icon}</span>
                    <div>
                      <div className="contact-detail__label">{c.label}</div>
                      <div className="contact-detail__val">{c.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="contact-social">
                <a href="https://linkedin.com" className="social-btn glass glass-hover" target="_blank" rel="noopener noreferrer">in</a>
                <a href="https://twitter.com"  className="social-btn glass glass-hover" target="_blank" rel="noopener noreferrer">𝕏</a>
                <a href="https://github.com"   className="social-btn glass glass-hover" target="_blank" rel="noopener noreferrer">gh</a>
              </div>
            </div>

            {/* Form */}
            <div className="contact-form-wrap anim-slideRight delay-200">
              <div className="glass contact-form-card">
                {sent ? (
                  <div className="contact-success anim-scaleIn">
                    <span style={{ fontSize: '3rem' }}>✅</span>
                    <h3 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.3rem', color: 'var(--clr-text)' }}>
                      Message sent!
                    </h3>
                    <p style={{ color: 'var(--clr-muted)', fontSize: '0.95rem' }}>
                      We'll be in touch within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="form">
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="name">Full Name *</label>
                        <input
                          id="name" name="name" type="text"
                          placeholder="Your name"
                          value={form.name} onChange={handleChange} required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="email">Email *</label>
                        <input
                          id="email" name="email" type="email"
                          placeholder="you@company.com"
                          value={form.email} onChange={handleChange} required
                        />
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="company">Company</label>
                        <input
                          id="company" name="company" type="text"
                          placeholder="Company name"
                          value={form.company} onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="service">Service</label>
                        <select id="service" name="service" value={form.service} onChange={handleChange}>
                          <option value="">Select a service</option>
                          <option value="custom-software">Custom Software</option>
                          <option value="mobile">Web / Mobile App</option>
                          <option value="cloud">Cloud & DevOps</option>
                          <option value="enterprise">Enterprise IT</option>
                          <option value="ai">AI & Data</option>
                          <option value="design">UI/UX Design</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="message">Message *</label>
                      <textarea
                        id="message" name="message"
                        placeholder="Tell us about your project, timeline, and budget..."
                        rows={5}
                        value={form.message} onChange={handleChange} required
                      />
                    </div>

                    <button type="submit" className="hero__btn hero__btn--primary btn-shimmer" style={{ alignSelf: 'flex-start' }}>
                      Send Message →
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}