const _ = require('underscore')

console.log(_.each([1,2,3,4,5], i => i))

fun = function() { return this }
obj = {
  a: 'a',
  f: fun
}
console.log(obj.f());

obj1 = {
  a: 1,
  b: 2,
  *[Symbol.iterator]() {
    for (let key in this)
      yield key
  }
}
Object.defineProperty(obj1, 'c',{
  value: 3,
  enumerable: true,
  writable: true
})

for(let key of obj1) {
  console.log(key, obj1[key])
}

console.log(fun.call(obj1))

_.map(obj1,(key, value) => console.log(key, value))