// function to get a random choice from the computer

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let computerChoice = choices[Math.floor(Math.random() * choices.length)]
    return computerChoice;
}

// function to play a round of rock paper scissors
function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === computerSelection) {
        return 0;
    } else if (
        playerSelection.toLowerCase() === "rock" && computerSelection === "paper" ||
        playerSelection.toLowerCase() === "paper" && computerSelection === "scissors" ||
        playerSelection.toLowerCase() === "scissors" && computerSelection === "rock"      
        )
        return 1;
    else {
        return 2;
    }
}

// playing one round of rock paper scissors
const playerSelection = "rock";
const computerSelection = getComputerChoice();

console.log("Player selection: " + playerSelection);
console.log("Computer selection: " + computerSelection);
console.log(playRound(playerSelection, computerSelection));


// playing a few rounds of rock paper scissors
function game() {
    let computerPoint = 0;
    let playerPoint = 0;
    for(let i = 0; i < 5; i++) {
        let pSelection = prompt("Yo what are you playing?")
        let cSelection = getComputerChoice()
        let pointCalculator = playRound(pSelection, cSelection);
        if (pointCalculator === 1) {
            computerPoint++;
        } else if (pointCalculator === 2) {
            playerPoint++;
        }
    }
    console.log(computerPoint);
    console.log(playerPoint)
    if (computerPoint > playerPoint) {
        console.log("Computer rules!");
    } else if (computerPoint < playerPoint) {
        console.log("Humans are better :)");
    } else {
        console.log("It is a tie!");
    }
}
