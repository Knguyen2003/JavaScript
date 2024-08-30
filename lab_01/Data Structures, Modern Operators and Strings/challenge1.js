// Date: 30/08/2024
// Name: Phan Nguyễn Khôi Nguyên
// MSSV: 21068021
// Description: Data Structures, Modern Operators and Strings

//1
const players1 = ['Neuer', 'Pavard', 'Martinez', 'Alaba', 'Davies', 'Kimmich', 'Goretzka','Coman', 'Muller', 'Gnarby', 'Lewandowski'];
const players2 = ['Burki', 'Schulz', 'Hummels', 'Akanji', 'Hakimi', 'Weigl', 'Witsel', 'Hazard', 'Brandt', 'Sancho', 'Gotze'];
//2
var gk = players1[0];
var fieldPlayers = players1.slice(1); //slice: cắt mảng từ vị trí 1 đến hết
console.log("Câu2");
console.log(gk);
console.log(fieldPlayers);
//3
const allPlayers = players1.concat(players2); //concat: nối 2 mảng
console.log("Câu3");
console.log(allPlayers);
//4
const cauThuDuBi = ['Thiago', 'Coutinho', 'Perisic'];
const players1Final = players1.concat(cauThuDuBi);
console.log("Câu4");
console.log(players1Final);
//5
const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: 
    [
        ['Neuer','Pavard','Martinez','Alaba','Davies','Kimmich',
        'Goretzka','Coman','Muller','Gnarby','Lewandowski',],
        [ 'Burki','Schulz','Hummels','Akanji','Hakimi','Weigl',
        'Witsel','Hazard','Brandt','Sancho','Gotze', ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski','Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};
//destructuring assignment
var {team1, x: draw, team2} = game.odds; //tên biến ở trong object : tên biến muốn gán (mới)
//6
function printGoals(...players){
    for(let i = 0; i < players.length; i++){
        console.log(players[i] + ' đã ghi ' + players.length + ' bàn');
    }
}
console.log("Câu6");
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
//7
console.log("Câu7");
team1 < team2 && console.log('Team 1 is more likely to win');
team2 < team1 && console.log('Team 2 is more likely to win');

    



