//  polymerphism in 

class ProcessPayment{
    constructor(amount){
        if(new.target == ProcessPayment){
            throw new Error("Abstract class 'PaymentProcessor' cannot be instantiated directly");
        }
        this.amount = amount;
    }

    // Abstract method

    ProcessPayment(){
        throw new Error("Method Process Payment must be implemented in subclass");
    }
}

// sub classes

class CreditCardPayment extends ProcessPayment{

    constructor(cardNumber , amount){
        super(amount);
        this.cardNumber = cardNumber;
        // this.amount = amount;
    }
    // process payment of card 
    processPayment(){
        console.log(`Processing credit card payment of ${this.amount} using card number ${this.cardNumber}`);
    }
}

class GooglePayPayment extends ProcessPayment {
    constructor(googleAccount , amount){
        super(amount);
        this.googleAccount = googleAccount;
        // this.amount = amount;
    }
    // process payment of googlePay
    processPayment(){
        console.log(`Process google pay payment of ${this.amount} using the google pay id ${this.googleAccount}`);
    }
}

class UpiPayment extends ProcessPayment{
    constructor(upiId , amount){
        super(amount);
        this.upiId = upiId;
    }
    processPayment(){
        console.log(`Process upi payment of ${this.amount} using the upi id ${this.upiId}`);
    }
    processPayment(){
        console.log(`Process upi payment of ${this.amount} using the upi id ${this.upiId}`);
    }
    processPayment(){
        console.log(`Process upi payment of ${this.amount} using the upi id ${this.upiId}`);
    }

}


