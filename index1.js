//  implement inheritance 

class Animal {

    constructor(name){
        this.name = name;
    }

    eat(){
        console.log(`${this.name} is eating...`);
    }

}



class Cat extends Animal {
    meow(){
        console.log(`${this.name} is doing meow meow`);
    }
}

const dog1 = new Dog("tommy");

dog1.Bark(); 

dog1.eat();

const cat1 = new Cat("cut");

cat1.meow();
cat1.eat();



function changes{
    
class Cat extends Animal {
    meow(){
        console.log(`${this.name} is doing meow meow`);
    }
}

const dog1 = new Dog("tommy");

dog1.Bark(); 

dog1.eat();

const cat1 = new Cat("cut");

cat1.meow();
cat1.eat();

}