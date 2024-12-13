{
    // Encapsulation in OOP
    class BankAccount {
      public readonly id: number;
      public name: string;
      protected _balance: number;
  
      constructor(id: number, name: string, _balance: number) {
        this.id = id;
        this.name = name;
        this._balance = _balance;
      }
  
      addDeposit(amount: number) {
        this._balance = this._balance + amount;
      }
     private getBalance(): number {
        return this._balance;
      }

      getHiddenBalance(){
        return this.getBalance()
      }
    }
  
    class Student extends BankAccount {
      test() {
        this.getHiddenBalance
      }
    }
  
    const poor = new BankAccount(11, "poor", 20,);
    poor.addDeposit(200);
    const nyBalance = poor.getHiddenBalance();
  
    //
  }
  