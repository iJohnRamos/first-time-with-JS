
/* what not to do




function playrock() {

  const randomNumber = Math.random();
  let computerMove = '';

  if (randomNumber >= 0 && randomNumber < 1/3) {
    computerMove = 'Rock';
  } 
  else if (randomNumber >= 1/3 && randomNumber < 2/3) {
    computerMove = 'paper';
  } 
  else {
    computerMove = 'Scissors';
  }

  console.log(computerMove);

  let result = '';

  if (computerMove === 'Rock') {
    result = 'tie';
  } 
  else if (computerMove === 'paper') {
    result = 'you lose';
  } 
  else if (computerMove === 'Scissors') {
    result = 'you win';
  }

  alert(`you choosed rock, computer choosed ${computerMove}. ${result}`);
}


function playpaper() {

  const randomNumber = Math.random();
  let computerMove = '';

  if (randomNumber >= 0 && randomNumber < 1/3) {
    computerMove = 'Rock';
  } 
  else if (randomNumber >= 1/3 && randomNumber < 2/3) {
    computerMove = 'paper';
  } 
  else {
    computerMove = 'Scissors';
  }

  console.log(computerMove);

  let result = '';

  if (computerMove === 'Rock') {
    result = 'you win';
  } 
  else if (computerMove === 'paper') {
    result = 'tie';
  } 
  else if (computerMove === 'Scissors') {
    result = 'you lose';
  }

  alert(`you choosed paper, computer choosed ${computerMove}. ${result}`);
}



function playscissors() {

  const randomNumber = Math.random();
  let computerMove = '';

  if (randomNumber >= 0 && randomNumber < 1/3) {
    computerMove = 'Rock';
  } 
  else if (randomNumber >= 1/3 && randomNumber < 2/3) {
    computerMove = 'paper';
  } 
  else {
    computerMove = 'Scissors';
  }

  console.log(computerMove);

  let result = '';

  if (computerMove === 'Rock') {
    result = 'you lose';
  } 
  else if (computerMove === 'paper') {
    result = 'you win';
  } 
  else if (computerMove === 'Scissors') {
    result = 'tie';
  }

  alert(`you choosed scissors, computer choosed ${computerMove}. ${result}`);
}
*/

/* what to do*/
function playGame(playerMove) {

  const randomNumber = Math.random();
  let computerMove = '';

  if (randomNumber < 1/3) {
    computerMove = 'Rock';
  } else if (randomNumber < 2/3) {
    computerMove = 'Paper';
  } else {
    computerMove = 'Scissors';
  }

  let result = '';

  if (playerMove === computerMove) {
    result = 'tie';
  } 
  else if (
    (playerMove === 'Rock' && computerMove === 'Scissors') ||
    (playerMove === 'Paper' && computerMove === 'Rock') ||
    (playerMove === 'Scissors' && computerMove === 'Paper')
  ) {
    result = 'you win';
  } else {
    result = 'you lose';
  }

  alert(`you chose ${playerMove}, computer chose ${computerMove}. ${result}`);
}