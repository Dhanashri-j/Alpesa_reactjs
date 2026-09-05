import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <div className="brand">
            <span className="brand-mark">A</span>
            <span className="brand-name" style={{ color: '#fff' }}>Alpesa Education<small>Services</small></span>
          </div>
          <p style={{ marginTop: '16px', maxWidth: '32ch' }}>Your trusted partner for global higher education — expert guidance on university admissions, scholarships, and student &amp; tourist visas, from application to arrival.</p>
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
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4>Get in touch</h4>
          <p>📞 +91 89895 50909<br />📞 +91 86685 58349</p>
          <p>✉️ info@alpesaeducationservices.com</p>
          <p>🌐 alpesaeducationservices.com</p>
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
