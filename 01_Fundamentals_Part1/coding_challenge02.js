//Test data #1
/*
let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;
let markBMI = massMark / (heightMark ** 2);
let johnBMI = massJohn / (heightJohn ** 2);
let markHigherBMI = markBMI > johnBMI
*/


//Test data #2
let massMark = 95;
let heightMark = 1.88;
let massJohn = 85;
let heightJohn = 1.76;
let markBMI = massMark / (heightMark ** 2);
let johnBMI = massJohn / (heightJohn ** 2);
let markHigherBMI = markBMI > johnBMI


if (markHigherBMI == true) {
    console.log(`Mark's BMI is ${markBMI} and John's BMI is ${johnBMI}, so Mark's BMI is higher than John's.`);
} else {
    console.log(`Mark's BMI is ${markBMI} and John's BMI is ${johnBMI}, so Mark's BMI is lower than John's.`);
}