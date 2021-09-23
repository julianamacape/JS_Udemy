'use strict';

let f;

const g = function () {
  const a = 23;

  f = function () {
    console.log(a * 2);
  };
};

g();
f();
