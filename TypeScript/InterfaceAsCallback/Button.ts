import {IExecute} from "./IExecute";

export class Button {
    constructor(private action: IExecute) {
    }

    public click(): void {
        this.action.execute();
    }
}
