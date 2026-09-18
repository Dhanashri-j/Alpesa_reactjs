import './styles/animations.css';
import { useState, useEffect } from 'react';
import useScrollReveal from './useScrollReveal';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Services from './Services';
import LegalServices from './LegalServices';
import Partners from './Partners';
import StudyDestinations from './StudyDestinations';
import Testimonials from './Testimonials';
import VisaServices from './VisaServices';
import EventsGallery from './EventsGallery';
import ScrollTop from './ScrollTop';

function pageFromHash() {
  const hash = (typeof window !== 'undefined' ? window.location.hash.slice(1) : '') || '/';
  if (hash === '/' || hash === '') return 'home';
  if (hash === 'about' || hash === 'global') return 'about';
  if (hash === 'contact' || hash === 'contact-university') return 'contact';
  if (hash === 'services' || hash === 'services-university' || hash.startsWith('service-')) return 'services';
  if (hash === 'legal-services') return 'legal-services';
  if (hash === 'partners') return 'partners';
  if (hash === 'study-destinations') return 'study-destinations';
  if (hash === 'testimonials') return 'testimonials';
  if (hash === 'visa-services' || hash.startsWith('guide-')) return 'visa-services';
  if (hash === 'events-gallery' || hash.startsWith('event-')) return 'events-gallery';
  return 'home';
}

function scrollToHash() {
  const id = (window.location.hash || '').replace(/^#/, '');
  const el = id && id !== '/' ? document.getElementById(id) : null;
  if (el) {
    const header = document.querySelector('.site-header');
    const offset = (header ? header.offsetHeight : 64) + 12;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: Math.max(0, top), left: 0, behavior: 'auto' });
    return;
  }
  window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

function App() {
  const [currentPage, setCurrentPage] = useState(pageFromHash);
  const [routeHash, setRouteHash] = useState(() => (typeof window !== 'undefined' ? window.location.hash : ''));
  useScrollReveal([currentPage, routeHash]);

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    const handleHashChange = () => {
      setCurrentPage(pageFromHash());
      setRouteHash(window.location.hash);
    };
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    const id = window.setTimeout(scrollToHash, 60);
    return () => window.clearTimeout(id);
  }, [currentPage, routeHash]);

  return (
    <div className="App min-h-screen bg-cream text-ink antialiased">
      <div className="page-shell" key={currentPage}>
        {currentPage === 'home' && <Home />}
        {currentPage === 'about' && <About />}
        {currentPage === 'contact' && <Contact />}
        {currentPage === 'services' && <Services />}
        {currentPage === 'legal-services' && <LegalServices />}
        {currentPage === 'partners' && <Partners />}
        {currentPage === 'study-destinations' && <StudyDestinations />}
        {currentPage === 'testimonials' && <Testimonials />}
        {currentPage === 'visa-services' && <VisaServices />}
        {currentPage === 'events-gallery' && <EventsGallery />}
      </div>
      <ScrollTop />
    </div>
  );
}

export default App;
