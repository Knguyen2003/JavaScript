// Date: 01/09/2024
// Name: Phan Nguyễn Khôi Nguyên
// MSSV: 21068021
// Description: OOP challenge 1

//1
function Car(make, speed) {
    this.make = make;
    this.speed = speed;
}

//2
Car.prototype.accelerate = function() {  
    this.speed += 10;
    console.log(this.speed);
}
//3
Car.prototype.brake = function() {
    this.speed -= 5;
    console.log(this.speed);
}
//4
const car1 = new Car('BMW', 120);
const car2 = new Car('Mercedes', 95);

car1.accelerate();
car1.accelerate();
car1.brake();
car2.accelerate();
car2.accelerate();
car2.brake();
