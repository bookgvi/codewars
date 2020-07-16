import { IMessageService } from "./MessageService.interface";

export class SendSMSService implements IMessageService {
  sendService (): void {
    console.log('Sending SMS...');
  }
}
