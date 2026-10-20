// Project page grid.

import {fadeInOnLoad} from './fade.js';

const GRID_SELECTOR = '.project-grid';
// How long to scroll along after a click; must be longer than the slowest
// animation.
const FOLLOW_MS = 700;
// Space kept between a followed panel and the viewport edges.
const VIEW_MARGIN_PX = 24;

// Aborts the previous grid's window/document listeners, so they don't pile up
// when the page is initialized again.
let windowEventListeners = null;

// Resolves once `el` has no running transitions.
async function transitionsDone(el) {
  let animations;
  while ((animations = el.getAnimations()).length) {
    await Promise.allSettled(animations.map((a) => a.finished));
  }
}

const tileOf = (project) => project.querySelector('.project-tile');

// Returns the last project sharing a row with `project`.
function rowEnd(project) {
  const top = project.offsetTop;
  let end = project;
  let next = project.nextElementSibling;
  while (next && next.offsetTop === top) {
    if (next.classList.contains('project')) {
      end = next;
    }
    next = next.nextElementSibling;
  }
  return end;
}

// Mapping of panel DOM elements to their DetailPanel objects.
const panels = new WeakMap();

// A full-width panel after a grid row, showing one project's detail.
class DetailPanel {
  constructor() {
    this.el = document.createElement('section');
    this.el.className = 'project-panel';
    this.el.innerHTML = `
      <div class="project-panel-inner">
        <button class="project-panel-close" type="button" aria-label="Close">
          <i class="fa-solid fa-xmark" aria-hidden="true"></i>
        </button>
        <div class="project-detail"></div>
      </div>`;
    this.inner = this.el.querySelector('.project-panel-inner');
    this.content = this.el.querySelector('.project-detail');
    // The project shown, or the project being switched to for a same-row
    // switch.
    this.project = null;
    this.isSwitching = false;
    panels.set(this.el, this);
  }

  // The panel directly below `project`'s row, if any.
  static belowRow(project) {
    return panels.get(rowEnd(project).nextElementSibling) ?? null;
  }

  get isOpen() {
    return this.el.classList.contains('is-open');
  }

  get isContentHidden() {
    return this.el.classList.contains('is-content-hidden');
  }

  placeBelow(project) {
    this.el.remove();
    rowEnd(project).after(this.el);
  }

  pointCaretAt(project) {
    const tile = tileOf(project);
    const x = tile.offsetLeft + tile.offsetWidth / 2 - this.el.offsetLeft;
    this.el.style.setProperty('--caret-x', `${x}px`);
  }

  // Opens on `project`, below its row.
  open(project) {
    if (DetailPanel.belowRow(project) !== this) {
      this.placeBelow(project);
    }
    this.project = project;
    this.render();
    this.pointCaretAt(project);
    this.el.classList.remove('is-leaving');
    // Without a reflow, a newly placed panel would appear already open instead
    // of animating.
    void this.el.offsetHeight;
    this.el.classList.add('is-open');
  }

  // Collapses, then detaches unless reopened meanwhile. With `isHandoff`, the
  // collapse mirrors the timing of another panel opening.
  async collapse(isHandoff) {
    this.el.classList.remove('is-open', 'is-content-hidden');
    this.el.classList.toggle('is-leaving', isHandoff);
    this.inner.style.height = '';
    await transitionsDone(this.el);
    if (!this.isOpen) {
      this.el.remove();
    }
  }

  // Cross-fades to `project`, animating the height change. A switch already
  // running picks up the latest `project` instead.
  async switchTo(project) {
    this.project = project;
    this.pointCaretAt(project);
    if (this.isSwitching) {
      return;
    }
    this.isSwitching = true;
    let height;
    try {
      this.el.classList.add('is-content-hidden');
      await transitionsDone(this.content);
      // A collapse cancels the switch.
      if (!this.isContentHidden) {
        return;
      }

      // Pin the old height so the panel doesn't jump while the new content
      // loads unseen.
      this.inner.style.height = `${this.inner.offsetHeight}px`;
      let shown;
      do {
        shown = this.project;
        await this.render();
      } while (shown !== this.project && this.isContentHidden);
      if (!this.isContentHidden) {
        return;
      }

      height = `${this.content.offsetHeight}px`;
      this.inner.style.height = height;
      this.el.classList.remove('is-content-hidden');
    } finally {
      this.isSwitching = false;
    }

    // Unpin the height once settled so the panel follows its content's size
    // again (e.g. on resize), unless a newer switch has pinned its own height.
    await transitionsDone(this.inner);
    if (!this.isSwitching && this.inner.style.height === height) {
      this.inner.style.height = '';
    }
  }

