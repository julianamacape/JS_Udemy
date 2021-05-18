//LECTURE: Values and Variables

const country = "Brazil";
const continent = "South America";
const population = 200;

console.log(country);
console.log(continent);
console.log(population);

// LECTURE: Data Types

const isIsland = false;
let language;

console.log(isIsland);
console.log(language);

//LECTURE: let, const and var

language = "portuguese";

// LECTURE: Basic Operators

//1 & 2
console.log((population / 2) + 1);

//3.
const finlandPop = 6
console.log(population > finlandPop);

//4.
const averageCountryPop = 33;
console.log(population < averageCountryPop);

//5.
const description = 'Brazil is is South America, and its 200 million people speak Portuguese.'
console.log(description);

// LECTURE: Strings and Template Literals
const description2 = `${country} is in ${continent} and its ${population} million people speak ${language}.`
console.log(description2);

// LECTURE: Taking Decisions: if / else Statements
let diffPopulation = 33 - population;
if (population > 33) {
    console.log(`${country}'s population is above average.`)
} else {
    console.log(`${country}'s population is ${diffPopulation} million below everage.`)
}

// LECTURE: Type Conversion and Coercion
console.log('9' - '5'); // o sinal de subtração vai COAGIR as strings a virarem números então = 4
console.log('19' - '13' + '17'); // o sinal de subtração vai COAGIR as strings a virarem números então = 6 e a adição vai virar string então = 617
console.log('19' - '13' + 17); // o sinal de subtração vai COAGIR as strings a virarem números então = 6 e a adição vai somar normal então = 23
console.log('123' < 57); // o sinal de menor-que vai COAGIR a string a virar número então 123 < 57 = falso
console.log(5 + 6 + '4' + 9 - 4 - 2); /* os primeiros dois numeros somam-se normalmente, ai em seguida viram string então = '114', ai o 9 vira string também então = '1149' e o sinal de subtração faz tudo virar número então = 1143
*/

/* LECTURE: Equality Operators: == vs. ===
const numNeighbours = Number(prompt('How many neighbour countries does your country have?'));
if (numNeighbours === 1) {
    console.log("Only 1 border!");
} else if (numNeighbours > 1) {
    console.log("More than 1 border");
} else {
    console.log("No borders");
}
*/

// LECTURE: Logical Operators
if (language === "english" && population < 50 && isIsland === false) {
    console.log(`Sarah, you should definitely live in ${country}.`)
} else {
    console.log(`I'm sorry, Sarah, but ${country} isn't the right place for you.`)
}