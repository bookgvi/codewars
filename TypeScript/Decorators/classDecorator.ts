interface IProps {
    [key: string]: any
}

interface IConstructor {
    new(...args: any[]): IProps
}

function changeConstructor(props: IProps): Function {
    return function <T extends IConstructor> (constructor: T): T {
        return class extends constructor {
            private props: IProps = props;
        }
    }
}

@changeConstructor({ val: 'QWE', greeting: 'Hey!!' })
// @ts-ignore
class Test {
    constructor(private test: string) {
    }

    public get getTest(): string {
        return this.test;
    }

    public get greetings(): string {
        // @ts-ignore
        return this.props.greeting;
    }
}

const test: Test = new Test('QQQ');
console.log(test.getTest);
console.log(test.greetings);
