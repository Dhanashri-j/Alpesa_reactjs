import React from 'react';
import Header from './Header';
import Footer from './Footer';

function About() {
  return (
    <>
      <Header activePage="about" />

      <header className="hero">
        <div className="hero-inner">
          <span className="eyebrow">About Us</span>
          <h1>Guiding Indian students to the <em>world's best campuses</em>.</h1>
          <p className="hero-lede">Alpesa Education Services is a study-abroad consultancy helping students and families navigate admissions, scholarships, and visas with honesty, expertise, and genuine care.</p>
        </div>
      </header>

      <section className="section">
        <div className="grid grid-2 about-mission">
          <div data-reveal="left">
            <div className="section-label">Our Mission</div>
            <h2 className="section-title">Education without <em>borders</em>.</h2>
            <p style={{ color: 'var(--ink-soft)', lineHeight: '1.8', marginBottom: '18px' }}>We believe a student's potential should never be limited by geography. Our mission is to make world-class education accessible to Indian students by demystifying the application and visa process and standing beside families at every step.</p>
            <p style={{ color: 'var(--ink-soft)', lineHeight: '1.8' }}>From a focus on US universities, we have grown to support 12 study destinations across North America, Europe, Asia, and Oceania — always with current, accurate guidance and a student-first approach.</p>
          </div>
          <div className="card" data-reveal="right" style={{ background: 'var(--cream)' }}>
            <h3>Why families choose Alpesa</h3>
            <ul>
              <li>Personalised, one-on-one counselling — never a call centre</li>
              <li>500+ partner universities across 12 countries</li>
              <li>Transparent guidance on costs, scholarships, and timelines</li>
              <li>Up-to-date visa expertise for 2026 rule changes</li>
              <li>End-to-end support: admission → visa → pre-departure</li>
              <li>Strong track record with student &amp; visitor visas</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="band-navy">
        <div className="section">
          <div className="section-header" data-reveal>
            <div className="section-label">What We Stand For</div>
            <h2 className="section-title">Our <em>values</em>.</h2>
          </div>
          <div className="grid grid-3 reveal-stagger">
            <div className="card"><span className="ico">🤝</span><h3>Integrity</h3><p>We give honest advice — even when it means recommending a different country, course, or timeline than you expected.</p></div>
            <div className="card"><span className="ico">🎯</span><h3>Expertise</h3><p>We track policy and visa changes continuously so your application reflects the latest, accurate requirements.</p></div>
            <div className="card"><span className="ico">❤️</span><h3>Care</h3><p>Every student is treated like family. We are available, responsive, and invested in your success abroad.</p></div>
          </div>
        </div>
      </section>

      <section className="cta" data-reveal>
        <div className="cta-inner">
          <h2>Let's plan your <em>journey</em> together.</h2>
          <p>Meet our counsellors and get a personalised roadmap for your study-abroad goals.</p>
          <div className="cta-buttons"><a href="#contact" className="btn btn-primary">Get in Touch →</a></div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default About;
