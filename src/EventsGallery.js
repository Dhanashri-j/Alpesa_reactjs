import React, { useEffect, useState } from 'react';
import './styles/EventsGallery.css';
import Header from './Header';
import Footer from './Footer';

const img = (folder, file) => `/events/${folder}/${file}`;

const KIIT_GALLERY = [
  'DSC_6339.jpg', 'DSC_6346.jpg', 'DSC_6359.jpg', 'DSC_6368.jpg', 'DSC_6369.jpg',
  'DSC_6374.jpg', 'DSC_6376.jpg', 'DSC_6377.jpg', 'DSC_6380.jpg', 'DSC_6382.jpg',
  'DSC_6385.jpg', 'DSC_6390.jpg', 'DSC_6391.jpg', 'DSC_6393.jpg', 'DSC_6396.jpg',
  'DSC_6399.jpg', 'DSC_6402.jpg'
].map((file) => img('KIIT', file));

const KIIT_DETAIL = [
  'DSC_6339.jpg', 'DSC_6346.jpg', 'DSC_6359.jpg', 'DSC_6368.jpg', 'DSC_6369.jpg',
  'DSC_6374.jpg', 'DSC_6376.jpg', 'DSC_6377.jpg', 'DSC_6380.jpg', 'DSC_6382.jpg',
  'DSC_6385.jpg', 'DSC_6390.jpg', 'DSC_6391.jpg', 'DSC_6393.jpg', 'DSC_6394.jpg',
  'DSC_6396.jpg', 'DSC_6399.jpg', 'DSC_6402.jpg'
].map((file) => img('KIIT', file));

const INTERACTION_PHOTOS = [
  'IMG_6320a.jpg', 'IMG_6321a.jpg', 'IMG_6322a.jpg', 'IMG_6330a.jpg', 'IMG_6339a.jpg',
  'IMG_6340a.jpg', 'IMG_6341a.jpg', 'IMG_6344a.jpg', 'IMG_6347a.jpg'
].map((file) => img('Interaction_KIIT2', file));

const MPKV_PHOTOS = [
  'DSC06544.jpg', 'DSC06546.jpg', 'DSC06557.jpg', 'DSC06567.jpg', 'DSC06569.jpg',
  'DSC06573.jpg', 'DSC06596.jpg', 'DSC06598.jpg', 'DSC06621.jpg', 'DSC06624.jpg',
  'DSC06626.jpg', 'DSC06636.jpg', 'DSC06638.jpg'
].map((file) => img('3Event', file));

const APSU_PHOTOS = [
  'IMG1.jpg', 'IMG2.jpg', 'IMG3.jpg', 'IMG4.jpg', 'IMG5.jpg', 'IMG6.jpg', 'IMG7.jpg', 'IMG8.jpg'
].map((file) => img('event_4', file));

const IEW_PHOTOS = Array.from({ length: 30 }, (_, i) => img('event_5', `img${i + 1}.jpg`));

