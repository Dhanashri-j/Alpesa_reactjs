import React, { useState } from 'react';
import './styles/Contact.css';
import Header from './Header';
import Footer from './Footer';
import HoursBlock from './HoursBlock';
import Modal from './Modal';
import emailjs from '@emailjs/browser';

const EMAIL_TO = 'info@alpesaeducationservices.com';
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const NAME_RE = /^[A-Za-z][A-Za-z .'-]{1,79}$/;

const emptyForm = {
  fullName: '',
  email: '',
  phone: '',
  interested: 'Study abroad — undergraduate',
  destination: 'Not sure yet — advise me',
  message: '',
  company: ''
};

function digitCount(value) {
  return (value || '').replace(/\D/g, '').length;
}

function validate(formData) {
  const errors = {};
  const name = formData.fullName.trim();
  if (!name) errors.fullName = 'Please enter your full name.';
  else if (!NAME_RE.test(name)) errors.fullName = 'Use letters, spaces, hyphens, or apostrophes (at least 2 characters).';

  const email = formData.email.trim();
  if (!email) errors.email = 'Please enter your email address.';
  else if (!EMAIL_RE.test(email)) errors.email = 'Please enter a valid email, for example you@example.com.';

  const phone = formData.phone.trim();
  if (!phone) errors.phone = 'Please enter a WhatsApp / mobile number.';
  else if (digitCount(phone) < 10 || digitCount(phone) > 15) errors.phone = 'Enter a valid phone number with 10–15 digits.';

  if (!formData.interested) errors.interested = 'Please choose what you are interested in.';
  if (!formData.destination) errors.destination = 'Please choose a preferred destination.';

  const message = formData.message.trim();
  if (!message) errors.message = 'Please tell us a little about your goals.';
  else if (message.length < 12) errors.message = 'Please add a short message (at least 12 characters).';

  return errors;
}

async function sendEnquiry(formData) {
  const payload = {
    from_name: formData.fullName.trim(),
    from_email: formData.email.trim(),
    reply_to: formData.email.trim(),
    fullName: formData.fullName.trim(),
    name: formData.fullName.trim(),
    email: formData.email.trim(),
    phone: formData.phone.trim(),
    interested: formData.interested,
    destination: formData.destination,
    message: formData.message.trim(),
    _subject: `Alpesa enquiry — ${formData.fullName.trim()}`,
    _template: 'table',
    _captcha: 'false',
    _replyto: formData.email.trim()
  };

  try {
    await emailjs.send('service_05nr2ty', 'template_bfytf76', payload, '8_xFG2HwKPgy6--IR');
    return;
  } catch (emailJsError) {
    const response = await fetch(`https://formsubmit.co/ajax/${EMAIL_TO}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(payload)
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok || data.success === 'false' || data.success === false) {
      throw emailJsError || new Error(data.message || 'Could not send enquiry');
    }
  }
}

function Contact() {
  const [formData, setFormData] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [modal, setModal] = useState({ open: false, title: '', body: null, variant: 'info' });
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.company) return;

    const nextErrors = validate(formData);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      setModal({
        open: true,
        title: 'Please check the form',
        body: (
          <ul>
            {Object.values(nextErrors).map((err) => (
              <li key={err}>{err}</li>
            ))}
          </ul>
        ),
        variant: 'error'
      });
      return;
    }

    setSending(true);
    try {
      await sendEnquiry(formData);
      setModal({
        open: true,
        title: 'Enquiry sent',
        body: <div>Thank you for your enquiry — we will contact you shortly at {formData.email.trim()}.</div>,
        variant: 'success'
      });
      setFormData(emptyForm);
      setErrors({});
    } catch (error) {
      const subject = encodeURIComponent(`Alpesa enquiry — ${formData.fullName.trim()}`);
      const body = encodeURIComponent(
        `Name: ${formData.fullName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nInterested in: ${formData.interested}\nDestination: ${formData.destination}\n\n${formData.message}`
      );
      setModal({
        open: true,
        title: 'Send failed',
        body: (
          <div>
            We could not send the form just now. Please email us directly at{' '}
            <a href={`mailto:${EMAIL_TO}?subject=${subject}&body=${body}`}>{EMAIL_TO}</a>
            {' '}or try again in a moment.
          </div>
        ),
        variant: 'error'
      });
    } finally {
      setSending(false);
    }
  };

  const fieldClass = (name) => (errors[name] ? 'invalid' : '');

  return (
    <>
      <Header activePage="contact" />

      <header className="hero">
        <div className="hero-inner">
          <span className="eyebrow">Contact</span>
          <h1>Let's start your <em>study-abroad journey</em>.</h1>
          <p className="hero-lede">Book a free consultation or send us a message. Our counsellors typically respond within one business day.</p>
        </div>
      </header>

      <section className="section">
        <div className="contact-grid">
          <div className="contact-panel" data-reveal="left">
            <div className="section-label">Send a Message</div>
            <h2 className="section-title" style={{ fontSize: '1.8rem' }}>Request a <em>free consultation</em></h2>
            <form onSubmit={handleSubmit} noValidate>
              <div className="hp-field" aria-hidden="true">
                <label htmlFor="company">Company</label>
                <input id="company" type="text" name="company" value={formData.company} onChange={handleChange} tabIndex={-1} autoComplete="off" />
              </div>
              <div className="field">
                <label htmlFor="fullName">Full name</label>
                <input
                  id="fullName"
                  type="text"
                  name="fullName"
                  placeholder="Your name"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={fieldClass('fullName')}
                  aria-invalid={Boolean(errors.fullName)}
                  autoComplete="name"
                />
                {errors.fullName && <p className="field-error">{errors.fullName}</p>}
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className={fieldClass('email')}
                  aria-invalid={Boolean(errors.email)}
                  autoComplete="email"
                />
                {errors.email && <p className="field-error">{errors.email}</p>}
              </div>
              <div className="field">
                <label htmlFor="phone">Phone (WhatsApp)</label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  placeholder="+91 ..."
                  value={formData.phone}
                  onChange={handleChange}
                  className={fieldClass('phone')}
                  aria-invalid={Boolean(errors.phone)}
                  autoComplete="tel"
                />
                {errors.phone && <p className="field-error">{errors.phone}</p>}
              </div>
              <div className="field">
                <label htmlFor="interested">Interested in</label>
                <select
                  id="interested"
                  name="interested"
                  value={formData.interested}
                  onChange={handleChange}
                  className={fieldClass('interested')}
                >
                  <option>Study abroad — undergraduate</option>
                  <option>Study abroad — postgraduate / master's</option>
                  <option>PhD / research</option>
                  <option>Student visa guidance</option>
                  <option>Tourist / visitor visa</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="destination">Preferred destination</label>
                <select
                  id="destination"
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                  className={fieldClass('destination')}
                >
                  <option>Not sure yet — advise me</option>
                  <option>USA</option>
                  <option>UK</option>
                  <option>Ireland</option>
                  <option>Germany</option>
                  <option>France</option>
                  <option>Taiwan</option>
                  <option>Italy</option>
                  <option>Australia</option>
                  <option>Canada</option>
                  <option>Japan</option>
                  <option>New Zealand</option>
                  <option>Netherlands</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your goals, current education, and intended intake..."
                  value={formData.message}
                  onChange={handleChange}
                  className={fieldClass('message')}
                  aria-invalid={Boolean(errors.message)}
                />
                {errors.message && <p className="field-error">{errors.message}</p>}
              </div>
              <button className="btn btn-primary" type="submit" disabled={sending}>{sending ? 'Sending…' : 'Submit Enquiry →'}</button>
              <p className="form-note">We’ll reply by email within one business day. Your details are used only to follow up on this enquiry.</p>
            </form>
            <Modal open={modal.open} title={modal.title} onClose={() => setModal({ ...modal, open: false })} variant={modal.variant}>
              {modal.body}
            </Modal>
          </div>
          <div className="contact-aside" data-reveal="right">
            <div className="section-label">Reach Us Directly</div>
            <h2 className="section-title" style={{ fontSize: '1.8rem' }}>Get in <em>touch</em></h2>
            <div className="info-row">
              <span className="ic">📞</span>
              <div>
                <b>Phone</b>
                <span><a href="tel:+918989550909">+91 89895 50909</a> &nbsp;·&nbsp; <a href="tel:+918668558349">+91 86685 58349</a></span>
              </div>
            </div>
            <div className="info-row">
              <span className="ic">✉️</span>
              <div>
                <b>Email</b>
                <span><a href="mailto:info@alpesaeducationservices.com">info@alpesaeducationservices.com</a></span>
              </div>
            </div>
            <div className="info-row">
              <span className="ic">🌐</span>
              <div>
                <b>Website</b>
                <span><a href="https://alpesaeducationservices.com" target="_blank" rel="noopener noreferrer">alpesaeducationservices.com</a></span>
              </div>
            </div>
            <div className="info-row">
              <span className="ic">📍</span>
              <div>
                <b>Office</b>
                <span>Dnyaneshwar Paduka Chowk, 304/305, Ferguson College Rd, Shivajinagar, Pune, Maharashtra 411005, India</span>
              </div>
            </div>
            <div className="info-row">
              <span className="ic">🕐</span>
              <div>
                <b>Hours</b>
                <HoursBlock />
              </div>
            </div>
            <div className="card contact-call-card">
              <h3>Prefer to talk now?</h3>
              <p>Call or WhatsApp us during business hours for a quick first conversation about your options.</p>
              <a href="tel:+918989550909" className="btn btn-dark">Call Now →</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Contact;
