import { reactiveObjProxy } from "./reactive.js";

export function iterate (arr, handler, cb) {
  const tmpArr = arr.concat();
  const timeOutDelay = 5;
  setTimeout(function item () {
    // const start = +new Date();
    // while (tmpArr.length > 0 && (new Date() - start) < 50) {
    handler(tmpArr.shift());
    // }
    if (tmpArr.length > 0) {
      reactiveObjProxy.progress = tmpArr.length / arr.length;
      setTimeout(item, timeOutDelay);
    } else {
      cb();
      reactiveObjProxy.decorator.style.display = 'none';
    }
  }, timeOutDelay);
}

