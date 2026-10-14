export function initCursor() {
  const ring = document.querySelector('.cursor-halo');
  if (!ring) return;
  const fine = matchMedia('(hover: hover) and (pointer: fine)');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  let enabled = false,
    raf = 0,
    current = { x: 0, y: 0 },
    target = { x: 0, y: 0 },
    initialized = false;
  let magnetic = null;
  function frame() {
    raf = 0;
    current.x += (target.x - current.x) * 0.19;
    current.y += (target.y - current.y) * 0.19;
    ring.style.transform = `translate3d(${current.x}px,${current.y}px,0) translate(-50%,-50%)`;
    if (Math.hypot(target.x - current.x, target.y - current.y) > 0.15 && enabled)
      raf = requestAnimationFrame(frame);
  }
  function resetMagnetic() {
    if (magnetic) magnetic.style.transform = '';
    magnetic = null;
  }
  function state() {
    enabled = fine.matches && !reduced.matches;
    ring.style.display = enabled ? 'block' : 'none';
    if (!enabled) {
      cancelAnimationFrame(raf);
      raf = 0;
      resetMagnetic();
      ring.classList.remove('is-visible');
    }
  }
  state();
  fine.addEventListener('change', state);
  reduced.addEventListener('change', state);
  window.addEventListener(
    'pointermove',
    (event) => {
      if (!enabled || event.pointerType === 'touch') return;
      target = { x: event.clientX, y: event.clientY };
      if (!initialized) {
        current = { ...target };
        initialized = true;
      }
      ring.classList.add('is-visible');
      ring.classList.toggle('is-hover', !!event.target.closest('a,button'));
      const next = event.target.closest('.magnetic');
      if (magnetic !== next) {
        resetMagnetic();
        magnetic = next;
      }
      if (magnetic) {
        const rect = magnetic.getBoundingClientRect();
        const x = Math.max(-4, Math.min(4, (event.clientX - rect.left - rect.width / 2) * 0.045));
        const y = Math.max(-3, Math.min(3, (event.clientY - rect.top - rect.height / 2) * 0.065));
        magnetic.style.transform = `translate(${x}px,${y}px)`;
      }
      if (!raf) raf = requestAnimationFrame(frame);
    },
    { passive: true },
  );
  document.documentElement.addEventListener('pointerleave', () => {
    ring.classList.remove('is-visible');
    resetMagnetic();
  });
  window.addEventListener('blur', () => {
    ring.classList.remove('is-visible');
    resetMagnetic();
  });
}
