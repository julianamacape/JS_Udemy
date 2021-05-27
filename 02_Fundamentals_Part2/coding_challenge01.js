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
        console.log(`Dolphins win (${aveDolphins} vs. ${aveKoalas})`);
    } else if (aveKoalas >= aveDolphins * 2) {
        console.log(`Koalas win (${aveKoalas} vs. ${aveDolphins})`);
    } else {
        console.log(`No team wins!`);
    }
}

checkWinner(aveDolphins, aveKoalas);