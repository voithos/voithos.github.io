// Copy-to-clipboard buttons for code blocks.

const BUTTON_REVERT_DELAY_MS = 1500;
const WRAPPER_CLASS = 'code-copy';

// The outermost element of a code block, which the button is positioned
// against.
function blockRoot(code) {
  return code.closest('.highlight') || code.parentElement;
}

// The code element to copy.
function copyableCode(root) {
  const codes = root.querySelectorAll('pre > code');
  // With line numbers enabled, Hugo splits the block into a cell of numbers
  // followed by a cell of code, so we only want the last one.
  return codes[codes.length - 1];
}

function createCopyButton() {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'copy-button';
  button.setAttribute('aria-label', 'Copy code');
  const icon = document.createElement('i');
  icon.className = 'fa-solid fa-copy';
  icon.setAttribute('aria-hidden', 'true');
  button.appendChild(icon);
  return button;
}

function showCopied(button) {
  const icon = button.querySelector('i');
  icon.classList.replace('fa-copy', 'fa-check');
  button.classList.add('copied');
  setTimeout(() => {
    icon.classList.replace('fa-check', 'fa-copy');
    button.classList.remove('copied');
  }, BUTTON_REVERT_DELAY_MS);
}

// Wraps a code block so the button has a non-scrolling element to anchor to,
// since pre itself always scrolls its overflow.
function addCopyButton(root) {
  const code = copyableCode(root);
  const wrapper = document.createElement('div');
  wrapper.className = WRAPPER_CLASS;
  root.replaceWith(wrapper);
  wrapper.appendChild(root);

  const button = createCopyButton();
  button.addEventListener('click', () => {
    // Code blocks end in a newline that nobody wants pasted.
    navigator.clipboard.writeText(code.textContent.replace(/\n$/, ''))
        .then(() => showCopied(button))
        .catch((ex) => console.warn('Failed to copy code', ex));
  });
  wrapper.appendChild(button);
}

// Adds a copy button to every code block. Must be called on load and after
// every smoothState navigation.
export function maybeInitCodeCopy() {
  if (!navigator.clipboard) {
    return;
  }
  for (const code of document.querySelectorAll('pre > code')) {
    // Skip any root that we've already processed. We check the root instead of
    // the code block itself because code blocks with line numbers have two
    // separate code elements (one cell for the line nums) and we only need to
    // handle one of them.
    const root = blockRoot(code);
    if (root.closest(`.${WRAPPER_CLASS}`)) {
      continue;
    }
    addCopyButton(root);
  }
}
