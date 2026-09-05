import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import './styles/Testimonials.css';

function Testimonials() {
  const [openCard, setOpenCard] = useState(null);
  const testimonials = [
    {
      quote: "I take this opportunity to thank you for your timely support and guidance during our son Abhishek's admission in Nashville State Community College this fall semester. Your timely advice and personal touch made the entire admission process easy and stress-free. I really appreciate your effort in driving us to NSCC and introducing us to the International Student Advisor, Adriane, who guided us through the admission process. You are a mentor to Abhishek guiding him to do great in his academics. Your wide network in Nashville education institutions, including Belmont is amazing. I am grateful for your professionalism and knowledge in the education sector, that helped us immensely. We wish you all the very best!! Thanks again, Warm Regards.",
      name: "Jyoti",
      role: "Mother of Raj Sinha",
      date: "11/25/2022",
      initials: "J"
    },
    {
      quote: "Hi Dr. Hull, Through the difficult periods of my life, Dr. Mani Hull has not only given me the care & support that I needed but also helped me to grow into the person I've wanted to become for so long. Whenever I have a conversation with her, I appreciate her wisdom and humor. I really am blessed to have gotten to know Dr. Hull these past couple of years because she changed my life for the better",
      name: "Kahwit",
      role: "Graduate of Lipscomb University",
      date: "11/09/2022",
      initials: "K"
    },
    {
      quote: "Dr. Hull exceeded all of my expectations assisting my daughter completing her graduate application to Vanderbilt University. Dr. Hull was engaging, knowledgeable, thorough and a pleasure to work with. Her personal knowledge of the doctorate application process coupled with her desire to help people is beyond measure. She spent a great deal of time getting to know my daughter Lauren as well as her future goals. She created a step-by-step plan including time frames to guide us through the process. I highly recommend her services to anyone looking to apply to college at any level.",
      name: "Nora Fielding",
      role: "Mother of Lauren Fielding",
      date: "10/05/2022",
      initials: "NF"
    },
    {
      quote: "Dr. Hull: You have been absolutely incredible in helping me be informed about my options. By going through possible schools, dates and deadlines, requirements, etc., you have helped me navigate the confusing world of graduate school applications. From your well-earned experience to your encouraging words, you have been such a blessing. I couldn't have done it without you!",
      name: "Lauren Fielding",
      role: "",
      date: "10/04/2022",
      initials: "LF"
    },
    {
      quote: "Hi Mani Aunty. Today I received my acceptance letter from NSCC. Thank you so much for everything that you have done for us, you've quite literally been a godsend. My mother and I are so grateful for your strong but kind words, more than half of what we did was not possible without you. Thank you so much once again.",
      name: "Raj Sinha",
      role: "",
      date: "05/13/2023",
      initials: "RS"
    },
    {
      quote: "I was delighted with the service provided by AES. Their team was not only exceedingly friendly, and helpful, but they also simplified and streamlined the entire US student visa process. I wholeheartedly recommend their services.",
      name: "Heman",
      role: "University of California, Riverside",
      date: "",
      initials: "H"
    },
    {
      quote: "AES provided exceptional support throughout my US student visa process. Despite the time constraints in managing my student visa application, they consistently displayed promptness in addressing my needs. Post my visa grant, AES further assisted me in securing accommodation in Nashville and arranging airport pick-up. My experience with AES has been truly outstanding, and I wholeheartedly endorse them to prospective students.",
      name: "Anupreeta Pinjan",
      role: "Trevecca Nazarene University",
      date: "",
      initials: "AP"
    },
    {
      quote: "I express my heartfelt gratitude to Alpesa Education Services (AES) for their pivotal role in the success of my US visa application. Their performance was consistently excellent throughout the entire process, characterized by trustworthiness and ethical conduct. I wholeheartedly recommend their services to aspiring students planning to study abroad.",
      name: "Kumar Manglam",
      role: "Westcliff University",
      date: "",
      initials: "KM"
    },
    {
      quote: "AES made the entire process exceptionally smooth for me, from advising the right institution, course, and location to preparing for the visa interview. My journey with AES has been remarkable, and I'm profoundly grateful for their efforts that contributed to my higher education success.",
      name: "Varsha",
      role: "Tennessee Tech University",
      date: "",
      initials: "V"
    }
  ];

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
      <section className="section px-5 py-16 sm:px-6 lg:py-24">
        <div className="section-header center" data-reveal>
          <div className="section-label">What Students Say</div>
          <h2 className="section-title">Success stories, <em>verified</em>.</h2>
          <p className="section-intro">These are real students who've worked with us. Their admissions, visa outcomes, and career progress speak to the quality of our guidance.</p>
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
          <h2 className="section-title">The Alpesa <em>difference</em>.</h2>
          <p className="section-intro">What makes our approach unique and effective.</p>
        </div>

        <div className="grid grid-3 reveal-stagger" style={{ marginTop: '50px' }}>
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

        <div className="steps reveal-stagger" style={{ maxWidth: '900px', margin: '50px auto 0' }}>
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
