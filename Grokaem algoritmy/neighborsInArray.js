const arr = []

function create2dArray(arr, size) {
  let row = 0
  let col = 0
  const length = size
  while (row <= length) {
    arr[row] = []
    while(col <= length) {
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

console.log('\n Create empty array: \n', create2dArray(arr, 5))
console.log('\n Number of neighbors: \n', neighborsIn2dArray(arr))