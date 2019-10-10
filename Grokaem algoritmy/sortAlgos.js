function sortAlgos (arr) {
  if(arr.length < 2) {
    return arr
  }
  const pivot = arr[Math.floor(Math.random() * (arr.length - 1))]
  const less = arr.filter(item => item < pivot)
  const greater = arr.filter(item => item > pivot)
  return sortAlgos(less) + ',' + [pivot] + ',' + sortAlgos(greater)
}

function bubleSort (arr) {
  let i = arr.length - 1
  while(i >= 0) {
    let j = 0
    while (j < i) {
      if (arr[j] > arr[j + 1]) {
        arr[j] = arr[j] + arr[j + 1]
        arr[j + 1] = arr[j] - arr[j + 1]
        arr[j] = arr[j] - arr[j + 1]
      }
      j++
    }
    i--
  }
  return arr
}

function insertionSort (arr) {
  let key = undefined
  for (let j = 1; j < arr.length; j++) {
    key = arr[j]
    i = j - 1
    while (i >= 0 && arr[i] > key) {
      arr[i + 1] = arr[i]
      i--
    }
    arr[i + 1] = key
  }
  return arr
}

function selectionSort (arr) {
  let j = 0
  while(j <= arr.length - 1) {
    for (let i = arr.length - 1; i > j; i--) {
      if (arr[i] <= arr[i - 1]) {
        arr[i] = arr[i] + arr[i - 1]
        arr[i - 1] = arr[i] - arr[i - 1]
        arr[i] = arr[i] - arr[i - 1]
      }
    }
    j++
  }
  return arr
}

const length = 100
function execTime(sortAlgo, label) {
  let arr = []
  for (let i = 1; i < length; i++) {
    arr.push(Math.floor(Math.random() * 1000))
  }
  console.time(label)
  arr = sortAlgo(arr)
  console.timeEnd(label)
  return arr
}

console.log('Array length = ', length)
execTime(sortAlgos,'Quick sort')
execTime(insertionSort, 'Insertion sort')
execTime(selectionSort, 'Selection sort')
execTime(bubleSort, 'Bubble sort')
