uniform float uTime;
uniform float uEnergy;
uniform vec2 uPointer;
varying vec3 vWorld;
varying vec3 vSurfaceNormal;
varying float vFold;
vec3 torusNormal(vec3 p) {
  vec3 center = vec3(normalize(p.xy) * 1.38, 0.0);
  return normalize(p - center);
}
vec3 deform(vec3 p, vec3 n) {
  float t = uTime * 0.25;
  float wave = sin(p.x * 2.1 + t) * cos(p.y * 1.6 - t * 0.7);
  float ripple = sin(p.y * 3.0 + p.z * 1.7 + t * 1.3);
  float approach = exp(-length(p.xy - uPointer * 2.8) * 1.4);
  p += n * (wave * 0.21 + ripple * 0.10 + approach * uEnergy * 0.18);
  float twist = p.x * 0.38 + sin(t * 0.35) * 0.1;
  p.yz = mat2(cos(twist), -sin(twist), sin(twist), cos(twist)) * p.yz;
  p.y += sin(p.x * 1.3 + t * 0.5) * 0.18;
  p.x += cos(p.y * 1.4 + t * 0.45) * 0.09;
  return p;
}
void main() {
  vec3 p = deform(position, normal);

  vec3 axis = abs(normal.y) < 0.9 ? vec3(0.0, 1.0, 0.0) : vec3(1.0, 0.0, 0.0);
  vec3 tangent = normalize(cross(axis, normal));
  vec3 bitangent = normalize(cross(normal, tangent));
  float epsilon = 0.006;
  vec3 a = position + tangent * epsilon;
  vec3 b = position + bitangent * epsilon;
  vec3 du = deform(a, torusNormal(a)) - p;
  vec3 dv = deform(b, torusNormal(b)) - p;

  vSurfaceNormal = normalize(mat3(modelMatrix) * normalize(cross(du, dv)));
  vFold = sin(position.x * 2.1 + uTime * 0.25) * cos(position.y * 1.6 - uTime * 0.175);
  vec4 world = modelMatrix * vec4(p, 1.0);
  vWorld = world.xyz;
  gl_Position = projectionMatrix * viewMatrix * world;
}
