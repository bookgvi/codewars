templateArr = [
  [3,4,5],
  [0,1,2],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]

tester = [6,4,1,1,4,7,5,7,8]
xo = [' ','x','o','x','o','o','x',' ','o']

function modifyArr(arr) {
  return function() {
    let tmpArr = []
    for(let i=0; i<9; i+=3) {
      tmpArr.push(arr.slice(i, i + 3))
    }
    return tmpArr
  }
}
function group(arr){
  return function(template){
    arr = modifyArr(arr)()
    for(let i=0; i<template.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if(template[i].toString() === arr[j].toString()) {
          return template[i];
        }
      }
    }
    return false;
  }
}

res = group(tester)
console.log(res(templateArr))


for (let i=0; i<templateArr.length; i++){
  [a,b,c] = templateArr[i]
  if(xo[a] && xo[a]===xo[b] && xo[a]===xo[c]) {
    console.log(xo[a])
  }
}

for(let i=0; i<tester.length; i+=3){
  [a,b,c] = xo.slice(i,i+3)
  console.log([a,b,c])
}