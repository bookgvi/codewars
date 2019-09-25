function quickSort(arr) {
  if(arr.length < 2) {
    return arr
  }
  const pivot = arr[0]
  const less = arr.filter(item => item < pivot)
  const greater = arr.filter(item => item > pivot)
  const pivotArr = []
  return quickSort(less) + ',' + pivot + ',' + quickSort(greater)
}

const arr = [16, 25, 3, 4, 5, 6, 16]
const arr1 = [2, 4, 6, 8]
console.log(arr + ',' + arr1)
console.log(quickSort(arr1))
