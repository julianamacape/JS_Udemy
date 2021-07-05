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

//Selecting elements
const score0El = document.querySelector('#score--0');
const current0El = document.querySelector('#current--0');
const score1El = document.querySelector('#score--1');
const current1El = document.querySelector('#current--1');
const currentScoreBoth = document.querySelector('.current-score');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//Initial conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

//Rolling dice functionality
btnRoll.addEventListener('click', function () {
  //1. Generate a random number (dice roll)
  const dice = Math.trunc(Math.random() * 6) + 1;
  //2. Display the dice image according to the number outcome
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
  //3. Check if number 1 was outcome; if TRUE, switch to the other player
  if (dice !== 1) {
    //Add the value of dice to the current score
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    //switch to the other player
    activePlayer = activePlayer === 0 ? 1 : 0;
    //In other words: is the activePlayer "0"? Yes? So Switch to "1". No? So switch do "0"
    currentScore = 0;
    currentScoreBoth.textContent = 0;
  }
});
