"use strict";

//Working With Arrays
//Coding challenge #2 - A Study About Dogs' Ages

//Task #0 - Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages')
const calcAverageHumanAge = function (ages) {
  //Task #1 - Calculate the dog age in human years
  const humanAges = ages.map((age) => (age <= 2 ? 2 * age : 16 + age * 4));
  //Task #2 - Exclude all dogs that are less than 18 human years old
  const adultDogs = humanAges.filter((age2) => age2 >= 18);
  //Task #3 - Calculate the average human age of all adult dogs
  const averageAdults =
    adultDogs.reduce((acc, age3) => acc + age3, 0) / adultDogs.length;
  return averageAdults;
};

//Task #4 - Run the function for both test data sets
console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));
