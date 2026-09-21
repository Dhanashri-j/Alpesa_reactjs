import React from 'react';
import './styles/Home.css';
import Header from './Header';
import Footer from './Footer';
import FlagPanel from './FlagPanel';
import { flagSrc as flagUrl } from './flagSrc';
import testimonials from './testimonialsData';
import { VISA_NAV, STUDY_DESTINATION_NAV } from './siteData';

const HOME_VISAS = {
  usa: { name: 'United States', text: 'Student: F-1 (academic), M-1 (vocational), J-1 (exchange). Visitor: B-1/B-2. Note the new 2026 Visa Integrity Fee.' },
  uk: { name: 'United Kingdom', text: 'Student: Student Route (with CAS, TB test & IHS). Visitor: Standard Visitor Visa for tourism and family visits.' },
  germany: { name: 'Germany', text: 'Student: National Visa (Type D) with APS certificate & blocked account. Visitor: short-stay Schengen Visa.' },
  ireland: { name: 'Ireland', text: 'Student: Study visa with a graduate route of up to 24 months. Visitor: short-stay visa for eligible travellers.' },
  australia: { name: 'Australia', text: 'Student: Subclass 500 with CoE, GTE and OSHC. Visitor: visitor visa for tourism and family visits.' },
  canada: { name: 'Canada', text: 'Student: Study Permit tied to your course, with a strong post-graduation work permit. Visitor: visitor visa.' },
  newzealand: { name: 'New Zealand', text: 'Student: Student visa with part-time work rights. Visitor: visitor visa for tourism and family visits.' },
  france: { name: 'France', text: 'Student: VLS-TS long-stay study visa via Campus France / France-Visas. Visitor: short-stay Schengen Visa.' },
  taiwan: { name: 'Taiwan', text: 'Student: Resident visa for study, then an ARC. Visitor: visitor visa for tourism and family visits.' }
};

function Home() {
  const marqueeItems = [...testimonials, ...testimonials];

  return (
    <>
      <Header activePage="home" />

      <header className="hero home-hero" style={{ '--hero-photo': "url('/home_image1.jpeg')" }}>
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

      <section className="section section-after-hero">
        <div className="section-header center" data-reveal>
          <div className="section-label">What We Do</div>
          <h2 className="section-title">Everything you need, <em>under one roof</em></h2>
          <p className="section-intro">From your first counselling session to the day you land on campus, our team handles the details so you can focus on your future.</p>
        </div>
        <div className="grid grid-3 reveal-stagger">
          <div className="card">
            <span className="ico">🎓</span>
            <h3>Counselling &amp; Planning</h3>
            <p>One-on-one expert counselling to align your academic goals, budget, destination, and intake timeline with the most suitable course and university choices.</p>
            <a href="#service-counselling" className="lk">Student services →</a>
          </div>
          <div className="card">
            <span className="ico">📝</span>
            <h3>Test Preparation</h3>
            <p>Support for IELTS, TOEFL, PTE, Duolingo, GRE, GMAT, SAT, and targeted exam readiness aligned to your application cycle.</p>
            <a href="#service-tests" className="lk">Learn more →</a>
          </div>
          <div className="card">
            <span className="ico">🎓</span>
            <h3>University Admissions</h3>
            <p>Shortlisting, applications, SOPs, LORs, and offer management across 500+ partner universities worldwide.</p>
            <a href="#service-admissions" className="lk">Student services →</a>
          </div>
          <div className="card">
            <span className="ico">💰</span>
            <h3>Scholarships &amp; Funding</h3>
            <p>We match you to country-specific scholarships and guide education-loan and financial-proof documentation.</p>
            <a href="#service-funding" className="lk">How we help →</a>
          </div>
          <div className="card">
            <span className="ico">🛂</span>
            <h3>Visa Guidance</h3>
            <p>Student and tourist visa support for the USA, UK, Taiwan, Germany, France and more — with 2026 rules built in.</p>
            <a href="#visa-services" className="lk">Visa services →</a>
          </div>
          <div className="card">
            <span className="ico">✈️</span>
            <h3>Pre &amp; Post Departure Orientation</h3>
            <p>An end-to-end orientation to help you settle into your new city, make informed decisions, and stay connected to our community of fellow alumni.</p>
            <a href="#service-predeparture" className="lk">Learn more →</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-header center" data-reveal>
          <div className="section-label">Study Destinations</div>
          <h2 className="section-title">Choose a country, <em>then a campus</em>.</h2>
          <p className="section-intro">Compare costs, study length, and post-study opportunities across the destinations our students choose most.</p>
        </div>
        <div className="dest-flag-bar" data-reveal>
          <span className="dest-flag-heading">Study Destinations:</span>
          {STUDY_DESTINATION_NAV.map((dest) => (
            <a key={dest.key} href="#study-destinations" className="country-button">
              <img src={flagUrl(dest.key)} alt="" aria-hidden="true" className="flag-img flag-img-sm" />
              <span className="name">{dest.name}</span>
            </a>
          ))}
        </div>
        <div className="section-more">
          <a href="#study-destinations" className="btn btn-primary">See all destinations →</a>
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
            {VISA_NAV.map((item) => {
              const visa = HOME_VISAS[item.key];
              if (!visa) return null;
              return (
                <FlagPanel src={flagUrl(item.key)} className="card card-3d home-visa-card" key={item.key}>
                  <img src={flagUrl(item.key)} alt={`${visa.name} flag`} className="flag-img flag-img-lg home-country-flag" />
                  <h3>{visa.name}</h3>
                  <p>{visa.text}</p>
                  <a href={`#guide-${item.key}`} className="lk">{visa.name} visa guide →</a>
                </FlagPanel>
              );
            })}
          </div>
          <div className="section-more">
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

      <section className="home-t-marquee" aria-label="Student testimonials">
        <div className="section-header center" data-reveal>
          <div className="section-label">Testimonials</div>
          <h2 className="section-title">Families and students, <em>in their words</em>.</h2>
        </div>
        <div className="t-marquee">
          <div className="t-marquee-track">
            {marqueeItems.map((item, index) => (
              <article className="t-marquee-card" key={`${item.name}-${index}`}>
                <p>“{item.quote.length > 180 ? `${item.quote.slice(0, 180).trim()}…` : item.quote}”</p>
                <strong>{item.name}</strong>
                <span className="g-review-meta">★★★★★ · Google review</span>
                {item.role ? <span>{item.role}</span> : null}
              </article>
            ))}
          </div>
        </div>
        <div className="section-more">
          <a href="#testimonials" className="btn btn-secondary">Read all stories →</a>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;