  // Renders `this.project`'s detail. Resolves once its images are decoded, so
  // that the content's final height can be measured.
  render() {
    const template = this.project.querySelector('.project-detail-template');
    const detail = template.content.cloneNode(true);
    const images = [...detail.querySelectorAll('img')];
    this.content.replaceChildren(detail);
    return Promise.allSettled(images.map((img) => img.decode()));
  }
}

function initGrid(grid) {
  let active = null;
  // The panel showing `active`. Panels it replaces collapse and detach.
  let panel = null;
  let followFrame = 0;

  fadeInOnLoad(grid.querySelectorAll('.project-thumb img'));

  function markActive(project) {
    if (active) {
      active.classList.remove('is-active');
      tileOf(active).setAttribute('aria-expanded', 'false');
    }
    active = project;
    if (active) {
      active.classList.add('is-active');
      tileOf(active).setAttribute('aria-expanded', 'true');
    }
  }

  // Shows `project` in a panel below its row, or closes the panel if `null`.
  function select(project) {
    markActive(project);
    if (!project) {
      panel?.collapse(false);
      return;
    }

    const rowPanel = DetailPanel.belowRow(project);
    if (rowPanel?.isOpen) {
      rowPanel.switchTo(project);
      follow(tileOf(project), null);
      return;
    }

    // Hand off to a panel below this row. Check if one already exists and is
    // collapsing, and reuse if so.
    const leaving = panel !== rowPanel && panel?.el.isConnected ? panel : null;
    leaving?.collapse(true);
    follow(tileOf(project), leaving);
    panel = rowPanel ?? new DetailPanel();
    panel.open(project);
  }

  // Scrolls the page during panel animations, so that `tile` stays put while
  // `leaving` collapses above it, and the opening panel stays on screen without
  // pushing `tile` off the top.
  function follow(tile, leaving) {
    cancelAnimationFrame(followFrame);
    const startTop = tile.getBoundingClientRect().top;
    const minTop = Math.min(VIEW_MARGIN_PX, startTop);
    const end = performance.now() + FOLLOW_MS;
    const step = () => {
      const tileTop = tile.getBoundingClientRect().top;
      const panelBelow = panel.el.getBoundingClientRect().bottom - tileTop;
      const fitTop = window.innerHeight - VIEW_MARGIN_PX - panelBelow;
      const delta = tileTop - Math.max(minTop, Math.min(startTop, fitTop));
      if (Math.abs(delta) >= 1) {
        window.scrollBy(0, delta);
      }
      if (performance.now() < end || leaving?.el.isConnected) {
        followFrame = requestAnimationFrame(step);
      }
    };
    followFrame = requestAnimationFrame(step);
  }

  // Event handling.
  grid.addEventListener('click', (e) => {
    const tile = e.target.closest('.project-tile');
    if (tile) {
      const project = tile.closest('.project');
      select(project === active ? null : project);
    } else if (e.target.closest('.project-panel-close')) {
      select(null);
    }
  });

  windowEventListeners?.abort();
  windowEventListeners = new AbortController();
  const {signal} = windowEventListeners;
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && active) {
      select(null);
    }
  }, {signal});
  // Stop following once the user scrolls, so we don't fight them.
  for (const type of ['wheel', 'touchstart']) {
    window.addEventListener(
        type, () => cancelAnimationFrame(followFrame), {signal, passive: true});
  }
  window.addEventListener('resize', () => {
    if (!active) {
      return;
    }
    panel.placeBelow(active);
    panel.pointCaretAt(active);
  }, {signal});
}

export function maybeInitProjectGrid() {
  const grid = document.querySelector(GRID_SELECTOR);
  if (grid) {
    initGrid(grid);
  }
}
