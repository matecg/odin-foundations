const OPTIONS = ["rock", "paper", "scissors"];
const btns = document.querySelectorAll(".buttons-container > button");
const playerScoreUI = document.querySelector(".player-score");
const computerScoreUI = document.querySelector(".computer-score");
let humanScore = 0;
let computerScore = 0;

btns.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        console.log(i);
        playRound(i, getComputerChoice());
    })
})

function getComputerChoice() {
    const idx = Math.floor(Math.random() * 3);
    return OPTIONS[idx];
}

function getHumanChoice() {
    const choice = prompt("What's your choice? (rock/paper/scissors)", getComputerChoice());
    return choice.toLowerCase();
}

function playRound(humanIdx, computerChoice) {
    const humanChoice = OPTIONS[humanIdx];
    const computerIdx = OPTIONS.indexOf(computerChoice);
    if (computerIdx === (humanIdx + 1) % 3) {
        console.log("The computer wins this round!");
        console.log(`${computerChoice} beats ${humanChoice}`);
        computerScore++;
        return;
    }
    if (humanIdx === (computerIdx + 1) % 3) {
        console.log("📣 The player wins this round! 🎊");
        console.log(`${humanChoice} beats ${computerChoice}`);
        humanScore++;
        return;
    }
    console.log("Looks like we have a draw!");
    console.log(`Both players selected ${humanChoice}.`);
}

function processResult() {
    if (humanScore > computerScore) {
        console.log("🎊🥳 The Player wins! 🎊🥳");
        return;
    }
    if (computerScore > humanScore) {
        console.log("The computer won this time! 🤖");
        return;
    }
    console.log("Wow! Looks like we got a draw! 😮");
}

