"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Send = /** @class */ (function () {
    function Send(message) {
        this.message = message;
    }
    Send.prototype.execute = function () {
        this.message.sendService();
    };
    return Send;
}());
exports.Send = Send;
//# sourceMappingURL=Send.js.map