const events = [
  {
    id: 'kiit',
    date: 'March 22, 2023',
    title: 'International University Delegation Visit & Student Seminar at KIIT',
    excerpt: 'Join us for a remarkable academic exchange as the University of USA delegates, in collaboration with TSU, visit the campus of KIIT.',
    cover: img('KIIT', 'DSC_6339.jpg'),
    photos: KIIT_DETAIL,
    galleryPhotos: KIIT_GALLERY,
    description: 'Join us for a remarkable academic exchange as the University of USA delegates, in collaboration with TSU (Technical State University) and AES/GESI (Academic Exchange Society/Global Education and Student Initiatives), visit the vibrant campus of Kalinga Institute of Industrial Technology (KIIT). This event promises a unique opportunity for students, faculty, and enthusiasts to engage in cross-cultural dialogue and knowledge sharing.',
    highlights: [
      { title: 'University Delegation Meet & Greet', text: 'Meet and interact with esteemed delegates from the renowned University of USA. Explore possibilities of collaboration, ask questions, and gain insights into international education trends.' },
      { title: 'Collaborative Discussions', text: 'Witness collaborative discussions between delegates from TSU, AES/GESI, and KIIT. Exchange ideas, experiences, and explore potential areas of partnership in academics and research.' },
      { title: 'Student Seminar — Exploring New Horizons', text: 'TSU and AES/GESI heads will lead an enlightening seminar for students on the campus. This seminar aims to broaden horizons by discussing cutting-edge advancements in various fields and the importance of global perspectives in education.' },
      { title: 'Networking Opportunities', text: 'Connect with peers, professors, and professionals from diverse backgrounds. Forge meaningful connections that can potentially shape your academic and professional journey.' },
      { title: 'Cultural Exchange', text: 'Immerse yourself in the cultural diversity of our guests and engage in meaningful cultural exchanges. Learn about different traditions, languages, and perspectives.' },
      { title: 'Knowledge Enrichment', text: 'Participate in insightful sessions and workshops conducted by experts from both the visiting universities and KIIT. Expand your knowledge base and gain fresh insights into the world of academia.' },
      { text: 'Don\'t miss this exceptional event that brings together the best minds from multiple institutions, fostering global collaboration and the spirit of learning without boundaries. Open to all students, faculty, and staff members.' },
      { text: 'For registration and more details, please contact us at Info@Alpesaeducationservices.Com.' },
      { text: 'Come, be a part of this international academic rendezvous and seize the opportunity to shape your educational journey on a global scale.' }
    ]
  },
  {
    id: 'interaction',
    date: 'March 22, 2023',
    title: 'Interaction with Dr. Jewell Winn & Dr. Arlene Nicholas Phillips: A Global Academic Confluence',
    excerpt: 'Embark on a captivating academic journey with the added privilege of interacting with distinguished scholars, Dr. Jewell Winn and Dr. Arlene Nicholas Phillips.',
    cover: img('Interaction_KIIT2', 'IMG_6322a.jpg'),
    photos: INTERACTION_PHOTOS,
    galleryPhotos: INTERACTION_PHOTOS,
    description: 'Embark on a captivating academic journey with the added privilege of interacting with distinguished scholars, Dr. Jewell Winn and Dr. Arlene Nicholas Phillips. This event seamlessly blends the international university delegation visit with an insightful interaction session, enhancing the learning experience for students, faculty, and participants alike.',
    highlights: [
      { title: 'Welcome Address and University Delegation Introduction', text: 'Begin the event with a warm welcome and an introduction to the esteemed University of USA delegates, along with the notable presence of Dr. Jewell Winn and Dr. Arlene Nicholas Phillips.' },
      { title: 'Panel Discussion — Global Education Trends', text: 'Engage in a thought-provoking panel discussion led by Dr. Jewell Winn, Dr. Arlene Nicholas Phillips, and representatives from TSU, AES/GESI, and KIIT. Delve into the current trends, challenges, and opportunities in global education.' },
      { title: 'Student Interaction Session', text: 'An exceptional opportunity for students to interact directly with Dr. Jewell Winn and Dr. Arlene Nicholas Phillips. Pose questions, seek advice, and gain valuable insights from these accomplished scholars.' },
      { title: 'TSU & AES/GESI Seminar: Exploring Academic Frontiers', text: 'Continue the academic journey with the enlightening seminar by TSU and AES/GESI heads. Delve into advanced academic concepts and international collaboration prospects.' },
      { title: 'Cultural Exchange and Networking Luncheon', text: 'Participate in a cultural exchange session followed by a networking luncheon. Connect with fellow students, delegates, and scholars from diverse backgrounds.' },
      { title: 'Closing Remarks and Vision for the Future', text: 'Wrap up the event with closing remarks from the University of USA delegates and KIIT representatives. Reflect on the event\'s outcomes and explore future possibilities for collaborative ventures.' },
      { text: 'Don\'t miss this exceptional confluence of academia, cultural exchange, and intellectual enrichment. Open to all students, faculty, and staff members, this event promises to expand horizons and pave the way for global academic exploration.' },
      { text: 'For registration and more details, please contact us at Info@Alpesaeducationservices.Com.' },
      { text: 'Join us in this celebration of knowledge, collaboration, and intercultural understanding. Together, let\'s shape a brighter future for education on a global scale.' }
    ]
  },
  {
    id: 'mpkv',
    date: 'March 24, 2023',
    title: 'Visit of Tennessee State University Officials in MPKV, Rahuri on March 24, 2023',
    excerpt: '',
    cover: img('3Event', 'DSC06544.jpg'),
    photos: MPKV_PHOTOS,
    galleryPhotos: MPKV_PHOTOS
  },
  {
    id: 'apsu',
    date: 'November 11, 2022',
    title: 'Visit of Austin Peay State University Delegates in Birla Global University, Bhubaneshwar',
    excerpt: 'APSU visited the campus Birla Global University, Bhubaneswar. University delegates had interaction with bachelor’s and master’s students.',
    cover: img('event_4', 'IMG8.jpg'),
    photos: APSU_PHOTOS,
    galleryPhotos: APSU_PHOTOS,
    description: 'APSU visited the campus Birla Global University, Bhubaneswar. University delegates had interaction with bachelor’s and master’s students, exposure on the US education system and further opportunities for BGU students in the USA.'
  },
  {
    id: 'iew',
    date: 'November 15, 2023',
    title: 'International Education Week Summit 2023, Tennessee State University collaboration with Global Education Services, Inc.',
    excerpt: 'International Education Week is endorsed by the U.S. State Department and the U.S. Department of Education.',
    cover: img('event_5', 'img20.jpg'),
    photos: IEW_PHOTOS,
    galleryPhotos: IEW_PHOTOS,
    description: 'International Education Week is endorsed by the U.S. State Department and the U.S. Department of Education and celebrated on campuses across the U.S. In 2023, International Education Week will be recognized during November 13-17. GESI is collaborating with Tennessee State University, a member partner, to host a one-day Summit to convene students as well as public and private sector leadership.',
    links: [
      { prefix: 'U.S. State Department — ', label: 'International Education Week 2023 | ECA (state.gov)', href: 'https://iew.state.gov/' },
      { prefix: 'U.S. Department of Education — ', label: 'International Education Week | International Affairs Office', href: 'https://sites.ed.gov/international/international-education-week/' }
    ]
  }
];

