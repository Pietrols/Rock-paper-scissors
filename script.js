//write a function that returns rock, paper or scissors randomly using Math.random
let computerChoice;
function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    computerChoice = "rock";
  } else if (randomNumber === 1) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
  console.log(computerChoice);
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

//check winner
function checkWinner(humanChoice, computerChoice) {
  if (humanChoice == computerChoice) {
    return "Tie";
  } else if (
    (humanChoice == "rock" && computerChoice == "scissors") ||
    (humanChoice == "scissors" && computerChoice == "paper") ||
    (humanChoice == "paper" && computerChoice == "rock")
  ) {
    return "Player";
  } else {
    return "Computer";
  }
}

//write the logic to play a single round.
function playRound(humanChoice, computerChoice) {
  const draw = "It is a tie!";
  const lose = `You Lose! ${computerChoice} beats ${humanChoice}`;
  const win = `You win! ${humanChoice} beats ${computerChoice}`;
  const result = checkWinner(humanChoice, computerChoice);
  if (result == "Player") {
    return win;
  } else if (result == "Tie") {
    return draw;
  } else {
    return lose;
  }
}
const humanSelection = "rock";
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
console.log(playRound(humanSelection, computerSelection));
//write the logic to play entire game
