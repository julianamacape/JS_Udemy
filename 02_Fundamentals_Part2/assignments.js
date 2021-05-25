'use strict';

// LECTURE: Functions
function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}.`
}

const brazil = describeCountry('Brazil', 200, 'Brasília');
console.log(brazil);

const usa = describeCountry('The United States of America', 328, 'Washington DC');
console.log(usa);

const canada = describeCountry('Canada', 37, 'Ottawa');
console.log(canada);

// LECTURE: Function Declarations vs. Expressions

// formula: x% = (CP*100) / 7900

// Function declaration
function percentageOfWorld1(countryPopulation) {
    const eqPercentage = (countryPopulation * 100) / 7900;
    return eqPercentage;
}

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

const popBrazil2 = percentageOfWorld2(200);
const popBrazilPer2 = Number(popBrazil2.toFixed(1));
console.log(`With its 200 million people, Brazil represents ${popBrazilPer2}% of the World's population.`);

const popUSA2 = percentageOfWorld1(328);
const popUSAPer2 = Number(popUSA2.toFixed(1));
console.log(`With its 328 million people, the USA represents ${popUSAPer2}% of the World's population.`);

const popCanada2 = percentageOfWorld1(37);
const popCanadaPer2 = Number(popCanada2.toFixed(1));
console.log(`With its 37 million people, Canada represents ${popCanadaPer2}% of the World's population.`);

const popChina2 = percentageOfWorld1(1400);
const popChinaPer2 = Number(popChina2.toFixed(1));
console.log(`With its 1.4 billion people, China represents ${popChinaPer2}% of the World's population.`);