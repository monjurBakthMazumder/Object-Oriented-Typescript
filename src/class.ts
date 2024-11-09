{
    //
    class Animal {
        public name: string;
        public species: string;
        public sound: string;
        
        constructor(name: string, species: string, sound: string) {
            this.name = name;
            this.species = species;
            this.sound = sound;
        }

        makeSound(){
            console.log(`the ${this.name} sound is ${this.sound}`);
        }
    }

    const dog = new Animal("German shepherd", "dog", "Ghew")
    const cat = new Animal("Cute cat", "cat", "meaw")
    cat.makeSound()
    dog.makeSound()


    // parameter properties
    class Animal2 {
        constructor(public name: string,public species: string,public sound: string) {
        }

        makeSound(){
            console.log(`the ${this.name} sound is ${this.sound}`);
        }
    }

    const dog2 = new Animal2("German shepherd", "dog", "Ghew")
    const cat2 = new Animal2("Cute cat", "cat", "meaw")
    
    cat.makeSound()
    dog.makeSound()






    
    //
}