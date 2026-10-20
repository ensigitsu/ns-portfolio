import { translate } from './i18n.js';

export function initMotionControl() {
  const button = document.querySelector('[data-motion]');
  if (!button) return;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  let paused = false;
  document.body.dataset.motionPaused = 'false';
  function visibility() {
    document.body.dataset.motionHidden = String(document.hidden);
  }
  function label() {
    button.hidden = reduced.matches;
    button.textContent = translate(paused ? 'motion_off' : 'motion_on');
    button.setAttribute('aria-pressed', String(paused));
  }
  const onPause = () => {
    paused = !paused;
    document.body.dataset.motionPaused = String(paused);
    label();
    document.dispatchEvent(
      new CustomEvent('portfolio:motion', { detail: { paused } }),
    );
  };
  button.addEventListener('click', onPause);
  document.addEventListener('portfolio:language', label);
  reduced.addEventListener('change', label);
  document.addEventListener('visibilitychange', visibility);
  visibility();
  label();
}
