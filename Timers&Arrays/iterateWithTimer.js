export function iterate (arr, handler, cb) {
  const arrTmp = arr.concat();

  setTimeout(function tm() {
    const start = + new Date();

    do {
      const item = arrTmp.shift();
      handler(item);
    } while (arrTmp.length > 0 && new Date() - start < 50);
    if (arrTmp.length > 0) {
      setTimeout(tm, 25);
    } else {
      cb();
    }
  }, 25);
}
