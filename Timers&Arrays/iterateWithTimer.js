function iterate (arr, handler, cb) {
  const arrTmp = arr.concat();

  setTimeout(function () {
    const item = arrTmp.shift();
    handler(item);
    if (arrTmp.length > 0) {
      setTimeout(arguments.callee, 25);
    } else {
      cb();
    }
  }, 25);
}

function showArrItem (item) {
  console.log(item);
}

function finish () {
  console.log('Finita....');
}

const arr = [1, 2, 3, 4, 5, 6];

iterate(arr, showArrItem, finish);
