import * as THREE from 'three';

import {WEBGL} from 'three/examples/jsm/WebGL.js';

function createBackdrop() {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
      90, window.innerWidth / window.innerHeight, 0.1, 1000);

  const renderer = new THREE.WebGLRenderer({antialias : true});
  renderer.setSize(window.innerWidth, window.innerHeight);

  // Add canvas to body.
  renderer.domElement.className = 'backdrop';
  document.body.appendChild(renderer.domElement);

  // Set up scene and shader.
  const uniforms = {
    iTime : {type : 'f', value : 0.1},
    iResolution : {type : 'v2', value : new THREE.Vector2()},
    iMouse : {type : 'v2', value : new THREE.Vector2()},
  };
  uniforms.iResolution.value.x = window.innerWidth;
  uniforms.iResolution.value.y = window.innerHeight;

  const vert = `
  void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
  `;
  const frag = `
  uniform float iTime;
  uniform vec2 iResolution;
  uniform vec2 iMouse;

  float hash(float n) {
    return fract(sin(n) * 43.5453);
  }

  void main() {
    vec2 coord = gl_FragCoord.xy / iResolution.xy;
    vec2 ndc = -1.0 + 2.0 * coord;
    // Fix aspect ratio.
    ndc.x *= iResolution.x / iResolution.y;

    // Mouse input.
    vec2 mouseCoords = iMouse.xy / iResolution.xy;
    vec2 ndcMouse = -1.0 + 2.0 * mouseCoords;
    vec2 mouseOffset = ndcMouse * 0.1;

    // Camera.
    vec3 rho = vec3(sin(iTime * 0.16), 0, cos(iTime * 0.1));
    vec3 tau = rho + vec3(sin(iTime * 0.15), sin(iTime * 0.18), cos(iTime * 0.24));
    float roll = 0.0;

    // Camera translation.
    vec3 cw = normalize(tau - rho);
    vec3 cp = vec3(sin(roll), cos(roll), 0);
    vec3 cu = normalize(cross(cp, cw));
    vec3 rd = normalize((ndc.x + mouseOffset.x) * cu + (ndc.y - mouseOffset.y) * cp + cw * 2.0);

    // Volumetric rendering.
    vec3 v = vec3(0);
    for (float s = 0.1; s <= 5.0; s += 0.25) {
      vec3 p = rho + rd * s;
      for (float i = 0.1; i < 1.0; i += 0.12) {
        // Magic
        p = abs(p) / dot(p + sin(iTime * 0.1) * 0.1, p) - 0.5;
        float a = length(p);
        v += vec3(pow(i, 2.0), pow(i, 1.2), pow(i, 1.0)) * a * 0.12;
      }
    }

    gl_FragColor = vec4(v * 0.01, 1.0);
  }
  `;
  const shaderMaterial = new THREE.ShaderMaterial({
    uniforms : uniforms,
    vertexShader : vert,
    fragmentShader : frag,
    side : THREE.DoubleSide,
  });

  const plane = new THREE.PlaneGeometry(100, 100);
  const mesh = new THREE.Mesh(plane, shaderMaterial);
  scene.add(mesh);

  camera.position.z = 5;

  const clock = new THREE.Clock();

  // Resize listener.
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    uniforms.iResolution.value.x = window.innerWidth;
    uniforms.iResolution.value.y = window.innerHeight;
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  window.addEventListener('mousemove', (e) => {
    uniforms.iMouse.value.x = e.clientX;
    uniforms.iMouse.value.y = e.clientY;
  });

  // Animation.
  function animate() {
    requestAnimationFrame(animate);

    uniforms.iTime.value += clock.getDelta();
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
