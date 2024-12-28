//write a function that returns rock, paper or scissors randomly using Math.random
let computerChoice;
let humanChoice;
function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    computerChoice = "rock";
  } else if (randomNumber === 1) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
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

//check winner
function checkWinner(humanSelection, computerSelection) {
  if (humanSelection == computerSelection) {
    return "Tie";
  } else if (
    (humanSelection == "rock" && computerSelection == "scissors") ||
    (humanSelection == "scissors" && computerSelection == "paper") ||
    (humanSelection == "paper" && computerSelection == "rock")
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

//write the logic to play entire game
function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  console.log("Welcome!");
  for (i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    console.log(playRound(humanSelection, computerSelection));
    console.log("________________");
    if (checkWinner(humanSelection, computerSelection) == "Player") {
      humanScore++;
    } else if (checkWinner(humanSelection, computerSelection) == "Computer") {
      computerScore++;
    }
  }
  console.log("Game Over!");
  console.log(humanScore, computerScore);
  if (humanScore > computerScore) {
    console.log("Player was the winner!");
  } else if (humanScore < computerScore) {
    console.log("Computer was the winner!");
  } else {
    console.log("We have a tie!");
  }
}
playGame();
