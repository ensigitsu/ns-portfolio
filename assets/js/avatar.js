import * as THREE from '../vendor/three.module.js';
import { GLTFLoader } from '../vendor/addons/loaders/GLTFLoader.js';
export async function mountAvatar() {
  const host = document.querySelector('#avatar-mount');
  if (!host) return;
  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5));
  host.append(renderer.domElement);
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(35, 1, 0.01, 100);
  camera.position.set(0, 0, 4);
  scene.add(new THREE.HemisphereLight(0xeaf2ff, 0x162238, 3));
  const light = new THREE.DirectionalLight(0xffffff, 3);
  light.position.set(2, 3, 4);
  scene.add(light);
  const gltf = await new GLTFLoader().loadAsync(host.dataset.model);
  const model = gltf.scene;
  const box = new THREE.Box3().setFromObject(model);
  const center = box.getCenter(new THREE.Vector3());
  const size = box.getSize(new THREE.Vector3());
  model.position.sub(center);
  model.scale.setScalar(2 / Math.max(size.x, size.y, size.z));
  scene.add(model);
  const draw = () => {
    renderer.setSize(host.clientWidth, 300);
    camera.aspect = host.clientWidth / 300;
    camera.updateProjectionMatrix();
    renderer.render(scene, camera);
  };
  const observer = new ResizeObserver(draw);
  observer.observe(host);
  draw();
  window.addEventListener(
    'pagehide',
    () => {
      observer.disconnect();
      model.traverse((o) => {
        o.geometry?.dispose();
        if (o.material) {
          for (const m of Array.isArray(o.material) ? o.material : [o.material]) m.dispose();
        }
      });
      renderer.dispose();
    },
    { once: true },
  );
}
