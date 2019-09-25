function quickSort(arr) {
  if(arr.length < 2) {
    return arr
  }
  const pivot = arr[Math.floor(arr.length / 2)]
  const less = arr.filter(item => item < pivot)
  const greater = arr.filter(item => item > pivot)
  return quickSort(less) + ',' + [pivot] + ',' + quickSort(greater)
}

let arr = [16, 25, 3, 4, 5, 6, 16, 0, 100, 1]
arr = quickSort(arr)
console.log(arr.split(',').filter(item => item))
