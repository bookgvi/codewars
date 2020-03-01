import { iterate } from './iterate.js';

const fragment = document.createDocumentFragment();

function handler (item) {
  const span = document.createElement('span');
  span.textContent = `${item} `;
  fragment.appendChild(span);
}

function cb () {
  document.body.appendChild(fragment);
}

const SIZE = 1000;
const arr = Array.apply(null, { length: SIZE }).map(() => (Math.random() * SIZE + 1).toFixed(0));

iterate(arr, handler, cb);
