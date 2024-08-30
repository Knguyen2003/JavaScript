// Date: 30/08/2024
// Name: Phan Nguyễn Khôi Nguyên
// MSSV: 21068021
// Description: Data Structures, Modern Operators and Strings

const gameEvents = new Map([
    [17, '⚽ GOAL'],
    [36, '� Substitution'],
    [47, '⚽ GOAL'],
    [61, '� Substitution'],
    [64, '� Yellow card'],
    [69, '� Red card'],
    [70, '� Substitution'],
    [72, '� Substitution'],
    [76, '⚽ GOAL'],
    [80, '⚽ GOAL'],
    [92, '� Yellow card'],
]);


//1.
const events = [...new Set(gameEvents.values())]; //Set: loại bỏ các phần tử trùng nhau
console.log(events);
//2
gameEvents.delete(64);
console.log(gameEvents);
//3
console.log(`An event happened, on average, every ${90/gameEvents.size} minutes`);
//4
for(const [min, event] of gameEvents.entries()){
    const half = min <= 45 ? 'FIRST' : 'SECOND';
    console.log(`[${half} HALF] ${min}: ${event}`);
}