"use strict";
{
    //
    class Counter {
        constructor() {
            this.count = 0;
        }
        increment() {
            return (this.count = this.count + 1);
        }
        decrement() {
            return (this.count = this.count - 1);
        }
    }
    const instance1 = new Counter();
    console.log(instance1.increment());
    const instance2 = new Counter();
    console.log(instance2.increment());
    // Statics in OOP
    class Counter2 {
        static increment() {
            return (Counter2.count = Counter2.count + 1);
        }
        static decrement() {
            return (Counter2.count = Counter2.count - 1);
        }
    }
    Counter2.count = 0;
    console.log(Counter2.increment());
    console.log(Counter2.increment());
    //
}
