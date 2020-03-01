function iterate (arr, handler, cb) {
  const tmpArr = arr.concat();
  setTimeout(function item() {
    const start = +new Date();
    while (tmpArr.length > 0 && (new Date() - start) < 50) {
      handler(tmpArr.shift());
    }
    if (tmpArr.length > 0) {
      setTimeout(item, 25);
    } else {
      cb() || null;
    }
  }, 25);
}
