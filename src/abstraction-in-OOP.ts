{
  //
  //Abstraction in OOP
  // 1. interface

  // ides
  interface Vehicle1 {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
  }

  class Car1 implements Vehicle1 {
    startEngine(): void {
      console.log(`I am starting the engine`);
    }
    stopEngine(): void {
      console.log(`I am stopping the engine`);
    }
    move(): void {
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
  abstract class Car2 {
    abstract startEngine(): void 
    abstract  stopEngine(): void 
    abstract move(): void 
      test() {
        console.log(`i am just testing`);
      }
  }


  class ToyotaCar extends Car2{
    startEngine(): void {
        console.log(`I am starting the engine`);
      }
      stopEngine(): void {
        console.log(`I am stopping the engine`);
      }
      move(): void {
        console.log(`I am moving the engine`);
      }
  
  }


  //
}
