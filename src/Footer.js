import React from 'react';
import { flagSrc as flagUrl } from './flagSrc';
import HoursBlock from './HoursBlock';
import { OFFICE_ADDRESS, PHONE_PRIMARY, PHONE_SECONDARY, STUDY_DESTINATION_NAV } from './siteData';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <a href="#/" className="brand footer-brand">
            <img
              src="/aes-logo.png"
              width="280"
              height="110"
              alt="Alpesa Education Services"
              className="brand-logo footer-logo"
              loading="lazy"
              decoding="async"
            />
          </a>
          <p className="footer-blurb">Your trusted partner for global higher education — expert guidance on university admissions, scholarships, and student &amp; tourist visas, from application to arrival.</p>
          <div className="footer-flags" aria-hidden="true">
            {STUDY_DESTINATION_NAV.map((flag) => (
              <img key={flag.name} src={flagUrl(flag.key)} alt="" title={flag.name} width="28" height="18" loading="lazy" decoding="async" />
            ))}
          </div>
        </div>
        <div>
          <h4>Explore</h4>
          <ul>
            <li><a href="#/">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#legal-services">Legal Services</a></li>
            <li><a href="#partners">Partners</a></li>
          </ul>
        </div>
        <div>
          <h4>More</h4>
          <ul>
            <li><a href="#study-destinations">Study Destinations</a></li>
            <li><a href="#visa-services">Visa Services</a></li>
            <li><a href="#events-gallery">Events &amp; Gallery</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4>Get in touch</h4>
          <p>📞 {PHONE_PRIMARY.display}<br />📞 {PHONE_SECONDARY.display}</p>
          <p>✉️ info@alpesaeducationservices.com</p>
          <p>🌐 alpesaeducationservices.com</p>
          <p>📍 {OFFICE_ADDRESS}</p>
          <p className="footer-hours">
            <span aria-hidden="true">🕐</span>
            <HoursBlock />
            
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Alpesa Education Services. All rights reserved.</span>
        <span>Admissions • Scholarships • Visa Guidance • Pre-Departure</span>
      </div>
    </footer>
  );
}

export default Footer;
