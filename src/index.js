import { Workbox } from 'workbox-window';
import { openDB } from 'idb';
import { Editor } from './editor';
import './css/styles.css';

const main = document.querySelector('#main');

main.innerHTML = '';

try {
  openDB('settings-store', 1, {
    upgrade(db) {
      db.createObjectStore('settings');
    },
  })
  const editor = new Editor(main);

  console.log(editor);

  editor.setText('console.log("Hello, World");');
  editor.editor.on('change', async (editor) => {
   // Add the DB logic
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
