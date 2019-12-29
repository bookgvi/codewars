/*
* Last name PROTOTYPE
* */
const LastName = function (lastName) {
  this.lastName = lastName
}

LastName.prototype.getLastName = function () {
  return this.lastName
}

/*
* First name PROTOTYPE
* */
const FirstName = function (firstName) {
  this.firstName = firstName
}

FirstName.prototype = Object.create(LastName.prototype)

FirstName.prototype.getFirstName = function () {
  return this.firstName
}
Object.defineProperty(FirstName, 'constructor', {
  value: LastName,
  enumerable: false
})

/*
* Full name PROTOTYPE
* */
function FullName (firstName, lastName) {
  LastName.call(this, lastName)
  FirstName.call(this, firstName)
}
FullName.prototype = Object.create(FirstName.prototype)

FullName.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`
}

Object.defineProperty(FullName.prototype, 'constructor', {
  value: FullName,
  enumerable: false
})

/*
* Inheritance
* */
const vasya = new FullName('Вася', 'Васильев')
console.dir(vasya.getFirstName)
console.dir(vasya.getLastName)
console.dir(vasya.getFullName)
