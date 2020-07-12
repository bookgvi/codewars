var MyClass = /** @class */ (function () {
    function MyClass() {
        this.somePublicKey = 'somePublicKey';
        this.somePublicKey2 = 'somePublicKey2';
        this.somePrivateKey = 'somePrivateKey';
    }
    return MyClass;
}());
var myClassProto = Object.getOwnPropertyDescriptor(MyClass, 'prototype');
var myClassConstructor = Object.getOwnPropertyDescriptor(MyClass.prototype, 'constructor');
var myObj = new MyClass();
var dummyClass = function () {
    MyClass.call(this);
};
dummyClass.prototype = Object.create(MyClass.prototype);
Object.defineProperty(dummyClass.prototype, 'constructor', {
    value: dummyClass,
    writable: true,
    enumerable: false,
    configurable: true
});
var dummyObj = new dummyClass();
console.log(dummyObj instanceof MyClass);
console.log(dummyObj['somePublicKey']);
console.log(dummyObj['somePrivateKey']);
console.log(Object.getOwnPropertyDescriptor(myObj, 'somePrivateKey'));
console.log(Object.keys(dummyObj));
//# sourceMappingURL=PrivateAttrExploration.js.map