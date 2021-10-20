"use strict";
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const max = movements.reduce(
  (acc, cur) => (cur > acc ? cur : acc),
  movements[0]
);
console.log(max);
