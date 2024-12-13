{
  // Getter and setter
  class BankAccount {
    public readonly id: number;
    public name: string;
    protected _balance: number;

    constructor(id: number, name: string, _balance: number) {
      this.id = id;
      this.name = name;
      this._balance = _balance;
    }

    // getter
    get balance() {
      return this._balance;
    }

    // setter
    set deposit(amount: number) {
      this._balance = this._balance + amount;
    }
  }

  const poor = new BankAccount(11, "poor", 20);
  const myBalance = poor.balance;
  poor.deposit = 50;
  console.log({ myBalance });

  //
}
