import React, { useEffect, useState } from 'react';
import './styles/ScrollTop.css';

function ScrollTop() {
  const [visible, setVisible] = useState(false);
  const [launching, setLaunching] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 280);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const goTop = () => {
    if (launching) return;
    setLaunching(true);
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    window.setTimeout(() => setLaunching(false), 800);
  };

  return (
    <button
      type="button"
      className={`scroll-top${visible ? ' is-in' : ''}${launching ? ' is-launch' : ''}`}
      aria-label="Scroll to top"
      onClick={goTop}
    >
      <span className="scroll-top-orbit" aria-hidden="true" />
      <span className="scroll-top-icon" aria-hidden="true">
        <span className="scroll-top-rocket">🚀</span>
      </span>
    </button>
  );
}

export default ScrollTop;
