"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MailConsumer_1 = require("./MailConsumer");
var SMSConsumer_1 = require("./SMSConsumer");
var action;
var mail = new MailConsumer_1.MailConsumer();
action = mail.getService();
action.execute();
var sms = new SMSConsumer_1.SMSConsumer();
action = sms.getService();
action.execute();
//# sourceMappingURL=app.js.map