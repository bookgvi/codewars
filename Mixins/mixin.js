function f(a = '2a' , b ='2b') {
  aa: 'WTF',
  this.a = a
  this.b = b
}
f.prototype = {
  aa: 'aa',
  getF: function() { console.log(this.a) }
}

get = {
  get() {
    console.log('a = ' + this.a, 'b = ' + this.b)
  }
}

set = {
  set(a,b) {
    this.a = a
    this.b = b
  }
}

sum = {
  sum() {
    return this.a + this.b;
  }
}

function mixin(...mixins) {
  let classFn = function() {};
  Object.assign(classFn.prototype, ...mixins)
  return classFn
}

class class1 extends f {
  constructor(a,b){
    super(a,b)
  }
}

obj2 = new class1
obj1 = new class class2 extends mixin(sum, f.prototype) {}
obj1.getF()
console.log(obj1.sum())