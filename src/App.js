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

function pageFromHash() {
  const hash = (typeof window !== 'undefined' ? window.location.hash.slice(1) : '') || '/';
  if (hash === '/' || hash === '' ) return 'home';
  if (hash === 'about') return 'about';
  if (hash === 'contact') return 'contact';
  if (hash === 'services') return 'services';
  if (hash === 'legal-services') return 'legal-services';
  if (hash === 'partners') return 'partners';
  if (hash === 'study-destinations') return 'study-destinations';
  if (hash === 'testimonials') return 'testimonials';
  if (hash === 'visa-services') return 'visa-services';
  if (hash === 'events-gallery' || hash.startsWith('event-')) return 'events-gallery';
  return 'home';
}

function App() {
  const [currentPage, setCurrentPage] = useState(pageFromHash);
  useScrollReveal([currentPage]);

  useEffect(() => {
    const handleHashChange = () => setCurrentPage(pageFromHash());
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

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
    </div>
  );
}

export default App;
