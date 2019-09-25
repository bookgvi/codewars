function summ(arr, i, sum) {
  if (i >= arr.length) {
    return sum
  }
  sum += arr[i]
  return summ(arr, i + 1, sum)
}

arr = [1, 2, 3]
let sum = summ(arr, 0, 0)
console.log(summ(arr, 0, 0))