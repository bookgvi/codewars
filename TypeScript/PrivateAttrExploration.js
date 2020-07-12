var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var MyClass = /** @class */ (function () {
    function MyClass() {
        this.somePrivateKey = 'QQQ';
        this.somePublicKey = 'somePublicKey';
        this.somePublicKey2 = 'somePublicKey2';
    }
    return MyClass;
}());
var MyExtClass = /** @class */ (function (_super) {
    __extends(MyExtClass, _super);
    function MyExtClass() {
        return _super.call(this) || this;
    }
    return MyExtClass;
}(MyClass));
var myClassProto = Object.getOwnPropertyDescriptor(MyClass, 'prototype');
var myClassConstructor = Object.getOwnPropertyDescriptor(MyClass.prototype, 'constructor');
var myObj = new MyExtClass();
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
console.log(myObj['somePrivateKey']);
console.log(Object.keys(dummyObj));
//# sourceMappingURL=PrivateAttrExploration.js.map