function summ(arr, i, sum) {
  if (i > arr.length) {
    return sum
  }
  console.log(sum)
  sum += arr[i]
  summ(arr, i + 1, sum)
}

arr = [1, 2, 3]
const sum = summ(arr, 0, 0)
console.log(sum)