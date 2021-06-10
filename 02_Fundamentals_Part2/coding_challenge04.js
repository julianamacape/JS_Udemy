'use strict';

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

function calcTip(bill) {
    let tip;
    if (bill >= 50 && bill <= 300) {
        tip = bill * 0.15;
        return tip;
    } else {
        tip = bill * 0.2;
        return tip;
    }
}

for (let i = 0; i < bills.length; i++) {
    tips[i] = calcTip(bills[i]);
    totals[i] = tips[i] + bills[i];
    console.log(`Your bill was $${bills[i]}, so the equivalent tip should be $${tips[i]} and the total amount you must pay is $${totals[i]}. Thanks.`);
}


//Bonus
function calcAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        // sum = sum + arr[i];
        sum += arr[i];
    }
    return sum / arr.length;
};

console.log(calcAverage(totals));