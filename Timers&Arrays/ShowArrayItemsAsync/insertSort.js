import { reactiveObjProxy } from './reactive.js';

export function inserrtSort (arr) {
  const tmpArr = arr.concat();
  let j = 0, saveI, temp;
  for (let i = 1, len = tmpArr.length; i < len; i++) {
    j = i;
    saveI = i;
    while (j >= 0 && tmpArr[j - 1] > tmpArr[i]) {
      temp = tmpArr[i];
      tmpArr[i] = tmpArr[j - 1];
      tmpArr[j - 1] = temp;
      j = --i;
    }
    i = saveI;
  }
  return tmpArr;
}

export function insertSortAsync (arr, cb) {
  const timeOutDelay = 5;
  const start = +new Date();
  const tmpArr = arr.concat();
  const resArr = [];
  resArr.push(tmpArr.pop()); // Начинаем с предпоследнего элемента массива
  reactiveObjProxy.decorator.style.display = 'block';
  setTimeout(function item () {
    if (tmpArr.length > 0) {
      insertItem(tmpArr.pop(), resArr);
      reactiveObjProxy.progress = resArr.length / arr.length;
      setTimeout(item, timeOutDelay);
    } else {
      cb(resArr);
      console.log(`Сортировка завершена... ETA = ${((new Date() - start) / 1000).toFixed(2)}сек`);
    }
  }, timeOutDelay);
}

function insertItem (item, resArr) {
  let i = resArr.length;
  while (i >= 0 && resArr[--i] > item);
  return resArr.splice(++i, 0, item);
}
