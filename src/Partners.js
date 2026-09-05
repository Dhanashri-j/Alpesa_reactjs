import React from 'react';
import './styles/Partners.css';
import Header from './Header';
import Footer from './Footer';

function Partners() {
  const partnerCards = [
    {
      name: 'Trevecca Nazarene University',
      url: 'https://www.trevecca.edu/',
      image: '/trevecca.jpg'
    },
    {
      name: 'Milwaukee School of Engineering',
      url: 'https://www.msoe.edu/',
      image: '/msoe.jpg'
    },
    {
      name: 'Westcliff University',
      url: 'https://www.westcliff.edu/',
      image: '/westcliff.jpg'
    },
    {
      name: 'Mercyhurst University',
      url: 'https://www.mercyhurst.edu/',
      image: '/mercy.jpg'
    },
    {
      name: 'Austin Peay State University',
      url: 'https://www.apsu.edu/',
      image: '/austinp.jpeg'
    },
    {
      name: 'East TN State University',
      url: 'https://www.etsu.edu/',
      image: '/etsu.webp'
    },
    {
      name: 'Middle TN State University',
      url: 'https://www.mtsu.edu/',
      image: '/mtsu.jpeg'
    },
    {
      name: 'Tennessee State University',
      url: 'https://www.tnstate.edu/',
      image: '/TSU.jpg'
    },
    {
      name: 'Tennessee Tech University',
      url: 'https://www.tntech.edu/',
      image: '/TTU.jpg'
    }
  ];

  return (
    <>
      <Header activePage="partners" />

      <header className="hero partners-hero">
        <div className="hero-inner">
          <span className="eyebrow">Partners</span>
          <h1>Working with <em>trusted institutions</em><br />worldwide.</h1>
          <p className="hero-lede">Alpesa partners with universities, colleges, and service providers across our destinations to give students the strongest possible support — from admission to arrival.</p>
        </div>
      </header>

      <section className="partners-network">
        <div className="section-header" data-reveal>
          <div className="section-label">University &amp; Institution Partners</div>
          <h2 className="section-title">Our <em>partner network.</em></h2>
          <p className="section-intro">We collaborate with accredited institutions across 12 study destinations, building campus-to-campus linkages, recruitment pipelines, and joint academic programs.</p>
        </div>

        <div className="partner-grid reveal-stagger">
          {partnerCards.map((partner) => (
            <div className="partner-card-wrap" key={partner.name}>
              <a
                className="partner-card"
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                title={`Open ${partner.name} website`}
              >
                <img src={partner.image} alt="" className="partner-card-image" loading="lazy" decoding="async" />
                <h3>{partner.name}</h3>
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="cta" data-reveal>
        <div className="cta-inner">
          <h2>Interested in <em>partnering?</em></h2>
          <p>Reach out to explore recruitment, campus linkages, and joint programs with Alpesa Education Services.</p>
          <div className="cta-buttons">
            <a href="#contact" className="btn btn-primary">Contact Us →</a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Partners;
