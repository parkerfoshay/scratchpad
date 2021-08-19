import { Workbox } from 'workbox-window';

const main = document.querySelector('#main');

main.innerHTML = '';

try {
  CodeMirror(main, {
    lineNumbers: true,
    tabSize: 2,
    value: 'console.log("Hello, World");',
  });
} catch (err) {
  console.error(err);
  main.innerHTML = `<div class="loading-container">
                      <div class="loading-spinner"></div>
                    </div>`;
}

if ('serviceWorker' in navigator) {
  const wb = new Workbox('/src-sw.js');

  wb.register();
}
