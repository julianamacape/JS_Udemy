"use strict";

const createUsername = function (user) {
  const username = user
    .toLowerCase()
    .split(" ")
    .map(function (name) {
      return name[0];
    })
    .join("");
  return username;
};

console.log(createUsername("Juliana Maria Carvalho Pereira"));
