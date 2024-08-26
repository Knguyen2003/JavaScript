// Date: 26/08/2024
// Name: Phan Nguyễn Khôi Nguyên
// MSSV: 21068021
// Description: Coding Challenge #1 Devlop skills and editor setup

function printForecast(arr) {
    for(let i = 0; i < arr.length; i++) {
        console.log(`${arr[i]} độ C in ${i + 1} days`);
    }
}
// Test data 1
console.log('---- TEST DATA 1 ----');
printForecast([17, 21, 23]);
// Test data 2
console.log('---- TEST DATA 2 ----');
printForecast([12, 5, -5, 0, 4]);