// Art page lightbox.

const SCROLL_LOCK_CLASS = 'art-lightbox-open';
const MIN_SWIPE_DISTANCE_PX = 50;
// Movement a touch needs before we decide whether it's a horizontal drag.
const DRAG_SLOP_PX = 10;
const SLIDE_DURATION_MS = 150;
const RESTING_POSE = {
  transform: 'translateX(0)',
  opacity: 1
};

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

// Index of the piece currently shown.
let current = 0;
// Scroll position the page is pinned at while the lightbox is up.
let pinnedScrollY = 0;

function getLightbox() {
  return document.querySelector('.art-lightbox');
}

function getPieces() {
  return Array.from(document.querySelectorAll('.art-grid .art-piece'));
}

// The piece `offset` places from the current one, wrapping around.
function pieceAt(offset) {
  const pieces = getPieces();
  return pieces[(current + offset + pieces.length) % pieces.length];
}

// Points the URL at a piece, or at the bare page when slug is empty. We treat
// the lightbox as an overlay, not a page, so this replaces the URL instead of
// pushing a new state.
function setHash(slug) {
  const url = slug ? `${window.location.pathname}#${slug}` :
                     window.location.pathname + window.location.search;
  window.history.replaceState(window.history.state, '', url);
}

// Pins the page in place so it can't scroll. Unlike hiding overflow, this keeps
// the page's scrollbar, just with nothing to scroll.
function lockScroll() {
  pinnedScrollY = window.scrollY;
  document.body.style.top = `-${pinnedScrollY}px`;
  document.documentElement.classList.add(SCROLL_LOCK_CLASS);
}

function unlockScroll() {
  const html = document.documentElement;
  if (!html.classList.contains(SCROLL_LOCK_CLASS)) {
    return;
  }
  html.classList.remove(SCROLL_LOCK_CLASS);
  document.body.style.top = '';
  window.scrollTo(0, pinnedScrollY);
}

function preload(piece) {
  new Image().src = piece.dataset.artFull;
}

// Renders a piece into the lightbox.
function render(lightbox, piece) {
  current = getPieces().indexOf(piece);

  const image = lightbox.querySelector('.art-full');
  image.src = piece.dataset.artFull;
  image.alt = piece.querySelector('.art-title').textContent;
  image.width = piece.dataset.artWidth;
  image.height = piece.dataset.artHeight;

  lightbox.querySelector('.art-info')
      .replaceChildren(...piece.cloneNode(true).childNodes);

  preload(pieceAt(1));
  preload(pieceAt(-1));
}

// Opens a slug reference.
function open(slug, updateHash = true) {
  const lightbox = getLightbox();
  const piece = getPieces().find((p) => p.dataset.artSlug === slug);
  if (!lightbox || !piece) {
    return;
  }

  render(lightbox, piece);
  if (!lightbox.open) {
    lockScroll();
    lightbox.showModal();
    lightbox.focus();
  }
  if (updateHash) {
    setHash(slug);
  }
}

// Closes the lightbox, optionally clearing the hash.
function dismiss(lightbox, clearHash = true) {
  lightbox.close();
  if (clearHash && window.location.hash) {
    setHash('');
  }
}

// How far an image drifts while sliding fully out.
function slideTravel(lightbox) {
  return lightbox.querySelector('.art-stage').clientWidth / 2;
}

// Image pose at horizontal offset `x`, fading out as it nears `travel`.
function slidePose(x, travel) {
  return {
    transform: `translateX(${x}px)`,
    opacity: Math.max(0, 1 - Math.abs(x) / travel),
  };
}

// Animates an element through `keyframes`. A single keyframe starts from
// wherever the element is, so a slide picks up where a drag left the image.
function slide(element, keyframes) {
  return element
      .animate(keyframes, {
        duration: SLIDE_DURATION_MS,
        easing: 'ease-out',
        fill: 'forwards',
      })
      .finished.catch(() => {});
}

function isSliding(lightbox) {
  return lightbox.querySelector('.art-full').getAnimations().length > 0;
}

// Stops any slide and puts the image and info back at rest.
function clearSlide(lightbox) {
  for (const el
           of [lightbox.querySelector('.art-full'),
               lightbox.querySelector('.art-info')]) {
    el.getAnimations().forEach((a) => a.cancel());
    el.style.transform = '';
    el.style.opacity = '';
  }
}

async function springBack(lightbox) {
  if (reducedMotion.matches) {
    clearSlide(lightbox);
    return;
  }
  await slide(lightbox.querySelector('.art-full'), [RESTING_POSE]);
  clearSlide(lightbox);
}

// Slides to the next/previous piece, wrapping around. Ignored while a slide
// is already running.
async function stepPiece(offset) {
  const lightbox = getLightbox();
  if (isSliding(lightbox)) {
    return;
  }
  const piece = pieceAt(offset);
  setHash(piece.dataset.artSlug);

  if (reducedMotion.matches) {
    clearSlide(lightbox);
    render(lightbox, piece);
    return;
  }

  const image = lightbox.querySelector('.art-full');
  const info = lightbox.querySelector('.art-info');
  const travel = slideTravel(lightbox);
  // Next exits left, previous exits right.
  const exitX = offset > 0 ? -travel : travel;

  slide(info, [{opacity: 0}]);
  await slide(image, [slidePose(exitX, travel)]);
  // Closing mid-slide cancels the animations and lands here early.
  if (!lightbox.open) {
    return;
  }

  render(lightbox, piece);
  // Don't slide in an empty frame while the new image decodes.
  await image.decode().catch(() => {});
  if (!lightbox.open) {
    return;
  }

  slide(info, [{opacity: 0}, {opacity: 1}]);
  await slide(image, [slidePose(-exitX, travel), RESTING_POSE]);
  clearSlide(lightbox);
}

