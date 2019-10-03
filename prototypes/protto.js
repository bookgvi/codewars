function Person(name) {
  if (name) {
    this.options.name = name;
  }
};

Person.prototype.options = {
  name: 'Default name'
};

var foo = new Person('foo');
var bar = new Person('bar');

console.log(foo.options.name);
console.log(bar.options.name);