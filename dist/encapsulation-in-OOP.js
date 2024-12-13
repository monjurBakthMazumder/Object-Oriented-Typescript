"use strict";
{
    // Encapsulation in OOP
    class BankAccount {
        constructor(id, name, _balance) {
            this.id = id;
            this.name = name;
            this._balance = _balance;
        }
        addDeposit(amount) {
            this._balance = this._balance + amount;
        }
        getBalance() {
            return this._balance;
        }
        getHiddenBalance() {
            return this.getBalance();
        }
    }
    class Student extends BankAccount {
        test() {
            this.getHiddenBalance;
        }
    }
    const poor = new BankAccount(11, "poor", 20);
    poor.addDeposit(200);
    const nyBalance = poor.getHiddenBalance();
    //
}
