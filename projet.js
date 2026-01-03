
function getComputerChoice() {
  const choices = ["rock", "paper", "scissor"];
  return choices[Math.floor(Math.random() * choices.length)];
}
console.log(getComputerChoice());

