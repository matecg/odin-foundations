const OPTIONS = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const idx = Math.floor(Math.random() * 3);
    return OPTIONS[idx];
}

function getHumanChoice() {
    const choice = prompt("What's your choice? (rock/paper/scissors)", getComputerChoice());
    return choice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    const humanIdx = OPTIONS.indexOf(humanChoice);
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

let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();

playRound(humanChoice, computerChoice);