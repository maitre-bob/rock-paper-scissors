
function getComputerChoice() {
  const choices = ["rock", "paper", "scissor"];
  return choices[Math.floor(Math.random() * choices.length)];
}
console.log(getComputerChoice());

function getHumanChoice() {
  const choice = prompt("Choose: rock, paper, or scissors");
  return choice.toLowerCase();
}
const human = getHumanChoice();
console.log("User chose:", human);