import { IConsumer } from "./Consumer.interface";
import { ISendAction } from "./SendAction.interface";
import { Send } from "./Send";
import { SendMailService } from "./SendMailService";

export class MailConsumer implements IConsumer {
  getService (): ISendAction {
    return new Send(new SendMailService());
  }
}
