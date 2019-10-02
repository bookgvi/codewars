let a = 500, b = 20
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

// 3)
fn = _ => { [b, a] = [a, b] }
fn()
console.log(a, b)

// 4)
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

// 6)
fn = _ => { [a, b] = [a, b].reduce((curr, next) => { return [next, curr] }) }
fn()
console.log(a, b)