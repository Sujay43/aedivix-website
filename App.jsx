import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './index.css';

import Navbar from './components/Navbar';
import VideoBg from './components/VideoBg';
import Footer from './components/Footer';

import Home        from './pages/Home';
import AboutUs     from './pages/AboutUs';
import Services    from './pages/Services';
import CaseStudies from './pages/CaseStudies';
import Careers     from './pages/Careers';
import Contact     from './pages/Contact';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <div key={location.pathname} className="page-enter">
      <Routes location={location}>
        <Route path="/"             element={<Home />} />
        <Route path="/about"        element={<AboutUs />} />
        <Route path="/services"     element={<Services />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/careers"      element={<Careers />} />
        <Route path="/contact"      element={<Contact />} />
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <VideoBg />
      <div className="app-shell">
        <Navbar />
        <main style={{ flex: 1 }}>
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}