// Date: 2021/08/29
// Name: Phan Nguyễn Khôi Nguyên
// MSSV: 21068021
// Description: Coding Challenge #1 Part 2

function calcAverage(score1, score2, score3) {
    return (score1 + score2 + score3) / 3;
}

function checkWinner(avgDolhins, avgKoalas) {
    if (avgDolhins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolhins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolhins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolhins})`);
    } else {
        console.log('No team wins!');
    }
}

// Test data 1
const avgDolhins1 = calcAverage(44, 23, 71);
const avgKoalas1 = calcAverage(65, 54, 49);
checkWinner(avgDolhins1, avgKoalas1);
// Test data 2
const avgDolhins2 = calcAverage(85, 54, 41);
const avgKoalas2 = calcAverage(23, 34, 27);
checkWinner(avgDolhins2, avgKoalas2);