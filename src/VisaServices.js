import React from 'react';
import './styles/VisaServices.css';
import Header from './Header';
import Footer from './Footer';
import FlagPanel from './FlagPanel';
import { flagSrc as flagUrl } from './flagSrc';

function VisaServices() {
  const visaInfo = {
    uk: {
      flagFile: 'uk',
      name: 'United Kingdom',
      title: 'UK Student Visa International',
      route: 'Student Route',
      summary: 'A compact, globally recognised study route with CAS, TB test and IHS requirements, plus a Standard Visitor option for tourism and family visits.',
      duration: 'Up to 5 years',
      processing: '3 weeks',
      cost: '£363',
      visaTypes: ['Student Route (with CAS, TB test & IHS)', 'Standard Visitor Visa'],
      documents: ['Passport', 'CAS', 'Proof of funds', 'TB test'],
      workPermit: 'On-campus: 20 hours/week during term. Off-campus: unlimited during breaks',
      renewal: 'Available within 12 weeks of course ending for graduate route (2 years)',
      tips: [
        'Get CAS number early; needed to apply',
        'Financial proof should show funds held for 28 days',
        'Graduate Route visa allows 2 years post-study work without sponsor',
        'TB test required for countries with high TB rates'
      ]
    },
    usa: {
      flagFile: 'usa',
      name: 'United States',
      title: 'USA Student Visa International',
      route: 'F-1',
      summary: 'Student (F-1, M-1, J-1) and visitor (B-1/B-2) routes, with SEVIS, DS-160 and interview prep built around current 2026 rules.',
      duration: 'Duration + 60 days',
      processing: '3–5 months',
      cost: '$160',
      visaTypes: ['F-1 (academic)', 'M-1 (vocational)', 'J-1 (exchange)', 'B-1/B-2 visitor'],
      documents: ['Passport', 'I-20', 'SEVIS', 'DS-160'],
      workPermit: 'On-campus: 20 hrs/week max during semester, unlimited during breaks. Off-campus: only with special authorization',
      renewal: 'Extension possible; OPT available for 12 months (STEM: 24-36 months)',
      tips: [
        'Apply early; visa interviews can get booked out',
        'Be prepared to answer questions about funding, career goals, ties to home country',
        'Keep all documents organized in a folder',
        'Recent stamp collection is critical'
      ]
    },
    australia: {
      flagFile: 'australia',
      name: 'Australia',
      title: 'Australia Student Visa (Subclass 500)',
      route: 'Subclass 500',
      summary: 'A practical student visa with CoE, GTE and OSHC requirements, plus a clear post-study work pathway.',
      duration: 'Up to 5 years',
      processing: '4–6 weeks',
      cost: 'AUD 650',
      visaTypes: ['Student visa (Subclass 500)', 'Visitor visa'],
      documents: ['CoE', 'GTE', 'OSHC', 'English proof'],
      workPermit: 'On-campus: unlimited (but study-first requirement). Off-campus: 48 hours/fortnight during semester',
      renewal: 'Eligible for TSV/ESV post-study for 18-24 months (leads to potential PR)',
      tips: [
        'CoE must be applied for before visa',
        'Financial proof should cover tuition + living (typically AUD 60,000+)',
        'Post-Study Work Visa available for 18-24 months',
        'Strong pathway to PR; many students transition to employer sponsorship'
      ]
    },
    canada: {
      flagFile: 'canada',
      name: 'Canada',
      title: 'Canada Study Permit',
      route: 'Study Permit',
      summary: 'A study permit tied to your course length, with a strong post-graduation work permit and PR pathway.',
      duration: 'Course duration + 90 days',
      processing: '8–12 weeks',
      cost: 'CAD 150',
      visaTypes: ['Study Permit', 'Visitor visa'],
      documents: ['LOA', 'GIC', 'Medical', 'Passport'],
      workPermit: 'On-campus: 20 hours/week during studies. Off-campus: available after 1st academic year',
      renewal: 'Open work permit upon graduation for 3 years (matching course length)',
      tips: [
        'Study Permit allows PGWP for 3 years post-study — PR pathway easier',
        'Financial proof must be for 2 years',
        'Medical exam required from certain countries',
        'Tuition fees often locked in; budget accordingly'
      ]
    },
    newzealand: {
      flagFile: 'nz',
      name: 'New Zealand',
      title: 'New Zealand Student Visa International',
      route: 'Student visa',
      summary: 'Safe, scenic campuses with a straightforward student visa and strong post-study work options.',
      duration: 'Course duration',
      processing: '4–8 weeks',
      cost: 'NZD 430',
      visaTypes: ['Student visa', 'Visitor visa'],
      documents: ['Passport', 'Offer of place', 'Proof of funds', 'Insurance'],
      workPermit: 'Part-time work during studies; full-time during scheduled breaks',
      renewal: 'Post-study work visas available after eligible qualifications',
      tips: [
        'Keep your offer of place and fee receipts ready before you apply',
        'Show enough funds for tuition and living costs',
        'Health insurance is expected for the length of stay',
        'Post-study work rights depend on the level of your qualification'
      ]
    },
    ireland: {
      flagFile: 'ie',
      name: 'Ireland',
      title: 'Ireland Student Visa International',
      route: 'Study visa',
      summary: 'An English-speaking gateway to Europe and global tech, with a graduate route of up to 24 months.',
      duration: 'Course duration',
      processing: '4–8 weeks',
      cost: '€60–€100',
      visaTypes: ['Study visa', 'Visitor visa'],
      documents: ['Offer letter', 'Fee proof', 'Insurance', 'Passport'],
      workPermit: 'Part-time work during term; full-time during holidays',
      renewal: 'Graduate Route (up to 24 months)',
      tips: [
        'Pay the course deposit and keep the receipt with your offer letter',
        'Show funds that cover fees and living costs in Ireland',
        'Private medical insurance is required for most applicants',
        'Strong tech hiring makes interview answers about career plans easier'
      ]
    },
    germany: {
      flagFile: 'germany',
      name: 'Germany',
      title: 'Germany Student Residence Permit',
      route: 'National Visa (Type D)',
      summary: 'National Visa (Type D) with APS certificate and blocked account, plus short-stay Schengen for visits.',
      duration: 'Typically 2 years; renewable if still studying',
      processing: '6–8 weeks',
      cost: 'Free to €75',
      visaTypes: ['National Visa (Type D)', 'Short-stay Schengen Visa'],
      documents: ['Admission letter', 'Passport', 'Health insurance', 'Blocked account'],
      workPermit: '120 full days OR 240 half days per year; unlimited during summer/semester breaks',
      renewal: 'Automatic if enrolled; extended for job-seeking after graduation',
      tips: [
        'Blocked account OR sponsor letter required before visa',
        'Health insurance mandatory — get it before applying',
        'English-taught programs don\'t typically require German proficiency',
        'Very affordable — minimal visa costs and tuition'
      ]
    }
  };

  const countries = Object.keys(visaInfo);
  const processSteps = [
    { num: '01', title: 'Visa Requirements Assessment', text: 'We evaluate your profile against your destination country\'s specific visa requirements — identifying any gaps or concerns early.' },
    { num: '02', title: 'Documentation Organization & Preparation', text: 'We provide a detailed checklist, help you organize documents, and ensure everything meets official standards (notarization, translations, etc.).' },
    { num: '03', title: 'Financial File Strengthening', text: 'Financial proof is critical for visa approval. We help you document income sources, sponsorship letters, and bank statements convincingly.' },
    { num: '04', title: 'Interview Coaching & Mock Sessions', text: 'We conduct mock interviews, anticipate tough questions, and prepare you to confidently answer visa officer questions.' },
    { num: '05', title: 'Application Submission & Tracking', text: 'We help with online applications, fee payments, appointment booking, and track your application status throughout.' },
    { num: '06', title: 'Post-Approval Support', text: 'Visa approved? We help with travel arrangements, accommodation, banking setup, and SIM card information for your arrival.' }
  ];

  return (
    <>
      <Header activePage="visa-services" />

      <header className="hero visa-hero">
        <div className="hero-inner">
          <span className="eyebrow">Visa Services</span>
          <h1>Your route abroad, made <em>clear.</em></h1>
          <p className="hero-lede">A practical guide to student visas, documents, timelines, work rights, and post-study options for the destinations our students choose most.</p>
          <div className="visa-hero-actions">
            <a href="#country-guides" className="btn btn-primary">Explore country guides</a>
            <a href="#contact" className="btn btn-secondary">Talk to an advisor</a>
          </div>
        </div>
      </header>

      <section className="section visa-popular">
        <div className="section-header center" data-reveal>
          <div className="section-label">Popular study visas</div>
          <h2 className="section-title">Choose a <em>destination.</em></h2>
        </div>
        <div className="visa-flag-row reveal-stagger">
          {countries.map((key) => {
            const country = visaInfo[key];
            return (
              <a key={key} href={`#guide-${key}`} className="visa-flag-chip">
                <img src={flagUrl(country.flagFile)} alt="" className="flag-img" />
                <span>{country.name}</span>
              </a>
            );
          })}
        </div>
      </section>

      <section className="country-guides" id="country-guides">
        {countries.map((key, index) => {
          const country = visaInfo[key];
          const src = flagUrl(country.flagFile);
          return (
            <article className="visa-country" id={`guide-${key}`} key={key}>
              <FlagPanel src={src} band className="visa-country-bar">
                <div className="visa-country-bar-inner">
                  <span className="country-number">0{index + 1}</span>
                  <img src={src} alt={`${country.name} flag`} className="flag-img flag-img-lg" />
                  <div>
                    <p className="country-kicker">Student visa guide</p>
                    <h3>{country.title}</h3>
                  </div>
                </div>
              </FlagPanel>

              <FlagPanel src={src} className="visa-country-body">
                <p className="country-summary">{country.summary}</p>
                <div className="visa-stat-grid reveal-stagger">
                  <div className="card-3d visa-stat"><span>Duration</span><strong>{country.duration}</strong></div>
                  <div className="card-3d visa-stat"><span>Processing time</span><strong>{country.processing}</strong></div>
                  <div className="card-3d visa-stat"><span>Visa cost</span><strong>{country.cost}</strong></div>
                </div>

                <div className="visa-split">
                  <div className="card-3d visa-list-card">
                    <h4>Document checklist</h4>
                    <ul>
                      {country.documents.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="card-3d visa-list-card">
                    <h4>Visa types</h4>
                    <ul>
                      {country.visaTypes.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="visa-split">
                  <div className="card-3d visa-list-card">
                    <h4>Work rights</h4>
                    <p>{country.workPermit}</p>
                  </div>
                  <div className="card-3d visa-list-card">
                    <h4>After-study options</h4>
                    <p>{country.renewal}</p>
                  </div>
                </div>

                <div className="country-tips">
                  <h4>Advisor notes</h4>
                  <ul>{country.tips.map((tip) => <li key={tip}>{tip}</li>)}</ul>
                </div>
              </FlagPanel>
            </article>
          );
        })}
      </section>

      <section className="band-navy visa-comparison" data-reveal>
        <div className="section">
          <div className="section-header center">
            <div className="section-label">At a glance</div>
            <h2 className="section-title">Compare the <em>main routes.</em></h2>
            <p className="section-intro">Use this as a starting point while you decide which destination fits your study and career plans.</p>
          </div>
          <div className="comparison-wrap">
            <table>
              <thead>
                <tr>
                  <th>Destination</th>
                  <th>Visa route</th>
                  <th>Duration</th>
                  <th>Processing</th>
                  <th>Cost</th>
                  <th>Post-study pathway</th>
                </tr>
              </thead>
              <tbody>
                {countries.map((key) => (
                  <tr key={key}>
                    <th>{visaInfo[key].name}</th>
                    <td>{visaInfo[key].route}</td>
                    <td>{visaInfo[key].duration}</td>
                    <td>{visaInfo[key].processing}</td>
                    <td>{visaInfo[key].cost}</td>
                    <td>{visaInfo[key].renewal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section visa-support">
        <div className="section-header center" data-reveal>
          <div className="section-label">Our support</div>
          <h2 className="section-title">How Alpesa helps you <em>succeed.</em></h2>
          <p className="section-intro">A clear, practical visa process from your first assessment to the day you arrive.</p>
        </div>
        <div className="visa-support-grid reveal-stagger">
          <article className="card-3d visa-support-card"><span>01</span><h3>Profile assessment</h3><p>We review your academic plans, destination, finances, and visa route before you begin.</p></article>
          <article className="card-3d visa-support-card"><span>02</span><h3>Document checklist</h3><p>Get a destination-specific checklist and a careful review of every supporting document.</p></article>
          <article className="card-3d visa-support-card"><span>03</span><h3>Application guidance</h3><p>We guide forms, fees, appointments, translations, and submission details step by step.</p></article>
          <article className="card-3d visa-support-card"><span>04</span><h3>Interview preparation</h3><p>Practice clear answers with mock sessions tailored to your course and personal story.</p></article>
        </div>
      </section>

      <section className="section visa-process-band">
        <div className="section-header center" data-reveal>
          <div className="section-label">Our Process</div>
          <h2 className="section-title">We handle your <em>visa</em>.</h2>
          <p className="section-intro">From document organization to interview prep, we guide you through every step.</p>
        </div>
        <div className="visa-process-grid reveal-stagger">
          {processSteps.map((step) => (
            <article className="card-3d visa-process-card" key={step.num}>
              <span>{step.num}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-header center" data-reveal>
          <h2 className="section-title">Frequently asked <em>questions</em>.</h2>
        </div>
        <div className="faq-list reveal-stagger">
          <details className="faq">
            <summary>How early should I apply for a student visa?</summary>
            <div className="ans">Timing varies by country: USA (120 days before arrival), UK (3 months), Canada (4 months), Australia (4 weeks), Germany (8-12 weeks). We recommend applying as soon as you have your university admission letter and financial proof ready.</div>
          </details>
          <details className="faq">
            <summary>What's the most common reason for visa rejection?</summary>
            <div className="ans">Insufficient financial proof is the #1 reason. Visa officers need to see that you can afford your education and living expenses without relying on illegal work. We help you present a strong, transparent financial file.</div>
          </details>
          <details className="faq">
            <summary>Do I need a lawyer for my student visa?</summary>
            <div className="ans">Not typically. Most student visas are straightforward. A lawyer is helpful if you have a rejection, criminal record, health issues, or unique circumstances. We can refer you to qualified immigration lawyers if needed.</div>
          </details>
          <details className="faq">
            <summary>What if my visa is rejected?</summary>
            <div className="ans">We analyze the rejection reason, help you understand the issues, and develop an appeal or reapplication strategy. Many rejections can be overcome with stronger documentation or addressing specific concerns. We have a strong track record of turning around rejections.</div>
          </details>
          <details className="faq">
            <summary>Can I work while on a student visa?</summary>
            <div className="ans">Yes, but with limitations. On-campus work is usually allowed (15-20 hours/week during studies, unlimited during breaks). Off-campus work varies by country — USA is most restrictive, while Germany allows up to 120 full or 240 half days per year. We provide country-specific guidance.</div>
          </details>
          <details className="faq">
            <summary>What's the post-study work visa situation?</summary>
            <div className="ans">Most countries offer post-study work visas: USA (12-36 months for STEM), UK (2 years with Graduate Route), Canada (3 years), Australia (18-24 months), Germany (18 months job-seeking). Many have pathways to PR. We guide you through all options.</div>
          </details>
        </div>
      </section>

      <section className="section cta" data-reveal>
        <div className="cta-inner">
          <h2>Your visa approval, nearly guaranteed.</h2>
          <p>Let's prepare a visa application that stands out.</p>
          <div className="cta-buttons">
            <a href="#contact" className="btn btn-primary">Start Visa Preparation</a>
            <a href="#contact" className="btn btn-secondary">Book Consultation</a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default VisaServices;
