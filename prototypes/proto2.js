class Person {
  constructor(name) {
    this.options = {
      name
    }
    this.options.name = name
  }
}

const a = new Person('qwe')

console.log(a)