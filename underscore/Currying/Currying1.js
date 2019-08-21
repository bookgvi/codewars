/* f(x,y) => y(x) */

function runn(...arr) {
 // arr = [...arguments]

  fun = arr.shift()
  target = arr.shift()
  console.log(fun)
  return fun.apply(target, arr)
}

console.log(runn(Array.prototype.reverse, [1,2,3,4,5]))
