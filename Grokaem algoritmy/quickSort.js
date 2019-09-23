function quickSort (i) {
  if (arr.length < 2) {
    return
  }
  if (arr[0] <= arr[i]) {
    arr1.push(arr.splice(i, 1).pop())
  } else {
    arr2.push(arr.splice(i, 1).pop())
  }
  quickSort(i)
}
const arr = [2, 1, 3, 2, 4, 5]
let arr1 = arr2 = []
quickSort(1)
console.log(arr1, arr, arr2)
