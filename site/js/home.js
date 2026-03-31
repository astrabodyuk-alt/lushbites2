/* ─────────────────────────────────────────────────────────────
   LUSH BITES — Homepage Animations
   Runs after main.js · Requires GSAP + ScrollTrigger
   ───────────────────────────────────────────────────────────── */

(function () {
  'use strict';

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── Wait for GSAP (loaded defer) ──────────────────────────── */
  function onGSAPReady(cb) {
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
      cb();
    } else {
      window.addEventListener('load', cb, { once: true });
    }
  }

  onGSAPReady(function () {
    gsap.registerPlugin(ScrollTrigger);

    /* ─────────────────────────────────────────────────────────
       HERO — staggered word/line reveal
    ───────────────────────────────────────────────────────── */
    (function heroAnim() {
      const lines = document.querySelectorAll('[data-hero="line"]');
      const fades = document.querySelectorAll('[data-hero="fade"]');

      if (reduced) {
        lines.forEach(el => { el.style.opacity = 1; el.style.transform = 'none'; });
        fades.forEach(el => { el.style.opacity = 1; });
        return;
      }

      const tl = gsap.timeline({ delay: 0.25 });

      if (lines.length) {
        tl.to(lines, {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.14,
          ease: 'power3.out',
        });
      }

      if (fades.length) {
        tl.to(fades, {
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power2.out',
        }, '-=0.5');
      }
    }());

    /* ─────────────────────────────────────────────────────────
       Generic fade-up helper used by sections
    ───────────────────────────────────────────────────────── */
    function fadeUp(el, delay) {
      if (reduced) {
        el.style.opacity = 1;
        el.style.transform = 'none';
        return;
      }
      gsap.fromTo(el,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0,
          duration: 0.75,
          delay: parseFloat(el.dataset.delay || delay || 0),
          ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 87%', once: true },
        }
      );
    }

    /* Process all [data-anim="fade-up"] elements */
    document.querySelectorAll('[data-anim="fade-up"]').forEach(el => fadeUp(el));

    /* ─────────────────────────────────────────────────────────
       MENU CARDS — staggered entrance
    ───────────────────────────────────────────────────────── */
    (function menuCardsAnim() {
      const cards = document.querySelectorAll('.menu-card');
      if (!cards.length) return;

      if (reduced) {
        cards.forEach(c => { c.style.opacity = 1; c.style.transform = 'none'; });
        return;
      }

      gsap.to(cards, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.09,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.menu-cards',
          start: 'top 82%',
          once: true,
        },
      });
    }());

    /* ─────────────────────────────────────────────────────────
       USP STATS — animated counter + fade up
    ───────────────────────────────────────────────────────── */
    (function uspAnim() {
      const stats = document.querySelectorAll('.usp-stat');
      if (!stats.length) return;

      if (reduced) {
        stats.forEach(s => { s.style.opacity = 1; s.style.transform = 'none'; });
        return;
      }

      gsap.to(stats, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.usp-stats',
          start: 'top 80%',
          once: true,
        },
      });

      /* Number counters — only for stats with data-count */
      stats.forEach(function (stat) {
        const numEl = stat.querySelector('.usp-stat__num[data-count]');
        if (!numEl) return;

        const target = parseFloat(numEl.dataset.count);
        const suffix = numEl.dataset.suffix || '';

        /* Find any <em> child to preserve */
        const emEl = numEl.querySelector('em');
        const emText = emEl ? emEl.outerHTML : '';

        gsap.from({ v: 0 }, {
          v: target,
          duration: 1.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: stat,
            start: 'top 82%',
            once: true,
          },
          onUpdate: function () {
            const v = this.targets()[0].v;
            const display = Number.isInteger(target)
              ? Math.round(v)
              : v.toFixed(1);
            numEl.innerHTML = display + suffix + emText;
          },
        });
      });
    }());

    /* ─────────────────────────────────────────────────────────
       ORDER MODE CARDS — fade up with delay
    ───────────────────────────────────────────────────────── */
    (function orderAnim() {
      const cards = document.querySelectorAll('.order-mode-card');
      if (!cards.length || reduced) {
        cards.forEach(c => { c.style.opacity = 1; c.style.transform = 'none'; });
        return;
      }

      /* Cards start with no opacity override in CSS, so set initial */
      gsap.set(cards, { opacity: 0, y: 28 });

      gsap.to(cards, {
        opacity: 1,
        y: 0,
        duration: 0.75,
        stagger: 0.12,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.order-modes__grid',
          start: 'top 84%',
          once: true,
        },
      });
    }());

    /* ─────────────────────────────────────────────────────────
       STORY TEASER — slide in from sides
    ───────────────────────────────────────────────────────── */
    (function storyAnim() {
      const visual = document.querySelector('.story-teaser__visual');
      const text   = document.querySelector('.story-teaser__text');

      if (!visual || !text) return;

      if (reduced) {
        [visual, text].forEach(el => { el.style.opacity = 1; el.style.transform = 'none'; });
        return;
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.story-teaser__inner',
          start: 'top 78%',
          once: true,
        },
      });

      tl.to(visual, { opacity: 1, x: 0, duration: 0.85, ease: 'power2.out' })
        .to(text,   { opacity: 1, x: 0, duration: 0.85, ease: 'power2.out' }, '-=0.65');
    }());

    /* ─────────────────────────────────────────────────────────
       REVIEW CARDS — staggered cascade
    ───────────────────────────────────────────────────────── */
    (function reviewsAnim() {
      const cards = document.querySelectorAll('.review-card');
      if (!cards.length || reduced) {
        cards.forEach(c => { c.style.opacity = 1; c.style.transform = 'none'; });
        return;
      }

      gsap.to(cards, {
        opacity: 1,
        y: 0,
        duration: 0.72,
        stagger: 0.13,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.reviews-grid',
          start: 'top 84%',
          once: true,
        },
      });
    }());

    /* ─────────────────────────────────────────────────────────
       FIND US PANEL — slide up
    ───────────────────────────────────────────────────────── */
    (function findusAnim() {
      const panel = document.querySelector('.findus-section__panel');
      if (!panel || reduced) {
        if (panel) { panel.style.opacity = 1; panel.style.transform = 'none'; }
        return;
      }

      gsap.set(panel, { opacity: 0, y: 28 });

      gsap.to(panel, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.findus-section',
          start: 'top 80%',
          once: true,
        },
      });
    }());

    /* ─────────────────────────────────────────────────────────
       TRUST STRIP — fade in items
    ───────────────────────────────────────────────────────── */
    (function trustAnim() {
      const pills = document.querySelectorAll('.trust-pill:not(.trust-pill--dupe)');
      if (!pills.length || reduced) {
        pills.forEach(p => { p.style.opacity = 1; });
        return;
      }

      gsap.from(pills, {
        opacity: 0,
        y: 10,
        duration: 0.5,
        stagger: 0.08,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.trust-strip',
          start: 'top 92%',
          once: true,
        },
      });
    }());

  }); // onGSAPReady

}());
