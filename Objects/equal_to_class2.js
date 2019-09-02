User = (() => {
  function userIn (a) {
    this.a = a
  }
  Object.defineProperty(userIn.prototype, 'aa', {
    get: function () { return this.a }
  })
  return userIn
})()

obj1 = new User('qq')
console.log(obj1.a)
console.log(obj1.aa)
