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
function playRound(playerSelection, computerSelection){
    let winner = "";
    if(playerSelection === computerSelection){
        winner = "draw";
    }

    else if (playerSelection === "rock"){
        if (computerSelection === "paper"){
            winner = "computer";
        }
        else if (computerSelection === "scissors"){
            winner = "player";
        }
    }

    else if (playerSelection === "paper"){
        if (computerSelection === "scissors"){
            winner = "computer";
        }
        else if (computerSelection === "rock"){
            winner = "player";
        }
    }

    else if (playerSelection === "scissors"){
        if (computerSelection === "rock"){
            winner = "computer";
        }
        else if (computerSelection === "paper"){
            winner = "player";
        }
    }
    else {
        console.log("Invalid choice - please choose again.");
    }

    return winner;
}

// Do that 5 times, keeping score.

const playerSelection = "";
const computerSelection = "";


// console.log(playerSelection());