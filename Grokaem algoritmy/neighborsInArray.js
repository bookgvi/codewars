const arr = []

function create2dArray(arr, rowSize, colSize) {
  let row = 0
  let col = 0
  while (row <= rowSize - 1) {
    arr[row] = []
    while(col <= colSize - 1) {
      arr[row][col] = 0
      col++
    }
    row++
    col = 0
  }
  return arr
}

function neighborsIn2dArray(arr) {
  let neighborsCount = 0
  let neighbors = []
  let row = 0
  let col = 0
  while (row < arr.length) {
    neighbors[row] = []
    while (col < arr[row].length) {
      neighborsCount = 0
      if (arr[row][col - 1] === 0 || arr[row][col - 1] ) { neighborsCount++ }
      if (arr[row][col + 1] === 0 || arr[row][col + 1] ) { neighborsCount++ }
      let item = row - 1
      if (arr[item]) {
        if (arr[item][col - 1] === 0 || arr[item][col - 1]) { neighborsCount++ }
        if (arr[item][col] === 0 || arr[item][col]) { neighborsCount++ }
        if (arr[item][col + 1] === 0 || arr[item][col + 1]) { neighborsCount++ }
      }
      item = row + 1
      if (arr[item]) {
        if (arr[item][col - 1] === 0 || arr[item][col - 1]) { neighborsCount++ }
        if (arr[item][col] === 0 || arr[item][col]) { neighborsCount++ }
        if (arr[item][col + 1] === 0 || arr[item][col + 1]) { neighborsCount++ }
      }
      neighbors[row][col] = neighborsCount
      col++
    }
    row++
    col = 0
  }
  return neighbors
}

function arrDimmension(arr, i = 0) {
  if (Array.isArray(arr)) {
    return arrDimmension(arr.pop(), i + 1)
  }
  return i
}

console.log('\n Create empty array: \n', create2dArray(arr, 10, 10))
console.log('\n Number of neighbors: \n', neighborsIn2dArray(arr))

console.log(arrDimmension(arr))
