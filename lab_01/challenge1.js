// Challenge 1
var weightMark = 78;
var tallMark = 1.69;
var weightJoin = 92;
var tallJohn = 1.95;

function calculateBMI(weight, tall) {
    return weight / (tall ** 2);
}

var markBMI = calculateBMI(weightMark, tallMark);
var johnBMI = calculateBMI(weightJoin, tallJohn);
var markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);
