import { ISendAction } from "./SendAction.interface";

export interface IConsumer {
  getService(): ISendAction;
}
