{
    //
    class BankACCount {
        readonly id: number;
        name: string;
        protected _balance : number;

        constructor(id: number, name:string, balance:number){
            this.id = id;
            this.name = name;
            this._balance = balance;

        }

        public addDeposit(amount : number){
            this._balance = this._balance + amount
        }

        public getBalance(){
            return this._balance
        }
    }

    class StudentAccount extends BankACCount {
        test(){
            this._balance
        }
    }

    const poor = new BankACCount (11, "monjur", 25)





    //
}