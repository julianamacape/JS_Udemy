"use strict";

//Data Structures, Modern Operators and Strings
//Coding challenge #2 - Betting app
const odds = {
  team1: 1.33,
  x: 3.25,
  team2: 6.5,
};

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
  ],
  odds,
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
};

//1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
//I used destructuring and for-op to loop over the game.scored array
// for (const player of game.scored) console.log(player); -- this is just to see what it does
// for (const player of game.scored.entries()) console.log(player); -- this is just to see what it does
for (const [index, player] of game.scored.entries()) {
  console.log(`Goal ${index + 1} by ${player}`);
}

// 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)

/* This was my solution (kinda long)
const totalOdds = Object.values(odds);
//console.log(totalOdds);
const aveOdd = function (...oddsValues) {
  let oddSum = 0;
  let oddAve = 0;
  for (let i = 0; i < oddsValues.length; i++) {
    oddSum += oddsValues[i];
  }
  oddAve = oddSum / oddsValues.length;
  console.log(oddAve);
};

aveOdd(...totalOdds);
*/

// I enhanced my solution after watching the teacher's solution
let aveOdd = 0;
let sumOdd = 0;
const totalOdds = Object.values(odds);
for (const odd of totalOdds) {
  sumOdd += odd;
}
//console.log(sumOdd);
aveOdd = sumOdd / totalOdds.length;
console.log(aveOdd);
