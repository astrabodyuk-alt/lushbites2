/* ─────────────────────────────────────────────────────────────
   LUSH BITES — Main JavaScript
   GSAP + ScrollTrigger animations, nav, tab switching
   ───────────────────────────────────────────────────────────── */

/* ══ UTILS ════════════════════════════════════════════════════ */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ══ NAV — Scroll behaviour ════════════════════════════════════ */
(function initNav() {
  const nav = $('#nav');
  if (!nav) return;

  const onScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

/* ══ NAV — Mobile hamburger ════════════════════════════════════ */
(function initHamburger() {
  const btn = $('#hamburger');
  const menu = $('#mobileMenu');
  if (!btn || !menu) return;

  btn.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
    document.body.style.overflow = open ? 'hidden' : '';

    // Animate hamburger lines → X
    const spans = $$('span', btn);
    if (open) {
      spans[0].style.transform = 'translateY(7px) rotate(45deg)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'translateY(-7px) rotate(-45deg)';
    } else {
      spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
    }
  });

  // Close on link click
  $$('.nav__mobile-menu .nav__link, .nav__mobile-menu .btn').forEach(el => {
    el.addEventListener('click', () => {
      menu.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
      const spans = $$('span', btn);
      spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
    });
  });
})();

/* ══ HERO ANIMATIONS ═══════════════════════════════════════════ */
(function initHeroAnimations() {
  if (prefersReducedMotion()) {
    // Just show everything immediately
    $$('[data-hero-line], [data-hero-word]').forEach(el => {
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
    return;
  }

  if (typeof gsap === 'undefined') return;

  const lines = $$('[data-hero-line]');
  const words = $$('[data-hero-word]');

  if (!lines.length && !words.length) return;

  const tl = gsap.timeline({ delay: 0.2 });

  if (lines.length) {
    tl.to(lines, {
      opacity: 1,
      y: 0,
      duration: 0.9,
      stagger: 0.12,
      ease: 'power3.out',
    });
  }

  if (words.length) {
    tl.to(words, {
      opacity: 1,
      duration: 0.7,
      stagger: 0.1,
      ease: 'power2.out',
    }, '-=0.4');
  }
})();

/* ══ SCROLL REVEAL ════════════════════════════════════════════ */
(function initScrollReveal() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

  gsap.registerPlugin(ScrollTrigger);

  if (prefersReducedMotion()) {
    $$('[data-reveal]').forEach(el => {
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
    return;
  }

  $$('[data-reveal]').forEach(el => {
    const dir = el.dataset.reveal;

    let fromVars = { opacity: 0, duration: 0.75, ease: 'power2.out' };
    if (!dir || dir === 'true' || dir === '') {
      fromVars.y = 32;
    } else if (dir === 'left') {
      fromVars.x = -40;
    } else if (dir === 'right') {
      fromVars.x = 40;
    } else if (dir === 'scale') {
      fromVars.scale = 0.94;
    }

    gsap.from(el, {
      ...fromVars,
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        once: true,
      },
    });
  });

  // Stagger product card grids
  $$('.product-grid').forEach(grid => {
    const cards = $$('.product-card', grid);
    if (!cards.length) return;

    cards.forEach((card, i) => {
      // Only animate if not already handled by data-reveal
      if (card.hasAttribute('data-reveal')) return;
      gsap.from(card, {
        opacity: 0,
        y: 24,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 88%',
          once: true,
        },
        delay: i * 0.08,
      });
    });
  });
})();

/* ══ HOMEPAGE CATEGORY TABS (menu showcase) ═══════════════════ */
(function initHomeTabs() {
  const tabs = $$('[data-tab]');
  if (!tabs.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;

      // Update tab states
      tabs.forEach(t => {
        t.classList.toggle('active', t === tab);
        t.setAttribute('aria-selected', t === tab);
      });

      // Switch panels
      $$('.tab-panel').forEach(panel => {
        const isActive = panel.id === `panel-${target}`;
        panel.classList.toggle('active', isActive);
        if (isActive) {
          panel.removeAttribute('hidden');
          // Animate new panel in
          if (typeof gsap !== 'undefined' && !prefersReducedMotion()) {
            gsap.from($$('.product-card', panel), {
              opacity: 0,
              y: 20,
              duration: 0.4,
              stagger: 0.06,
              ease: 'power2.out',
            });
          }
        } else {
          panel.setAttribute('hidden', '');
        }
      });
    });
  });
})();

/* ══ MENU PAGE — Sticky cat nav + scroll spy ════════════════════ */
(function initMenuScrollSpy() {
  const jumpBtns = $$('[data-jump]');
  if (!jumpBtns.length) return;

  // Jump on click
  jumpBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.dataset.jump;
      const section = document.getElementById(targetId);
      if (!section) return;

      const offset = 72 + 56; // nav height + sticky cat nav height
      const top = section.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  // Scroll spy — highlight active tab
  const sections = jumpBtns.map(btn => document.getElementById(btn.dataset.jump)).filter(Boolean);

  if (!sections.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        jumpBtns.forEach(btn => {
          const active = btn.dataset.jump === id;
          btn.classList.toggle('active', active);
          btn.setAttribute('aria-selected', active);
        });
      }
    });
  }, {
    rootMargin: '-30% 0px -60% 0px',
    threshold: 0,
  });

  sections.forEach(s => observer.observe(s));
})();

/* ══ PARALLAX (hero visual, reduced on mobile) ══════════════════ */
(function initParallax() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
  if (prefersReducedMotion()) return;
  if (window.matchMedia('(max-width: 768px)').matches) return;

  const heroBg = $('.hero__video-placeholder');
  if (!heroBg) return;

  gsap.to(heroBg, {
    yPercent: 20,
    ease: 'none',
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: 1,
    },
  });
})();

/* ══ USP COUNTER ANIMATION ════════════════════════════════════ */
(function initCounters() {
  // Animate story fact numbers
  if (typeof gsap === 'undefined' || prefersReducedMotion()) return;

  $$('.story-fact__num').forEach(el => {
    const text = el.textContent.trim();
    const num = parseFloat(text.replace(/[^0-9.]/g, ''));
    if (isNaN(num)) return;

    const prefix = text.match(/^[^0-9]*/)?.[0] || '';
    const suffix = text.match(/[^0-9.]+$/)?.[0] || '';

    gsap.from({ val: 0 }, {
      val: num,
      duration: 1.5,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        once: true,
      },
      onUpdate: function() {
        const v = this.targets()[0].val;
        el.textContent = prefix + (Number.isInteger(num) ? Math.round(v) : v.toFixed(1)) + suffix;
      },
    });
  });
})();
