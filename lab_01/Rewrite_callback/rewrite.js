// Date: 28/08/2024
// Name: Phan Nguyễn Khôi Nguyên
// MSSV: 21068021
// Description: Rewrite the function (callback function)


const numbers = [1, 2, 3, 4, 5];
//map function : tạo ra một mảng mới bằng cách gọi một hàm (callback) trên từng phần tử của mảng ban đầu. Không thay đổi mảng ban đầu
const doubledNumbers = numbers.map(function (number) {
    return number * 2;
});
console.log(`Demo map: ${doubledNumbers}`); // [2, 4, 6, 8, 10]


//filter function : tạo ra một mảng mới bằng cách gọi một hàm (callback) trên từng phần tử của mảng ban đầu, nếu kết quả trả về true thì phần tử đó sẽ được thêm vào mảng mới. Không thay đổi mảng ban đầu

const evenNumbers = numbers.filter(function(number) {
    return number % 2 === 0;
});
console.log(`Demo filter: ${evenNumbers}`); // [2, 4]


//find function :  tìm và trả về phần tử đầu tiên trong mảng thỏa mãn điều kiện được cung cấp bởi một hàm callback. Nếu không có phần tử nào thỏa mãn điều kiện, find() sẽ trả về undefined.
const firstEvenNumber = numbers.find(function(number) {
    return number % 2 === 0;
});
console.log(`Demo find: ${firstEvenNumber}`); // 2


// reduce function : giảm mảng thành một giá trị duy nhất bằng cách gọi một hàm (callback) trên từng phần tử của mảng ban đầu
// Example 1: Tính tổng của mảng numbers

const sum = numbers.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0); // 0 là giá trị khởi tạo của accumulator
console.log(`Demo reduce 1: ${sum}`); // 15

// Example 2: 
const fruits = ['apple', 'banana', 'orange', 'apple', 'orange', 'banana', 'apple'];

const fruitCount = fruits.reduce(function(accumulator, currentValue) {
    if (accumulator[currentValue]) {
        accumulator[currentValue]++;
    } else {
        accumulator[currentValue] = 1;
    }
    return accumulator;
}, {});

console.log(`Demo reduce 2: ${fruitCount}`); // Kết quả: { apple: 3, banana: 2, orange: 2 }

//some function :để kiểm tra xem có ít nhất một phần tử trong mảng thỏa mãn điều kiện được cung cấp bởi hàm callback. 
//Nếu có ít nhất một phần tử thỏa mãn điều kiện, some() trả về true; nếu không, trả về false.

const hasEvenNumber = numbers.some(function(number) {
    return number % 2 === 0;
});
console.log(`Demo some: ${hasEvenNumber}`); // true

//every function : kiểm tra xem tất cả các phần tử trong mảng có thỏa mãn điều kiện được cung cấp bởi hàm callback hay không.
// Nếu tất cả các phần tử thỏa mãn điều kiện, every() trả về true; nếu không, trả về false.

const allEvenNumbers = numbers.every(function(number) {
    return number % 2 === 0;
});
console.log(`Demo every: ${allEvenNumbers}`); // false

//flatMap function : làm phẳng mảng một cách đệ quy. Nó kết hợp map() và flat() thành một bước duy nhất.
// Example 1:
const words = ['hello', 'world'];
const letters = words.flatMap(function(word) {
    return word.split('');
});
console.log(`Demo flatMap 1: ${letters}`); // ['h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd']

// Example 2:
const nestedArrays = [[1, 2], [3, 4], [5, 6]];
const flattened = nestedArrays.flatMap(array => array);
console.log(`Demo flatMap 2: ${flattened}`); // Kết quả: [1, 2, 3, 4, 5, 6]
