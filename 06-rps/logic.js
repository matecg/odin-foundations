const OPTIONS = ["rock", "paper", "scissors"];
const MAX_ROUNDS = 5;
const btns = document.querySelectorAll(".buttons-container > button");
const playerScoreUI = document.querySelector(".player-score");
const computerScoreUI = document.querySelector(".computer-score");
const resultPara = document.querySelector(".result");
const restartBtn = document.querySelector(".restart-btn");
let playerScore = 0;
let computerScore = 0;

restartBtn.style.display = "none";
restartBtn.addEventListener('click', restartGame);

btns.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        const result = playRound(i, getComputerChoice());
        updateTurnUI(result);
        processResult();
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
        computerScore++;
        return `The computer wins this round!\n${computerChoice} beats ${humanChoice}`;
    }
    if (humanIdx === (computerIdx + 1) % 3) {
        playerScore++;
        return `📣 The player wins this round! 🎊\n${humanChoice} beats ${computerChoice}`;
    }
    return `Looks like we have a draw!\nBoth players selected ${humanChoice}.`
}

function updateTurnUI(result) {
    resultPara.textContent = result;
    playerScoreUI.textContent = playerScore;
    computerScoreUI.textContent = computerScore;
}

function restartGame() {
    playerScore = 0;
    computerScore = 0;
    btns.forEach((btn) => btn.disabled = false);
    updateTurnUI("");
    restartBtn.style.display = "none";
}

function processResult() {
    if (playerScore < MAX_ROUNDS && computerScore < MAX_ROUNDS) return;

    let gameOver = playerScore === MAX_ROUNDS
        ? "🎊🥳 The Player wins! 🎊🥳"
        : "The computer won this time! 🤖";
    resultPara.textContent = gameOver;
    btns.forEach((btn) => btn.disabled = true);
    restartBtn.style.display = "inline";
}

