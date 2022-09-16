// variables
const buttons = document.querySelectorAll(".button");

const computerResults = document.createElement('div');
const playerResults = document.createElement('div');
const computerP = document.querySelector(".computer-points-title");
const playerP = document.querySelector(".player-points-title");

const computerChoice = document.createElement('div');
const playerChoice = document.createElement('div');
const computerC = document.querySelector(".computer-choice-title");
const playerC = document.querySelector(".player-choice-title");

const finalPoints = document.createElement('div');
const finalResultsContainer = document.querySelector('.finals-container');

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

// displaying results based on player's input
buttons.forEach((button) => {
    console.log(button)
    button.addEventListener("click", () => {
        // get both computer and player choice
        let cc = getComputerChoice();
        let pc = button.id;

        // play the game
        playRound(pc, cc);

        // showing choices
        computerChoice.classList.add('choice');
        playerChoice.classList.add('choice');
        computerChoice.textContent = `${cc}`;
        playerChoice.textContent = `${pc}`;
        computerC.appendChild(computerChoice);
        playerC.appendChild(playerChoice);

        // showing points
        computerResults.classList.add('points');
        playerResults.classList.add('points');
        computerResults.textContent = `${computerPoints}`;
        playerResults.textContent = `${playerPoints}`;
        computerP.appendChild(computerResults);
        playerP.appendChild(playerResults);

        // conditions for the end of the game
        if (computerPoints === 5) {
            finalPoints.classList.add("fpoints");
            finalPoints.textContent = "YOU ARE A LOSER, COMPUTER WINS";
            finalResultsContainer.appendChild(finalPoints);
        } else if (playerPoints === 5 ) {
            finalPoints.classList.add("fpoints");
            finalPoints.textContent = "YOU WIN";
            finalResultsContainer.appendChild(finalPoints);
        } else {
        }
    })
})