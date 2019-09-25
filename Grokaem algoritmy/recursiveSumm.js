function sum(arr) {
  if(arr.length < 2) {
    return arr[0]
  }
  k = arr.pop()
  return k + sum(arr)
}

arr = [1, 2, 3, 4]
k = 0

console.log(sum(arr))
