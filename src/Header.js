import React, { useState, useEffect, useRef } from 'react';
import './styles/Header.css';
import HoursBlock from './HoursBlock';
import { VISA_NAV, PHONE_PRIMARY, PHONE_SECONDARY } from './siteData';

export { VISA_NAV };

const DESKTOP_NAV = '(min-width: 1281px)';
const isDesktopNav = () => typeof window !== 'undefined' && window.matchMedia(DESKTOP_NAV).matches;

function Header({ activePage }) {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [visaOpen, setVisaOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);
  const aboutSubmenuRef = useRef(null);
  const visaSubmenuRef = useRef(null);
  const loginSubmenuRef = useRef(null);
  const aboutAnchorRef = useRef(null);
  const visaAnchorRef = useRef(null);
  const loginAnchorRef = useRef(null);
  const leaveTimer = useRef(null);

  const clearLeaveTimer = () => {
    if (leaveTimer.current) {
      window.clearTimeout(leaveTimer.current);
      leaveTimer.current = null;
    }
  };

  const handleMenuToggle = () => {
    setMenuOpen(prev => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setAboutOpen(false);
    setVisaOpen(false);
    setLoginOpen(false);
  };

  const openSubmenu = (which) => {
    if (which === 'about') {
      setAboutOpen(true);
      setLoginOpen(false);
    } else if (which === 'visa') {
      setAboutOpen(true);
      setVisaOpen(true);
      setLoginOpen(false);
    } else {
      setLoginOpen(true);
      setAboutOpen(false);
      setVisaOpen(false);
    }
  };

  const handleDesktopEnter = (which) => {
    if (!isDesktopNav()) return;
    clearLeaveTimer();
    openSubmenu(which);
  };

  const handleDesktopLeave = () => {
    if (!isDesktopNav()) return;
    clearLeaveTimer();
    leaveTimer.current = window.setTimeout(() => {
      setAboutOpen(false);
      setVisaOpen(false);
      setLoginOpen(false);
    }, 120);
  };

  const handleMobileToggle = (which) => {
    if (isDesktopNav()) return;
    if (which === 'about') {
      setLoginOpen(false);
      setAboutOpen((prev) => {
        const next = !prev;
        if (!next) setVisaOpen(false);
        return next;
      });
    } else if (which === 'visa') {
      setLoginOpen(false);
      setAboutOpen(true);
      setVisaOpen((prev) => !prev);
    } else {
      setAboutOpen(false);
      setVisaOpen(false);
      setLoginOpen((prev) => !prev);
    }
  };

  useEffect(() => {
    return () => {
      if (leaveTimer.current) window.clearTimeout(leaveTimer.current);
    };
  }, []);

  useEffect(() => {
    function handleDocClick(e) {
      if (!navRef.current) return;
      if (!navRef.current.contains(e.target)) {
        setAboutOpen(false);
        setVisaOpen(false);
        setLoginOpen(false);
      }
    }
    document.addEventListener('click', handleDocClick);
    return () => document.removeEventListener('click', handleDocClick);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('nav-open', menuOpen);
    return () => document.body.classList.remove('nav-open');
  }, [menuOpen]);

  const getMenuItems = (submenu) => {
    if (!submenu) return [];
    return Array.from(submenu.querySelectorAll('a[role="menuitem"]'));
  };

  const focusMenuItem = (submenu, index) => {
    const items = getMenuItems(submenu);
    if (!items.length) return;
    const i = (index + items.length) % items.length;
    items.forEach((it, idx) => it.setAttribute('tabindex', idx === i ? '0' : '-1'));
    items[i].focus();
  };

  const handleSubmenuToggleKey = (e, isOpen, setOpen, otherClosers, submenuRef, anchorRef) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      otherClosers();
      setOpen(true);
      setTimeout(() => focusMenuItem(submenuRef.current, 0), 0);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      otherClosers();
      setOpen(true);
      setTimeout(() => focusMenuItem(submenuRef.current, -1), 0);
    } else if (e.key === 'Escape' && isOpen) {
      e.preventDefault();
      setOpen(false);
      anchorRef.current?.focus();
    }
  };

  const handleSubmenuKeyDown = (e, submenu, setOpen, anchorRef) => {
    const items = getMenuItems(submenu);
    const idx = items.indexOf(document.activeElement);
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      focusMenuItem(submenu, idx + 1);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      focusMenuItem(submenu, idx - 1);
    } else if (e.key === 'Home') {
      e.preventDefault();
      focusMenuItem(submenu, 0);
    } else if (e.key === 'End') {
      e.preventDefault();
      focusMenuItem(submenu, -1);
    } else if (e.key === 'Escape') {
      e.preventDefault();
      setOpen(false);
      anchorRef.current?.focus();
    }
  };

  useEffect(() => {
    const submenu = aboutSubmenuRef.current;
    if (!submenu) return;
    const items = getMenuItems(submenu);
    items.forEach((it, i) => it.setAttribute('tabindex', aboutOpen && i === 0 ? '0' : '-1'));
  }, [aboutOpen]);

  useEffect(() => {
    const submenu = visaSubmenuRef.current;
    if (!submenu) return;
    const items = getMenuItems(submenu);
    items.forEach((it, i) => it.setAttribute('tabindex', visaOpen && i === 0 ? '0' : '-1'));
  }, [visaOpen]);

  useEffect(() => {
    const submenu = loginSubmenuRef.current;
    if (!submenu) return;
    const items = getMenuItems(submenu);
    items.forEach((it, i) => it.setAttribute('tabindex', loginOpen && i === 0 ? '0' : '-1'));
  }, [loginOpen]);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    const children = Array.from(nav.children || []);
    const topLinks = [];
    children.forEach(child => {
      if (child.tagName === 'A') topLinks.push(child);
      else if (child.classList && child.classList.contains('nav-item')) {
        const a = child.querySelector('button, a');
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
          <span>📞 <a href={PHONE_PRIMARY.href}>{PHONE_PRIMARY.display}</a> &nbsp;|&nbsp; <a href={PHONE_SECONDARY.href}>{PHONE_SECONDARY.display}</a></span>
          <span className="topbar-hours" aria-label="Office hours">
            <HoursBlock />
          </span>
          <span>✉️ <a href="mailto:info@alpesaeducationservices.com">info@alpesaeducationservices.com</a> &nbsp;|&nbsp; 🌟 Admissions Open, Apply now</span>
        </div>
      </div>

      <header className="site-header">
        <nav className="nav-inner" role="navigation" aria-label="Main">
          <a href="#/" className="brand">
            <img
              src="/aes-logo.png"
              alt="Alpesa Education Services"
              className="brand-logo"
              width="176"
              height="60"
              decoding="async"
              fetchPriority="high"
            />
          </a>
          <button className={`menu-toggle${menuOpen ? ' open' : ''}`} type="button" aria-expanded={menuOpen} aria-controls="navlinks" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={handleMenuToggle}>
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
          <div className={`nav-links${menuOpen ? ' open' : ''}`} id="navlinks" ref={navRef} role="menubar" aria-label="Primary menu">
            <a role="menuitem" href="#/" className={activePage === 'home' ? 'active' : ''} onClick={closeMenu}>Home</a>
            <div
              className={`nav-item has-submenu${aboutOpen ? ' open' : ''}`}
              onMouseEnter={() => handleDesktopEnter('about')}
              onMouseLeave={handleDesktopLeave}
            >
              <button
                type="button"
                ref={aboutAnchorRef}
                className={['about', 'visa-services', 'services', 'partners', 'legal-services'].includes(activePage) ? 'active' : ''}
                aria-haspopup="true"
                aria-expanded={aboutOpen}
                aria-controls="about-submenu"
                onClick={() => handleMobileToggle('about')}
                onKeyDown={(e) => handleSubmenuToggleKey(e, aboutOpen, setAboutOpen, () => { setVisaOpen(false); setLoginOpen(false); }, aboutSubmenuRef, aboutAnchorRef)}
              >
                About <span className="chevron" aria-hidden="true">▾</span>
                <span className="sr-only">Opens About menu</span>
              </button>
              <div
                className="submenu"
                id="about-submenu"
                role="menu"
                ref={aboutSubmenuRef}
                onKeyDown={(e) => handleSubmenuKeyDown(e, aboutSubmenuRef.current, setAboutOpen, aboutAnchorRef)}
              >
                <a href="#about" role="menuitem" tabIndex={aboutOpen ? 0 : -1} onClick={closeMenu}>About Us</a>
                <a href="#global" role="menuitem" tabIndex={aboutOpen ? 0 : -1} onClick={closeMenu}>Global</a>
                <a href="#services" role="menuitem" tabIndex={aboutOpen ? 0 : -1} onClick={closeMenu}>Services</a>
                <div
                  className={`submenu-item${visaOpen ? ' open' : ''}`}
                  onMouseEnter={() => {
                    if (!isDesktopNav()) return;
                    clearLeaveTimer();
                    setAboutOpen(true);
                    setVisaOpen(true);
                  }}
                  onMouseLeave={() => {
                    if (!isDesktopNav()) return;
                    clearLeaveTimer();
                    leaveTimer.current = window.setTimeout(() => setVisaOpen(false), 120);
                  }}
                >
                  <button
                    type="button"
                    ref={visaAnchorRef}
                    className="submenu-parent"
                    aria-haspopup="true"
                    aria-expanded={visaOpen}
                    aria-controls="visa-submenu"
                    onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleMobileToggle('visa'); }}
                    onKeyDown={(e) => handleSubmenuToggleKey(e, visaOpen, setVisaOpen, () => { setLoginOpen(false); setAboutOpen(true); }, visaSubmenuRef, visaAnchorRef)}
                  >
                    Visa Services <span className="chevron nested-chevron" aria-hidden="true">▸</span>
                  </button>
                  <div
                    className="submenu submenu-nested"
                    id="visa-submenu"
                    role="menu"
                    ref={visaSubmenuRef}
                    onKeyDown={(e) => handleSubmenuKeyDown(e, visaSubmenuRef.current, setVisaOpen, visaAnchorRef)}
                  >
                    <a href="#visa-services" role="menuitem" tabIndex={visaOpen ? 0 : -1} onClick={closeMenu}>All visa guides</a>
                    {VISA_NAV.map((country) => (
                      <a
                        key={country.key}
                        href={`#guide-${country.key}`}
                        role="menuitem"
                        tabIndex={visaOpen ? 0 : -1}
                        onClick={closeMenu}
                      >
                        {country.label}
                      </a>
                    ))}
                  </div>
                </div>
                <a href="#partners" role="menuitem" tabIndex={aboutOpen ? 0 : -1} onClick={closeMenu}>Partners</a>
                <a href="#legal-services" role="menuitem" tabIndex={aboutOpen ? 0 : -1} onClick={closeMenu}>Legal Services</a>
              </div>
            </div>
            <a role="menuitem" href="#study-destinations" className={activePage === 'study-destinations' ? 'active' : ''} onClick={closeMenu}>Study Destinations</a>
            <a role="menuitem" href="#testimonials" className={activePage === 'testimonials' ? 'active' : ''} onClick={closeMenu}>Testimonials</a>
            <a role="menuitem" href="#events-gallery" className={activePage === 'events-gallery' ? 'active' : ''} onClick={closeMenu}>Events &amp; Gallery</a>
            <a role="menuitem" href="#contact" className={activePage === 'contact' ? 'active' : ''} onClick={closeMenu}>Contact</a>
            <a role="menuitem" href="mailto:info@alpesaeducationservices.com" className="nav-cta" onClick={closeMenu}>Free Consultation</a>

            <div
              className={`nav-item has-submenu${loginOpen ? ' open' : ''}`}
              onMouseEnter={() => handleDesktopEnter('login')}
              onMouseLeave={handleDesktopLeave}
            >
              <button
                type="button"
                ref={loginAnchorRef}
                className={activePage === 'login' ? 'active' : ''}
                aria-haspopup="true"
                aria-expanded={loginOpen}
                aria-controls="Login-submenu"
                onClick={() => handleMobileToggle('login')}
                onKeyDown={(e) => handleSubmenuToggleKey(e, loginOpen, setLoginOpen, () => { setAboutOpen(false); setVisaOpen(false); }, loginSubmenuRef, loginAnchorRef)}
              >
                SignIn <span className="chevron" aria-hidden="true">▾</span>
                <span className="sr-only">Opens SignIn</span>
              </button>
              <div
                className="submenu"
                id="Login-submenu"
                role="menu"
                ref={loginSubmenuRef}
                onKeyDown={(e) => handleSubmenuKeyDown(e, loginSubmenuRef.current, setLoginOpen, loginAnchorRef)}
              >
                <a href="https://app.alpesaeducationservices.com/login/" target="_blank" rel="noopener noreferrer" role="menuitem" tabIndex={loginOpen ? 0 : -1} onClick={closeMenu}>Students</a>
                <a href="https://app.alpesaeducationservices.com/vlogin/" target="_blank" rel="noopener noreferrer" role="menuitem" tabIndex={loginOpen ? 0 : -1} onClick={closeMenu}>Vendors</a>
              </div>
            </div>
          </div>
          {menuOpen && <button type="button" className="nav-backdrop" aria-label="Close menu" onClick={closeMenu} />}
        </nav>
      </header>
    </>
  );
}

export default Header;
