export function initLiquidScene() {
  const hero = document.querySelector('.hero');
  const artwork = hero?.querySelector('.scene-art');
  if (!artwork) return;

  const fine = matchMedia('(hover: hover) and (pointer: fine)');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');

  function reset() {
    artwork.style.removeProperty('--tilt-x');
    artwork.style.removeProperty('--tilt-y');
  }

  hero.addEventListener(
    'pointermove',
    (event) => {
      if (
        !fine.matches ||
        reduced.matches ||
        event.pointerType === 'touch' ||
        document.body.dataset.motionPaused === 'true'
      )
        return;

      const bounds = hero.getBoundingClientRect();
      if (!bounds.width || !bounds.height) return;
      const x = Math.max(
        -1,
        Math.min(1, ((event.clientX - bounds.left) / bounds.width) * 2 - 1),
      );
      const y = Math.max(
        -1,
        Math.min(1, ((event.clientY - bounds.top) / bounds.height) * 2 - 1),
      );
      artwork.style.setProperty('--tilt-x', `${-y * 5}deg`);
      artwork.style.setProperty('--tilt-y', `${x * 7}deg`);
    },
    { passive: true },
  );

  hero.addEventListener('pointerleave', reset);
  fine.addEventListener('change', reset);
  reduced.addEventListener('change', reset);
  document.addEventListener('portfolio:motion', reset);
  window.addEventListener('blur', reset);
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(([entry]) => {
      hero.dataset.sceneVisible = String(entry.isIntersecting);
      if (!entry.isIntersecting) reset();
    });
    observer.observe(hero);
  }
}
