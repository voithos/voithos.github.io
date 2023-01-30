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

    // Add canvas to body and hide by default.
    this.renderer.domElement.className = 'backdrop';
    this.renderer.domElement.style.opacity = '0';
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

#define AA 1
#define SPEED 8.
#define WAVE
#define FUJI

const vec3 SUN_COLOR = vec3(.8, .2, .5);
const vec3 HAZE_COLOR = vec3(.4, .5, .8);

// A noise-added time variant.
float noisyTime;

float amp(vec2 p) { return smoothstep(1., 10., abs(p.x)); }

float pow512(float a) {
  a *= a;  //^2
  a *= a;  //^4
  a *= a;  //^8
  a *= a;  //^16
  a *= a;  //^32
  a *= a;  //^64
  a *= a;  //^128
  a *= a;  //^256
  return a * a;
}

float pow1d5(float a) { return a * sqrt(a); }

float hash21(vec2 co) {
  return fract(sin(dot(co.xy, vec2(1.9898, 7.233))) * 45758.5433);
}

float hash(vec2 uv) {
  float a = amp(uv);
#ifdef WAVE
  float w = a > 0.
                ? (1. - .8 * pow512(.51 + .49 * sin((.02 * (uv.y + .5 * uv.x) -
                                                     noisyTime * 0.7) *
                                                    2.)))
                : 0.;
#else
  float w = 1.;
#endif
  return (a > 0. ? a * pow1d5(hash21(uv)) * w : 0.);
}

float edgeMin(float dx, vec2 da, vec2 db) {
  return min(min((1. - dx) * db.y, da.x), da.y);
}

// 2D triangular noise, red channel denotes height, green is distance to nearest
// edge.
vec2 trinoise(vec2 uv) {
  const float sq = sqrt(3. / 2.);
  uv.x *= sq;
  uv.y -= .5 * uv.x;
  vec2 d = fract(uv);
  uv -= d;

  bool c = dot(d, vec2(1)) > 1.;

  vec2 dd = 1. - d;
  vec2 da = c ? dd : d, db = c ? d : dd;

  float nn = hash(uv + float(c));
  float n2 = hash(uv + vec2(1, 0));
  float n3 = hash(uv + vec2(0, 1));

  float nmid = mix(n2, n3, d.y);
  float ns = mix(nn, c ? n2 : n3, da.y);
  float dx = da.x / db.y;
  return vec2(mix(ns, nmid, dx), edgeMin(dx, da, db));
}

vec2 map(vec3 p) {
  // Use the XZ plane to sample a triangle mesh plane.
  vec2 n = trinoise(p.xz);
  return vec2(p.y - 2. * n.x, n.y);
}

vec3 gradient(vec3 p) {
  const vec2 e = vec2(.005, 0);
  float a = map(p).x;
  return vec3(map(p + e.xyy).x - a, map(p + e.yxy).x - a,
              map(p + e.yyx).x - a) /
         e.x;
}

vec2 intersectTerrain(vec3 ro, vec3 rd) {
  float d = 0., h = 0.;
  // Raymarch. Iteration count empirically determined.
  for (int i = 0; i < 500; ++i) {
    vec3 p = ro + d * rd;
    vec2 s = map(p);
    h = s.x;
    d += h * .5;
    // Stop when we're no longer making much progress.
    if (abs(h) < .003 * d) return vec2(d, s.y);
    // Stop if we've gone too far and still haven't hit anything.
    if (d > 150.0 || p.y > 2.0) break;
  }

  return vec2(-1);
}

void addsun(vec3 rd, vec3 ld, float haze, inout vec3 col) {
  const float RADIUS = .3;
  float sun = smoothstep(RADIUS + 0.02, RADIUS, distance(rd, ld));
  float bloom = smoothstep(0.7, 0.0, distance(rd, ld));

  if (sun > 0.0) {
    float uvy = (rd.y - ld.y) + RADIUS;
    float cut = 3.0 * sin((uvy + noisyTime * 0.2) * 120.0) +
                clamp(uvy * 20.0 - 4.0, -6.0, 6.0);
    sun = clamp(sun * cut, 0.0, 1.0);

    col = mix(col, mix(SUN_COLOR, HAZE_COLOR, pow(haze, 3.0) * 0.3), sun);
  }

  col += SUN_COLOR * bloom * 0.3;
}

float starnoise(vec3 rd) {
  float c = 0.;
  vec3 p = normalize(rd) * 200.;
  for (float i = 0.; i < 4.; i++) {
    vec3 q = fract(p) - .5;
    vec3 id = floor(p);
    float c2 = smoothstep(.5, 0., length(q));
    c2 *= step(hash21(id.xz / id.y), .06 - i * i * 0.005);
    c += c2;
    p = p * .6 +
        .5 * p * mat3(3. / 5., 0, 4. / 5., 0, 1, 0, -4. / 5., 0, 3. / 5.);
  }
  c *= c;
  float g = dot(sin(rd * 10.512), cos(rd.yzx * 10.512));
  c *= smoothstep(-3.14, -.9, g) * .6 + .5 * smoothstep(-.3, 1., g);
  return c * c;
}

float dot2(in vec2 v) { return dot(v, v); }

