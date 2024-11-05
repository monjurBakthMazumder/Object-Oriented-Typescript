{
    //instanceof guard

    class Animal {
        public name: string;
        public species: string;
        
        constructor(name: string, species: string,) {
            this.name = name;
            this.species = species;
        }

        makeSound(){
            console.log(`I am make sound`);
        }
    }

    class Dog extends Animal {
        constructor(name: string, species: string){
            super(name, species);
        }

        makeBark(){
            console.log(`I am barking`);
        }
    }
    class Cat extends Animal {
        constructor(name: string, species: string){
            super(name, species);
        }

        makeMeaw(){
            console.log(`I am mewaing`);
        }
    }

    const getAnimal = (animal: Animal) =>{
        if(animal instanceof Dog){
            animal.makeBark
        }
        else if(animal instanceof Cat){
            animal.makeMeaw()
        }else{
            animal.makeSound()
        }
    }

    const dog = new Dog("kutta", "dog")
    const cat = new Cat("bilai", "cat")
    getAnimal(dog)
    getAnimal(cat)


    // smart way te handle korer jonno amra function beohar korte pari

    const isDog = (animal : Animal) : animal is Dog => {
        return animal instanceof Dog
    }
    const isCat = (animal : Animal) : animal is Cat => {
        return animal instanceof Cat
    }

    const getAnimal2 = (animal: Animal) =>{
        if(isDog(animal)){
            animal.makeBark()
        }
        else if(isCat(animal)){
            animal.makeMeaw()
        }else{
            animal.makeSound()
        }
    }
    getAnimal2(dog)
    getAnimal2(cat)




    //
}