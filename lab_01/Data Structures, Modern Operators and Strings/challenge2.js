// Date: 30/08/2024
// Name: Phan Nguyễn Khôi Nguyên
// MSSV: 21068021
// Description: Data Structures, Modern Operators and Strings

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
// 1.
for(const [i, player] of game.scored.entries()){ //entries: trả về mảng chứa cặp key-value
    console.log(`Goal ${i + 1}: ${player}`);
}
// 2.
var sum = 0;
var count = 0;
for(const odd of Object.values(game.odds)){ //Object.values: trả về mảng chứa giá trị của object
    sum += odd;
    count++;
}
console.log(`Average odd: ${sum/count}`);
// 3.
for(const [team, odd] of Object.entries(game.odds)){ //Object.entries: trả về mảng chứa cặp key-value
    const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`; //nếu team = 'x' thì teamStr = 'draw', ngược lại teamStr = 'victory' + tên đội
    console.log(`Odd of ${teamStr}: ${odd}`);
}
// Bonus
const scorers = {};

for(const player of game.scored){
    scorers[player] ? scorers[player]++ : scorers[player] = 1;
    //scorers[player] = (scorers[player] || 0) + 1;
}
console.log(scorers);