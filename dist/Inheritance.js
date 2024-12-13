"use strict";
{
    //
    // Inheritance in OOP
    class Person {
        constructor(name, age, address) {
            this.name = name;
            this.age = age;
            this.address = address;
        }
        getSleep(numberOfHours) {
            console.log(`${this.name} will sleep for ${numberOfHours}`);
        }
    }
    class Student extends Person {
        constructor(name, age, address) {
            super(name, age, address);
        }
    }
    const student1 = new Student("Monur", 23, "bangladesh");
    class Teacher extends Person {
        constructor(name, age, address, designation) {
            super(name, age, address);
            this.designation = designation;
        }
        takeClass(numberOfClass) {
            console.log(`${this.name} will take ${numberOfClass}`);
        }
    }
    const teacher = new Teacher("Mazumder", 40, "BD", "Math Teacher");
    //
}
