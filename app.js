// variables
let buttons = document.querySelectorAll(".button");
const choices = ["rock", "paper", "scissors"];

let playerPoints = 0;
let computerPoints = 0;

let playerSelection = "";



// function to get a random choice from the computer
function getComputerChoice() {
    let computerChoice = choices[Math.floor(Math.random() * choices.length)]
    return computerChoice;
}

// function to play a round of rock paper scissors
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 0;
    } else if (
        playerSelection === "rock" && computerSelection === "paper" ||
        playerSelection === "paper" && computerSelection === "scissors" ||
        playerSelection === "scissors" && computerSelection === "rock"
        ) {
        computerPoints++;
    }
    else {
        playerPoints++;
    }

}

// get player's choice
buttons.forEach((button) => {
    console.log(button)
    button.addEventListener("click", () => {
        playRound(button.id, getComputerChoice());
    })
})



// playing one round of rock paper scissors
// const playerSelection = "rock";
// const computerSelection = getComputerChoice();

// console.log("Player selection: " + playerSelection);
// console.log("Computer selection: " + computerSelection);
// console.log(playRound(playerSelection, computerSelection));


// playing 5 rounds of rock paper scissors
// function game() {
//     let computerPoint = 0;
//     let playerPoint = 0;
//     for(let i = 0; i < 5; i++) {
//         let pSelection = prompt("Yo what are you playing?")
//         let cSelection = getComputerChoice()
//         let pointCalculator = playRound(pSelection, cSelection);
//         if (pointCalculator === 1) {
//             computerPoint++;
//         } else if (pointCalculator === 2) {
//             playerPoint++;
//         }
//     }
//     console.log(computerPoint);
//     console.log(playerPoint)
//     if (computerPoint > playerPoint) {
//         console.log("Computer rules!");
//     } else if (computerPoint < playerPoint) {
//         console.log("Humans are better :)");
//     } else {
//         console.log("It is a tie!");
//     }
// }
