'use strict';
/* //Selectors we will use
document.querySelector('.message').textContent = 'Correct Number!👌🏻';
document.querySelector('.number').textContent =  ;
document.querySelector('.score').textContent =  ;
document.querySelector('.guess').value =  ;
 */
 


document.querySelector('.check').addEventListener('click', function () {
const guess = Number(document.querySelector('.guess').value);
console.log(guess , typeof guess);

    if(!guess){
        document.querySelector('.message').textContent =' 🔴 NO Number!';

    }
    });
