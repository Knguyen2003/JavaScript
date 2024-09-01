// Date: 01/09/2024
// Name: Phan Nguyễn Khôi Nguyên
// MSSV: 21068021
// Description: OOP challenge 3


class Car {
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
class EV extends Car {
   constructor(make, speed, charge){
       super(make, speed);
       this.charge = charge;
   }
    chargeBattery(chargeTo){
        this.charge = chargeTo;
        console.log(`Battery is charging to ${chargeTo}`);
    }
    accelerate(){
        this.speed += 20;
        this.charge -= 1;
        console.log(`${this.make} is going at ${this.speed} km/h with a charge of ${this.charge}`);
    }

};
const tesla = new EV('Tesla', 120, 23);
tesla.accelerate(); //Sử dụng hàm accelerate của class EV
tesla.brake();
tesla.chargeBattery(90);