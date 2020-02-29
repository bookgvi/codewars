import { iterate } from './iterateWithTimer.js';

function showArrItem (item) {
  console.log(item);
}

function finish () {
  console.log('Finita....');
}

const SIZE = 1000;
const arr = Array.apply(null, { length: SIZE }).map(() => (Math.random() * SIZE + 1).toFixed(0));
const withTimerDIV = document.querySelector('.withTimer');
const withoutTimerDIV = document.querySelector('.withoutTimer');

let start = +new Date().getMilliseconds();
iterate(arr, showArrItem, finish);
let end = new Date().getMilliseconds() - start;
withTimerDIV.textContent = end;


start = +new Date();
arr.forEach(item => console.log(item));
end = new Date() - start;
withoutTimerDIV.textContent = end;
