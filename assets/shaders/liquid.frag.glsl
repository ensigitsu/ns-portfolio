varying vec3 vWorld;
varying vec3 vSurfaceNormal;
varying float vFold;

float softbox(vec3 r, vec3 direction, float exponent) {
  return pow(max(dot(r, normalize(direction)), 0.0), exponent);
}
void main() {
  vec3 n = normalize(vSurfaceNormal);
  if (!gl_FrontFacing) n = -n;
  vec3 view = normalize(cameraPosition - vWorld);
  vec3 r = reflect(-view, n);
  float nv = clamp(dot(n, view), 0.0, 1.0);
  float fresnel = pow(1.0 - nv, 3.1);
  float pearl = 0.5 + 0.5 * sin(n.y * 3.2 + n.x * 2.0 + vFold * 0.3);
  vec3 base = mix(vec3(0.09, 0.14, 0.23), vec3(0.32, 0.42, 0.54), pearl);
  float top = softbox(r, vec3(-0.4, 1.0, 0.55), 5.0);
  float strip = softbox(r, vec3(0.8, 0.25, 1.0), 24.0);
  float broad = softbox(r, vec3(-1.0, 0.15, 0.45), 8.0);
  float edge = softbox(r, vec3(0.3, -0.8, -0.4), 8.0);
  vec3 color = base * (0.40 + 0.40 * max(n.y, 0.0));
  color += vec3(0.82, 0.87, 0.91) * top * 0.85;
  color += vec3(0.97, 0.96, 0.91) * strip * 1.05;
  color += vec3(0.39, 0.51, 0.70) * broad * 0.65;
  color += vec3(0.24, 0.36, 0.53) * edge * 0.45;
  color += vec3(0.23, 0.34, 0.50) * fresnel * 0.36;
  gl_FragColor = vec4(color, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
