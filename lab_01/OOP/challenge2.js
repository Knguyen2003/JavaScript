// Date: 01/09/2024
// Name: Phan Nguyễn Khôi Nguyên
// MSSV: 21068021
// Description: OOP challenge 2


//1
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
  
    get speedUS() {  //get : get the value
      return this.speed / 1.6;
    }
  
    set speedUS(speedInMph) {  //set : set the value
      this.speed = speedInMph * 1.6;
    }
  }

//data
const car1 = new CarCl('Ford', 120);
console.log(car1.speedUS);
car1.accelerate();
car1.accelerate();
car1.brake();
console.log(car1.speedUS);
//test set
car1.speedUS = 50;
console.log(car1);
