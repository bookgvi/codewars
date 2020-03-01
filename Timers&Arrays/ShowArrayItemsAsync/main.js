import { iterate } from './iterate.js';
import { utils, UtilsLiteral as UL } from './utils.js';
import { inserrtSort, insertSortAsync } from './insertSort.js';

UL.SIZE = 500

insertSortAsync(
  UL.arr,
  function (arr) {
    const start = +new Date();
    iterate(arr, UL.createDomEl.bind(UL), UL.appendDomElToBody.bind(UL, start));
  }
)
