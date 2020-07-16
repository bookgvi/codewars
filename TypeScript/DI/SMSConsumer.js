"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Send_1 = require("./Send");
var SendSMSService_1 = require("./SendSMSService");
var SMSConsumer = /** @class */ (function () {
    function SMSConsumer() {
    }
    SMSConsumer.prototype.getService = function () {
        return new Send_1.Send(new SendSMSService_1.SendSMSService());
    };
    return SMSConsumer;
}());
exports.SMSConsumer = SMSConsumer;
//# sourceMappingURL=SMSConsumer.js.map