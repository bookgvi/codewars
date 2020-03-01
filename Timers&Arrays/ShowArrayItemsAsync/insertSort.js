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
