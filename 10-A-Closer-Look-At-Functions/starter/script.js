'use strict';

const book = {
  booker(flightNum, name) {
    console.log(`${name} booked a seat on flight ${flightNum}`);
  },
};

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function() {}
  book,
};

lufthansa.book.booker(239, 'Jonas Schmedtmann');
//lufthansa.book(635, 'John Smith');

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};
