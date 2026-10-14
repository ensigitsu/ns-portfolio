export function initContentGuard() {
  const editable = (target) =>
    target instanceof Element &&
    !!target.closest('input, textarea, select, [contenteditable]:not([contenteditable="false"])');
  const block = (event) => {
    if (!editable(event.target)) event.preventDefault();
  };
  for (const type of ['copy', 'cut', 'paste', 'contextmenu', 'selectstart', 'dragstart']) {
    document.addEventListener(type, block, { capture: true });
  }
  document.addEventListener(
    'keydown',
    (event) => {
      if (editable(event.target) || !(event.ctrlKey || event.metaKey) || event.altKey) return;
      if (['a', 'c', 'x', 'v'].includes(event.key.toLowerCase())) event.preventDefault();
    },
    { capture: true },
  );
  document.querySelectorAll('img').forEach((image) => {
    image.draggable = false;
  });
}
