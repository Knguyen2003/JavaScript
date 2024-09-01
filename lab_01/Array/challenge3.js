// Date: 01/09/2024
// Name: Phan Nguyễn Khôi Nguyên
// MSSV: 21068021
// Description: Array challenge 3


//arrow function
const calcAverageHumanAge = ages => {
    for(let i = 0; i < ages.length; i++) {
        ages[i] = ages[i] <= 2 ? 2 * ages[i] : 16 + ages[i] * 4;
    }
    const adults = ages.filter(age => age >= 18); 
    const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;
    console.log(`The average age is ${average}`);   
}

//data 1
const ages1 = [5, 2, 4, 1, 15, 8, 3];
calcAverageHumanAge(ages1);
//data 2
const ages2 = [16, 6, 10, 5, 6, 1, 4];
calcAverageHumanAge(ages2);