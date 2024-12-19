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
  let humanChoice = prompt("Rock, Paper or Scissors?");
  while (
    humanChoice === null || // Handle "Cancel"
    humanChoice.trim() === "" || // Handle empty input
    !["rock", "paper", "scissors"].includes(humanChoice.trim().toLowerCase())
  ) {
    // Validate input
    humanChoice = prompt(
      "Invalid input. Please enter Rock, Paper, or Scissors:"
    );
  }

  return humanChoice.trim().toLowerCase(); // Return validated and lowercase choice
}

//write a variable to keep player scores.
const humanScore = 0;
const computerScore = 0;

//write the logic to play a single round.
function playRound(humanChoice, computerChoice) {
  const draw = "I'ts a tie!";
  const lose = "You Lose! ${humanChoice} beats ${computerChoice}";
  const win = "You win! ${computerChoice} beats ${humanChoice}";

  if (humanChoice === computerChoice) {
    return draw;
  } else if (
    (humanChoice === "Rock" && computerChoice === "Scissors") ||
    (humanChoice === "Scissors" && computerChoice === "Paper") ||
    (humanChoice === "Paper" && computerChoice === "Rock")
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
