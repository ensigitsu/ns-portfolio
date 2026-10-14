import { initI18n } from './i18n.js';
import { initNavigation, initReveals, initFilters } from './animations.js';
import { initCursor } from './cursor.js';
import { initContentGuard } from './content-guard.js';
import { initOceanBackground } from './ocean-background.js';
import { initMotionControl } from './motion-control.js';
document.body.classList.add('js');
initContentGuard();
initNavigation();
initReveals();
initFilters();
initCursor();
await initI18n();
initMotionControl();
initOceanBackground().catch((error) =>
  console.warn('Portfolio: ocean fallback retained.', error.message),
);
if (document.querySelector('#liquid-canvas')) {
  import('./liquid-scene.js')
    .then((module) => module.initLiquidScene())
    .catch((error) => {
      document.dispatchEvent(
        new CustomEvent('portfolio:effect-status', {
          detail: { effect: 'hero', available: false },
        }),
      );
      console.warn('Portfolio: hero SVG retained.', error.message);
    });
}
if (document.querySelector('#avatar-mount')) {
  import('./avatar.js')
    .then((module) => module.mountAvatar())
    .catch((error) => {
      console.warn('Portfolio: optional avatar unavailable.', error.message);
    });
}
