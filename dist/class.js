"use strict";
{
    //
    class Animal {
        constructor(name, species, sound) {
            this.name = name;
            this.species = species;
            this.sound = sound;
        }
        makeSound() {
            console.log(`the ${this.name} sound is ${this.sound}`);
        }
    }
    const dog = new Animal("German shepherd", "dog", "Ghew");
    const cat = new Animal("Cute cat", "cat", "meaw");
    cat.makeSound();
    //
}
