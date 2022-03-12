console.log("Script is working");

// User picks Rock, Paper, or Scissors (RPS);
function playerSelection() {
    let playerSelection = prompt("Rock! Paper! Scissors!");
    return playerSelection.toLowerCase();
}

// Computer randomly generates RPS selection;
// Compare the two selections and determine the winner;
// Do that 5 times, keeping score.


console.log(playerSelection());