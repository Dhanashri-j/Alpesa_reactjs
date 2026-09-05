import React, { useState, useEffect, useRef } from 'react';

function Header({ activePage }) {
  const [aboutOpen, setAboutOpen] = useState(false);
  const navRef = useRef(null);
  const submenuRef = useRef(null);
  const aboutAnchorRef = useRef(null);

  const handleMenuToggle = () => {
    const navlinks = document.getElementById('navlinks');
    navlinks?.classList.toggle('open');
  };

  useEffect(() => {
    function handleDocClick(e) {
      if (!navRef.current) return;
      if (!navRef.current.contains(e.target)) setAboutOpen(false);
    }
    document.addEventListener('click', handleDocClick);
    return () => document.removeEventListener('click', handleDocClick);
  }, []);

  const getMenuItems = () => {
    if (!submenuRef.current) return [];
    return Array.from(submenuRef.current.querySelectorAll('a[role="menuitem"]'));
  };

  const focusMenuItem = (index) => {
    const items = getMenuItems();
    if (!items.length) return;
    const i = (index + items.length) % items.length;
    items.forEach((it, idx) => it.setAttribute('tabindex', idx === i ? '0' : '-1'));
    items[i].focus();
  };

  const handleAboutKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setAboutOpen(true);
      setTimeout(() => focusMenuItem(0), 0);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setAboutOpen(true);
      setTimeout(() => focusMenuItem(-1), 0);
    } else if (e.key === 'Escape') {
      if (aboutOpen) {
        e.preventDefault();
        setAboutOpen(false);
        aboutAnchorRef.current?.focus();
      }
    }
  };

  const handleSubmenuKeyDown = (e) => {
    const items = getMenuItems();
    const idx = items.indexOf(document.activeElement);
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      focusMenuItem(idx + 1);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      focusMenuItem(idx - 1);
    } else if (e.key === 'Home') {
      e.preventDefault();
      focusMenuItem(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      focusMenuItem(-1);
    } else if (e.key === 'Escape') {
      e.preventDefault();
      setAboutOpen(false);
      aboutAnchorRef.current?.focus();
    }
  };

  useEffect(() => {
    const submenu = submenuRef.current;
    if (!submenu) return;
    const items = getMenuItems();
    if (aboutOpen) {
      items.forEach((it, i) => it.setAttribute('tabindex', i === 0 ? '0' : '-1'));
      const onFocusIn = (e) => {
        const idx = items.indexOf(e.target);
        if (idx === -1) return;
        items.forEach((it, i) => it.setAttribute('tabindex', i === idx ? '0' : '-1'));
      };
      submenu.addEventListener('focusin', onFocusIn);
      return () => submenu.removeEventListener('focusin', onFocusIn);
    } else {
      items.forEach(it => it.setAttribute('tabindex', '-1'));
    }
  }, [aboutOpen]);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    const children = Array.from(nav.children || []);
    const topLinks = [];
    children.forEach(child => {
      if (child.tagName === 'A') topLinks.push(child);
      else if (child.classList && child.classList.contains('nav-item')) {
        const a = child.querySelector('a');
        if (a) topLinks.push(a);
      }
    });

    if (!topLinks.length) return;

    topLinks.forEach((a, i) => a.setAttribute('tabindex', i === 0 ? '0' : '-1'));

    const onKeyDown = (e) => {
      const active = document.activeElement;
      const idx = topLinks.indexOf(active);
      if (idx === -1) return;
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        const next = (idx + 1) % topLinks.length;
        topLinks.forEach((a, i) => a.setAttribute('tabindex', i === next ? '0' : '-1'));
        topLinks[next].focus();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        const prev = (idx - 1 + topLinks.length) % topLinks.length;
        topLinks.forEach((a, i) => a.setAttribute('tabindex', i === prev ? '0' : '-1'));
        topLinks[prev].focus();
      } else if (e.key === 'Home') {
        e.preventDefault();
        topLinks.forEach((a, i) => a.setAttribute('tabindex', i === 0 ? '0' : '-1'));
        topLinks[0].focus();
      } else if (e.key === 'End') {
        e.preventDefault();
        const last = topLinks.length - 1;
        topLinks.forEach((a, i) => a.setAttribute('tabindex', i === last ? '0' : '-1'));
        topLinks[last].focus();
      }
    };

    const onFocusIn = (e) => {
      const idx = topLinks.indexOf(e.target);
      if (idx === -1) return;
      topLinks.forEach((a, i) => a.setAttribute('tabindex', i === idx ? '0' : '-1'));
    };

    nav.addEventListener('keydown', onKeyDown);
    nav.addEventListener('focusin', onFocusIn);
    return () => {
      nav.removeEventListener('keydown', onKeyDown);
      nav.removeEventListener('focusin', onFocusIn);
    };
  }, []);

  return (
    <>
      <div className="topbar">
        <div className="topbar-inner">
          <span>📞 <a href="tel:+918989550909">+91 89895 50909</a> &nbsp;|&nbsp; <a href="tel:+918668558349">+91 86685 58349</a></span>
          <span>✉️ <a href="mailto:info@alpesaeducationservices.com">info@alpesaeducationservices.com</a> &nbsp;|&nbsp; 🌟 Spring &amp; Fall Intakes Open</span>
        </div>
      </div>

      <header className="site-header">
        <nav className="nav-inner" role="navigation" aria-label="Main">
          <a href="#/" className="brand">
            <img src="/AES Final Logo.png" alt="Alpesa Education Services" className="brand-logo" />
          </a>
          <button className="menu-toggle" onClick={handleMenuToggle}>☰</button>
          <div className="nav-links" id="navlinks" ref={navRef} role="menubar" aria-label="Primary menu">
            <a role="menuitem" href="#/" className={activePage === 'home' ? 'active' : ''}>Home</a>
            <div className={`nav-item has-submenu${aboutOpen ? ' open' : ''}`}>
              <button
                type="button"
                ref={aboutAnchorRef}
                className={activePage === 'about' ? 'active' : ''}
                aria-haspopup="true"
                aria-expanded={aboutOpen}
                aria-controls="about-submenu"
                onClick={(e) => { e.preventDefault(); setAboutOpen(prev => !prev); }}
                onKeyDown={handleAboutKeyDown}
              >
                About <span className="chevron" aria-hidden="true">▾</span>
                <span className="sr-only">Opens About menu</span>
              </button>
              <div
                className="submenu"
                id="about-submenu"
                role="menu"
                ref={submenuRef}
                onKeyDown={handleSubmenuKeyDown}
              >
                <a href="#services" role="menuitem" tabIndex={aboutOpen ? 0 : -1}>Services</a>
                <a href="#legal-services" role="menuitem" tabIndex={aboutOpen ? 0 : -1}>Legal Services</a>
                <a href="#visa-services" role="menuitem" tabIndex={aboutOpen ? 0 : -1}>Visa Services</a>
                <a href="#partners" role="menuitem" tabIndex={aboutOpen ? 0 : -1}>Partners</a>
              </div>
            </div>
            <a role="menuitem" href="#study-destinations" className={activePage === 'study-destinations' ? 'active' : ''}>Study Destinations</a>
            <a role="menuitem" href="#testimonials" className={activePage === 'testimonials' ? 'active' : ''}>Testimonials</a>
            <a role="menuitem" href="#contact" className={activePage === 'contact' ? 'active' : ''}>Contact</a>
            <a role="menuitem" href="mailto:info@alpesaeducationservices.com" className="nav-cta">Free Consultation</a>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
