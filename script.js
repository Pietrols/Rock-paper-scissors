const resultsDiv = document.querySelector("#results");
const scoreDiv = document.querySelector("#score");

let humanScore = 0;
let computerScore = 0;

// Function to get the computer's choice
function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

// Function to check the winner of a round
function checkWinner(humanSelection, computerSelection) {
  if (humanSelection === computerSelection) {
    return "Tie";
  } else if (
    (humanSelection === "rock" && computerSelection === "scissors") ||
    (humanSelection === "scissors" && computerSelection === "paper") ||
    (humanSelection === "paper" && computerSelection === "rock")
  ) {
    return "Player";
  } else {
    return "Computer";
  }
}

// Function to play a single round
function playRound(humanSelection) {
  const computerSelection = getComputerChoice();
  const result = checkWinner(humanSelection, computerSelection);

  if (result === "Player") {
    humanScore++;
    resultsDiv.textContent = `You win! ${humanSelection} beats ${computerSelection}`;
  } else if (result === "Computer") {
    computerScore++;
    resultsDiv.textContent = `You lose! ${computerSelection} beats ${humanSelection}`;
  } else {
    resultsDiv.textContent = `It's a tie! Both chose ${humanSelection}`;
  }

  // Update the score display
  scoreDiv.textContent = `Player: ${humanScore} | Computer: ${computerScore}`;

  // Check if a player has reached 5 points
  if (humanScore === 5 || computerScore === 5) {
    announceWinner();
  }
}

// Function to announce the winner
function announceWinner() {
  if (humanScore === 5) {
    resultsDiv.textContent = "You won the game! 🎉";
  } else {
    resultsDiv.textContent = "Computer won the game! 😢";
  }

  // Disable buttons after the game ends
  document.getElementById("rock").disabled = true;
  document.getElementById("paper").disabled = true;
  document.getElementById("scissors").disabled = true;
}

// Add event listeners to the buttons
document
  .querySelector("#rock")
  .addEventListener("click", () => playRound("rock"));
document
  .querySelector("#paper")
  .addEventListener("click", () => playRound("paper"));
document
  .querySelector("#scissors")
  .addEventListener("click", () => playRound("scissors"));
