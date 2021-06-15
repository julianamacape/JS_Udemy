"use strict";
const printForecast = function (arr) {
  let strSum = "";
  for (let i = 0; i < arr.length; i++) {
    strSum += `${arr[i]}C in ${i + 1} days 🥵🥶😄`;
  }
  return `🧭 ${strSum}`;
};

const testData1 = [17, 21, 23];
const testData2 = [12, 5, -5, 0, 4];

console.log(printForecast(testData1));
console.log(printForecast(testData2));

/*
Da mesma forma que usamos a variável Sum para somar valores numérios de uma array, também podemos somar as strings de uma array.
Ao invés de Sum = 0, pq obviamente não é um número, Sum = ''; que é o que equivale a uma string vazia
*/
