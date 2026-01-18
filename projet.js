let humanScore = 0;
let computerScore = 0;
let currentRound = 0;


function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(humanChoice) {
  const computerChoice = getComputerChoice();
  let resultText = "";
  const resultDiv = document.getElementById("result");
  if (humanChoice === computerChoice) {
    resultText = `Equality! You: ${humanChoice} | Computer: ${computerChoice}`;
    resultDiv.style.color = "gray"
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    resultText = `You win this round! ${humanChoice} beats ${computerChoice}`;
    resultDiv.style.color = "green"
  } else {
    computerScore++;
    resultText = `You lose this round! ${computerChoice} beats ${humanChoice}`;
    resultDiv.style.color = "red"
  }

  currentRound++

  document.getElementById("result").textContent = resultText;
  document.getElementById("score").textContent = `Score => You: ${humanScore} | Computer: ${computerScore}`;
  document.getElementById("round").textContent = `round: ${currentRound}`;
  
}

// Listeners pour les boutons
document.getElementById("rock").addEventListener("click", () => playRound("rock"));
document.getElementById("paper").addEventListener("click", () => playRound("paper"));
document.getElementById("scissors").addEventListener("click", () => playRound("scissors"));
