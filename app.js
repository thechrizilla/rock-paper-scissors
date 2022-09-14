function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let computerChoice = choices[Math.floor(Math.random() * choices.length)]
    return computerChoice;
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === computerSelection) {
        return "It's a tie!";
    } else if (
        playerSelection.toLowerCase() === "rock" && computerSelection === "paper" ||
        playerSelection.toLowerCase() === "paper" && computerSelection === "scissors" ||
        playerSelection.toLowerCase() === "scissors" && computerSelection === "rock"      
        )
        return "Loser, you lost!";
    else {
        return "You are a winner!";
    }
}


const playerSelection = "rock";
const computerSelection = getComputerChoice();

console.log("Player selection: " + playerSelection);
console.log("Computer selection: " + computerSelection);
console.log(playRound(playerSelection, computerSelection));
