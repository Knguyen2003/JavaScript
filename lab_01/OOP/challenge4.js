// Date: 01/09/2024
// Name: Phan Nguyễn Khôi Nguyên
// MSSV: 21068021
// Description: OOP challenge 4


class CarCl {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
      }
    
      accelerate() {
        this.speed += 10;
        console.log(`${this.make} is going at ${this.speed} km/h`);
      }
    
      brake() { 
        this.speed -= 5;
        console.log(`${this.make} is going at ${this.speed} km/h`);
      }
};
class EVCl extends CarCl {
    #charge;
    constructor(make, speed, charge){
        super(make, speed);
        this.#charge = charge;
    }
    chargeBattery(chargeTo){ 
        this.#charge = chargeTo;
        console.log(`Battery is charging to ${chargeTo}`);
        return this;
    }
    accelerate(){  
        this.speed += 20;
        this.#charge -= 1;
        console.log(`${this.make} is going at ${this.speed} km/h with a charge of ${this.#charge}`);
        return this;
    }

    brake() {
        this.speed -= 10;
        console.log(`${this.make} is going at ${this.speed} km/h`);
        return this;
    }


};

//Test data
const rivian = new EVCl('Rivian', 120, 23);
rivian.accelerate().brake().chargeBattery(90).accelerate(); //Sử dụng chaining
//Output:
// Rivian is going at 130 km/h
// Rivian is going at 120 km/h
// Battery is charging to 90
// Rivian is going at 140 km/h with a charge of 89

