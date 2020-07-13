var Singleton = /** @class */ (function () {
    function Singleton() {
        console.log('Singleton Constructor');
    }
    Singleton.hInstanse = function () {
        if (!Singleton.instance)
            Singleton.instance = new Singleton();
        return Singleton.instance;
    };
    return Singleton;
}());
var SimpleClass = /** @class */ (function () {
    function SimpleClass() {
        console.log('Simple class constructor');
    }
    return SimpleClass;
}());
// class ExtSingleTone extends Singleton { // Exception!!!
// }
var stObj = Singleton.hInstanse();
var stObj2 = Singleton.hInstanse();
var stObj3 = Singleton.hInstanse();
var simpleObj = new SimpleClass();
var simpleObj2 = new SimpleClass();
var simpleObj3 = new SimpleClass();
// const stOnjTest = new Singleton(); // Exception!!!
//# sourceMappingURL=ExtendsSingleton.js.map