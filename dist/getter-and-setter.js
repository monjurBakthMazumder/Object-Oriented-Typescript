"use strict";
{
    // Getter and setter
    class BankAccount {
        constructor(id, name, _balance) {
            this.id = id;
            this.name = name;
            this._balance = _balance;
        }
        // getter
        get balance() {
            return this._balance;
        }
        // setter
        set deposit(amount) {
            this._balance = this._balance + amount;
        }
    }
    const poor = new BankAccount(11, "poor", 20);
    const myBalance = poor.balance;
    poor.deposit = 50;
    console.log({ myBalance });
    //
}
