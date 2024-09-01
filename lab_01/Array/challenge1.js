// Date: 01/09/2024
// Name: Phan Nguyễn Khôi Nguyên
// MSSV: 21068021
// Description: Array challenge 1


function checkDogs(dogsJulia, dogsKate) {
    const dogsJuliaCopy = dogsJulia.slice(); //copy array
    dogsJuliaCopy.splice(0, 1); //remove first element
    dogsJuliaCopy.splice(-2); //remove last 2 elements
    const dogs = dogsJuliaCopy.concat(dogsKate); 
    for(let i = 0; i < dogs.length; i++) {
        if(dogs[i] >= 3) {
            console.log(`Dog number ${i + 1} is an adult, and is ${dogs[i]} years old`);
        } else {
            console.log(`Dog number ${i + 1} is still a puppy`);
        }
    }
}


//data 1
const dogsJulia1 = [3, 5, 2, 12, 7];
const dogsKate1 = [4, 1, 15, 8, 3];
checkDogs(dogsJulia1, dogsKate1);
//data 2
const dogsJulia2 = [9, 16, 6, 8, 3];
const dogsKate2 = [10, 5, 6, 1, 4];
checkDogs(dogsJulia2, dogsKate2);
