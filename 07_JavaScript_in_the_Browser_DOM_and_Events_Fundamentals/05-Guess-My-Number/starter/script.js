'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.check').addEventListener('click', function () {
  let userGuess = document.querySelector('.guess').value;
  if (userGuess.length == 0) {
    //if (!userGuess)  significa a mesma coisa, ou seja, chega no mesmo resultado
    document.querySelector('.message').textContent = '🚫 No number!';
  } else if (userGuess > secretNumber) {
    document.querySelector('.message').textContent = '📈 Too high. Try again.';
  } else if (userGuess < secretNumber) {
    document.querySelector('.message').textContent = '📉 Too low. Try again.';
  } else if (userGuess == secretNumber) {
    document.querySelector('.message').textContent = '🏆 You won the game!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
  }
});
