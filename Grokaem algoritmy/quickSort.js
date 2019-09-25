function summ(arr, i, sum) {
  if (i > arr.length) {
    return sum
  }
  console.log(sum)
  sum += arr[i]
  summ(arr, i + 1, sum)
}
const arr = [2, 1, 3, 2, 4, 5]
let arr1 = arr2 = []
quickSort(1)
console.log(arr1, arr, arr2)

arr = [1, 2, 3]
const sum = summ(arr, 0, 0)
console.log(sum)