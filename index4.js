class Vehicle {
    constructor(name){
        if(new.target == Vehicle){
            throw new Error(`Vehichle class can only be implemented by base class`);
        }
        this.name = name;
    }

    startEngine(){
        throw new Error('Method startEngine must be implemented in a subclass');
    }

    move(){
        throw new Error('Method move must be implemented in a subclass');
    }
    stopEngine(){
        throw new Error('Method stop Engine must be implemented in a subclass');
    }
}

class Car extends Vehicle {

    constructor(name , fuelLevel){
        super(name);
        this.fuelLevel = fuelLevel;
    }
    move(){
        console.log(`${this.name} is driving on the road. `);
    }
    startEngine(){
        if(this.fuelLevel > 0){
            console.log(`${this.name}'s engine started with fuel level: ${this.fuelLevel} `)
        } else{
            console.log(`${this.name} cannot start. Fuel level is too low.`);
        }
    }

    move(){
        console.log(`${this.name} is driving on the road. `);
    }
    startEngine(){
        if(this.fuelLevel > 0){
            console.log(`${this.name}'s engine started with fuel level: ${this.fuelLevel} `)
        } else{
            console.log(`${this.name} cannot start. Fuel level is too low.`);
        }
    }

    move(){
        console.log(`${this.name} is driving on the road. `);
    }

    stopEngine(){
        console.log(`${this.name}'s engine stopped`);
    }


}

class Bike extends Vehicle {
    constructor(name , gear){
        super(name);
        this.gear = gear;
    }

    startEngine(){
        console.log(`${this.name} engine started. Ready for the ride`);
    }
    
    move(){
        console.log(`${this.name} starts the bike with ${this.gear} gear`)
    }

    stopEngine(){
        console.log(`${this.name} engine stop`);
    }
}

const car = new Car('BMW' , 5);
car.startEngine();
car.move();
car.stopEngine();


const bike  = new Bike('Apachi' , 3);
bike.startEngine();
bike.move();
bike.stopEngine();
const bike  = new Bike('Apachi' , 3);
bike.startEngine();
bike.move();
bike.stopEngine();
const bike  = new Bike('Apachi' , 3);
bike.startEngine();
bike.move();
bike.stopEngine();