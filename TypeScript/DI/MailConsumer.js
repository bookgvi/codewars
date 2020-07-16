"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Send_1 = require("./Send");
var SendMailService_1 = require("./SendMailService");
var MailConsumer = /** @class */ (function () {
    function MailConsumer() {
    }
    MailConsumer.prototype.getService = function () {
        return new Send_1.Send(new SendMailService_1.SendMailService());
    };
    return MailConsumer;
}());
exports.MailConsumer = MailConsumer;
//# sourceMappingURL=MailConsumer.js.map