function changeConstructor<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        private hello: string = 'Hey!!!';
    }
}

@changeConstructor
// @ts-ignore
class Test {
    constructor(private test: string) {
    }

    public get getTest(): string {
        return this.test;
    }

    public get greetings(): string {
        // @ts-ignore
        return this.hello;
    }
}

const test: Test = new Test('QQQ');
console.log(test.getTest);
console.log(test.greetings);
