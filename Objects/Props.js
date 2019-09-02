obj1 = { a: 1, b: 2 }

class User {
  constructor(a) {
    this.a = a
  }

  get b () {
    return this.a
  }
}

obj1 = new User('aaa')
console.log(obj1.a)
