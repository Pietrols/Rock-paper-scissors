//write a function that returns rock, paper or scissors randomly using Math.random
function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  let computerChoice;

  if (randomNumber === 0) {
    computerChoice = "Rock";
  } else if (randomNumber === 1) {
    computerChoice = "Paper";
  } else {
    computerChoice = "Scissors";
  }
  return computerChoice;
}

//write a function that takes human choice and returns it.
function getHumanChoice() {}

//write a variable to keep player scores.
//write the logic to play a single round.
//write the logic to play entire game
