function iterate (arr, handler, cb) {
  const tmpArr = arr.concat();
  setTimeout(function getItem () {
    const start = +new Date();
    do {
      handler(tmpArr.shift());
    } while (tmpArr.length > 0 && (new Date() - start < 50));
    if (tmpArr.length > 0) {
      setTimeout(getItem, 25);
    } else {
      cb();
    }
  }, 25);
}

function handler(item) {
  item++;
}

function cb() {
  console.log('...Finita');
  const ETA = ((new Date() - start) / 1000).toFixed(2);
  console.log(`Общее время выполнеие скрипта: ${ETA}сек`);
}

const SIZE = 100000;
const arr = Array.apply(null, { length: SIZE }).map(() => (Math.random() * SIZE + 1).toFixed(0));

// Check it
console.log(`\nРазмер массива = ${SIZE}. Время, затраченное на увеличение каждого элемента массива на 1: \n`);
const start = +new Date();
console.time('Iterate Array with timer');
iterate(arr, handler, cb);
console.timeEnd('Iterate Array with timer');

console.time('Iterate Array without timer');
arr.forEach(item => { item++ })
console.timeEnd('Iterate Array without timer');
