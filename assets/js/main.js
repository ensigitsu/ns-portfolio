import { initI18n } from './i18n.js';
import { initNavigation, initReveals, initFilters } from './animations.js';
import { initCursor } from './cursor.js';
import { initContentGuard } from './content-guard.js';
import { initMotionControl } from './motion-control.js';
import { initLiquidScene } from './liquid-scene.js';

document.body.classList.add('js');
initContentGuard();
initNavigation();
initReveals();
initFilters();
initCursor();
await initI18n();
initMotionControl();
initLiquidScene();
