class MyClass {
  constructor(clas) {
    this.obj1 = clas;
  }
  getClass() {
    return this.obj1();
  }
}
const obj1 = new MyClass(() => MyClass2); // Здесь MyClass2 еще не определен, но исключения не будет!!!

class MyClass2 {
  getName() {
    return 'QQQ';
  }
}

const obj2 = new (obj1.getClass());
console.log(obj2.getName());
