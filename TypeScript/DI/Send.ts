import { ISendAction } from "./SendAction.interface";
import { IMessageService } from "./MessageService.interface";

export class Send implements ISendAction {
  constructor (private message: IMessageService) {
  }

  execute (): void {
    this.message.sendService();
  }
}
