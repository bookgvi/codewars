class MyClass {
    private somePrivateKey = 'QQQ';
    public somePublicKey: string;
    public somePublicKey2: string;
    constructor () {
        this.somePublicKey = 'somePublicKey';
        this.somePublicKey2 = 'somePublicKey2';
    }
}

class MyExtClass extends MyClass {
    constructor() {
        super();
    }
}
const myClassProto = Object.getOwnPropertyDescriptor(MyClass, 'prototype');
const myClassConstructor = Object.getOwnPropertyDescriptor(MyClass.prototype, 'constructor');

const myObj = new MyExtClass();

let dummyClass = function() {
    MyClass.call(this);
}

dummyClass.prototype = Object.create(MyClass.prototype);

Object.defineProperty(dummyClass.prototype, 'constructor', {
   value: dummyClass,
   writable: true,
   enumerable: false,
   configurable: true
});


const dummyObj = new dummyClass();

console.log(dummyObj instanceof MyClass);
console.log(dummyObj['somePublicKey']);
console.log(dummyObj['somePrivateKey']);
console.log(myObj['somePrivateKey']);
console.log(Object.keys(dummyObj));
