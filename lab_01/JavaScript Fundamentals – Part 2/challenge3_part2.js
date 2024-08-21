// Date: 2021/08/29
// Name: Phan Nguyễn Khôi Nguyên
// MSSV: 21068021
// Description: Coding Challenge #3 Part 2

// Tuan1 JS lab1 Challenge3_part2 + image

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to 
implement the calculations! Remember: BMI = mass / height ** 2 = mass 
/ (height * height) (mass in kg and height in meter)
Your tasks:
1. For each of them, create an object with properties for their full name, mass, and 
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same 
method on both objects). Store the BMI value to a property, and also return it 
from the method
3. Log to the console who has the higher BMI, together with the full name and the 
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m 
tall.
*/

function calcBMI(mass, height) {
    return mass / height ** 2;
}

const Mark = {
    name : 'Mark Miller',
    mass : 78,
    height : 1.69,
}
const Join = {
    name : 'John Smith',
    mass : 92,
    height : 1.95,
}

Mark.BMI = calcBMI(Mark.mass, Mark.height);
Join.BMI = calcBMI(Join.mass, Join.height);
function compareBMI(Mark, Join) {
    if (Mark.BMI > Join.BMI) {
        console.log(`${Mark.name}'s BMI (${Mark.BMI}) is higher than ${Join.name}'s (${Join.BMI})!`);
    } else if(Mark.BMI < Join.BMI) {
        console.log(`${Join.name}'s BMI (${Join.BMI}) is higher than ${Mark.name}'s (${Mark.BMI})!`);
    }else{
        console.log(`${Mark.name} and ${Join.name} have the same BMI (${Mark.BMI})!`);
    }
}
compareBMI(Mark, Join);