import * as THREE from 'three';
import {WEBGL} from 'three/examples/jsm/WebGL.js';

class ShaderBackdrop {
  constructor() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
        90, window.innerWidth / window.innerHeight, 0.1, 1000);

    try {
      this.renderer = new THREE.WebGLRenderer(
          {antialias : false, failIfMajorPerformanceCaveat : true});
    } catch (ex) {
      // WebGL unsupported, or running on software rendering.
      console.log(ex);
      this.rendererFailure = true;
      return;
    }
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    // Add canvas to body.
    this.renderer.domElement.className = 'backdrop';
    document.body.appendChild(this.renderer.domElement);

    // Set up scene and shader.
    this.uniforms = {
      iTime : {type : 'f', value : 0.1},
      iResolution : {type : 'v2', value : new THREE.Vector2()},
      iMouse : {type : 'v2', value : new THREE.Vector2()},
    };
    this.uniforms.iResolution.value.x = window.innerWidth;
    this.uniforms.iResolution.value.y = window.innerHeight;
    this.uniforms.iMouse.value.x = window.innerWidth / 2;
    this.uniforms.iMouse.value.y = window.innerHeight / 2;

    const vert = `
    void main() {
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
    `;
    const frag = `
    uniform float iTime;
    uniform vec2 iResolution;
    uniform vec2 iMouse;

    void main() {
      vec2 coord = gl_FragCoord.xy / iResolution.xy;
      vec2 ndc = -1.0 + 2.0 * coord;
      // Fix aspect ratio.
      ndc.x *= iResolution.x / iResolution.y;

      // Mouse input.
      vec2 mouseCoords = iMouse.xy / iResolution.xy;
      vec2 ndcMouse = -1.0 + 2.0 * mouseCoords;
      vec2 mouseOffset = ndcMouse * 0.8;

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
          p = abs(p) / dot(p + sin(iTime * 0.09) * 0.1, p) - 0.5;
          float a = length(p);
          v += vec3(pow(i, 2.0), pow(i, 1.2), pow(i, 1.0)) * a * 0.12;
        }
      }

      gl_FragColor = vec4(v * 0.01, 1.0);
    }
    `;
    const shaderMaterial = new THREE.ShaderMaterial({
      uniforms : this.uniforms,
      vertexShader : vert,
      fragmentShader : frag,
      side : THREE.DoubleSide,
    });

    const plane = new THREE.PlaneGeometry(100, 100);
    const mesh = new THREE.Mesh(plane, shaderMaterial);
    this.scene.add(mesh);

    this.camera.position.z = 5;

    this.clock = new THREE.Clock();

    // Resize listener.
    window.addEventListener('resize', () => {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.uniforms.iResolution.value.x = window.innerWidth;
      this.uniforms.iResolution.value.y = window.innerHeight;
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    });

    this.targetMousePos =
        new THREE.Vector2(window.innerWidth / 2, window.innerHeight / 2);
    window.addEventListener('mousemove', (e) => {
      this.targetMousePos.x = e.clientX;
      this.targetMousePos.y = e.clientY;
    });
  }

  enable() {
    if (this.rendererFailure) {
      return;
    }
    if (this.isRunning) {
      return;
    }
    this.isRunning = true;
    this.isFading = false;
    this.animate();
  }

  fadeIn() {
    if (this.rendererFailure) {
      return;
    }
    if (this.isRunning) {
      return;
    }
    this.isRunning = true;
    this.isFading = true;
    this.currentOpacity = 0.0;
    this.targetOpacity = 1.0;
    this.fadeOffset = 0.02;
    this.animate();
  }

  disable() { this.isRunning = false; }

  fadeOut() {
    this.isFading = true;
    this.currentOpacity = 1.0;
    this.targetOpacity = 0.0;
    // A bit faster than the fade in.
    this.fadeOffset = -0.03;
  }

  animate() {
    // Handle start and stop states.
    if (this.rendererFailure) {
      return;
    }
    if (!this.isRunning) {
      return;
    }
    requestAnimationFrame(() => this.animate());
    if (this.isFading) {
      this.currentOpacity =
          Math.max(Math.min(this.currentOpacity + this.fadeOffset, 1.0), 0.0);
      if (this.currentOpacity === this.targetOpacity) {
        this.isFading = false;
        if (this.currentOpacity === 0.0) {
          this.isRunning = false;
        }
      }
      this.renderer.domElement.style.opacity = this.currentOpacity.toString();
    }

    // Render.
    this.uniforms.iTime.value += this.clock.getDelta();
    this.uniforms.iMouse.value.lerp(this.targetMousePos, 0.02);
    this.renderer.render(this.scene, this.camera);
  }
}

function isOnMainPage() {
  const pathname = window.location.pathname;
  return pathname === '' || pathname === '/';
}

function enableSmoothState(backdrop) {
  const $ = jQuery;

  let smoothState;
  const options = {
    debug : true,
    scroll : false,
    prefetch : true,
    cacheLength : 2,
    onStart : {
      duration : 300,
      render : ($container) => {
        $('html, body').animate({scrollTop : 0});
        // Reverse CSS animations.
        $container.addClass('is-exiting');
        smoothState.restartCSSAnimations();
      },
    },
    onReady : {
      duration : 0,
      render : ($container, $newContent) => {
        // Remove reversing animations, and inject new content.
        $container.removeClass('is-exiting');
        $container.html($newContent);
      },
    },
    onAfter : () => {
      if (backdrop) {
        // Enable the backdrop on the main page, and disable it on subsequent
        // pages.
        if (isOnMainPage()) {
          backdrop.fadeIn();
        } else {
          backdrop.fadeOut();
        }
      }
      // Analytics.
      if (typeof ga !== 'undefined') {
        ga('set', 'page', window.location.pathname);
        ga('send', 'pageview');
      }
    },
  };
  smoothState = $('#main').smoothState(options).data('smoothState');
}

var backdrop = null;
if (WEBGL.isWebGLAvailable()) {
  backdrop = new ShaderBackdrop();
  if (isOnMainPage()) {
    backdrop.enable();
  }
} else {
  console.warn(
      'Browser does not support WebGL; defaulting to static background');
}

if (typeof jQuery !== 'undefined') {
  enableSmoothState(backdrop);
}
