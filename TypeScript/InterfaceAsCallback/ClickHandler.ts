import { IExecute } from "./IExecute";

export class ClickHandler implements IExecute {
    execute(): void {
        console.log('Button has been clicked...');
    }
}
