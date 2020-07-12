class MyClass {
    private somePrivateKey: string;
    public somePublicKey: string;
    public somePublicKey2: string;
    constructor () {
        this.somePublicKey = 'somePublicKey';
        this.somePublicKey2 = 'somePublicKey2';
        this.somePrivateKey = 'somePrivateKey';
    }
}

const myClassProto = Object.getOwnPropertyDescriptor(MyClass, 'prototype');
const myClassConstructor = Object.getOwnPropertyDescriptor(MyClass.prototype, 'constructor');

const myObj = new MyClass();

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
console.log(Object.getOwnPropertyDescriptor(myObj, 'somePrivateKey'));
console.log(Object.keys(dummyObj));
