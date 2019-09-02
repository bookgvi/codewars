obj1 = { a: 1, b: 2 }

User = (function() {
  function user2 (a) {
      this.a = a
  }
  Object.defineProperty(user2.prototype, 'a', {
    get: function () {
      return 'aaaaaaaa'
    }
  })
return user2;
})()

obj1 = new User('aaa')
console.log(obj1.a)