function getEventIdFromHash() {
  const hash = window.location.hash.slice(1);
  if (hash.startsWith('event-')) return hash.replace('event-', '');
  return null;
}

function PhotoLightbox({ photos, index, onClose, onMove }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onMove(1);
      if (e.key === 'ArrowLeft') onMove(-1);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose, onMove]);

  if (index == null || !photos[index]) return null;

  return (
    <div className="photo-lightbox" role="dialog" aria-modal="true" aria-label="Event photo" onClick={onClose}>
      <button type="button" className="photo-lightbox-close" aria-label="Close photo" onClick={onClose}>✕</button>
      {photos.length > 1 && (
        <button
          type="button"
          className="photo-lightbox-nav prev"
          aria-label="Previous photo"
          onClick={(e) => { e.stopPropagation(); onMove(-1); }}
        >
          ‹
        </button>
      )}
      <img src={photos[index]} alt="" onClick={(e) => e.stopPropagation()} />
      {photos.length > 1 && (
        <button
          type="button"
          className="photo-lightbox-nav next"
          aria-label="Next photo"
          onClick={(e) => { e.stopPropagation(); onMove(1); }}
        >
          ›
        </button>
      )}
      <p className="photo-lightbox-count" onClick={(e) => e.stopPropagation()}>{index + 1} / {photos.length}</p>
    </div>
  );
}

function PhotoGrid({ photos, alt, onOpen }) {
  return (
    <div className="event-photo-grid reveal-stagger">
      {photos.map((src, i) => (
        <button type="button" className="event-photo-btn" key={src} onClick={() => onOpen(photos, i)}>
          <img src={src} alt={`${alt} ${i + 1}`} loading="lazy" decoding="async" />
        </button>
      ))}
    </div>
  );
}

