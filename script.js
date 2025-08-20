'use strict';
let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.check').addEventListener('click',
  function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    // When there is no input
    if (!guess) {
      document.querySelector('.message').textContent = ' 🔴 NO Number!';
      // When Player wins
    } else if (guess === number) {
      document.querySelector('.message').textContent = 'Correct Number!👌🏻';
      document.querySelector('.number').textContent = number;
       document.querySelector('body').style.backgroundColor = '#60b347';
       document.querySelector('.number').style.width = '25rem';
      if (score > highscore){
        highscore = score;
        document.querySelector('highscore').textContent = highscore;
      }
      //When guess in too high
    } else if (guess > number) {
      if (score > 1) {
        document.querySelector('.message').textContent = ' Too High ! ⬆️ ';
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        document.querySelector('.message').textContent =
          'You lost the game! 😢';
        document.querySelector('.score').textContent = 0;
      }
      //When guess in too low
    } else if (guess < number) {
      if (score > 1) {
        document.querySelector('.message').textContent = ' Too Low ! ⬇️ ';
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        document.querySelector('.message').textContent =
          'You lost the game! 😢';
        document.querySelector('.score').textContent = 0;
      }
    }
  });
  document.querySelector('.again').addEventListener('click' ,   function () {
    score = 20;
    document.querySelector('.score').textContent = score;
    number = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#bd913f';
    document.querySelector('.number').style.width = '15rem';
  }
);
