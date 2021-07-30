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

//console.log(players1, players2);

/* 
2. The first player in any player array is the goal keeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
*/
//I used arrays 'destructuring' and the 'rest' pattern here
const [gk, ...fieldPlayers] = players1;
//console.log(gk, fieldPlayers);

//3. Create an array 'allPlayers' containing all players of both teams (22 players)
//I used the "spread" operator here
const allPlayers = [...game.players[0], ...game.players[1]];
//console.log(allPlayers);

//4. During the game, Bayern Munich (team1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
//I used the "spread" operator
const playersFinal1 = [...players1, "Thiago", "Coutinho", "Perisic"];
//console.log(playersFinal1);

//5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
//I used objects "destructuring" and variables names alteration here
const { team1, x: draw, team2 } = game.odds;
//console.log(team1, draw, team2);

//6. Write a function ('printGoals') that receives an arbitrary number of player names (not an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
//I used the 'rest' patterns with functions and I also used o "spread" operator
const printGoals = function (...playerName) {
  console.log(playerName);
  let nbrGoals = playerName.length;
  console.log(`Total of ${nbrGoals} goals.`);
};
printGoals("Davies");
printGoals("Davies", "Muller");
printGoals("Davies", "Muller", "Lewandowski");
printGoals(...game.scored);

//7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, without using an if/else statement or the ternary operator.
console.log(`Team 1: odds ${team1}` || `Team 2: odds ${team2}`);
