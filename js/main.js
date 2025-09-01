// Portfolio Siti Wahyuni - interactions & animations

(function () {
  const $ = (q, c = document) => c.querySelector(q);
  const $$ = (q, c = document) => Array.from(c.querySelectorAll(q));

  // Mobile nav toggle
  const toggleBtn = $('.nav__toggle');
  const navMenu = $('#navMenu');
  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', () => {
      const open = navMenu.classList.toggle('open');
      toggleBtn.setAttribute('aria-expanded', String(open));
    });
    // Close on link click (mobile)
    $$(".nav__link").forEach((a) => a.addEventListener('click', () => navMenu.classList.remove('open')));
  }

  // Smooth scroll and active link detection
  const sections = $$("section[id]");
  const links = $$(".nav__link");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        links.forEach((l) => l.classList.toggle('active', l.getAttribute('href') === `#${id}`));
      }
    });
  }, { rootMargin: "-40% 0px -55% 0px", threshold: [0, 1] });
  sections.forEach((sec) => observer.observe(sec));

  // Reveal on scroll
  const rObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        rObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  $$(".reveal").forEach((el) => rObserver.observe(el));

  // Animate skill bars when visible
  const sObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        $$(".bar__fill", entry.target).forEach((bar) => {
          const target = bar.getAttribute('data-target') || '0';
          requestAnimationFrame(() => {
            bar.style.width = `${target}%`;
          });
        });
        sObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.25 });
  const skills = $("#skills");
  if (skills) sObserver.observe(skills);

  // Typed effect for role
  const roles = ["Programmer", "UI/UX Designer"];
  const typedEl = $('#typedRole');
  const cursor = $('.cursor');
  let roleIdx = 0, i = 0, dir = 1;
  const typeSpeed = 80; // ms per char
  const pause = 1200; // ms pause at end
  function typeLoop() {
    if (!typedEl) return;
    const word = roles[roleIdx];
    typedEl.textContent = word.slice(0, i);
    i += dir;
    if (i < 0) { dir = 1; roleIdx = (roleIdx + 1) % roles.length; setTimeout(typeLoop, 200); return; }
    if (i > word.length) { dir = -1; setTimeout(typeLoop, pause); return; }
    setTimeout(typeLoop, typeSpeed);
  }
  typeLoop();
  // blink cursor fallback when reduced motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches && cursor) cursor.style.animation = 'none';

  // Back to top button
  const toTop = $('#toTop');
  const progressBar = document.querySelector('.scroll-progress span');
  function onScroll() {
    const y = window.scrollY || document.documentElement.scrollTop;
    toTop?.classList.toggle('show', y > 700);
    if (progressBar) {
      const doc = document.documentElement;
      const max = (doc.scrollHeight - window.innerHeight) || 1;
      const p = Math.min(1, Math.max(0, y / max));
      progressBar.style.width = (p * 100).toFixed(2) + '%';
    }
  }
  window.addEventListener('scroll', onScroll);
  onScroll();
  toTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  // Year
  const yearEl = $('#year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Parallax hero glow + portrait
  const g1 = document.querySelector('.glow-1');
  const g2 = document.querySelector('.glow-2');
  const portrait = document.querySelector('.portrait');
  let raf = 0;
  function parallax(e) {
    if (raf) cancelAnimationFrame(raf);
    const nx = (e.clientX / window.innerWidth) - 0.5;
    const ny = (e.clientY / window.innerHeight) - 0.5;
    raf = requestAnimationFrame(() => {
      g1 && (g1.style.transform = `translate(${nx * 20}px, ${ny * 20}px)`);
      g2 && (g2.style.transform = `translate(${nx * -16}px, ${ny * -16}px)`);
      portrait && (portrait.style.transform = `rotate(-2deg) translate(${nx * 6}px, ${ny * 6}px)`);
    });
  }
  window.addEventListener('mousemove', parallax);

  // Magnetic effect for primary buttons
  $$('.btn--primary').forEach((btn) => {
    let rid = 0;
    btn.addEventListener('mousemove', (e) => {
      const r = btn.getBoundingClientRect();
      const x = e.clientX - (r.left + r.width / 2);
      const y = e.clientY - (r.top + r.height / 2);
      if (rid) cancelAnimationFrame(rid);
      rid = requestAnimationFrame(() => {
        btn.style.transform = `translate(${x * 0.06}px, ${y * 0.06}px)`;
      });
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
    });
  });

  // WhatsApp form submit
  const waForm = document.getElementById('waForm');
  if (waForm) {
    waForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = (document.getElementById('waName') || { value: '' }).value.trim();
      const email = (document.getElementById('waEmail') || { value: '' }).value.trim();
      const msg = (document.getElementById('waMessage') || { value: '' }).value.trim();
      if (!name || !email || !msg) return;
      const number = '6283196367564'; // WhatsApp number (ID format)
      const text = `Halo Siti Wahyuni,%0A%0ANama: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0A%0APesan:%0A${encodeURIComponent(msg)}%0A`;
      const url = `https://wa.me/${number}?text=${text}`;
      window.open(url, '_blank');
    });
  }
})();
