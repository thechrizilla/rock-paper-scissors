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
    let computer_point = 0;
    let player_point = 0;
    for(let i = 0; i < 5; i++) {
        let pSelection = prompt("Yo what are you playing?")
        let cSelection = getComputerChoice()
        let point_calculator = playRound(pSelection, cSelection);
        if (point_calculator === 1) {
            computer_point++;
        } else if (point_calculator === 2) {
            player_point++;
        }
    }
    console.log(computer_point);
    console.log(player_point)
    if (computer_point > player_point) {
        console.log("Computer rules!");
    } else if (computer_point < player_point) {
        console.log("Humans are better :)");
    } else {
        console.log("It is a tie!");
    }
}
