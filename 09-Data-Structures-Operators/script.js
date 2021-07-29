"use strict";

//Data Structures, Modern Operators and Strings
//Coding challenge #1 - Betting app

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
    [
      "Lukas Hradecky",
      "Panagiotis Retsos",
      "Jonathan Tah",
      "Mitchel Bakker",
      "Odilon Kossounou",
      "Edmond Tapsoba",
      "Wendell",
      "Daley Sinkgraven",
      "Mitchell Weiser",
      "Timothy Fosu-Mensah",
      "Jeremie Frimpong",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//1. Create one player array for each team (variables 'players1' and 'players2')
// I used 'destructuring' here.
const [players1, players2] = game.players;

console.log(players1, players2);

/* 
2. The first player in any player array is the goal keeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
*/
//I used 'destructuring' and the 'rest' pattern here
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);
