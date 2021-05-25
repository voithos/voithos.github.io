import * as THREE from 'three';

import {WEBGL} from 'three/examples/jsm/WebGL.js';

function createBackdrop() {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
      90, window.innerWidth / window.innerHeight, 0.1, 1000);

  const renderer = new THREE.WebGLRenderer({antialias : true});
  renderer.setSize(window.innerWidth, window.innerHeight);

  // Add to body.
  renderer.domElement.className = 'backdrop';
  document.body.appendChild(renderer.domElement);

  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshBasicMaterial({color : 0x00ff00});
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  camera.position.z = 5;

  function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
  }
  animate();
}

if (WEBGL.isWebGLAvailable()) {
  createBackdrop();
} else {
  console.warn(
      'Browser does not support WebGL; defaulting to static background');
}
