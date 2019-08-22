obj1 = {
  a: 1,
  setA: function(a) {
    this.a = a
  }
}
obj2 = { b: 2 }
obj3 = { c: 3 }
obj4 = {}

mixin = (...args) => {
  let reciever = {}
  let suppliers = args.map((i) => i)
  return (() => {
    suppliers.forEach(obj => {
      Object.keys(obj).forEach(key => {
        Object.defineProperty(reciever, key, {
          value: obj[key],
          enumerable: true,
          writeable: true
        })
      })
    })
    return reciever
  })()
}
obj1.setA('a')
obj4 = mixin(obj1, obj2)
console.log('obj4 = obj1 + obj2 = ', obj4)

obj4 = mixin(obj1, obj2, obj3)
console.log('obj4 = obj1 + obj2 + obj3 = ', obj4)