function EventsGallery() {
  const [eventId, setEventId] = useState(getEventIdFromHash);
  const [lightbox, setLightbox] = useState({ photos: [], index: null });

  useEffect(() => {
    const sync = () => setEventId(getEventIdFromHash());
    window.addEventListener('hashchange', sync);
    return () => window.removeEventListener('hashchange', sync);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [eventId]);

  const selected = events.find((event) => event.id === eventId) || null;

  const openLightbox = (photos, index) => setLightbox({ photos, index });
  const closeLightbox = () => setLightbox({ photos: [], index: null });
  const moveLightbox = (step) => {
    setLightbox((current) => {
      if (!current.photos.length || current.index == null) return current;
      const next = (current.index + step + current.photos.length) % current.photos.length;
      return { ...current, index: next };
    });
  };

  return (
    <>
      <Header activePage="events-gallery" />

      <header
        className="hero events-hero"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(10,37,64,.94), rgba(10,37,64,.72)), url('${selected ? selected.cover : events[0].cover}')`
        }}
      >
        <div className="hero-inner">
          <span className="eyebrow">{selected ? selected.date : 'Events & Gallery'}</span>
          {selected ? (
            <>
              <h1>{selected.title}</h1>
              <p className="hero-lede">{selected.excerpt || 'Photos from this university visit and academic exchange.'}</p>
              <div className="hero-cta">
                <a href="#events-gallery" className="btn btn-secondary">← All events</a>
              </div>
            </>
          ) : (
            <>
              <h1>Seminars, campus visits, and <em>student success</em>.</h1>
              <p className="hero-lede">University delegations, student seminars, and moments from Alpesa Education Services events with partner campuses in India and the United States.</p>
            </>
          )}
        </div>
      </header>

      {selected ? (
        <section className="section event-detail-section">
          <div className="event-detail-copy" data-reveal>
            <div className="section-label">{selected.date}</div>
            <h2 className="section-title">{selected.title}</h2>
            {selected.description && <p className="section-intro">{selected.description}</p>}
            {selected.links && (
              <ul className="event-detail-links">
                {selected.links.map((link) => (
                  <li key={link.href}>
                    {link.prefix}
                    <a href={link.href} target="_blank" rel="noreferrer">{link.label}</a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {selected.highlights && (
            <div className="event-highlights" data-reveal>
              <h3>Event highlights</h3>
              <ul>
                {selected.highlights.map((item, i) => (
                  <li key={i}>
                    {item.title && <strong>{item.title}. </strong>}
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="event-detail-photos">
            <div className="section-label">Photos</div>
            <PhotoGrid photos={selected.photos} alt={selected.title} onOpen={openLightbox} />
          </div>
        </section>
      ) : (
        <>
          <section className="section events-section" id="events">
            <div className="section-header" data-reveal>
              <div className="section-label">Past Events</div>
              <h2 className="section-title">Campus visits and <em>academic exchanges</em>.</h2>
              <p className="section-intro">Five documented events from 2022–2023, including KIIT, MPKV Rahuri, Birla Global University, and International Education Week at Tennessee State University.</p>
            </div>
            <div className="grid grid-3 event-grid">
              {events.map((event) => (
                <article className="card event-card" key={event.id} data-reveal>
                  <a href={`#event-${event.id}`} className="event-card-cover">
                    <img src={event.cover} alt="" loading="lazy" decoding="async" />
                  </a>
                  <div className="event-card-body">
                    <time className="event-date">{event.date}</time>
                    <h3>{event.title}</h3>
                    {event.excerpt && <p>{event.excerpt}</p>}
                    <a href={`#event-${event.id}`} className="lk">Read more →</a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="band gallery-band" id="gallery">
            <div className="section">
              <div className="section-header" data-reveal>
                <div className="section-label">Gallery</div>
                <h2 className="section-title">Moments from <em>our journey</em>.</h2>
                <p className="section-intro">Photographs grouped by event, matching the original Alpesa gallery.</p>
              </div>
              {events.map((event) => (
                <div className="gallery-group" key={event.id}>
                  <div className="gallery-group-head" data-reveal>
                    <h3>Event — {event.title}</h3>
                    <a href={`#event-${event.id}`} className="lk">View event →</a>
                  </div>
                  <PhotoGrid photos={event.galleryPhotos} alt={event.title} onOpen={openLightbox} />
                </div>
              ))}
            </div>
          </section>
        </>
      )}

      <section className="section cta events-cta" data-reveal>
        <div className="cta-inner">
          <h2>Want to attend our <em>next event</em>?</h2>
          <p>Join the next conversation with our counsellors and university partners.</p>
          <div className="cta-buttons">
            <a href="#contact" className="btn btn-primary">Notify Me →</a>
          </div>
        </div>
      </section>

      <Footer />

      {lightbox.index != null && (
        <PhotoLightbox
          photos={lightbox.photos}
          index={lightbox.index}
          onClose={closeLightbox}
          onMove={moveLightbox}
        />
      )}
    </>
  );
}

export default EventsGallery;
