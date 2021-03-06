"use strict";

//Data Structures, Modern Operators and Strings
//Coding challenge #2 - Betting app

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
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
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
const totalOdds = Object.values(game.odds);
for (const odd of totalOdds) {
  sumOdd += odd;
}
//console.log(sumOdd);
aveOdd = sumOdd / totalOdds.length;
console.log(aveOdd);

//3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
/*
Odd of victory Bayern Munich: 1.33 
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). Hint: Note how the odds and the game objects have the same property names ????
*/
// I couldn't do this step, too hard.
for (const [team, odd] of Object.entries(game.odds)) {
  const teamString = team === "x" ? "draw :" : `victory ${game[team]} :`;
  console.log(`Odd of ${teamString} ${odd}`);
}

// 4. Bonus: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
/*
{
  Gnarby: 1,
  Hummels: 1,
  Lewandowski: 2
}
*/
// I couldn't do this one. Too hard
//So the solution is to loop over the array (game.scored), and add the array elements as object properties, and then increase the count as we encounter a new occurence of a certain element
//game.scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"]
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);
//Eu n??o consegui entender bem essa solu????o, mas vamos l??.....
/* Aten????o para a leitura correta da solu????o:
  - Foi criado um objeto vazio chamado 'scorers' que ser?? preenchido ?? medida que o looping rolando.
  - Faremos o la??o de repeti????o nomeando cada elemento como 'player' e vamos usar esse la??o para percorrer a array 'game.scored'
  - Usaremos o operador "ternary" como condi????o
  - Vamos iniciar o la??o de repeti????o....
  - Vamos mostrar o primeiro 'player'; vamos adicionar o elemento 'player' na posi????o 'player', mas vamos verificar primeiro se esse elemento j?? existe, se ele j?? existe ent??o ser?? scorers[player] = scorers[player] + 1, do contr??rio ser?? scorers[player] = 1
  - O primeiro 'player' ?? Lewandowski e ele ainda n??o apareceu, ent??o Lewandowski = 1
  - O segundo 'player' ?? Gnarby e ele ainda n??o apareceu, ent??o Gnarby = 1
  - O terceiro 'player' ?? Lewandwski de novo e ele j?? apareceu, ent??o Lewandowski = Lewandowski + 1
  - O quarto 'player' ?? Hummels e ele ainda n??o apareceu, ent??o Hummels = 1
  - Acabou.
*/
