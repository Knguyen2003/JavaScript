// Challenge 2

var weightMark = 78;
var tallMark = 1.69;
var weightJoin = 92;
var tallJohn = 1.95;

function calculateBMI(weight, tall) {
    return weight / (tall ** 2);
}

function compareBMI(weightMark, tallMark, weightJoin, tallJohn) {
     var markBMI = calculateBMI(weightMark, tallMark);
     var johnBMI = calculateBMI(weightJoin, tallJohn);
     if(markBMI < johnBMI){
         console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
     } else if(markBMI > johnBMI){
         console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
     } else {
         console.log(`Mark's BMI (${markBMI}) is equal to John's (${johnBMI})!`);
     }
}

compareBMI(weightMark, tallMark, weightJoin, tallJohn);

