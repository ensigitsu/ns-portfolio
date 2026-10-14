export async function initOceanBackground() {
  const canvas = document.querySelector('#ocean-canvas');
  const host = canvas?.parentElement;
  if (!canvas || !host) return;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const mobile = matchMedia('(max-width: 800px)');
  let gl;
  try {
    gl = canvas.getContext('webgl', {
      alpha: true,
      premultipliedAlpha: false,
      antialias: false,
      depth: false,
      stencil: false,
      powerPreference: 'low-power',
    });
  } catch {}
  if (!gl) {
    document.dispatchEvent(
      new CustomEvent('portfolio:effect-status', { detail: { effect: 'ocean', available: false } }),
    );
    return;
  }
  const shaders = [];
  let program,
    buffer,
    raf = 0,
    lastTime = 0,
    elapsed = 8,
    paused = document.body.dataset.motionPaused === 'true',
    disposed = false;
  function release() {
    shaders.forEach((shader) => gl.deleteShader(shader));
    if (program) gl.deleteProgram(program);
    if (buffer) gl.deleteBuffer(buffer);
  }
  function compile(type, source) {
    const shader = gl.createShader(type);
    shaders.push(shader);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS))
      throw new Error(gl.getShaderInfoLog(shader) || 'Ocean shader compilation failed');
    return shader;
  }
  try {
    const responses = await Promise.all([
      fetch(canvas.dataset.vertex),
      fetch(canvas.dataset.fragment),
    ]);
    if (responses.some((response) => !response.ok)) throw new Error('Ocean shaders unavailable');
    const sources = await Promise.all(responses.map((response) => response.text()));
    program = gl.createProgram();
    gl.attachShader(program, compile(gl.VERTEX_SHADER, sources[0]));
    gl.attachShader(program, compile(gl.FRAGMENT_SHADER, sources[1]));
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS))
      throw new Error(gl.getProgramInfoLog(program) || 'Ocean shader linking failed');
  } catch (error) {
    release();
    document.dispatchEvent(
      new CustomEvent('portfolio:effect-status', { detail: { effect: 'ocean', available: false } }),
    );
    console.warn('Portfolio: static ocean reflections retained.', error.message);
    return;
  }
  gl.useProgram(program);
  buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
    gl.STATIC_DRAW,
  );
  const position = gl.getAttribLocation(program, 'position');
  gl.enableVertexAttribArray(position);
  gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);
  const resolution = gl.getUniformLocation(program, 'uResolution');
  const time = gl.getUniformLocation(program, 'uTime');
  function draw() {
    if (disposed) return;
    gl.uniform2f(resolution, canvas.width, canvas.height);
    gl.uniform1f(time, elapsed);
    gl.drawArrays(gl.TRIANGLES, 0, 6);
  }
  function resize() {
    if (disposed) return;
    const width = innerWidth,
      height = innerHeight;

    const scale = Math.min(1, (mobile.matches ? 600 : 900) / Math.max(width, height));
    canvas.width = Math.max(1, Math.round(width * scale));
    canvas.height = Math.max(1, Math.round(height * scale));
    gl.viewport(0, 0, canvas.width, canvas.height);
    draw();
  }
  function canAnimate() {
    return !paused && !reduced.matches && !document.hidden && !disposed;
  }
  function tick(now) {
    raf = 0;
    if (!canAnimate()) return;
    const frameTime = now - lastTime;
    if (lastTime && frameTime < 1000 / (mobile.matches ? 18 : 24)) {
      raf = requestAnimationFrame(tick);
      return;
    }
    elapsed += Math.min(lastTime ? frameTime / 1000 : 1 / 24, 0.1);
    lastTime = now;
    draw();
    raf = requestAnimationFrame(tick);
  }
  function schedule() {
    cancelAnimationFrame(raf);
    raf = 0;
    lastTime = 0;
    if (canAnimate()) raf = requestAnimationFrame(tick);
    else draw();
  }
  const onPause = (event) => {
    paused = event.detail.paused;
    schedule();
  };
  const onReduced = () => schedule();
  const onVisibility = () => schedule();
  function cleanup() {
    if (disposed) return;
    disposed = true;
    cancelAnimationFrame(raf);
    release();
    window.removeEventListener('resize', resize);
    mobile.removeEventListener('change', resize);
    reduced.removeEventListener('change', onReduced);
    document.removeEventListener('visibilitychange', onVisibility);
    document.removeEventListener('portfolio:motion', onPause);
  }
  canvas.addEventListener(
    'webglcontextlost',
    (event) => {
      event.preventDefault();
      cleanup();
      host.classList.remove('is-ready');
      document.dispatchEvent(
        new CustomEvent('portfolio:effect-status', {
          detail: { effect: 'ocean', available: false },
        }),
      );
    },
    { once: true },
  );
  window.addEventListener('resize', resize, { passive: true });
  mobile.addEventListener('change', resize);
  reduced.addEventListener('change', onReduced);
  document.addEventListener('visibilitychange', onVisibility);
  document.addEventListener('portfolio:motion', onPause);
  window.addEventListener('pagehide', (event) => {
    if (!event.persisted) cleanup();
  });
  resize();
  host.classList.add('is-ready');
  document.dispatchEvent(
    new CustomEvent('portfolio:effect-status', { detail: { effect: 'ocean', available: true } }),
  );
  schedule();
}
