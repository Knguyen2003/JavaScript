//Challenge3
function calculateAverage(score1, score2, score3) {
    return (score1 + score2 + score3) / 3;
}
function compareScores(scoreDolphins, scoreKoalas) {
    if (scoreDolphins >= 100 && scoreDolphins > scoreKoalas) {
        console.log(`Dolphins win with an average score of ${scoreDolphins}`);
    } else if (scoreKoalas >= 100 && scoreKoalas > scoreDolphins) {
        console.log(`Koalas win with an average score of ${scoreKoalas}`);
    } else if (scoreDolphins >= 100 && scoreKoalas >= 100 && scoreDolphins === scoreKoalas) {
        console.log(`It's a draw! Both teams have an average score of ${scoreDolphins}`);
    } else {
        console.log(`No team wins the trophy!`);
    }
}

// Data 1
var scoreDolphins = calculateAverage(96, 108, 89);
var scoreKoalas = calculateAverage(88, 91, 110);
compareScores(scoreDolphins, scoreKoalas);
// Data Bonus 1
scoreDolphins = calculateAverage(97, 112, 101);
scoreKoalas = calculateAverage(109, 95, 123);
compareScores(scoreDolphins, scoreKoalas);
// Data Bonus 2
scoreDolphins = calculateAverage(97, 112, 101);
scoreKoalas = calculateAverage(109, 95, 106);
compareScores(scoreDolphins, scoreKoalas);