const OPTIONS = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const idx = Math.floor(Math.random() * 3);
    return OPTIONS[idx];
}

