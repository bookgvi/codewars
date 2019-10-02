function quickSort(arr) {
  if(arr.length < 2) {
    return arr
  }
  const pivot = arr[Math.floor(Math.random() * (arr.length - 1))]
  const less = arr.filter(item => item < pivot)
  const greater = arr.filter(item => item > pivot)
  return quickSort(less) + ',' + [pivot] + ',' + quickSort(greater)
}

function bubleSort(arr) {
  let sortArr
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] <= arr[j]) {
        sortArr  = arr[i]
        arr[i] = arr[j]
        arr[j] = sortArr
      }
    }
  }
  return arr
}


function execTime(sortAlgo) {
  let arr = []
  for (let i = 1; i < 10000; i++) {
    arr.push(Math.floor(Math.random() * 1000))
  }
  console.time('start')
  arr = sortAlgo(arr)
  console.timeEnd('start')
}

execTime(quickSort)
execTime(bubleSort)

let arr = []
for (let i = 1; i < 100; i++) {
  arr.push(Math.floor(Math.random() * 1000))
}
console.log(quickSort(arr).split(',').filter(item => item > 0))