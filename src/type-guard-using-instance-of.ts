{
  //

  // Type guard using instance of
  class Animal {
    public name: string;
    public species: string;

    constructor(name: string, species: string) {
      this.name = name;
      this.species = species;
    }

    makeSound() {
      console.log(`Im making sound`);
    }
  }

  class Dog extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makeBark() {
      console.log(`I am barking`);
    }
  }
  class Cat extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makeMew() {
      console.log(`I am mewing `);
    }
  }
  const getAnimal = (animal: Animal) => {
    if (animal instanceof Dog) {
      animal.makeBark();
    } else if (animal instanceof Cat) {
      animal.makeMew();
    } else {
      animal.makeSound();
    }
  };
  const dog = new Dog("German", "dog");
  dog.makeSound();

  const cat = new Cat("Cat", "cat");
  cat.makeSound();

  // handle in smart way
  const isDog = (animal: Animal): animal is Dog => {
    return animal instanceof Dog;
  };
  const isCat = (animal: Animal): animal is Cat => {
    return animal instanceof Cat;
  };
  const getAnimal2 = (animal: Animal) => {
    if (isDog(animal)) {
      animal.makeBark();
    } else if (isCat(animal)) {
      animal.makeMew();
    } else {
      animal.makeSound();
    }
  };
  const dog2 = new Dog("German", "dog");
  dog.makeSound();

  const cat2 = new Cat("Cat", "cat");
  cat.makeSound();

  //
}
