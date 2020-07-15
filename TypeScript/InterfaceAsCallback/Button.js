"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Button = /** @class */ (function () {
    function Button(action) {
        this.action = action;
    }
    Button.prototype.click = function () {
        this.action.execute();
    };
    return Button;
}());
exports.Button = Button;
//# sourceMappingURL=Button.js.map