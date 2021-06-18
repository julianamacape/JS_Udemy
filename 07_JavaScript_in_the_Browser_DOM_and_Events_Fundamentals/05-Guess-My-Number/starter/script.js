'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let curScore = document.querySelector('.score');
let curScoreNbr = 20;

let curHighscore = document.querySelector('.highscore');

document.querySelector('.check').addEventListener('click', function () {
  let userGuess = document.querySelector('.guess').value;
  if (userGuess.length == 0) {
    //if (!userGuess)  significa a mesma coisa, ou seja, chega no mesmo resultado
    document.querySelector('.message').textContent = '🚫 No number!';
  } else if (userGuess > secretNumber) {
    document.querySelector('.message').textContent = '📈 Too high. Try again.';
    curScoreNbr--;
    curScore.textContent = curScoreNbr;
    if (curScoreNbr == 0) {
      document.querySelector('.message').textContent =
        '😩 GAME OVER! You lose. Press AGAIN';
      document.querySelector('body').style.backgroundColor = 'red';
      document.querySelector('.number').textContent = secretNumber;
    }
    if (curScoreNbr < 0) {
      curScore.textContent = 'X';
      document.querySelector('.message').textContent =
        '😩 GAME OVER! You lose. Press AGAIN';
    }
    if (curScoreNbr < 0) curScore.textContent = 'X';
  } else if (userGuess < secretNumber) {
    document.querySelector('.message').textContent = '📉 Too low. Try again.';
    curScoreNbr--;
    curScore.textContent = curScoreNbr;
    if (curScoreNbr == 0) {
      document.querySelector('.message').textContent =
        '😩 GAME OVER! You lose. Press AGAIN';
      document.querySelector('body').style.backgroundColor = 'red';
      document.querySelector('.number').textContent = secretNumber;
    }
    if (curScoreNbr < 0) {
      curScore.textContent = 'X';
      document.querySelector('.message').textContent =
        '😩 GAME OVER! You lose. Press AGAIN';
    }
  } else if (userGuess == secretNumber) {
    document.querySelector('.message').textContent = '🏆 You won the game!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    curHighscore.textContent = curScore.textContent;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
});
