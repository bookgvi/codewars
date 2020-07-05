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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function changeConstructor(props) {
    return function (constructor) {
        return /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.props = props;
                return _this;
            }
            return class_1;
        }(constructor));
    };
}
var Test = /** @class */ (function () {
    function Test(test) {
        this.test = test;
    }
    Object.defineProperty(Test.prototype, "getTest", {
        get: function () {
            return this.test;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Test.prototype, "greetings", {
        get: function () {
            // @ts-ignore
            return this.props.greeting;
        },
        enumerable: true,
        configurable: true
    });
    Test = __decorate([
        changeConstructor({ val: 'QWE', greeting: 'Hey!!' })
        // @ts-ignore
    ], Test);
    return Test;
}());
var test = new Test('QQQ');
console.log(test.getTest);
console.log(test.greetings);
//# sourceMappingURL=classDecorator.js.map