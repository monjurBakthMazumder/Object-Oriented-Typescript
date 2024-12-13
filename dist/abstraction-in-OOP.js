"use strict";
{
    class Car1 {
        startEngine() {
            console.log(`I am starting the engine`);
        }
        stopEngine() {
            console.log(`I am stopping the engine`);
        }
        move() {
            console.log(`I am moving the engine`);
        }
        test() {
            console.log(`i am just testing`);
        }
    }
    const toyotaCar = new Car1();
    toyotaCar.startEngine();
    // abstract class
    // idea
    class Car2 {
        test() {
            console.log(`i am just testing`);
        }
    }
    class ToyotaCar extends Car2 {
        startEngine() {
            console.log(`I am starting the engine`);
        }
        stopEngine() {
            console.log(`I am stopping the engine`);
        }
        move() {
            console.log(`I am moving the engine`);
        }
    }
    //
}
