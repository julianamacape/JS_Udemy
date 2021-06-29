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




// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;


// Starting conditions
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // 3. Check for rolled 1
    if (dice !== 1) {
      // Add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. Add current score to active player's score
    scores[activePlayer] += currentScore;
    // scores[1] = scores[1] + currentScore

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 2. Check if player's score is >= 100
    if (scores[activePlayer] >= 100) {
      // Finish the game
      playing = false;
      diceEl.classList.add('hidden');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // Switch to the next player
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);
