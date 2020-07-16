import { IMessageService } from "./MessageService.interface";

export class SendMailService implements IMessageService {
  sendService (): void {
    console.log('Sending mail...');
  }
}
