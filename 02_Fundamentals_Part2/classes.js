'use strict';

/*
const anos = [1987, 1994, 1985, 1999];
const calcYear = year => year + 3;

console.log(calcYear(anos[2]));
*/

// Bracket notation
/*
const juliana = {
    firstName: 'Juliana',
    lastName: 'Pereira',
    birthYear: 1987,
    isGay: true,
    hasDriverLicense: true,
    job: 'programmer and web developer',
    friends: ['Lyvia', 'Maria', 'Monys'],

    getSummary: function () {
        return `${this.firstName} ${this.lastName} is a ${2021 - this.birthYear}-year-old ${this.job}, she ${this.hasDriverLicense ? "can" : "can't"} drive and she's ${this.isGay ? "gay" : "straight"}.`
    }

}
*/

// const pick = prompt('O que você gostaria de saber sobre mim? Escolha firstName, lastName, age ou job.')

// e se o usuário escolher uma coisa que não tá dentro das opções?

/*
if (juliana[pick]) {
    alert(juliana[pick]);
} else {
    alert('Oops! Atualize a página e escolha uma opção válida.')
}
*/

// alert(`${juliana.firstName} has ${juliana.friends.length} friends and her best friend is ${juliana.friends[1]}.`);

// console.log(juliana.getSummary());

// Loop inside a Loop
//5-rep series of push-ups; 5-rep series of burpees; 5-rep series of squat;

for (let exercise = 1; exercise <= 3; exercise++) {
    if (exercise === 1) {
        for (let pushup = 1; pushup <= 5; pushup++) {
            console.log(`Push-up repetition ${pushup}.`);
        }
    } else if (exercise === 2) {
        for (let burpee = 1; burpee <= 5; burpee++) {
            console.log(`Burpee repetition ${burpee}.`);
        }
    } else if (exercise === 3) {
        for (let squat = 1; squat <= 5; squat++) {
            console.log(`Squat repetition ${squat}.`);
        }
    }
}

/*

*/