'use strict';
//Define the random secretNumber outside the querySelector else on each check(click) we would get a different secretNumber
//Math: random -> chooses a secretNumber b/w 0-1, trunc removes the decimal portion
let secretNumber = Math.trunc(Math.random() * 20) + 1;

//State variable: all the data that is relevant to the application's state, thus even the secretNumber is a state variable
let score = 20;
let highscore = 0;

//addEventListener(action, event handler) always requires two arguments!
//Function is just a value!
document.querySelector('.check').addEventListener('click', function () {
  //In JS, user input will always b stored in string format and for this game we need to compare the values thus we need to convert using secretNumber()
  const guess = Number(document.querySelector('.guess').value);
  //console.log(guess, typeof guess);

  //Currently clicking check with blank field gives '0'. To avoid this falsy value,
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number😿 ';
  } else if (guess === secretNumber) {
    //When player wins
    document.querySelector('.message').textContent = '🥳 Correct Number!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    //alert('🥳 Correct Number!');
  } else if (guess < secretNumber) {
    //When guess is low
    if (score > 1) {
      document.querySelector('.message').textContent = '❄Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost 😭';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#db2727';
    }
  } else if (guess > secretNumber) {
    //When guess is high
    if (score > 1) {
      document.querySelector('.message').textContent = '🌶Too High!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost! 😭';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#db2727';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start Guessing...';
  document.querySelector('.guess').value = null;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
