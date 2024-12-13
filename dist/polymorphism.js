"use strict";
{
    //
    // Polymorphism
    class Person {
        getSleep() {
            console.log(`I am Sleeping for 8 hours per day`);
        }
    }
    class Student extends Person {
        getSleep() {
            console.log(`I am Sleeping for 7 hours per day`);
        }
    }
    class Developer extends Person {
        getSleep() {
            console.log(`I am Sleeping for 6 hours per day`);
        }
    }
    const getSleepingHours = (params) => {
        params.getSleep();
    };
    const person1 = new Person();
    const person2 = new Student();
    const person3 = new Developer();
    getSleepingHours(person1);
    getSleepingHours(person2);
    getSleepingHours(person3);
    class Shape {
        getAreas() {
            return 0;
        }
    }
    class Circle extends Shape {
        constructor(radius) {
            super();
            this.radius = radius;
        }
        getAreas() {
            return Math.PI * this.radius * this.radius;
        }
    }
    class Rectangle extends Shape {
        constructor(height, width) {
            super();
            this.height = height;
            this.width = width;
        }
        getAreas() {
            return this.height * this.width;
        }
    }
    const getShapeArea = (param) => {
        console.log(param.getAreas());
    };
    const shape1 = new Shape();
    const shape2 = new Circle(10);
    const shape3 = new Rectangle(10, 20);
    getShapeArea(shape1);
    getShapeArea(shape2);
    getShapeArea(shape3);
    //
}
