//write a function that returns rock, paper or scissors randomly using Math.random
let computerChoice;
function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
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
function getHumanChoice() {
  const humanChoice = prompt("Rock, Paper or Scissors?");
  return playRound;
}

//write a variable to keep player scores.
const humanScore = 0;
const computerScore = 0;

//write the logic to play a single round.
function playRound(humanChoice, computerChoice) {
  const draw = prompt("I'ts a tie!");
  const lose = prompt("You Lose! ${humanChoice} beats ${computerChoice}");
  const win = prompt("You win! ${computerChoice} beats ${humanChoice}");

  if (humanChoice.toLowerCase() === computerChoice) {
    return draw;
  } else if (
    (humanChoice.toLowerCase() === "Rock" && computerChoice === "Scissors") ||
    (humanChoice.toLowerCase() === "Scissors" && computerChoice === "Paper") ||
    (humanChoice.toLowerCase() === "Paper" && computerChoice === "Rock")
  ) {
    return win;
  } else {
    return lose;
  }
}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

//write the logic to play entire game
