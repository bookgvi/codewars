User = (function () {
  function userIn (a) {
    this.a = a
  }
  Object.defineProperty(userIn.prototype, 'aa', {
    get: function () { return this.a + 1 },
  })
  return userIn
})()

obj1 = new User('qq')
console.log(obj1.a)
console.log(obj1.aa)