float sdTrapezoid(in vec2 p, in float r1, float r2, float he) {
  vec2 k1 = vec2(r2, he);
  vec2 k2 = vec2(r2 - r1, 2.0 * he);
  p.x = abs(p.x);
  vec2 ca = vec2(p.x - min(p.x, (p.y < 0.0) ? r1 : r2), abs(p.y) - he);
  vec2 cb = p - k1 + k2 * clamp(dot(k1 - p, k2) / dot2(k2), 0.0, 1.0);
  float s = (cb.x < 0.0 && ca.y < 0.0) ? -1.0 : 1.0;
  return s * sqrt(min(dot2(ca), dot2(cb)));
}

vec3 gsky(vec3 rd, vec3 ld, bool mask) {
  float haze = exp2(-6. * (abs(rd.y) - .1 * dot(rd, ld)));

  float stars = mask ? (starnoise(rd)) * (1. - min(haze, 1.)) : 0.;
  vec3 back =
      vec3(.4, .1, .4) *
      (1. - .5 * exp2(-.1 * abs(length(rd.xz) / rd.y)) * max(sign(rd.y), 0.));

  vec3 col = clamp(mix(back, HAZE_COLOR, haze) + stars, 0., 1.);

  if (mask) addsun(rd, ld, haze, col);

#ifdef FUJI
  float fujiVal = sdTrapezoid(rd.xy * 2.9, 1.95 - rd.y * 3., 0.08, 0.5);
  if (mask && fujiVal <= 0.0) {
    // Calculate snow location.
    float waveVal =
        rd.y * 1. + sin(rd.x * 100.0 + 2. + iTime * 3.) * 0.01 - 0.1;
    float waveEdgeThickness = smoothstep(0.0, 0.005, waveVal);

    col = vec3(0.15);
    // Top snow.
    col =
        mix(col, vec3(1.0, 1.0, 1.0), fujiVal <= 0.0 ? waveEdgeThickness : 0.0);
    // Outline.
    col =
        mix(col, vec3(.0, 0.5, 0.8), 1.0 - smoothstep(0.0, 0.02, abs(fujiVal)));
    // Haze.
    col = mix(col, HAZE_COLOR, pow(haze * .75, 4.0));
  }
  if (mask) {
    if (fujiVal > 0.0) {
      col += vec3(.0, .5, 1.) * pow(1.0 - clamp(fujiVal, 0.0, 1.0), 3.0) * .4;
    }
  }
#endif

  return col;
}

// Ref: https://www.shadertoy.com/view/DtXXRM
void mainImage(out vec4 fragColor, in vec2 fragCoord) {
  // Mouse input.
  vec2 mouseCoords = iMouse.xy / iResolution.xy;
  vec2 ndcMouse = -1.0 + 2.0 * vec2(mouseCoords.x, 1.0 - mouseCoords.y);
  vec2 mouseOffset = vec2(0.0);
  mouseOffset = ndcMouse * vec2(1., 0.5);

  vec3 result;

  for (float x = 0.0; x < 1.0; x += 1.0 / float(AA)) {
    for (float y = 0.0; y < 1.0; y += 1.0 / float(AA)) {
      // Calculate pixel-level sample offset for AA.
      vec2 sampleOffset = vec2(x, y) - vec2(0.5 / float(AA));
      vec2 sampleCoord = fragCoord + sampleOffset;
      vec2 coord = sampleCoord / iResolution.xy;
      vec2 ndc = -1.0 + 2.0 * coord + mouseOffset;
      // Fix aspect ratio.
      ndc.x *= iResolution.x / iResolution.y;

      // Introduce some noise to time.
      float dt = fract(hash21(sampleCoord) + iTime);
      // TODO: Why is this clamped?
      noisyTime = mod(iTime + dt * 0.003, 4000.0);

      // Calculate ray origin and direction.
      vec3 ro = vec3(0.0 + mouseOffset.x * 0.5, 1.0 + mouseOffset.y * 0.2, (-20000. + noisyTime * SPEED));
      vec3 rd = normalize(vec3(ndc, 4.0 / 3.0));

      vec2 i = intersectTerrain(ro, rd);
      float d = i.x;

      // Create light direction.
      vec3 ld = normalize(vec3(0, .125 + .05 * sin(.1 * noisyTime * 2.), 1));

      vec3 fog = d > 0. ? exp2(-d * vec3(.08, .1, .34)) : vec3(0.);
      vec3 sky = gsky(rd, ld, d < 0.0);

      vec3 p = ro + rd * d;
      vec3 n = normalize(gradient(p));

      float diffuse = dot(n, ld) + .1 * n.y;
      vec3 col = vec3(.1, .1, .18) * diffuse;

      // Calculate reflection.
      vec3 rfd = reflect(rd, n);
      vec3 rfcol = gsky(rfd, ld, true);

      col = mix(col, rfcol, .05 + .95 * pow(max(1. + dot(rd, n), 0.), 5.));

      col = mix(col, vec3(.01, .63, .6), smoothstep(.03, .0, i.y));
      col = mix(sky, col, fog);
      // Skip tone mapping and gamma for the old-school look.

      result += col;
    }
  }
  result /= float(AA * AA);
  fragColor = vec4(result, 1.0);
}

void main() {
  mainImage(gl_FragColor, gl_FragCoord.xy);
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
    this.currentOpacity = 1.0;
    this.renderer.domElement.style.opacity = this.currentOpacity.toString();
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

  disable() {
    this.isRunning = false;
    this.isFading = false;
    this.currentOpacity = 0.0;
    this.renderer.domElement.style.opacity = this.currentOpacity.toString();
  }

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
