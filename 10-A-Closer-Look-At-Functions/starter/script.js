'use strict';

const myObject = {
  name: 'Ju',
  age: 34,
  greet: function () {
    console.log(this);
  },
};

myObject.location = 'Quebec city';

myObject.greet();
