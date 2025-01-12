//  implementation of encapsulation in javascipt

class BankAccount {
    #balance; // private field 

    // constructor
    constructor(accountHandler , intialBalance){
        this.accountHandler = accountHandler;
        this.#balance = intialBalance;
    }

    getBalance(){
        return `Account Holder: ${this.accountHandler} , Balance: ${this.#balance}`;
    }

    deposit(amount){
        if(amount > 0){
            this.#balance = this.#balance + amount;
            console.log('Deposit successfully');
        }
        else{
            console.log('please enter a valid amount');
        }
    }

    withdraw(amount){
        if(amount >0 && amount <= this.#balance){
            this.#balance -=amount;
            console.log("Withdraw successfully");
        }
        else{
            console.log("please enter a valid amount");
        }
    }

}

// usage 

const account = new BankAccount('Sarfraz' , 1000);

console.log(account.getBalance());

account.deposit(5000);
console.log(account.getBalance());
account.withdraw(3000);
console.log(account.getBalance());