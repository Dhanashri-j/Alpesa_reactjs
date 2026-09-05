import React from 'react';
import Header from './Header';
import Footer from './Footer';

function LegalServices() {
  return (
    <>
      <Header activePage="legal-services" />

      <header className="hero">
        <div className="hero-inner">
          <span className="eyebrow">Legal Services</span>
          <h1>Expert immigration counsel, <em>from enrollment to employment</em>.</h1>
          <p className="hero-lede">Alpesa partners with a leading immigration law firm so our students receive trusted legal guidance through every stage of their U.S. journey.</p>
        </div>
      </header>

      <section className="section legal-partner-section">
        <div className="legal-partner-container">
          <div className="legal-partner-left" data-reveal="left">
            <div className="section-label">Our Legal Partner</div>
            <h2 className="partner-title">Gehi & Associates, <em>Attorneys at Law</em>.</h2>
            <p>Gehi & Associates, Attorneys at Law, an established full-service law firm based in three locations in New York, USA, as well as in Bombay, India, will serve as AES's legal services partner to counsel and assist students applying for their F-1 visa to pursue their higher education in the U.S.</p>
            <p>Gehi is a comprehensive global law firm with a multi-state, multi-national, and multi-cultural staff who will provide personalized services to meet the needs of each international student — from enrollment to Curricular Practical Training (CPT) or Optional Practical Training (OPT) and employment upon graduation.</p>
            <p>Mr. Gehi, the founder of the firm, is an accomplished lawyer and has been the recipient of many major awards in Immigration Law. He is the author of the book "Immigration for Everyone." He is a member of the American Immigration Law Association, and he is currently serving on the Federal Committee of the American Immigration Association.</p>
          </div>

          <div className="legal-partner-right" data-reveal="right">
            <h3 className="partner-help-title">How our legal partner helps</h3>
            <ul className="partner-helps-list">
              <li>Counsel and assistance with the F-1 student visa application</li>
              <li>Personalized, multi-faceted support for international students</li>
              <li>Guidance from enrollment through OPT / CPT</li>
              <li>Employment upon graduation immigration guidance</li>
              <li>Offices in New York, USA and Bombay, India</li>
            </ul>
          </div>
        </div>

        <div className="legal-contact" data-reveal>
          <img
            src="/gehi.png"
            alt="Mr. Gehi, founder of Gehi & Associates"
            className="legal-contact-photo"
            width="168"
            height="168"
            decoding="async"
          />
          <div className="legal-contact-details">
            <div className="section-label">Contact Details</div>
            <h3>Gehi &amp; Associates</h3>
            <ul>
              <li>
                <span className="legal-contact-label">Phone</span>
                <a href="tel:+17182635999">+1 (718)263-5999</a>
              </li>
              <li>
                <span className="legal-contact-label">Email</span>
                <a href="mailto:info@gehilaw.com">info@gehilaw.com</a>
              </li>
              <li>
                <span className="legal-contact-label">Office</span>
                <a href="https://maps.google.com/?q=74-09+37th+Avenue,+Suite+205,+Jackson+Heights,+NY+11372" target="_blank" rel="noopener noreferrer">
                  74-09 37th Avenue, Suite 205<br />
                  Jackson Heights, NY 11372
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="legal-disclaimer" data-reveal>
          <div className="disclaimer-label">Please Note</div>
          <p>Alpesa Education Services is an educational consultancy and is not a law firm. Legal counsel is provided by our independent legal services partner. Immigration matters are handled directly by the law firm in accordance with applicable laws and professional rules.</p>
        </div>
      </section>

      <section className="cta" data-reveal>
        <div className="cta-inner">
          <h2>Have a visa or immigration <em>question</em>?</h2>
          <p>Speak with our team and we'll connect you with the right legal guidance for your situation.</p>
          <div className="cta-buttons">
            <a href="#contact" className="btn btn-primary">Get In Touch →</a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default LegalServices;
