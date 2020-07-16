import { MailConsumer } from "./MailConsumer";
import { SMSConsumer } from "./SMSConsumer";
import { ISendAction } from "./SendAction.interface";
import { IConsumer } from "./Consumer.interface";

let action: ISendAction;

const mail: IConsumer = new MailConsumer();
action = mail.getService();
action.execute();

const sms: IConsumer = new SMSConsumer();
action = sms.getService();
action.execute();
