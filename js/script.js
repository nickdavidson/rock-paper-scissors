console.log("Script is working");

// User picks Rock, Paper, or Scissors (RPS);
function userPlay() {
    let playerSelection = prompt("Rock! Paper! Scissors!");
    return playerSelection.toLowerCase();   //return input normalized to lowercase
}

// Computer randomly generates RPS selection;
function computerPlay() {
    let cpuChoices = ["rock", "paper", "scisscors"];
    return cpuChoices[Math.floor(Math.random()*cpuChoices.length)];     //randomly generate
}

// Compare the two selections and determine the winner;
// Do that 5 times, keeping score.

const playerSelection = "";
const computerSelection = "";

// console.log(playerSelection());