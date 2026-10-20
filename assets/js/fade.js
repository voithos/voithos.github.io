// Fades in `images` that are still loading, so they don't pop in. Loaded ones
// are left alone, since they may already be on screen.
export function fadeInOnLoad(images) {
  for (const img of images) {
    if (img.complete) {
      continue;
    }
    const loaded = () => img.classList.remove('is-loading');
    img.classList.add('fade-in', 'is-loading');
    img.addEventListener('load', loaded, {once: true});
    img.addEventListener('error', loaded, {once: true});
  }
}
