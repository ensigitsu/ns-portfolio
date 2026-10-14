export function initNavigation() {
  const nav = document.querySelector('.navigation');
  const toggle = document.querySelector('.menu-toggle');
  const links = document.querySelectorAll('.nav-links a');
  if (!nav || !toggle) return;
  function close() {
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  }
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  nav.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && nav.classList.contains('is-open')) {
      close();
      toggle.focus();
    }
  });
  document.addEventListener('click', (event) => {
    if (!nav.contains(event.target)) close();
  });
  links.forEach((link) =>
    link.addEventListener('click', () => {
      close();
      const hash = new URL(link.href).hash;
      const section = document.querySelector(hash);
      if (section) {
        section.setAttribute('tabindex', '-1');
        section.focus({ preventScroll: true });
      }
    }),
  );
  matchMedia('(min-width: 801px)').addEventListener('change', close);
  const sections = [...document.querySelectorAll('main>section[id]')];
  if (!sections.length || !('IntersectionObserver' in window)) return;
  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      if (!visible.length) return;
      const id = visible[0].target.id;
      links.forEach((a) => {
        if (a.dataset.section === id) a.setAttribute('aria-current', 'location');
        else a.removeAttribute('aria-current');
      });
    },
    { rootMargin: '-15% 0px -55% 0px', threshold: [0, 0.2, 0.5] },
  );
  sections.forEach((section) => observer.observe(section));
}
export function initReveals() {
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  if (motion.matches || !('IntersectionObserver' in window)) return;
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px 25px 0px' },
  );
  document.querySelectorAll('.reveal').forEach((el) => {
    el.classList.add('is-observed');
    observer.observe(el);
  });
  motion.addEventListener('change', (event) => {
    if (event.matches) {
      document.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-visible'));
      observer.disconnect();
    }
  });
}
export function initFilters() {
  const filters = document.querySelector('.project-filters');
  if (!filters) return;
  const cards = [...document.querySelectorAll('[data-project-card]')];
  const empty = document.querySelector('.filter-empty');
  filters.addEventListener('click', (event) => {
    const button = event.target.closest('[data-filter]');
    if (!button) return;
    filters
      .querySelectorAll('[data-filter]')
      .forEach((b) => b.setAttribute('aria-pressed', String(b === button)));
    const category = button.dataset.filter;
    cards.forEach((card) => {
      card.hidden = category !== 'all' && card.dataset.category !== category;
      if (!card.hidden) card.classList.add('is-visible');
    });
    if (empty) empty.hidden = cards.some((card) => !card.hidden);
  });
}
