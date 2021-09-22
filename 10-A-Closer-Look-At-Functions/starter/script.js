'use strict';
const secureBooking = function () {
  let paxCount = 0;

  return function () {
    paxCount++;
    console.log(`${paxCount} passengers so far.`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();
booker();
booker();
