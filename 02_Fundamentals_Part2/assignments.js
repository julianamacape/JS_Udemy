'use strict';

// LECTURE: Functions
/*
function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}.`
}

const brazil = describeCountry('Brazil', 200, 'Brasília');
console.log(brazil);

const usa = describeCountry('The United States of America', 328, 'Washington DC');
console.log(usa);

const canada = describeCountry('Canada', 37, 'Ottawa');
console.log(canada);
*/

// LECTURE: Function Declarations vs. Expressions
/*
// formula: x% = (CP*100) / 7900

// Function declaration
function percentageOfWorld1(countryPopulation) {
    const eqPercentage = (countryPopulation * 100) / 7900;
    return eqPercentage;
}

console.log('Function declaration');

const popBrazil = percentageOfWorld1(200);
const popBrazilPer = Number(popBrazil.toFixed(1));
console.log(`With its 200 million people, Brazil represents ${popBrazilPer}% of the World's population.`);

const popUSA = percentageOfWorld1(328);
const popUSAPer = Number(popUSA.toFixed(1));
console.log(`With its 328 million people, the USA represents ${popUSAPer}% of the World's population.`);

const popCanada = percentageOfWorld1(37);
const popCanadaPer = Number(popCanada.toFixed(1));
console.log(`With its 37 million people, Canada represents ${popCanadaPer}% of the World's population.`);

const popChina = percentageOfWorld1(1400);
const popChinaPer = Number(popChina.toFixed(1));
console.log(`With its 1.4 billion people, China represents ${popChinaPer}% of the World's population.`);

// Function expression
const percentageOfWorld2 = function (countryPopulation) {
    const eqPercentage = (countryPopulation * 100) / 7900;
    return eqPercentage;
}

console.log('Function Expression');

const popBrazil2 = percentageOfWorld2(200);
const popBrazilPer2 = Number(popBrazil2.toFixed(1));
console.log(`With its 200 million people, Brazil represents ${popBrazilPer2}% of the World's population.`);

const popUSA2 = percentageOfWorld2(328);
const popUSAPer2 = Number(popUSA2.toFixed(1));
console.log(`With its 328 million people, the USA represents ${popUSAPer2}% of the World's population.`);

const popCanada2 = percentageOfWorld2(37);
const popCanadaPer2 = Number(popCanada2.toFixed(1));
console.log(`With its 37 million people, Canada represents ${popCanadaPer2}% of the World's population.`);

const popChina2 = percentageOfWorld2(1400);
const popChinaPer2 = Number(popChina2.toFixed(1));
console.log(`With its 1.4 billion people, China represents ${popChinaPer2}% of the World's population.`);
*/

// LECTURE: Arrow Functions
/*
const percentageOfWorld3 = countryPopulation => (countryPopulation * 100) / 7900;

console.log('Arrow Function');

const popBrazil3 = percentageOfWorld3(200);
const popBrazilPer3 = Number(popBrazil3.toFixed(1));
console.log(`With its 200 million people, Brazil represents ${popBrazilPer3}% of the World's population.`);

const popUSA3 = percentageOfWorld3(328);
const popUSAPer3 = Number(popUSA3.toFixed(1));
console.log(`With its 328 million people, the USA represents ${popUSAPer3}% of the World's population.`);

const popCanada3 = percentageOfWorld3(37);
const popCanadaPer3 = Number(popCanada3.toFixed(1));
console.log(`With its 37 million people, Canada represents ${popCanadaPer3}% of the World's population.`);

const popChina3 = percentageOfWorld3(1400);
const popChinaPer3 = Number(popChina3.toFixed(1));
console.log(`With its 1.4 billion people, China represents ${popChinaPer3}% of the World's population.`);
*/

// LECTURE: Functions Calling Other Functions

/* This function has been declared in lines 22-25

function percentageOfWorld1(countryPopulation) {
    const eqPercentage = (countryPopulation * 100) / 7900;
    return eqPercentage;
}


function describePopulation(country, population) {
    const calcPercentage = Number(percentageOfWorld1(population).toFixed(1));

    return `With its ${population} million people, ${country} represents ${calcPercentage}% of the world's population.`
};

console.log(describePopulation('Canada', 37.8));
console.log(describePopulation('Portugal', 11));
console.log(describePopulation('the United States', 328));
*/

// LECTURE: Introduction to Arrays
/*
const allPopulations = [200, 328, 37.8, 11];
console.log(allPopulations.length === 4);
const allPercentages = [percentageOfWorld1(allPopulations[0]), percentageOfWorld1(allPopulations[1]), percentageOfWorld1(allPopulations[2]), percentageOfWorld1(allPopulations[3])];
console.log(allPercentages);
*/

// LECTURE: Basic Array Operations (Methods)
/*
const neighbors = ['Argentina', 'Venezuela', 'Chile', 'Colômbia', 'Bolivia'];

neighbors.push('Utopia');

neighbors.pop();



if (neighbors.includes('Germany') === false) {
    console.log('Probably not a central European country :D');
};

neighbors[neighbors.indexOf('Chile')] = 'Republic of Chile';

console.log(neighbors);
*/

// LECTURE: Introduction to Objects
/*
const myCountry = {
    country: 'Brazil',
    capital: 'Brasília',
    language: 'Portuguese',
    population: '200',
    neighbors: ['Argentina', 'Venezuela', 'Chile', 'Colômbia', 'Bolivia']
}
*/

// LECTURE: Dot vs. Bracket Notation
// Template: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries and a capital called Helsinki.'
/*
console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbors.length} neighbouring countries and a capital called ${myCountry.capital}.`);

myCountry.population = 202;

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbors.length} neighbouring countries and a capital called ${myCountry.capital}.`);

myCountry['population'] = 200;

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbors.length} neighbouring countries and a capital called ${myCountry.capital}.`);
*/

// LECTURE: Object Methods
/*
const myCountry = {
    country: 'Brazil',
    capital: 'Brasília',
    language: 'Portuguese',
    population: '200',
    neighbors: ['Argentina', 'Venezuela', 'Chile', 'Colômbia', 'Bolivia'],

    describe: function () {
        return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbors.length} neighbouring countries and a capital called ${this.capital}.`
    },


    checkIsIsland: function () {
        this.isIsland = this.neighbors.length === 0 ? true : false;
        return this.isIsland;
    },

};

console.log(myCountry.describe());
console.log(myCountry.checkIsIsland());
*/

//LECTURE: Iteration: The for Loop
/*
for (let count = 1; count <= 50; count++) {
    console.log(`Voter ${count} has voted.`);
}
*/

//LECTURE: Looping Arrays, Breaking and Continuing

function percentageOfWorld1(countryPopulation) {
    const eqPercentage = (countryPopulation * 100) / 7900;
    return eqPercentage;
}

const allPopulations = [200, 328, 37.8, 11];

const allPercentages = [];

for (let i = 0; i < allPopulations.length; i++) {
    allPercentages[i] = percentageOfWorld1(allPopulations[i]);
}

console.log(allPercentages);