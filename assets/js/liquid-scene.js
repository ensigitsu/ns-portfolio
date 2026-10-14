import * as THREE from '../vendor/three.module.js';
export async function initLiquidScene() {
  const canvas = document.querySelector('#liquid-canvas');
  const host = canvas?.parentElement;
  const hero = document.querySelector('.hero');
  if (!canvas || !host || !hero) return;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const mobile = matchMedia('(max-width: 800px)');
  const fine = matchMedia('(pointer: fine)');
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: !mobile.matches,
      powerPreference: 'low-power',
    });
  } catch {
    document.dispatchEvent(
      new CustomEvent('portfolio:effect-status', { detail: { effect: 'hero', available: false } }),
    );
    return;
  }
  let vertex, fragment;
  try {
    const responses = await Promise.all([
      fetch(canvas.dataset.vertex),
      fetch(canvas.dataset.fragment),
    ]);
    if (responses.some((r) => !r.ok)) throw new Error('Shader unavailable');
    [vertex, fragment] = await Promise.all(responses.map((r) => r.text()));
  } catch (error) {
    renderer.dispose();
    document.dispatchEvent(
      new CustomEvent('portfolio:effect-status', { detail: { effect: 'hero', available: false } }),
    );
    throw error;
  }
  renderer.setPixelRatio(Math.min(devicePixelRatio || 1, mobile.matches ? 1.25 : 1.7));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.12;
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 40);
  camera.position.z = 10;
  const uniforms = {
    uTime: { value: 1.5 },
    uEnergy: { value: 0 },
    uPointer: { value: new THREE.Vector2() },
  };
  const geometry = new THREE.TorusGeometry(
    1.38,
    0.65,
    mobile.matches ? 32 : 56,
    mobile.matches ? 90 : 160,
  );
  const material = new THREE.ShaderMaterial({
    vertexShader: vertex,
    fragmentShader: fragment,
    uniforms,
    side: THREE.DoubleSide,
  });
  const sculpture = new THREE.Mesh(geometry, material);
  sculpture.rotation.set(0.62, -0.46, -0.65);
  scene.add(sculpture);
  const count = mobile.matches ? 22 : 48;
  const positions = new Float32Array(count * 3);

  for (let i = 0; i < count; i++) {
    positions[i * 3] = Math.sin(i * 12.9898) * 7;
    positions[i * 3 + 1] = Math.cos(i * 7.321) * 4;
    positions[i * 3 + 2] = -2 - (i % 7) * 0.35;
  }
  const particleGeometry = new THREE.BufferGeometry();
  particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  const particleMaterial = new THREE.PointsMaterial({
    color: 0x8ca8cf,
    size: 0.018,
    transparent: true,
    opacity: 0.4,
    depthWrite: false,
  });
  const particles = new THREE.Points(particleGeometry, particleMaterial);
  scene.add(particles);
  let visible = true,
    hidden = document.hidden,
    paused = document.body.dataset.motionPaused === 'true',
    raf = 0,
    disposed = false;
  let lastTime = 0,
    elapsed = 1.5,
    scroll = 0,
    smoothScroll = 0,
    slowFrames = 0;
  const target = new THREE.Vector2();
  const pointer = new THREE.Vector2();
  let energy = 0;
  function resize() {
    if (disposed) return;
    const width = host.clientWidth,
      height = host.clientHeight;
    if (!width || !height) return;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height, false);
    sculpture.position.set(mobile.matches ? 0 : 1.82, mobile.matches ? 0.4 : 0.03, 0);
    const baseScale = mobile.matches ? 0.98 : 1.23;
    sculpture.scale.setScalar(baseScale);
    if (paused || reduced.matches || hidden || !visible) draw();
  }
  function draw() {
    if (disposed) return;
    try {
      renderer.render(scene, camera);
    } catch {
      fallback();
    }
  }
  function canAnimate() {
    return visible && !hidden && !paused && !reduced.matches && !disposed;
  }
  function tick(time) {
    raf = 0;
    if (!canAnimate()) return;
    const frameTime = time - lastTime;
    if (mobile.matches && lastTime && frameTime < 31) {
      raf = requestAnimationFrame(tick);
      return;
    }
    const delta = Math.min(lastTime ? frameTime / 1000 : 1 / 60, 0.05);
    lastTime = time;
    elapsed += delta;
    const inertia = 1 - Math.exp(-delta * 3.2);
    pointer.lerp(target, inertia);
    uniforms.uPointer.value.copy(pointer);
    uniforms.uTime.value = elapsed;
    energy += ((target.length() > 0.05 ? 0.9 : 0) - energy) * inertia;
    uniforms.uEnergy.value = energy;
    smoothScroll += (scroll - smoothScroll) * inertia;
    sculpture.rotation.x = 0.62 + Math.sin(elapsed * 0.13) * 0.08 + pointer.y * 0.15;
    sculpture.rotation.y = -0.46 + Math.sin(elapsed * 0.17) * 0.15 + pointer.x * 0.22;
    sculpture.rotation.z = -0.65 + Math.sin(elapsed * 0.11) * 0.045 - smoothScroll * 0.13;
    sculpture.position.x = (mobile.matches ? 0 : 1.82) + pointer.x * 0.12;
    sculpture.position.y = (mobile.matches ? 0.4 : 0.03) + pointer.y * 0.08 + smoothScroll * 0.32;
    const baseScale = mobile.matches ? 0.98 : 1.23;
    sculpture.scale.setScalar(baseScale * (1 - smoothScroll * 0.08));
    particles.rotation.y = elapsed * 0.006;
    if (frameTime > 45 && !mobile.matches) slowFrames++;
    else slowFrames = Math.max(0, slowFrames - 1);
    if (slowFrames === 90 && renderer.getPixelRatio() > 1) renderer.setPixelRatio(1);
    draw();
    if (canAnimate()) raf = requestAnimationFrame(tick);
  }
  function schedule() {
    if (raf) {
      cancelAnimationFrame(raf);
      raf = 0;
    }
    lastTime = 0;
    if (canAnimate()) raf = requestAnimationFrame(tick);
    else draw();
  }
  const onPointer = (event) => {
    if (!fine.matches || reduced.matches) return;
    const rect = host.getBoundingClientRect();
    target.set(
      ((event.clientX - rect.left) / rect.width) * 2 - 1,
      -(((event.clientY - rect.top) / rect.height) * 2 - 1),
    );
  };
  const onLeave = () => target.set(0, 0);
  const onScroll = () => {
    scroll = Math.max(0, Math.min(1, -hero.getBoundingClientRect().top / hero.offsetHeight));
  };
  const onVisibility = () => {
    hidden = document.hidden;
    schedule();
  };
  const onMotion = () => {
    target.set(0, 0);
    schedule();
  };
  const onPause = (event) => {
    paused = event.detail.paused;
    schedule();
  };
  const observer = new IntersectionObserver(
    (entries) => {
      visible = entries[0].isIntersecting;
      schedule();
    },
    { threshold: 0 },
  );
  const resizeObserver = new ResizeObserver(resize);
  function cleanup() {
    if (disposed) return;
    disposed = true;
    cancelAnimationFrame(raf);
    observer.disconnect();
    resizeObserver.disconnect();
    hero.removeEventListener('pointermove', onPointer);
    hero.removeEventListener('pointerleave', onLeave);
    window.removeEventListener('scroll', onScroll);
    document.removeEventListener('visibilitychange', onVisibility);
    reduced.removeEventListener('change', onMotion);
    document.removeEventListener('portfolio:motion', onPause);
    geometry.dispose();
    material.dispose();
    particleGeometry.dispose();
    particleMaterial.dispose();
    renderer.dispose();
  }
  function fallback() {
    cleanup();
    host.classList.remove('is-ready');
    document.dispatchEvent(
      new CustomEvent('portfolio:effect-status', { detail: { effect: 'hero', available: false } }),
    );
  }
  canvas.addEventListener(
    'webglcontextlost',
    (event) => {
      event.preventDefault();
      fallback();
    },
    { once: true },
  );
  renderer.debug.onShaderError = () => fallback();
  hero.addEventListener('pointermove', onPointer, { passive: true });
  hero.addEventListener('pointerleave', onLeave);
  window.addEventListener('scroll', onScroll, { passive: true });
  document.addEventListener('visibilitychange', onVisibility);
  reduced.addEventListener('change', onMotion);
  document.addEventListener('portfolio:motion', onPause);
  observer.observe(hero);
  resizeObserver.observe(host);
  window.addEventListener('pagehide', (event) => {
    if (!event.persisted) cleanup();
  });
  resize();
  draw();
  if (!disposed) {
    host.classList.add('is-ready');
    document.dispatchEvent(
      new CustomEvent('portfolio:effect-status', { detail: { effect: 'hero', available: true } }),
    );
    schedule();
  }
}
