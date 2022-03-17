// User picks Rock, Paper, or Scissors (RPS);

function userPlay() {
    let playerSelection = prompt("Rock! Paper! Scissors!");
    playerSelection = playerSelection.toLowerCase();

    while(playerSelection!=="rock" && playerSelection!=="paper" && playerSelection !=="scissors"){
        console.log("Invalid entry - try again!");
        playerSelection = prompt("Rock! Paper! Scissors!");
        playerSelection = playerSelection.toLowerCase();
    }

    return playerSelection;
}
    

// Computer randomly generates RPS selection;
function computerPlay() {
    let cpuChoices = ["rock", "paper", "scissors"];
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

function updateScore(winner, scoreboard) {
    if(winner==="player"){
        scoreboard[0]+=1;
    }
    else if(winner==="computer"){
        scoreboard[1]+=1;
    }

    return scoreboard;
}

function displayScore(scoreboard){
    let leader = "Player";
    let score = scoreboard[0] + "-" + scoreboard[1];
    let display = `${leader} leads ${score}.`

    if(scoreboard[0]<scoreboard[1]){
        leader = "Computer";
        score = scoreboard[1] + "-" + scoreboard[0];
        display = `${leader} leads ${score}.`
    }
    else if(scoreboard[0]===scoreboard[1]){
        display = `Game is tied ${score}.`;
    }
    
    console.log(display);
}

function getWinner(scoreboard) {
    if(scoreboard[0]===scoreboard[1]){
        return "Game was a draw!";
    }
    else if(scoreboard[0]>scoreboard[1]) {
        return "Player wins the game!";
    }
    else if(scoreboard[0]<scoreboard[1]) {
        return "Computer wins the game!";
    }
    else {
        return "Could not determine a winner.";
    }
}

function capitalize(string) {
    return string.substring(0,1).toUpperCase()+string.substring(1);
}

function game() {
    let playerSelection = "";
    let computerSelection = "";
    let scoreboard = [0, 0];

    for(let i = 0; i < 5; i++){

        playerSelection = userPlay();
        computerSelection = computerPlay();

        let winner = playRound(playerSelection, computerSelection);

        console.log("Round " + (i+1) + ": " + capitalize(playerSelection) + " (Player) " + "vs " + capitalize(computerSelection) + " (CPU)");
        console.log(capitalize(winner) + " wins!");
        updateScore(winner, scoreboard);
        displayScore(scoreboard);
    }

    console.log(getWinner(scoreboard));
}

// Do that 5 times, keeping score.
game();




// console.log(playerSelection());
