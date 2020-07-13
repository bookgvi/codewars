class Singleton {
    protected static instance: Singleton;

    private constructor() {
        console.log('Singleton Constructor');
    }

    public static hInstanse(): Singleton {
        if (!Singleton.instance) Singleton.instance = new Singleton();
        return Singleton.instance;
    }
}

class SimpleClass {
    constructor() {
        console.log('Simple class constructor');
    }

}

// class ExtSingleTone extends Singleton { // Exception!!!
// }

const stObj: Singleton = Singleton.hInstanse();
const stObj2: Singleton = Singleton.hInstanse();
const stObj3: Singleton = Singleton.hInstanse();
const simpleObj = new SimpleClass();
const simpleObj2 = new SimpleClass();
const simpleObj3 = new SimpleClass();

// const stOnjTest = new Singleton(); // Exception!!!
