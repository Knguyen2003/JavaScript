// Date: 01/09/2024
// Name: Phan Nguyễn Khôi Nguyên
// MSSV: 21068021
// Description: Array challenge 4


const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] },
];
//1
for(let i = 0; i < dogs.length; i++) {
    dogs[i].recommendedFood = Math.trunc(dogs[i].weight ** 0.75 * 28);  //** : mũ
    //Math.trunc() : làm tròn xuống số nguyên gần nhất  (vd: 3.9 -> 3)
}
console.log(dogs);
//2
for(let i = 0; i < dogs.length; i++) {
   const owners = dogs[i].owners;
   if(owners.indexOf('Sarah') !== -1) {
       if(dogs[i].curFood > dogs[i].recommendedFood) {
           console.log(`Sarah's dog eat too much`);
       } else if(dogs[i].curFood < dogs[i].recommendedFood) {
              console.log(`Sarah's dog eat too little`);
       }else {
           console.log(`Sarah's dog eat just right`);
       }
   }
}
//3
const ownersEatTooMuch = dogs.filter(dog => dog.curFood > dog.recommendedFood).flatMap(dog => dog.owners);
const ownersEatTooLittle = dogs.filter(dog => dog.curFood < dog.recommendedFood).flatMap(dog => dog.owners);
//flatMap() : tạo ra một mảng mới với mỗi phần tử của mảng gốc được thay thế bằng một mảng con được trải ra
console.log(ownersEatTooMuch);
console.log(ownersEatTooLittle);
//4
var ownersEatTooMuchString = ownersEatTooMuch.join(' and ');
console.log(`${ownersEatTooMuchString}'s dogs eat too much!`);
var ownersEatTooLittleString = ownersEatTooLittle.join(' and ');
console.log(`${ownersEatTooLittleString}'s dogs eat too little!`);
//5 
console.log(dogs.some(dog => dog.curFood === dog.recommendedFood)); 
//some() : kiểm tra xem có phần tử nào trong mảng thỏa mã
//6
const checkEatingOkay = dog => dog.curFood >= dog.recommendedFood * 0.9 && dog.curFood <= dog.recommendedFood * 1.1;
console.log(dogs.some(checkEatingOkay));
//7 Tạo một mảng chứa các chú chó đang ăn một lượng thức ăn "okay" (cố gắng tái sử dụng điều kiện đã dùng ở bước 6).
console.log(dogs.filter(checkEatingOkay)); //giữ lại các phần tử thỏa điều kiện
//8
const dogsCopy = dogs.slice().sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(dogsCopy);
//sort() : sắp xếp các phần tử trong mảng theo thứ tự tăng dần
//slice() : trả về một mảng mới chứa các phần tử được cắt từ mảng gốc
