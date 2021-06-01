'use strict';

/*
const anos = [1987, 1994, 1985, 1999];
const calcYear = year => year + 3;

console.log(calcYear(anos[2]));
*/

// Bracket notation

const juliana = {
    firstName: 'Juliana',
    lastName: 'Pereira',
    age: 2021 - 1987,
    job: 'programmer and web developer',
    friends: ['Lyvia', 'Maria', 'Monys'],
}

// const pick = prompt('O que você gostaria de saber sobre mim? Escolha firstName, lastName, age ou job.')

// e se o usuário escolher uma coisa que não tá dentro das opções?

/*
if (juliana[pick]) {
    alert(juliana[pick]);
} else {
    alert('Oops! Atualize a página e escolha uma opção válida.')
}
*/

alert(`${juliana.firstName} has ${juliana.friends.length} friends and her best friend is ${juliana.friends[1]}.`);