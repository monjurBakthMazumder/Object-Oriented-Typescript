{
  //

  // Class
  class Animal {
    public name: string;
    public species: string;
    public sound: string;

    constructor(name: string, species: string, sound: string) {
      this.name = name;
      this.species = species;
      this.sound = sound;
    }

    makeSound() {
      console.log(`this ${this.name} says: ${this.sound}`);
    }
  }

  const dog = new Animal("German", "dog", "gew");
  dog.makeSound();

  const cat = new Animal("Cat", "cat", "mew");
  cat.makeSound();

  // Class --> parameter properties
  class Animal2 {
    constructor(
      public name: string,
      public species: string,
      public sound: string
    ) {}

    makeSound() {
      console.log(`this ${this.name} says: ${this.sound}`);
    }
  }

  const dog2 = new Animal2("German", "dog", "gew");
  dog2.makeSound();

  const cat2 = new Animal2("Cat", "cat", "mew");
  cat2.makeSound();

  //
}
