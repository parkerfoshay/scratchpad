import { Workbox } from 'workbox-window';
import {Editor} from './editor';

const main = document.querySelector('#main');

main.innerHTML = '';

try {
  const editor = new Editor(main)

  console.log(editor);

  editor.setText('console.log("Hello, World");')
  /* editor.on('change', (editor) => {
    editor.onUpdate()
  }); */
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
