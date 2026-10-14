precision highp float;
uniform vec2 uResolution;
uniform float uTime;
vec2 randomPoint(vec2 cell) {
  vec2 seed = vec2(dot(cell, vec2(127.1, 311.7)), dot(cell, vec2(269.5, 183.3)));
  return fract(sin(seed) * 43758.5453);
}

float caustic(vec2 p, float time) {
  p += 0.38 * vec2(sin(p.y * 2.4 + time * 0.19) + 0.5 * cos(p.x * 2.1 - time * 0.11),
                    cos(p.x * 2.2 - time * 0.16) + 0.5 * sin(p.y * 2.6 + time * 0.13));
  p += 0.12 * vec2(sin(p.y * 5.3 + p.x * 2.4 + time * 0.18), cos(p.x * 5.1 - p.y * 2.1 - time * 0.16));
  vec2 cell = floor(p), local = fract(p);
  float nearest = 10.0, second = 10.0;
  for (int y = -1; y <= 1; y++) {
    for (int x = -1; x <= 1; x++) {
      vec2 offset = vec2(float(x), float(y));
      vec2 seed = randomPoint(cell + offset);
      vec2 point = 0.5 + 0.34 * sin(6.2831853 * seed + vec2(time * 0.27, time * 0.23));
      vec2 delta = offset + point - local;
      float distance2 = dot(delta, delta);
      if (distance2 < nearest) { second = nearest; nearest = distance2; }
      else if (distance2 < second) { second = distance2; }
    }
  }
  float gap = sqrt(second) - sqrt(nearest);
  float line = 1.0 - smoothstep(0.012, 0.085, gap);
  float bloom = exp(-gap * 7.5) * 0.20;
  return line * line + bloom;
}
void main() {
  vec2 uv = gl_FragCoord.xy / uResolution;
  vec2 p = vec2(uv.x * uResolution.x / uResolution.y, uv.y) * 4.0;
  float primary = caustic(p + vec2(uTime * 0.035, -uTime * 0.02), uTime);
  float secondary = caustic(p * 1.28 + vec2(4.8, 2.3), uTime * 0.72 + 4.0);
  float light = clamp(primary * 0.70 + secondary * 0.30, 0.0, 1.25);

  float sun = exp(-length((uv - vec2(0.76, 0.66)) * vec2(1.1, 0.8)) * 1.05);
  float breathing = 0.94 + 0.06 * sin(uTime * 0.15);
  float alpha = light * (0.09 + sun * 0.12) * breathing;
  vec3 pearl = mix(vec3(0.43, 0.58, 0.68), vec3(0.84, 0.82, 0.72), sun * 0.64);
  gl_FragColor = vec4(pearl, alpha);
}
