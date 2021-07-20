"use strict";

const juliana = {
  firstName: "Juliana",
  year: 1987,

  calcAge: function () {
    console.log(2021 - this.year);

    const isMillenial = function () {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};

juliana.calcAge();
