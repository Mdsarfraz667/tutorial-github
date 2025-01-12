//  implement inheritance 

class Animal {

    constructor(name){
        this.name = name;
    }

    eat(){
        console.log(`${this.name} is eating...`);
    }

}

class Dog extends Animal {
    Bark(){
        console.log(`${this.name} is barking ...`);
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