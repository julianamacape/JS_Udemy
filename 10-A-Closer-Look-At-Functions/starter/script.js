'use strict';
const addTax = function (rate) {
  return function (value) {
    return value + value * (rate / 100);
  };
};

const addFee = addTax(12);
console.log(addFee(100));
