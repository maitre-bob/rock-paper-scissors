
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}
console.log(getComputerChoice());

function getHumanChoice() {
  const choice = prompt("Choose: rock, paper, or scissors");
  return choice.toLowerCase();
}
const human = getHumanChoice();
console.log("User chose:", human);


// Score des joueurs
let humanScore = 0;
let computerScore = 0;

// Fonction pour jouer une manche
function playRound(humanChoice, computerChoice) {
  // Rendre le choix humain insensible à la casse
  humanChoice = humanChoice.toLowerCase();

  console.log("You chose:", humanChoice);
  console.log("Computer chose:", computerChoice);

  // Vérifier les égalités
  if (humanChoice === computerChoice) {
    console.log("It's a tie!");
    return;
  }

  // Vérifier toutes les combinaisons gagnantes
  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++; // humain gagne
    console.log(`You win this round! ${humanChoice} beats ${computerChoice}`);
  } else {
    computerScore++; // ordinateur gagne
    console.log(`You lose this round! ${computerChoice} beats ${humanChoice}`);
  }

  // Afficher les scores actuels
  console.log(`Score => You: ${humanScore} | Computer: ${computerScore}`);
}




// Fonction principale pour jouer 5 manches
function playGame() {

  // Jouer 5 manches
  for (let i = 1; i <= 5; i++) {
    console.log(`--- Round ${i} ---`);
    const humanChoice = prompt("Choose: rock, paper, or scissors");
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice,);
  }

  // Afficher le score final
  console.log(`Final Score => You: ${humanScore} | Computer: ${computerScore}`);

  // Déterminer le vainqueur
  if (humanScore > computerScore) {
    console.log("Congratulations! You won the game!");
  } else if (humanScore < computerScore) {
    console.log("Sorry! You lost the game!");
  } else {
    console.log("The game is a tie!");
  }
}