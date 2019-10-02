let a = 1, b = 2
//
// // 1)
let c = a
a = b
b = c
console.log(a, b)
//
// // 2)
a = a + b
b = a - b
a = a - b
console.log(a, b)
//
// // 3) в node.js работать не будет!!!!!
// // [b, a] = [a, b]
// // console.log(a, b)
//
// // 4)
arr = [a, b].reverse()
b = arr.pop()
a = arr.pop()
console.log(a, b)
//

// 5)
a = a ^ b
b = b ^ a
a = a ^ b
console.log(a, b)