// Closes the art lightbox if it's open.
export function maybeCloseArtLightbox() {
  const lightbox = getLightbox();
  if (lightbox && lightbox.open) {
    dismiss(lightbox, false);
  }
  // The container may already be gone; make sure the page can scroll.
  unlockScroll();
}

function onThumbClick(e) {
  const thumb = e.target.closest('.art-thumb');
  if (thumb) {
    e.preventDefault();
    open(thumb.dataset.artSlug);
  }
}

function onLightboxClick(e) {
  if (e.target.closest('.art-prev')) {
    stepPiece(-1);
  } else if (e.target.closest('.art-next')) {
    stepPiece(1);
  } else if (
      e.target.closest('.art-close') || e.target === e.currentTarget ||
      e.target.classList.contains('art-stage')) {
    // The dialog itself and the stage around the image are the backdrop.
    dismiss(e.currentTarget);
  }
}

function onKeydown(e) {
  if (e.altKey || e.ctrlKey || e.metaKey) {
    return;
  }
  if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
    e.preventDefault();
    stepPiece(e.key === 'ArrowLeft' ? -1 : 1);
  }
}

function initSwipeNavigation(lightbox) {
  const stage = lightbox.querySelector('.art-stage');
  const image = lightbox.querySelector('.art-full');
  let start = null;
  // Offset of a recognized horizontal drag, null until then.
  let dragX = null;
  // Whether the latest press moved past the slop, in any direction.
  let moved = false;

  const forget = () => {
    start = null;
    dragX = null;
  };
  const cancel = () => {
    if (dragX !== null) {
      springBack(lightbox);
    }
    forget();
  };
  const isTracked = (e) => start && e.pointerId === start.pointerId;

  stage.addEventListener('pointerdown', (e) => {
    moved = false;
    // Let a running slide finish before taking another drag.
    if (!e.isPrimary || e.button !== 0 || isSliding(lightbox)) {
      return;
    }
    start = e;
  });
  // Cancel on multitouch.
  lightbox.addEventListener('pointerdown', (e) => {
    if (!e.isPrimary) {
      cancel();
    }
  });
  stage.addEventListener('pointermove', (e) => {
    if (!isTracked(e)) {
      return;
    }
    const dx = e.clientX - start.clientX;
    const dy = e.clientY - start.clientY;
    if (dragX === null) {
      if (Math.max(Math.abs(dx), Math.abs(dy)) < DRAG_SLOP_PX) {
        return;
      }
      moved = true;
      if (Math.abs(dx) < Math.abs(dy) * 1.5) {
        // Mostly vertical; not a swipe.
        start = null;
        return;
      }
      // Keeps the release on the stage even if the pointer wanders off it.
      stage.setPointerCapture(e.pointerId);
    }
    dragX = dx;
    Object.assign(image.style, slidePose(dx, slideTravel(lightbox)));
  });
  stage.addEventListener('pointerup', (e) => {
    if (!isTracked(e)) {
      return;
    }
    const dx = dragX;
    forget();
    if (dx === null || !lightbox.open) {
      return;
    }
    if (Math.abs(dx) < MIN_SWIPE_DISTANCE_PX) {
      springBack(lightbox);
    } else {
      stepPiece(dx < 0 ? 1 : -1);
    }
  });
  stage.addEventListener('pointercancel', (e) => {
    if (isTracked(e)) {
      cancel();
    }
  });
  stage.addEventListener('click', (e) => {
    if (moved) {
      e.stopPropagation();
    }
  }, {capture: true});
  // A mouse drag would otherwise pick up the image for drag-and-drop.
  stage.addEventListener('dragstart', (e) => e.preventDefault());
  lightbox.addEventListener('close', forget);
}

// Explicit dismissal.
function onCancel(e) {
  e.preventDefault();
  dismiss(e.currentTarget);
}

// Cleanup, should be called on every dismissal path.
async function onClose(e) {
  const lightbox = e.currentTarget;
  unlockScroll();
  clearSlide(lightbox);
  // Clear the selected image once faded out, so it doesn't vanish mid-fade.
  await Promise.allSettled(lightbox.getAnimations().map((a) => a.finished));
  if (!lightbox.open) {
    lightbox.querySelector('.art-full').removeAttribute('src');
  }
}

// Initializes the art lightbox. Must be called on load and after every
// smoothState navigation.
export function maybeInitArtLightbox() {
  const lightbox = getLightbox();
  if (!lightbox) {
    return;
  }
  // No need to de-register these since smoothState will clear the container
  // after navigation.
  document.querySelector('.art-grid').addEventListener('click', onThumbClick);
  lightbox.addEventListener('click', onLightboxClick);
  lightbox.addEventListener('keydown', onKeydown);
  lightbox.addEventListener('cancel', onCancel);
  lightbox.addEventListener('close', onClose);
  initSwipeNavigation(lightbox);

  // Deep link support.
  const slug = window.location.hash.slice(1);
  if (slug) {
    open(slug, false);
  }
}
