import React from 'react';
import { flagSrc as flagUrl } from './flagSrc';
import HoursBlock from './HoursBlock';

const destinationFlags = [
  { key: 'usa', name: 'USA' },
  { key: 'uk', name: 'UK' },
  { key: 'canada', name: 'Canada' },
  { key: 'australia', name: 'Australia' },
  { key: 'germany', name: 'Germany' },
  { key: 'ireland', name: 'Ireland' },
  { key: 'newzealand', name: 'New Zealand' }
];

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <a href="#/" className="brand footer-brand">
            <img
              src="/AES Final Logo.png 1.png"
              width="168"
              height="56"
              alt="Alpesa Education Services"
              className="brand-logo footer-logo"
              loading="lazy"
              decoding="async"
            />
          </a>
          <p className="footer-blurb">Your trusted partner for global higher education — expert guidance on university admissions, scholarships, and student &amp; tourist visas, from application to arrival.</p>
          <div className="footer-flags" aria-hidden="true">
            {destinationFlags.map((flag) => (
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
          <p>📞 +91 89895 50909<br />📞 +91 86685 58349</p>
          <p>✉️ info@alpesaeducationservices.com</p>
          <p>🌐 alpesaeducationservices.com</p>
          <p>📍 Dnyaneshwar Paduka Chowk, 304/305, Ferguson College Rd, Shivajinagar, Pune, Maharashtra 411005, India</p>
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
