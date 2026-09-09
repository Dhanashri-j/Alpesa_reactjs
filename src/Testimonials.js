import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import testimonials from './testimonialsData';
import './styles/Testimonials.css';

function Testimonials() {
  const [openCard, setOpenCard] = useState(null);

  return (
    <>
      <Header activePage="testimonials" />

      <header className="hero relative overflow-hidden">
        <div className="hero-inner">
          <span className="eyebrow">Testimonials</span>
          <h1>Real success stories from <em>real students</em>.</h1>
          <p className="hero-lede">Hear from students who transformed their study-abroad dreams into admission letters, visas, and thriving campus lives with Alpesa's support.</p>
        </div>
      </header>

      <main className="min-h-screen bg-cream">
      <section className="section">
        <div className="section-header center" data-reveal>
          <div className="section-label">Google Reviews</div>
          <h2 className="section-title">Success stories, <em>verified</em>.</h2>
          <p className="section-intro">Reviews from students and families who worked with AES, as shared on Google.</p>
        </div>

        <div className="tcard-grid reveal-stagger">
          {testimonials.map((testimonial, idx) => {
            const isLong = testimonial.quote.length > 180;
            const isOpen = openCard === idx;
            return (
              <div key={testimonial.name} className="tcard-wrap">
                <article className={`tcard${isOpen ? ' is-open' : ''}`}>
                  <header className="tcard-head">
                    <div className="av" aria-hidden="true">{testimonial.initials}</div>
                    <div className="tcard-meta">
                      <b>{testimonial.name}</b>
                      {testimonial.role ? <span>{testimonial.role}</span> : null}
                      <span className="g-review-meta" aria-label="5 stars on Google">★★★★★ · Google review</span>
                    </div>
                    {testimonial.date ? (
                      <time className="tcard-date">{testimonial.date}</time>
                    ) : null}
                  </header>
                  <p className="tcard-body">{testimonial.quote}</p>
                  {isLong ? (
                    <button
                      type="button"
                      className="tcard-more"
                      aria-expanded={isOpen}
                      onClick={() => setOpenCard((prev) => (prev === idx ? null : idx))}
                    >
                      {isOpen ? 'Show less' : 'Read full story'}
                    </button>
                  ) : null}
                </article>
              </div>
            );
          })}
        </div>
      </section>

      <section className="band-navy">
        <div className="section">
          <div className="section-header center" data-reveal>
            <div className="section-label">By The Numbers</div>
            <h2 className="section-title">Our track <em>record</em>.</h2>
          </div>

          <div className="facts reveal-stagger">
            <div className="fact">
              <div className="l">Students Guided</div>
              <div className="v">500+</div>
            </div>
            <div className="fact">
              <div className="l">Universities Partnered</div>
              <div className="v">200+</div>
            </div>
            <div className="fact">
              <div className="l">Countries Served</div>
              <div className="v">8+</div>
            </div>
            <div className="fact">
              <div className="l">Admission Rate</div>
              <div className="v">92%</div>
            </div>
            <div className="fact">
              <div className="l">Visa Success Rate</div>
              <div className="v">98%</div>
            </div>
            <div className="fact">
              <div className="l">Avg Scholarship</div>
              <div className="v">$45K</div>
            </div>
          </div>

          <p style={{ textAlign: 'center', marginTop: '40px', color: 'rgba(255,255,255,.7)', fontSize: '14px', maxWidth: '600px', margin: '40px auto 0' }}>
            These numbers represent verified student outcomes from the past 3 years. We pride ourselves on transparency, continuous improvement, and celebrating every student's success.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-header center" data-reveal>
          <h2 className="section-title">The AES Difference</h2>
          <p className="section-intro">What makes our approach unique and effective.</p>
        </div>

          <div className="grid grid-3 reveal-stagger">
          <div className="card">
            <span className="ico">🎯</span>
            <h3>Personalized Strategy</h3>
            <p>We don't use a one-size-fits-all approach. Every student gets a custom plan based on their strengths, budget, and goals.</p>
          </div>

          <div className="card">
            <span className="ico">📚</span>
            <h3>Expert Guidance</h3>
            <p>Our counsellors have direct experience with admissions processes, visa systems, and international education. Real expertise, not templates.</p>
          </div>

          <div className="card">
            <span className="ico">🤝</span>
            <h3>Lifelong Support</h3>
            <p>We're with you from day 1 of counselling through graduation and beyond. Your success is our success.</p>
          </div>

          <div className="card">
            <span className="ico">💡</span>
            <h3>Proactive Problem-Solving</h3>
            <p>Rejections, visa delays, accommodation issues — we don't wait for you to ask. We identify and solve problems before they escalate.</p>
          </div>

          <div className="card">
            <span className="ico">🌍</span>
            <h3>Global Network</h3>
            <p>200+ partner universities, licensed lawyers, on-campus mentors — our network is your network.</p>
          </div>

          <div className="card">
            <span className="ico">📈</span>
            <h3>Proven Results</h3>
            <p>92% admission rate, 98% visa success rate, 92% on-time graduation rate. These numbers matter because they represent real lives changed.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-header center" data-reveal>
          <h2 className="section-title">Student <em>journey</em>.</h2>
          <p className="section-intro">A typical timeline from first consultation to campus arrival.</p>
        </div>

        <div className="steps reveal-stagger" style={{ maxWidth: '900px', margin: '8px auto 0' }}>
          <div className="step">
            <div className="step-num">1</div>
            <div>
              <h5>Month 1-2: Counselling &amp; Planning</h5>
              <p>Profile evaluation, country &amp; university shortlisting, intake planning, test prep strategy.</p>
            </div>
          </div>

          <div className="step">
            <div className="step-num">2</div>
            <div>
              <h5>Month 3-6: Test Prep &amp; Applications</h5>
              <p>Standardized test preparation, SOP &amp; essay writing, application submissions across universities.</p>
            </div>
          </div>

          <div className="step">
            <div className="step-num">3</div>
            <div>
              <h5>Month 7-8: Admits &amp; Funding</h5>
              <p>Receiving admission offers, scholarship negotiations, financial aid discussions, decision-making.</p>
            </div>
          </div>

          <div className="step">
            <div className="step-num">4</div>
            <div>
              <h5>Month 9-10: Visa Application</h5>
              <p>Documentation preparation, financial file building, visa application submission, interview coaching.</p>
            </div>
          </div>

          <div className="step">
            <div className="step-num">5</div>
            <div>
              <h5>Month 11: Visa &amp; Pre-Departure</h5>
              <p>Visa approval, accommodation finalization, travel planning, SIM card setup, on-campus mentorship intro.</p>
            </div>
          </div>

          <div className="step">
            <div className="step-num">6</div>
            <div>
              <h5>Month 12+: Arrival &amp; Beyond</h5>
              <p>Airport pickup, campus orientation, on-campus support, internship placement, career guidance.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section cta" data-reveal>
        <div className="cta-inner">
          <h2>Ready to write your own success story?</h2>
          <p>Let's start your journey to study abroad today.</p>
          <div className="cta-buttons">
            <a href="#contact" className="btn btn-primary">Book Your Consultation</a>
            <a href="#services" className="btn btn-secondary">Learn Our Services</a>
          </div>
        </div>
      </section>
      </main>

      <Footer />
    </>
  );
}

export default Testimonials;
