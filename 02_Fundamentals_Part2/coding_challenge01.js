'use strict';

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

/*
Teste data #1
const aveDolphins = Number(calcAverage(44, 23, 71).toFixed(1));
const aveKoalas = Number(calcAverage(65, 54, 49).toFixed(1));
*/

//Teste data #2
const aveDolphins = Number(calcAverage(85, 54, 41).toFixed(1));
const aveKoalas = Number(calcAverage(23, 34, 27).toFixed(1));


function checkWinner(aveDolphins, aveKoalas) {
    if (aveDolphins >= aveKoalas * 2) {
        return `Dolphins win (${aveDolphins} vs. ${aveKoalas})`;
    } else if (aveKoalas >= aveDolphins * 2) {
        return `Koalas win (${aveKoalas} vs. ${aveDolphins})`;
    } else {
        return `No team wins!`
    }
}

console.log(checkWinner(aveDolphins, aveKoalas));