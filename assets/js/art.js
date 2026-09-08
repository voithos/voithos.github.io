// Art page lightbox.

const SCROLL_LOCK_CLASS = 'art-lightbox-open';
const MIN_SWIPE_DISTANCE_PX = 50;

// Index of the piece currently shown.
let current = 0;

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
    lightbox.showModal();
    document.documentElement.classList.add(SCROLL_LOCK_CLASS);
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

// Render the next/previous piece. Wraps around.
function stepPiece(offset) {
  const piece = pieceAt(offset);
  render(getLightbox(), piece);
  setHash(piece.dataset.artSlug);
}

// Closes the art lightbox if it's open.
export function maybeCloseArtLightbox() {
  const lightbox = getLightbox();
  if (lightbox && lightbox.open) {
    dismiss(lightbox, false);
  }
  // The container may already be gone; make sure the page can scroll.
  document.documentElement.classList.remove(SCROLL_LOCK_CLASS);
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
  } else if (e.target.closest('.art-close') || e.target === e.currentTarget) {
    // A click on the dialog itself rather than its contents is the backdrop.
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
  let start = null;

  const reset = () => {
    start = null;
  };
  stage.addEventListener('touchstart', (e) => {
    start = e.touches.length === 1 ? e.touches[0] : null;
  }, {passive: true});
  // Cancel on multitouch.
  lightbox.addEventListener('touchstart', (e) => {
    if (e.touches.length !== 1) {
      reset();
    }
  }, {passive: true});
  stage.addEventListener('touchend', (e) => {
    const origin = start;
    reset();
    if (!origin || e.touches.length || !lightbox.open) {
      return;
    }
    const end = Array.from(e.changedTouches)
                    .find((touch) => touch.identifier === origin.identifier);
    if (!end) {
      return;
    }
    const dx = end.clientX - origin.clientX;
    const dy = end.clientY - origin.clientY;
    if (Math.abs(dx) < MIN_SWIPE_DISTANCE_PX ||
        Math.abs(dx) < Math.abs(dy) * 1.5) {
      return;
    }
    if (e.cancelable) {
      e.preventDefault();
    }
    stepPiece(dx < 0 ? 1 : -1);
  }, {passive: false});
  stage.addEventListener('touchcancel', reset, {passive: true});
  lightbox.addEventListener('close', reset);
}

// Explicit dismissal.
function onCancel(e) {
  e.preventDefault();
  dismiss(e.currentTarget);
}

// Cleanup, should be called on every dismissal path.
function onClose(e) {
  document.documentElement.classList.remove(SCROLL_LOCK_CLASS);
  // Clear the selected image if any.
  e.currentTarget.querySelector('.art-full').removeAttribute('src');
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
