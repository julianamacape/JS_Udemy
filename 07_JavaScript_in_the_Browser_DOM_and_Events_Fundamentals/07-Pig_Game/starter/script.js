'use strict';

// Naming the players:
////// 1) using the hardcoding method (to be akcnowledged, not to be used)
/*
const playerOne = prompt('Qual o nome do Jogador 01?');
document.querySelector('#name--0').textContent = playerOne;
const playerTwo = prompt('Qual o nome do Jogador 02?');
document.querySelector('#name--1').textContent = playerTwo;
*/

////// 2) using a function
let listPlayers = [];

const playersNames = function (nbrPlayers) {
  for (let i = 0; i < nbrPlayers; i++) {
    listPlayers[i] = prompt(`What's the name of Player ${i + 1}?`);
  }
  return listPlayers;
};

playersNames(2); //In this particular game, it'll always be 2 players

/* FIND BELOW THE FUNCTION TO BE USED IN CASE YOU WANT THE USER TO TELL YOU HOW MANY PLAYERS ARE GOING TO PLAY PROVIDED THAT, OF COURSE, YOUR GAME ALLOWS 2+ PLAYERS:

const numberPlayers = function () {
  const howManyPlayers = Number(prompt('How many players?'));
  howManyPlayers < 2
    ? alert('The number of players must be 2+. Please refresh the page.')
    : playersNames(howManyPlayers);
};

numberPlayers();
*/

let playerName = document.querySelectorAll('.name');

for (let i = 0; i < listPlayers.length; i++) {
  playerName[i].textContent = listPlayers[i];
}
