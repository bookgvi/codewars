import { iterate } from './iterate.js';
import { utils, UtilsLiteral as UL } from './utils.js';
import { inserrtSort, insertSortAsync } from './insertSort.js';

UL.SIZE = 500
let arr = [];

const proxy = new Proxy(insertSortAsync, {
  apply (target, ...params) {
    return Reflect.apply(target, ...params);
  }
});

insertSortAsync(
  UL.arr,
  function (arr) {
    iterate(arr, UL.createDomEl.bind(UL), UL.appendDomElToBody.bind(UL));
  }
)
