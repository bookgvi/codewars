User = (() => {
  function userIn (a) {
    this.a = a
  }
  Object.defineProperty(userIn.prototype, 'name', {
    get: function () { this.a }
  })
  return userIn
})()

obj1 = new User('qq')
console.log(obj1.name)
