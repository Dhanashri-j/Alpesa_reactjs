export const STUDY_DESTINATIONS = {
  usa: {
    name: 'USA',
    info: "The world's largest and most diverse university system.",
    facts: [
      ['Intakes', 'Fall (Aug/Sep) - Spring (Jan)'],
      ['Student Visa', 'F-1 / M-1'],
      ['Tuition (PG)', 'USD 20k-70k/yr'],
      ['Living Cost', 'USD 12k-20k/yr'],
      ['Work Rights', '20 hrs/wk on-campus'],
      ['Post-Study Work', 'OPT 12 mo (+24 mo STEM)']
    ],
    why: [
      ['Unmatched choice', '4,000+ institutions across every field, from Ivy League research powerhouses to specialised tech schools.'],
      ['STEM advantage', 'STEM graduates get a 24-month OPT extension on top of the standard 12 - up to 3 years of post-study work.'],
      ['Research & funding', 'Assistantships, fellowships, and research roles can substantially offset costs for strong PG applicants.'],
      ['Global recognition', 'US degrees carry weight with employers worldwide and open doors to the H-1B and green-card pathway.']
    ],
    universities: ['Massachusetts Institute of Technology (MIT)', 'Stanford University', 'Harvard University', 'Carnegie Mellon University', 'Georgia Institute of Technology', 'University of California system (UCLA, Berkeley, San Diego)', 'University of Illinois Urbana-Champaign', 'Purdue University', 'Arizona State University', 'Northeastern University', 'University of Texas at Austin', 'New York University'],
    courses: [
      ['Engineering & CS', 'Computer science, data science, AI/ML, electrical and mechanical engineering - the most popular fields for Indian students.'],
      ['Business & Management', 'MBA, MS in Business Analytics, Finance, and Management at top business schools.'],
      ['Sciences & Health', 'Biotechnology, public health, pharmacy, and the applied sciences with strong research funding.']
    ],
    note: 'Scholarships: University merit aid, graduate assistantships (GA/TA/RA), and external awards like Fulbright-Nehru. Visa: Covers F-1, J-1/J-2, O-1/O-2, M-1, and B-1/B-2.'
  },
  uk: {
    name: 'United Kingdom',
    info: 'Shorter degrees, global prestige, and a post-study work route.',
    facts: [['Intakes', 'Sep/Oct - Jan (some)'], ['Student Visa', 'Student Route'], ['Tuition (PG)', 'GBP 14k-38k/yr'], ['Living Cost', 'GBP 12k-15k/yr'], ['Work Rights', '20 hrs/wk in term'], ['Post-Study Work', 'Graduate Route (2 yrs)']],
    why: [['One-year master\'s', 'Most UK master\'s are a single year - faster and often cheaper overall than a 2-year program elsewhere.'], ['Graduate Route', 'Stay 2 years after graduating to work or look for work (PhD: 3 years). Note: reduces to 18 months from Jan 2027.'], ['World-ranked universities', 'Four of the world\'s top 10 are in the UK, with strengths across every discipline.'], ['Chevening & more', 'Prestigious fully-funded scholarships like Chevening and Commonwealth for outstanding applicants.']],
    universities: ['University of Oxford', 'University of Cambridge', 'Imperial College London', 'University College London (UCL)', 'University of Edinburgh', 'University of Manchester', "King's College London", 'University of Warwick', 'London School of Economics (LSE)', 'University of Bristol', 'University of Glasgow', 'University of Leeds'],
    courses: [['Business & Finance', 'MBA, finance, accounting, and management - especially strong in London.'], ['Engineering & Computing', 'AI, data science, and engineering at Russell Group universities.'], ['Law, Arts & Media', 'Globally respected law, creative arts, journalism, and humanities programs.']],
    note: 'Scholarships: Chevening, Commonwealth, GREAT, and generous university bursaries. Visa: Requires a CAS, TB test, and the Immigration Health Surcharge.'
  },
  ireland: {
    name: 'Ireland', info: 'English-speaking gateway to Europe and global tech.',
    facts: [['Intakes', 'Sep - Jan'], ['Student Visa', "Stamp 2 / 'D' study"], ['Tuition (PG)', 'EUR 10k-25k/yr'], ['Living Cost', 'EUR 10k-14k/yr'], ['Work Rights', '20 hrs/wk in term'], ['Post-Study Work', 'Stamp 1G (up to 2 yrs)']],
    why: [['Tech & pharma hub', 'European HQs of Google, Apple, Meta, Pfizer, and more - strong graduate hiring in Dublin and Cork.'], ['English-taught', 'All programs in English, in an EU member state with a welcoming student culture.'], ['Third Level Graduate Scheme', 'Stamp 1G lets master\'s graduates stay and work for up to 24 months.'], ['Gateway to the EU', 'An accessible, affordable route into the European job market.']],
    universities: ['Trinity College Dublin', 'University College Dublin (UCD)', 'University of Galway', 'University College Cork (UCC)', 'Dublin City University (DCU)', 'University of Limerick', 'Maynooth University', 'Technological University Dublin'],
    courses: [['Computing & Data', 'Software, data analytics, cybersecurity, and AI aligned to the tech employer base.'], ['Pharma & Biotech', 'Pharmaceutical sciences and biotechnology near major industry clusters.'], ['Business & Finance', 'International business, fintech, and management programs.']],
    note: 'Scholarships: Government of Ireland scholarships and university merit awards. Work: The Stamp 1G post-study scheme makes Ireland a strong choice for employability.'
  },
  germany: {
    name: 'Germany', info: 'Tuition-free public universities and engineering excellence.',
    facts: [['Intakes', 'Winter (Oct) - Summer (Apr)'], ['Student Visa', 'National Visa (D)'], ['Tuition (PG)', 'EUR 0 (public) + fees'], ['Living Cost', 'EUR 11,904/yr (blocked acct)'], ['Work Rights', '140 full days/yr'], ['Post-Study Work', '18-month job-seeker']],
    why: [['Tuition-free', 'Most public universities charge no tuition - only a semester contribution of EUR 150-350.'], ['Engineering powerhouse', 'World-leading in mechanical, automotive, and electrical engineering, plus strong CS and research.'], ['Stay back 18 months', 'Graduates get an 18-month residence permit to find work related to their degree.'], ['Strong economy', "Europe's largest economy with high demand for skilled engineers and IT professionals."]],
    universities: ['Technical University of Munich (TUM)', 'Ludwig Maximilian University of Munich (LMU)', 'Heidelberg University', 'RWTH Aachen University', 'Technical University of Berlin', 'Karlsruhe Institute of Technology (KIT)', 'University of Stuttgart', 'TU Darmstadt', 'University of Freiburg', 'University of Bonn'],
    courses: [['Engineering', "Mechanical, automotive, electrical, and industrial engineering - Germany's signature strengths."], ['Computer Science', 'CS, data engineering, and robotics, many taught in English at the master\'s level.'], ['Natural Sciences', 'Physics, chemistry, and the life sciences with strong research institutes.']],
    note: 'Scholarships: DAAD scholarships and Deutschlandstipendium. Visa: Requires the mandatory APS certificate and a EUR 11,904 blocked account.'
  },
  france: {
    name: 'France', info: 'Prestigious grandes ecoles and generous work rights.',
    facts: [['Intakes', 'Sep - Jan (some)'], ['Student Visa', 'VLS-TS'], ['Tuition (PG)', 'EUR 3k-20k/yr (public low)'], ['Living Cost', 'EUR 10k-14k/yr'], ['Work Rights', '964 hrs/yr'], ['Post-Study Work', 'Residence pathway (APS)']],
    why: [['Affordable public tuition', 'Public university fees are low; even prestigious schools offer strong value with scholarships.'], ['Grandes ecoles', 'HEC, INSEAD, and top engineering schools with global recognition in business and tech.'], ['Work while you study', 'Up to 964 hours per year (~20 hrs/wk) with no separate work permit needed.'], ['Culture & location', 'Live at the heart of Europe with rich culture and easy Schengen travel.']],
    universities: ['Universite PSL (Paris Sciences & Lettres)', 'Institut Polytechnique de Paris', 'Sorbonne University', 'HEC Paris', 'INSEAD', 'CentraleSupelec', 'Sciences Po', 'Universite Grenoble Alpes', 'Ecole Polytechnique', 'Universite Paris-Saclay'],
    courses: [['Business & Management', 'World-top MBA and management programs at the grandes ecoles de commerce.'], ['Engineering', 'Aerospace, energy, and general engineering at the ecoles d\'ingenieurs.'], ['Luxury, Fashion & Arts', 'A global niche - luxury brand management, fashion, and culinary arts.']],
    note: 'Scholarships: Charpak Scholarship (India-specific), Eiffel Excellence, and university awards. Visa: Requires the Campus France procedure and interview before the VLS-TS.'
  },
  taiwan: {
    name: 'Taiwan', info: 'An underrated, affordable hub for tech and semiconductors.',
    facts: [['Intakes', 'Fall (Sep) - Spring (Feb)'], ['Student Visa', 'Resident Visa -> ARC'], ['Tuition (PG)', 'USD 3k-8k/yr'], ['Living Cost', 'USD 6k-9k/yr'], ['Work Rights', '20 hrs/wk (with permit)'], ['Post-Study Work', 'Job-seeking extension']],
    why: [['Semiconductor capital', 'Home of TSMC and a global electronics ecosystem - ideal for EE, materials, and CS.'], ['Highly affordable', 'Low tuition and living costs compared with Western destinations, with strong scholarships.'], ['English-taught options', 'Growing range of English-medium programs at leading universities.'], ['Mandarin advantage', 'Learn Mandarin via Huayu scholarships while you study - a valuable career asset.']],
    universities: ['National Taiwan University (NTU)', 'National Tsing Hua University', 'National Yang Ming Chiao Tung University', 'National Cheng Kung University', 'National Taiwan University of Science & Technology', 'Taipei Medical University', 'National Central University'],
    courses: [['Electrical & Electronic Eng.', "Semiconductors, microelectronics, and materials science near the world's chip industry."], ['Computer Science', 'AI, IoT, and computing with strong industry links.'], ['Business & Mandarin', 'International business plus Mandarin language programs.']],
    note: 'Scholarships: Taiwan Scholarship (MOE) and Huayu Enrichment Scholarship for language study. Visa: Resident Visa converted to an ARC after arrival.'
  },
  italy: {
    name: 'Italy', info: 'Design, fashion, and affordable public universities.',
    facts: [['Intakes', 'Sep/Oct - Feb (some)'], ['Student Visa', "National 'D' study visa"], ['Tuition (PG)', 'EUR 1k-4k public - higher private'], ['Living Cost', 'EUR 9k-13k/yr'], ['Work Rights', '20 hrs/wk'], ['Post-Study Work', '12-month job-search permit']],
    why: [['Affordable & income-based', 'Public tuition is low and often scaled to family income, with generous regional grants.'], ['Design & fashion capital', 'Milan and Florence lead globally in design, fashion, and the creative industries.'], ['Historic universities', 'Among the oldest universities in the world, with growing English-taught programs.'], ['Schengen access', 'Study and travel across Europe with a single residence permit.']],
    universities: ['Politecnico di Milano', 'Sapienza University of Rome', 'University of Bologna', 'Politecnico di Torino', 'University of Padua', 'Bocconi University', 'University of Milan', "Ca' Foscari University of Venice"],
    courses: [['Design & Architecture', 'Product, fashion, and interior design plus architecture at world-leading schools.'], ['Engineering', 'Mechanical, automotive (think Ferrari, Ducati), and management engineering.'], ['Business & Economics', 'Bocconi and others for finance, economics, and international management.']],
    note: 'Scholarships: DSU regional right-to-study grants, Invest Your Talent in Italy, and university awards. Tip: Many public programs are remarkably affordable for strong students.'
  },
  australia: {
    name: 'Australia', info: 'Top universities, great weather, and clear PR pathways.',
    facts: [['Intakes', 'Feb - Jul'], ['Student Visa', 'Subclass 500'], ['Tuition (PG)', 'AUD 30k-50k/yr'], ['Living Cost', 'AUD 24k-29k/yr'], ['Work Rights', '48 hrs/fortnight'], ['Post-Study Work', '485 visa (2-4 yrs)']],
    why: [['Group of Eight', 'World-ranked research universities with strong industry connections.'], ['Post-study & PR', 'The Temporary Graduate (485) visa gives 2-4 years to work, feeding into skilled migration.'], ['High living standards', 'Safe, multicultural cities with a large, well-supported Indian student community.'], ['Strong job market', 'Demand for engineers, nurses, IT, and accounting professionals.']],
    universities: ['University of Melbourne', 'University of Sydney', 'Australian National University (ANU)', 'UNSW Sydney', 'Monash University', 'University of Queensland', 'University of Western Australia', 'University of Adelaide', 'University of Technology Sydney (UTS)'],
    courses: [['Engineering & IT', "Civil, mining, software, and data - aligned to Australia's skills demand."], ['Health & Nursing', 'Nursing, public health, and allied health with strong employment outcomes.'], ['Business & Accounting', 'Accounting, finance, and management on the skilled occupation lists.']],
    note: 'Scholarships: Australia Awards, Destination Australia, and university merit scholarships. Note: Student visa fees and financial thresholds rose; verify current figures before applying.'
  },
  canada: {
    name: 'Canada', info: 'The fastest-growing destination for Indians, with a clear PR route.',
    facts: [['Intakes', 'Sep - Jan - May'], ['Student Visa', 'Study Permit'], ['Tuition (PG)', 'CAD 18k-35k/yr'], ['Living Cost', 'CAD 15k-20k/yr'], ['Work Rights', '24 hrs/wk (term)'], ['Post-Study Work', 'PGWP (up to 3 yrs)']],
    why: [['PGWP -> PR', 'The Post-Graduation Work Permit plus Express Entry is among the clearest routes to permanent residency.'], ['Welcoming & safe', 'Consistently ranked among the best countries for quality of life and student safety.'], ['Co-op programs', 'Many programs include paid work placements that build Canadian experience.'], ['Strong job market', 'High demand in tech, healthcare, engineering, and skilled trades.']],
    universities: ['University of Toronto', 'University of British Columbia (UBC)', 'McGill University', 'University of Waterloo', 'University of Alberta', 'McMaster University', 'Western University', 'University of Montreal', 'University of Calgary'],
    courses: [['Computer Science & Eng.', 'Waterloo and Toronto lead for CS, software, and engineering co-ops.'], ['Business & Analytics', 'Management, business analytics, and finance with co-op pathways.'], ['Health & Sciences', 'Healthcare, biosciences, and environmental sciences.']],
    note: 'Scholarships: Vanier (PhD), university entrance awards, and provincial programs. Note: Study-permit caps and PGWP field rules apply - confirm program eligibility before enrolling.'
  },
  japan: {
    name: 'Japan', info: 'Cutting-edge tech, robotics, and strong government scholarships.',
    facts: [['Intakes', 'Apr - Sep/Oct'], ['Student Visa', 'Student (Ryugaku)'], ['Tuition (PG)', 'JPY 535k-900k/yr'], ['Living Cost', 'JPY 1.0M-1.5M/yr'], ['Work Rights', '28 hrs/wk (with permit)'], ['Post-Study Work', 'Job-hunting visa extension']],
    why: [['MEXT scholarships', 'Generous government scholarships cover tuition, a monthly stipend, and airfare.'], ['Robotics & automotive', 'World leaders in robotics, automotive, and advanced manufacturing R&D.'], ['Growing English programs', 'Expanding range of English-taught degrees at top national universities.'], ['Safe & orderly', 'Exceptional safety, infrastructure, and a deeply rewarding cultural experience.']],
    universities: ['University of Tokyo', 'Kyoto University', 'Osaka University', 'Tokyo Institute of Technology (Institute of Science Tokyo)', 'Tohoku University', 'Nagoya University', 'Kyushu University', 'Hokkaido University'],
    courses: [['Engineering & Robotics', 'Mechanical, robotics, and electronics at globally elite labs.'], ['Computer Science', 'AI, gaming, and computing with strong industry R&D.'], ['Japanese Studies & Business', 'Japanese language, international relations, and business.']],
    note: 'Scholarships: MEXT (government), JASSO, and university scholarships. Tip: Even basic Japanese greatly expands part-time work and career options.'
  },
  newzealand: {
    name: 'New Zealand', info: 'All universities globally ranked, in a safe, stunning setting.',
    facts: [['Intakes', 'Feb - Jul'], ['Student Visa', 'Fee-Paying Student Visa'], ['Tuition (PG)', 'NZD 26k-40k/yr'], ['Living Cost', 'NZD 20k-25k/yr'], ['Work Rights', '20 hrs/wk in term'], ['Post-Study Work', 'Post-Study Work Visa (up to 3 yrs)']],
    why: [['All 8 ranked', "Every one of New Zealand's eight universities ranks in global league tables."], ['Up to 3 years PSW', 'Strong post-study work rights leading toward skilled migration.'], ['Safe & scenic', 'One of the safest, most welcoming countries, with an outstanding quality of life.'], ['Practical, industry-linked', 'Degrees emphasise applied, employable skills.']],
    universities: ['University of Auckland', 'University of Otago', 'Victoria University of Wellington', 'University of Canterbury', 'Massey University', 'University of Waikato', 'Lincoln University', 'Auckland University of Technology (AUT)'],
    courses: [['Agriculture & Environment', 'World-leading agritech, environmental science, and sustainability.'], ['Engineering & IT', 'Engineering, computing, and data science with industry placements.'], ['Health & Business', 'Healthcare, hospitality management, and business.']],
    note: 'Scholarships: New Zealand Excellence Awards (for Indian students) and university scholarships. Work: The Post-Study Work Visa supports a clear transition into employment.'
  },
  netherlands: {
    name: 'Netherlands', info: '2,000+ English-taught programs in the heart of Europe.',
    facts: [['Intakes', 'Sep - Feb (some)'], ['Student Visa', 'MVV / residence permit'], ['Tuition (PG)', 'EUR 8k-20k/yr'], ['Living Cost', 'EUR 11k-15k/yr'], ['Work Rights', '16 hrs/wk (or full-time summer)'], ['Post-Study Work', 'Orientation Year (1 yr)']],
    why: [['English everywhere', 'One of the largest selections of English-taught degrees in continental Europe - and widely spoken English.'], ['Orientation Year (zoekjaar)', 'A 1-year search permit to find work after graduating, with relatively accessible routes to residency.'], ['Innovation economy', 'Home to ASML, Philips, and Shell, with strengths in tech, engineering, and design.'], ['Central & connected', 'Excellent transport and a gateway to the rest of Europe.']],
    universities: ['Delft University of Technology (TU Delft)', 'University of Amsterdam', 'Eindhoven University of Technology', 'Utrecht University', 'Wageningen University & Research', 'Erasmus University Rotterdam', 'Leiden University', 'University of Groningen'],
    courses: [['Engineering & Tech', 'TU Delft and Eindhoven for engineering, design, and high-tech systems.'], ['Business & Economics', 'Rotterdam and Amsterdam for business, economics, and finance.'], ['Agriculture & Sciences', 'Wageningen - world #1 in agriculture and life sciences.']],
    note: 'Scholarships: Orange Tulip Scholarship (India-specific), Holland Scholarship, and university grants. Work: The orientation year makes the Netherlands attractive for staying on after study.'
  }
};
