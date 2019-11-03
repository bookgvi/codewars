const obj1 = {
  a: 1,
  name () {
    console.log(this)
    console.log(this.a)
  }
}
const obj2 = {
  a: 1,
  name () {
    this.a = 2
    console.log(this)
    console.log(this.a)
  }
}
obj1.name()
obj2.name()
