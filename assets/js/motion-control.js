import { translate } from './i18n.js';

export function initMotionControl() {
  const button = document.querySelector('[data-motion]');
  if (!button) return;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const active = new Set();
  let paused = false;
  document.body.dataset.motionPaused = 'false';
  function label() {
    button.hidden = reduced.matches || active.size === 0;
    button.textContent = translate(paused ? 'motion_off' : 'motion_on');
    button.setAttribute('aria-pressed', String(paused));
  }
  const onPause = () => {
    paused = !paused;
    document.body.dataset.motionPaused = String(paused);
    label();
    document.dispatchEvent(new CustomEvent('portfolio:motion', { detail: { paused } }));
  };
  const onStatus = (event) => {
    if (event.detail.available) active.add(event.detail.effect);
    else active.delete(event.detail.effect);
    label();
  };
  button.addEventListener('click', onPause);
  document.addEventListener('portfolio:effect-status', onStatus);
  document.addEventListener('portfolio:language', label);
  reduced.addEventListener('change', label);
  label();
}
