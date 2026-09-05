import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import FlagPanel from './FlagPanel';
import { flagSrc as flagUrl } from './flagSrc';

function Services() {
  const [activeTab, setActiveTab] = useState('student');
  const [financeTab, setFinanceTab] = useState('scholarships');

  const tabs = {
    student: {
      label: 'Student Services',
      intro: 'Senior stage of specialized support — application to counselling, funding, visas, departures, and on-campus success. Everything you need, under one roof.',
      steps: [
        {
          num: '01',
          title: 'Counselling & Planning',
          text: 'One-on-one expert counselling to align your academic goals, budget, destination, and intake timeline with the most suitable course and university choices.',
          bullets: ['Course and university shortlisting', 'Career-fit guidance', 'Budget planning and timeline mapping']
        },
        {
          num: '02',
          title: 'Test Preparation',
          text: 'Support for IELTS, TOEFL, PTE, Duolingo, GRE, GMAT, SAT, and targeted exam readiness aligned to your application cycle.',
          bullets: ['Score strategy and retake planning', 'Official prep resources', 'Trusted coaching referrals']
        },
        {
          num: '03',
          title: 'Admissions & Applications',
          text: 'End-to-end application support to build strong profiles with SOPs, essays, CVs, LORs, and submission management across universities.',
          bullets: ['SOP and essay review', 'LOR and transcript guidance', 'Offer and acceptance tracking']
        },
        {
          num: '04',
          title: 'Financial Assistance & Visa Support',
          text: 'Identify merit, need-based, and country-specific funding opportunities, and get clear visa guidance with documentation support.',
          hasTabs: true,
          tabContent: {
            scholarships: {
              label: 'Scholarships',
              bullets: ['Scholarship mapping', 'Financial document strategy', 'Funding checklist support']
            },
            loans: {
              label: 'Educational Loans',
              bullets: ['Loan evaluation & comparison', 'Application guidance', 'Eligibility assessment assistance']
            }
          }
        },
        {
          num: '05',
          title: 'Visa Assistance',
          text: 'Expert visa counseling and complete documentation support to ensure you meet all eligibility requirements and confidently handle the interview.',
          bullets: ['Visa-filing process guidance', 'Document checklists & templates', 'Financial proof guidelines', 'Mock visa interviews']
        },
        {
          num: '06',
          title: 'Pre-Departure Guidance',
          text: 'From travel logistics to accommodation and banking setup, we help you prepare for arrival and life abroad without confusion.',
          bullets: ['Travel and accommodation planning', 'SIM and banking setup', 'Arrival and orientation planning']
        },
        {
          num: '07',
          title: 'Travel Assistance',
          text: 'Complete travel coordination and support from visa approval until you safely land on campus — so you can focus on your new journey.',
          bullets: ['Flight & visa tracking', 'Travel compliance & requirements', 'Luggage & documentation audit']
        },
        {
          num: '08',
          title: 'Pre & Post Departure Orientation',
          text: 'An end-to-end orientation to help you settle into your new city, make informed decisions, and stay connected to our community of fellow alumni.',
          bullets: ['Campus welcome & campus support', 'Community & social groups', 'Internship & job placement']
        }
      ]
    },
    university: {
      label: 'University Services',
      intro: 'Partner institutions build strong student pipelines in India through recruitment, admissions, and long-term student lifecycle engagement.',
      cards: [
        {
          icon: '🏢',
          title: 'Vacancies Campaigns',
          text: 'Targeted outreach campaigns to fill student pipelines from India with qualified high-potential applicants across intakes and programs.',
          bullets: []
        },
        {
          icon: '🎓',
          title: 'Tours',
          text: 'Virtual and in-campus tours for Indian students and families — bringing your campus closer and building genuine interest.',
          bullets: []
        },
        {
          icon: '🎤',
          title: 'Seminars',
          text: 'Expert webinars and in-person seminars on admissions, scholarships, visas, and student life to reach and engage your target audience.',
          bullets: []
        },
        {
          icon: '👥',
          title: 'Faculty Opportunity',
          text: 'Build academic partnerships and faculty exchange programs to strengthen your institution\'s presence and reputation in India.',
          bullets: []
        },
        {
          icon: '💼',
          title: 'Recruitment Pipelines',
          text: 'Strategic pipeline building through Alpesa ambassadors, local partners, and education fairs to expand your India student network.',
          bullets: []
        },
        {
          icon: '✈️',
          title: 'Study Abroad Programs',
          text: 'Inbound and outbound exchange opportunities with Indian institutes to build student mobility and academic collaboration.',
          bullets: []
        }
      ]
    }
  };

  const currentTab = tabs[activeTab];

  return (
    <>
      <Header activePage="services" />

      <header className="hero">
        <div className="hero-inner">
          <span className="eyebrow">Our Services</span>
          <h1>Complete support, from <em>application to arrival</em>.</h1>
          <p className="hero-lede">We guide students and institutions through every stage of the international education journey — from counselling and admissions to visas, funding, arrival, and long-term student success.</p>
          <div className="hero-cta service-tabs" role="tablist" aria-label="Service tabs">
            <button type="button" className={`btn ${activeTab === 'student' ? 'btn-primary' : 'btn-secondary'}`} onClick={() => setActiveTab('student')} role="tab" aria-selected={activeTab === 'student'}>Student Services</button>
            <button type="button" className={`btn ${activeTab === 'university' ? 'btn-primary' : 'btn-secondary'}`} onClick={() => setActiveTab('university')} role="tab" aria-selected={activeTab === 'university'}>University Services</button>
          </div>
        </div>
      </header>

      <section className="section service-section">
        <FlagPanel src={activeTab === 'student' ? flagUrl('usa') : flagUrl('uk')} className="service-flag-box">
        <div className="section-header" data-reveal>
          <div className="section-label">{currentTab.label}</div>
          <h2 className="section-title">Your journey, <em>step by step</em>.</h2>
          <p className="section-intro">{currentTab.intro}</p>
        </div>

        {activeTab === 'student' ? (
          <div className="steps reveal-stagger">
            {currentTab.steps.map((step) => (
              <div className="card-3d step" key={step.num}>
                <div className="step-num">{step.num}</div>
                <div>
                  <h5>{step.title}</h5>
                  <p>{step.text}</p>
                  {step.hasTabs ? (
                    <div className="finance-tabs">
                      <div className="finance-tab-buttons">
                        <button 
                          type="button"
                          className={`finance-tab-btn ${financeTab === 'scholarships' ? 'active' : ''}`}
                          onClick={() => setFinanceTab('scholarships')}
                        >
                          {step.tabContent.scholarships.label}
                        </button>
                        <button 
                          type="button"
                          className={`finance-tab-btn ${financeTab === 'loans' ? 'active' : ''}`}
                          onClick={() => setFinanceTab('loans')}
                        >
                          {step.tabContent.loans.label}
                        </button>
                      </div>
                      <ul className="tab-content">
                        {step.tabContent[financeTab].bullets.map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <ul>
                      {step.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="service-grid reveal-stagger">
            {currentTab.cards.map((card) => (
              <article className="service-card-univ card-3d" key={card.title}>
                <div className="service-icon-univ">{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        )}
        </FlagPanel>
      </section>

      <section className="band-navy">
        <div className="section">
          <div className="section-header center" data-reveal>
            <div className="section-label">Why choose us</div>
            <h2 className="section-title">Trusted support from <em>start to finish</em>.</h2>
            <p className="section-intro">We combine strategic counselling, visa preparation, funding guidance, and ongoing support so students and partners can move forward with confidence.</p>
          </div>

          <div className="grid grid-3 reveal-stagger" style={{ marginTop: '50px' }}>
            <div className="card card-3d">
              <span className="ico">✅</span>
              <h3>Clear guidance</h3>
              <p>Practical and honest advice tailored to your profile, destination, and academic goals.</p>
            </div>

            <div className="card card-3d">
              <span className="ico">🤝</span>
              <h3>Personal attention</h3>
              <p>We keep the process simple, responsive, and student-focused from the first call onward.</p>
            </div>

            <div className="card card-3d">
              <span className="ico">📍</span>
              <h3>Full journey support</h3>
              <p>From course selection to arrival, we help students settle in and make informed decisions.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section cta" data-reveal>
        <div className="cta-inner">
          <h2>Ready to transform your study-abroad goals?</h2>
          <p>Book a free consultation with one of our expert counsellors today.</p>
          <div className="cta-buttons">
            <a href="#contact" className="btn btn-primary">Start Your Journey</a>
            <a href="#contact" className="btn btn-secondary">Request University Partnership</a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Services;
