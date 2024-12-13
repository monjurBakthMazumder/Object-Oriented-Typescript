"use strict";
{
    //
    class BankAccount {
        constructor(id, name, _balance, password) {
            this.id = id;
            this.name = name;
            this._balance = _balance;
            this.password = password;
        }
        addDeposit(amount) {
            this._balance = this._balance + amount;
        }
        getBalance() {
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
