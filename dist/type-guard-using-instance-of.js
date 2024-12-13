"use strict";
{
    //
    // Type guard using instance of
    class Animal {
        constructor(name, species) {
            this.name = name;
            this.species = species;
        }
        makeSound() {
            console.log(`Im making sound`);
        }
    }
    class Dog extends Animal {
        constructor(name, species) {
            super(name, species);
        }
        makeBark() {
            console.log(`I am barking`);
        }
    }
    class Cat extends Animal {
        constructor(name, species) {
            super(name, species);
        }
        makeMew() {
            console.log(`I am mewing `);
        }
    }
    const getAnimal = (animal) => {
        if (animal instanceof Dog) {
            animal.makeBark();
        }
        else if (animal instanceof Cat) {
            animal.makeMew();
        }
        else {
            animal.makeSound();
        }
    };
    const dog = new Dog("German", "dog");
    dog.makeSound();
    const cat = new Cat("Cat", "cat");
    cat.makeSound();
    // handle in smart way
    const isDog = (animal) => {
        return animal instanceof Dog;
    };
    const isCat = (animal) => {
        return animal instanceof Cat;
    };
    const getAnimal2 = (animal) => {
        if (isDog(animal)) {
            animal.makeBark();
        }
        else if (isCat(animal)) {
            animal.makeMew();
        }
        else {
            animal.makeSound();
        }
    };
    const dog2 = new Dog("German", "dog");
    dog.makeSound();
    const cat2 = new Cat("Cat", "cat");
    cat.makeSound();
    //
}
