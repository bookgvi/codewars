import { IConsumer } from "./Consumer.interface";
import { ISendAction } from "./SendAction.interface";
import { Send } from "./Send";
import { SendSMSService } from "./SendSMSService";

export class SMSConsumer implements IConsumer {
  getService (): ISendAction {
    return new Send(new SendSMSService());
  }
}
