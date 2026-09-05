import React from 'react';
import './styles/Home.css';
import Header from './Header';
import Footer from './Footer';
import FlagPanel from './FlagPanel';
import { flagSrc as flagUrl } from './flagSrc';

function Home() {
  return (
    <>
      <Header activePage="home" />

      <header className="hero home-hero" style={{ backgroundImage: "linear-gradient(90deg, rgba(10,37,64,.9) 0%, rgba(10,37,64,.68) 52%, rgba(10,37,64,.34) 100%), url('/home_image1.jpeg')" }}>
        <div className="hero-inner">
          <span className="eyebrow">Your Gateway to Global Higher Education</span>
          <h1>Turn your study-abroad dream into an <em>admission letter</em>.</h1>
          <p className="hero-lede">Alpesa Education Services guides Indian students end to end — choosing the right country and course, winning scholarships, and securing student or tourist visas — across 12 destinations worldwide.</p>
          <div className="hero-cta">
            <a href="#contact" className="btn btn-primary">Book a Free Consultation →</a>
            <a href="#study-destinations" className="btn btn-secondary">Explore Destinations</a>
          </div>
          <div className="hero-stats">
            <div className="stat"><strong>12</strong><span>STUDY DESTINATIONS</span></div>
            <div className="stat"><strong>500+</strong><span>PARTNER UNIVERSITIES</span></div>
            <div className="stat"><strong>India ↔ World</strong><span>END-TO-END SUPPORT</span></div>
            <div className="stat"><strong>Free</strong><span>EXPERT COUNSELLING</span></div>
          </div>
        </div>
      </header>

      <section className="section">
        <div className="section-header center" data-reveal>
          <div className="section-label">What We Do</div>
          <h2 className="section-title">Everything you need, <em>under one roof</em>.</h2>
          <p className="section-intro">From your first counselling session to the day you land on campus, our team handles the details so you can focus on your future.</p>
        </div>
        <div className="grid grid-3 reveal-stagger">
          <div className="card">
            <span className="ico">🎓</span>
            <h3>University Admissions</h3>
            <p>Shortlisting, applications, SOPs, LORs, and offer management across 500+ partner universities worldwide.</p>
            <a href="#services" className="lk">Student services →</a>
          </div>
          <div className="card">
            <span className="ico">📝</span>
            <h3>SOP &amp; Test Prep</h3>
            <p>Statement-of-purpose writing guidance plus IELTS / TOEFL / GRE / GMAT planning and resources.</p>
            <a href="#services" className="lk">Learn more →</a>
          </div>
          <div className="card">
            <span className="ico">💰</span>
            <h3>Scholarships &amp; Funding</h3>
            <p>We match you to country-specific scholarships and guide education-loan and financial-proof documentation.</p>
            <a href="#services" className="lk">How we help →</a>
          </div>
          <div className="card">
            <span className="ico">🌍</span>
            <h3>Study Destinations</h3>
            <p>Compare 12 countries on cost, scholarships, work rights, and post-study pathways before you decide.</p>
            <a href="#study-destinations" className="lk">Compare countries →</a>
          </div>
          <div className="card">
            <span className="ico">🛂</span>
            <h3>Visa Guidance</h3>
            <p>Student and tourist visa support for the USA, UK, Taiwan, Germany, France and more — with 2026 rules built in.</p>
            <a href="#visa-services" className="lk">Visa services →</a>
          </div>
          <div className="card">
            <span className="ico">✈️</span>
            <h3>Pre-Departure</h3>
            <p>Forex, accommodation, travel, and arrival briefings so your first weeks abroad go smoothly.</p>
            <a href="#services" className="lk">Learn more →</a>
          </div>
        </div>
      </section>

      <section className="band-navy">
        <div className="section">
          <div className="section-header center" data-reveal>
            <div className="section-label">Visa Services</div>
            <h2 className="section-title">Student &amp; tourist visas, <em>every route covered</em>.</h2>
            <p className="section-intro">We guide you through the right visa for your destination — student and visitor routes alike — with current 2026 rules, documentation, and interview prep built in.</p>
          </div>
          <div className="grid grid-3 reveal-stagger">
            <FlagPanel src={flagUrl('usa')} className="card card-3d home-visa-card">
              <img src={flagUrl('usa')} alt="USA flag" className="flag-img flag-img-lg home-country-flag" />
              <h3>United States</h3>
              <p><strong>Student:</strong> F-1 (academic), M-1 (vocational), J-1 (exchange). <strong>Visitor:</strong> B-1/B-2. Note the new 2026 Visa Integrity Fee.</p>
              <a href="#visa-services" className="lk">USA visa guide →</a>
            </FlagPanel>
            <FlagPanel src={flagUrl('uk')} className="card card-3d home-visa-card">
              <img src={flagUrl('uk')} alt="United Kingdom flag" className="flag-img flag-img-lg home-country-flag" />
              <h3>United Kingdom</h3>
              <p><strong>Student:</strong> Student Route (with CAS, TB test &amp; IHS). <strong>Visitor:</strong> Standard Visitor Visa for tourism and family visits.</p>
              <a href="#visa-services" className="lk">UK visa guide →</a>
            </FlagPanel>
            <FlagPanel src={flagUrl('germany')} className="card card-3d home-visa-card">
              <img src={flagUrl('germany')} alt="Germany flag" className="flag-img flag-img-lg home-country-flag" />
              <h3>Germany</h3>
              <p><strong>Student:</strong> National Visa (Type D) with APS certificate &amp; blocked account. <strong>Visitor:</strong> short-stay Schengen Visa.</p>
              <a href="#visa-services" className="lk">Germany visa guide →</a>
            </FlagPanel>
            <FlagPanel src={flagUrl('france')} className="card card-3d home-visa-card">
              <img src={flagUrl('france')} alt="France flag" className="flag-img flag-img-lg home-country-flag" />
              <h3>France</h3>
              <p><strong>Student:</strong> VLS-TS via the Campus France procedure. <strong>Visitor:</strong> short-stay Schengen Visa across the Schengen Area.</p>
              <a href="#visa-services" className="lk">France visa guide →</a>
            </FlagPanel>
            <FlagPanel src={flagUrl('taiwan')} className="card card-3d home-visa-card">
              <img src={flagUrl('taiwan')} alt="Taiwan flag" className="flag-img flag-img-lg home-country-flag" />
              <h3>Taiwan</h3>
              <p><strong>Student:</strong> Resident Visa → ARC (with ROC document authentication). <strong>Visitor:</strong> Visitor Visa or the free TAC for eligible travellers.</p>
              <a href="#visa-services" className="lk">Taiwan visa guide →</a>
            </FlagPanel>
            <div className="card card-3d">
              <span className="ico">🛂</span>
              <h3>Full Support</h3>
              <p>Document checklists, financial proof, form filing (DS-160, CAS, APS, Campus France), slot booking, and mock interviews.</p>
              <a href="#visa-services" className="lk">See all visa guides →</a>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <a href="#visa-services" className="btn btn-primary">Explore Visa Services →</a>
          </div>
        </div>
      </section>

      <section className="cta" data-reveal>
        <div className="cta-inner">
          <h2>Ready to start your <em>journey</em>?</h2>
          <p>Let's work together to turn your study-abroad dreams into reality.</p>
          <div className="cta-buttons">
            <a href="#contact" className="btn btn-primary">Schedule a Free Call →</a>
            <a href="#about" className="btn btn-secondary">Learn About Us</a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;
