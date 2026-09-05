import React, { useState } from 'react';
import './styles/StudyDestinations.css';
import Header from './Header';
import Footer from './Footer';
import FlagPanel from './FlagPanel';
import { flagSrc as flagUrl } from './flagSrc';

function StudyDestinations() {
  const [selectedCountry, setSelectedCountry] = useState('usa');

  const destinations = {
    usa: {
      name: 'USA',
      flag: '🇺🇸',
      info: 'Home to the world\'s top universities and thriving international student communities. World-class research, diverse programs, and strong career outcomes.',
      tuition: '$20,000 - $60,000 per year',
      duration: '4 years (Bachelor\'s), 2 years (Master\'s)',
      opportunities: ['OPT Work Visa (12-36 months)', 'Assistantships & scholarships', 'Internship placements', 'PR pathways'],
      topUniversities: ['Harvard University', 'Stanford University', 'MIT', 'Yale University', 'Princeton University', 'University of Chicago', 'Penn University', 'Columbia University']
    },
    uk: {
      name: 'United Kingdom',
      flag: '🇬🇧',
      info: 'Historic universities, specialized programs, and a compact study timeline. Graduate in 1 year with quality education and global recognition.',
      tuition: '$15,000 - $40,000 per year',
      duration: '3 years (Bachelor\'s), 1 year (Master\'s)',
      opportunities: ['Graduate Route Visa (2 years)', 'Scholarship opportunities', 'Internship pathways', 'EU placement network'],
      topUniversities: ['University of Oxford', 'University of Cambridge', 'Imperial College London', 'LSE', 'UCL', 'University of Edinburgh', 'University of Manchester', 'Kings College London']
    },
    canada: {
      name: 'Canada',
      flag: '🇨🇦',
      info: 'Affordable education, welcoming communities, and excellent post-graduate work visa opportunities. Many students eventually get PR.',
      tuition: '$12,000 - $30,000 per year',
      duration: '4 years (Bachelor\'s), 2 years (Master\'s)',
      opportunities: ['Post-Graduation Work Permit (3 years)', 'PR pathway', 'Tuition fee stability', 'Part-time work during studies'],
      topUniversities: ['University of Toronto', 'University of British Columbia', 'McMaster University', 'University of Alberta', 'Western University', 'University of Waterloo', 'McGill University', 'Ryerson University']
    },
    australia: {
      name: 'Australia',
      flag: '🇦🇺',
      info: 'Sunny climate, high-quality education, and strong internship opportunities. Many students work part-time and earn well.',
      tuition: '$15,000 - $35,000 per year',
      duration: '3 years (Bachelor\'s), 2 years (Master\'s)',
      opportunities: ['Post-study work visa (2-3 years)', 'PR eligibility after graduation', 'Part-time work on campus', 'Internship placements'],
      topUniversities: ['University of Melbourne', 'ANU', 'University of Sydney', 'UNSW', 'Monash University', 'University of Queensland', 'University of Western Australia', 'University of South Wales']
    },
    germany: {
      name: 'Germany',
      flag: '🇩🇪',
      info: 'Affordable or free tuition at public universities, excellent engineering programs, and strong industrial connections.',
      tuition: 'Free - $10,000 per year',
      duration: '3 years (Bachelor\'s), 2 years (Master\'s)',
      opportunities: ['Work permit (120/240 days per year)', 'PR pathway after graduation', 'Affordable living costs', 'Strong internship network'],
      topUniversities: ['Technical University of Munich', 'Heidelberg University', 'University of Berlin', 'University of Bonn', 'University of Hamburg', 'Karlsruhe Institute of Technology', 'University of Stuttgart', 'University of Cologne']
    },
    france: {
      name: 'France',
      flag: '🇫🇷',
      info: 'Culturally rich, affordable education, and world-class arts, sciences, and business programs. Gateway to Europe.',
      tuition: '$5,000 - $20,000 per year',
      duration: '3 years (Bachelor\'s), 2 years (Master\'s)',
      opportunities: ['Work permit (964 hours/year)', 'Living allowance & scholarships', 'Internship opportunities', 'European career network'],
      topUniversities: ['Sorbonne University', 'PSL Research University', 'University of Lyon', 'Grenoble INP', 'ESSEC', 'HEC Paris', 'Ecole Polytechnique', 'Sciences Po']
    },
    ireland: {
      name: 'Ireland',
      flag: '🇮🇪',
      info: 'English-speaking gateway to Europe and global tech.',
      tuition: '€10,000 - €25,000 per year',
      duration: '3 years (Bachelor\'s), 1 year (Master\'s)',
      opportunities: ['Graduate Route (up to 24 months)', 'Scholarships', 'Strong tech hiring'],
      topUniversities: ['Trinity College Dublin', 'University College Dublin', 'University of Galway', 'University College Cork']
    },
    taiwan: {
      name: 'Taiwan',
      flag: '🇹🇼',
      info: 'Affordable East-Asian study hub with strong tech industry links.',
      tuition: '$3,000 - $8,000 per year',
      duration: 'Varies by program',
      opportunities: ['Taiwan Scholarship (MOE)', 'Industry internships', 'Mandarin study options'],
      topUniversities: ['National Taiwan University', 'National Tsing Hua University', 'National Cheng Kung University']
    },
    italy: {
      name: 'Italy',
      flag: '🇮🇹',
      info: 'Design, fashion, and affordable public universities.',
      tuition: '€1,000 - €6,000 per year (public)',
      duration: '3 years (Bachelor\'s), 2 years (Master\'s)',
      opportunities: ['Design & creative industries', 'Regional grants', 'Schengen mobility'],
      topUniversities: ['Politecnico di Milano', 'Sapienza University of Rome', 'University of Bologna', 'Bocconi University']
    },
    japan: {
      name: 'Japan',
      flag: '🇯🇵',
      info: 'Cutting-edge tech, robotics, and strong government scholarships.',
      tuition: '¥535k–900k/yr',
      duration: 'Varies by program',
      opportunities: ['MEXT scholarships', 'Industry R&D roles', 'Expanding English programs'],
      topUniversities: ['University of Tokyo', 'Kyoto University', 'Osaka University']
    },
    newzealand: {
      name: 'New Zealand',
      flag: '🇳🇿',
      info: 'Safe, scenic campuses and high quality of life.',
      tuition: 'NZD 20k–40k/yr',
      duration: '3 years (Bachelor\'s), 1-2 years (Master\'s)',
      opportunities: ['Post-study work visas', 'Strong scholarship schemes'],
      topUniversities: ['University of Auckland', 'University of Otago', 'Victoria University of Wellington']
    },
    netherlands: {
      name: 'Netherlands',
      flag: '🇳🇱',
      info: 'Large selection of English-taught programs in the heart of Europe.',
      tuition: '€8k–20k/yr',
      duration: '3 years (Bachelor\'s), 1-2 years (Master\'s)',
      opportunities: ['Orientation Year (zoekjaar)', 'English widely spoken', 'Innovation economy'],
      topUniversities: ['Delft University of Technology', 'University of Amsterdam', 'Eindhoven University of Technology']
    }
  };

  const current = destinations[selectedCountry];

  return (
    <>
      <Header activePage="study-destinations" />

      <header className="hero">
        <div className="hero-inner">
          <span className="eyebrow">Study Destinations</span>
          <h1>Study abroad, <em>your way</em>.</h1>
          <p className="hero-lede">Explore 6+ countries, compare programs, costs, and career outcomes. Find your perfect destination and build your global education strategy.</p>
        </div>
      </header>

      <div className="country-nav">
        <div className="country-nav-inner" role="tablist" aria-label="Study destinations">
          {Object.keys(destinations).map((key) => (
            <button
              key={key}
              type="button"
              id={`tab-${key}`}
              role="tab"
              aria-selected={selectedCountry === key}
              aria-controls={`panel-${key}`}
              className={`country-button ${selectedCountry === key ? 'selected' : ''}`}
              onClick={() => setSelectedCountry(key)}
            >
              <img
                src={flagUrl(key)}
                alt=""
                aria-hidden="true"
                className="flag-img flag-img-sm"
              />
              <span className="name">{destinations[key].name}</span>
            </button>
          ))}
        </div>
      </div>

      <section className="section dest-section">
        <article className="dest-country tab-panel" key={selectedCountry} id={`panel-${selectedCountry}`} role="tabpanel" aria-labelledby={`tab-${selectedCountry}`}>
          <FlagPanel src={flagUrl(selectedCountry)} band className="dest-country-bar">
            <div className="dest-country-bar-inner">
              <img src={flagUrl(selectedCountry)} alt={`${current.name} flag`} className="flag-img flag-img-lg" />
              <div>
                <p className="dest-kicker">Study destination</p>
                <h2>{current.name}</h2>
              </div>
            </div>
          </FlagPanel>

          <div className="country-detail" data-reveal>
            <p className="dest-summary">{current.info}</p>

            <div className="meta-grid dest-stats">
              <div className="card-3d meta-card">
                <span className="meta-label">Typical costs</span>
                <strong>{current.tuition}</strong>
                <p>Plus living expenses of $10,000-$20,000/year depending on city</p>
              </div>
              <div className="card-3d meta-card">
                <span className="meta-label">Study duration</span>
                <strong>{current.duration}</strong>
                <p>Varies by program and institution</p>
              </div>
            </div>

            <div className="dest-block">
              <div className="dest-block-label">Post-study opportunities</div>
              <div className="chip-row">
                {current.opportunities.map((opp, idx) => (
                  <span className="chip" key={idx}>{opp}</span>
                ))}
              </div>
            </div>

            <div className="dest-block">
              <h3 className="dest-uni-title">Top universities</h3>
              <ul className="uni-list">
                {current.topUniversities.map((uni, idx) => (
                  <li key={idx}>{uni}</li>
                ))}
              </ul>
            </div>
          </div>
        </article>
      </section>

      <section className="band-navy">
        <div className="section">
          <div className="section-header center" data-reveal>
            <div className="section-label">Our Support</div>
            <h2 className="section-title">We help you <em>succeed</em> abroad.</h2>
            <p className="section-intro">From pre-arrival preparations to on-campus success, we support you throughout your journey.</p>
          </div>

          <div className="grid grid-3 reveal-stagger" style={{ marginTop: '50px' }}>
            <div className="card card-3d">
              <span className="ico">📋</span>
              <h3>Pre-Arrival</h3>
              <p>Accommodation search, city guides, budget planning, and local SIM card setup.</p>
            </div>

            <div className="card">
              <span className="ico">🛫</span>
              <h3>Arrival &amp; Orientation</h3>
              <p>Airport pickup coordination, campus orientation, and initial settling-in support.</p>
            </div>

            <div className="card">
              <span className="ico">🎓</span>
              <h3>On-Campus Support</h3>
              <p>Academic mentorship, career guidance, and internship placement assistance.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-header center" data-reveal>
          <h2 className="section-title">Frequently asked <em>questions</em>.</h2>
        </div>

        <div className="faq-list reveal-stagger">
          <details className="faq">
            <summary>Which country is best for Indian students?</summary>
            <div className="ans">There's no single "best" — it depends on your goals, budget, and field of study. USA offers the most universities and career opportunities. UK is great for rapid master's programs. Canada has excellent post-graduation work visas and PR pathways. Australia offers quality education with lower costs. Germany has minimal tuition fees. We help you evaluate all options.</div>
          </details>

          <details className="faq">
            <summary>How much does it cost to study abroad?</summary>
            <div className="ans">Total costs (tuition + living) range from $20,000-$80,000+ per year depending on country and university. Germany is most affordable. USA and UK can be expensive but offer excellent scholarships. We help you budget and explore funding options.</div>
          </details>

          <details className="faq">
            <summary>Can I work while studying?</summary>
            <div className="ans">Yes, most countries allow part-time work (15-20 hours/week during studies, full-time during holidays). Work eligibility varies by country. We provide specific guidance for your destination.</div>
          </details>

          <details className="faq">
            <summary>What are my visa options after graduation?</summary>
            <div className="ans">Most countries offer post-graduation work visas (12 months to 3 years). Many have PR pathways. We guide you through options for your destination.</div>
          </details>

          <details className="faq">
            <summary>What about scholarships?</summary>
            <div className="ans">Many universities offer merit-based, need-based, and country-specific scholarships. Government scholarships may be available in some countries. We help you identify and apply for all available funding.</div>
          </details>
        </div>
      </section>

      <section className="section cta" data-reveal>
        <div className="cta-inner">
          <h2>Ready to explore your perfect destination?</h2>
          <p>Let's craft a study-abroad plan tailored to your goals and budget.</p>
          <div className="cta-buttons">
            <a href="#contact" className="btn btn-primary">Book Consultation</a>
            <a href="#services" className="btn btn-secondary">View All Services</a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default StudyDestinations;
