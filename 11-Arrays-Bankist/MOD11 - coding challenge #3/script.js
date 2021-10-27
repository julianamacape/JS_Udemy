"use strict";

//Working With Arrays
//Coding challenge #3 - A Study About Dogs' Ages v2.0

//Task #1 - Rewrite the calcAverageHumanAge() function as an arrow function and using chaining
/*
const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map((age) => (age <= 2 ? 2 * age : 16 + age * 4));

  const adultDogs = humanAges.filter((age2) => age2 >= 18);

  const averageAdults =
    adultDogs.reduce((acc, age3) => acc + age3, 0) / adultDogs.length;
  return averageAdults;
};
*/

const calcAverageHumanAge = (ages) =>
  ages
    .map((age) => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter((age) => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

//Task #2 - Run the function for both test data sets
console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));
