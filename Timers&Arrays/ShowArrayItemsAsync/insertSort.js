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
  const tmpArr = arr.concat();
  const resArr = [];
  resArr.push(tmpArr.shift()); // Начинаем со второго элемента массива
  setTimeout(function item () {
    if (tmpArr.length > 0) {
      insertItem(tmpArr.shift(), resArr);
      setTimeout(item, 25);
    } else {
      // resArr.forEach(item => { console.log(item + ' ')});
      cb(resArr);
    }
  }, 25);
}

function insertItem (item, resArr) {
  let i = resArr.length;
  while (i >= 0) {
    if (resArr[--i] < item) break;
  }
  return resArr.splice(++i, 0, item);
}
