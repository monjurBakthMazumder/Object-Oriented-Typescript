{
  //
  class BankAccount {
    public readonly id: number;
    public name: string;
    private _balance: number;
    protected password: string;

    constructor(id: number, name: string, _balance: number, password: string) {
      this.id = id;
      this.name = name;
      this._balance = _balance;
      this.password = password;
    }

    addDeposit(amount: number) {
      this._balance = this._balance + amount;
    }
    getBalance(): number {
      return this._balance;
    }
  }

  class Student extends BankAccount {
    test() {
      this.password;
    }
  }

  const poor = new BankAccount(11, "poor", 20, "1212121");
  poor.addDeposit(200);
  const nyBalance = poor.getBalance();

  //
}
