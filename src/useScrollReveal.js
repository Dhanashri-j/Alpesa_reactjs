import { useEffect } from 'react';

function collectRevealEls() {
  return document.querySelectorAll('[data-reveal], .reveal-stagger > *');
}

function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  const vh = window.innerHeight || document.documentElement.clientHeight || 0;
  const vw = window.innerWidth || document.documentElement.clientWidth || 0;
  return rect.bottom > 0 && rect.right > 0 && rect.top < vh + 120 && rect.left < vw;
}

export default function useScrollReveal(deps = []) {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const watched = new WeakSet();

    const reveal = (el) => {
      el.classList.add('is-in');
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          reveal(entry.target);
          io.unobserve(entry.target);
        });
      },
      { threshold: 0, rootMargin: '80px 0px 80px 0px' }
    );

    const watch = (el) => {
      if (!(el instanceof Element) || watched.has(el)) return;
      watched.add(el);
      if (reduce || isInViewport(el)) {
        reveal(el);
        return;
      }
      io.observe(el);
    };

    const scan = () => collectRevealEls().forEach(watch);

    scan();
    const raf = requestAnimationFrame(scan);
    const t1 = window.setTimeout(scan, 50);
    const t2 = window.setTimeout(() => {
      collectRevealEls().forEach((el) => {
        if (!el.classList.contains('is-in') && isInViewport(el)) reveal(el);
      });
    }, 400);

    const mo = new MutationObserver(scan);
    mo.observe(document.body, { childList: true, subtree: true });

    window.scrollTo(0, 0);
    requestAnimationFrame(scan);

    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      io.disconnect();
      mo.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
