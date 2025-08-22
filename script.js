'use strict';


let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  
  // When there is no input
  if (!guess) {
    displayMessage('No number! ⛔️');
    
    // When Player wins
  } else if (guess === number) {
    displayMessage('Correct Number!👌🏻');
    document.querySelector('.number').textContent = number;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '25rem';
    
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    //When guess is Wrong
  } else if (guess !== number) {
    if (score > 1) {
      displayMessage(guess > number ? ' Too High ! ⬆️ ' : ' Too Low ! ⬇️ ');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game! 😢');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', 
  function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  displayMessage('Start guessing...');
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#bd913f';
  document.querySelector('.number').style.width = '15rem';
});
