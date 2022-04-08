// User picks Rock, Paper, or Scissors (RPS)
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
    

// Computer randomly generates selection;
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

    setRoundWinner(winner);

    return winner;
}

//Check the winner, then increment that winners index in the array by 1;
function updateScore(winner, scoreboard) {
    if(winner==="player"){
        scoreboard[0]+=1;
    }
    else if(winner==="computer"){
        scoreboard[1]+=1;
    }

    return scoreboard;
}

//Output the current leading player and the current score to the console
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

//Get the greater of the two scores in the scoreboard array, then output the respective inner to console
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

//Capitalize the first letter of a string
function capitalize(string) {
    return string.substring(0,1).toUpperCase()+string.substring(1);
}

//Gameplay loop
function game(rounds) {
    let playerSelection = "";
    let computerSelection = "";
    let scoreboard = [0, 0];

    for(let i = 0; i < rounds; i++){

        //Get player and computer selections
        playerSelection = userPlay();
        computerSelection = computerPlay();

        //Compare the two selections and determine the winner of the round
        let winner = playRound(playerSelection, computerSelection);

        //Output the selection of the player and computer
        console.log("Round " + (i+1) + ": " + "(Player) " + capitalize(playerSelection) +  " vs " + capitalize(computerSelection) + " (CPU)");
        
        let winningMove;
        //Create winning move string based on the winner and loser's selection
        if(winner==="player"){
            winningMove = ` ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}!`;
        }
        else if(winner==="computer"){
            winningMove = ` ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}!`;
        }
        else {
            winningMove = "";
        }

        //Output who won the round
        if(winner!=="draw"){
            console.log(`${capitalize(winner)} wins the round!${winningMove}`);
        }
        else{
            console.log(`${capitalize(winner)}!`);
        }

        

        
        //Update the scoreboard array
        updateScore(winner, scoreboard);

        //Display the current score
        displayScore(scoreboard);
    }

    //Output the winner of the game
    console.log(getWinner(scoreboard));
}

function buttonPlay(){
    let comp = computerPlay();
    console.log(this.id + " " + comp);
    playRound(this.id, comp);
    console.log(getRoundWinner());
    
    outputText = capitalize(getRoundWinner()) + " wins!";
    outputBox.textContent = outputText;
}

function setRoundWinner(winner){
    ROUND_WINNER = winner;
}

function getRoundWinner(){
    return ROUND_WINNER;
}

const container = document.querySelector("#container");

const rockButton = document.createElement("button");
rockButton.innerHTML = "ROCK";
rockButton.id = "rock";
rockButton.addEventListener('click', buttonPlay);

const paperButton = document.createElement("button");
paperButton.textContent = "PAPER";
paperButton.id = "paper";
paperButton.addEventListener('click', buttonPlay);

const scissorsButton = document.createElement("button");
scissorsButton.textContent = "SCISSORS";
scissorsButton.id ="scissors"
scissorsButton.addEventListener('click', buttonPlay);

let outputText = "Rock, Paper, Scissors!"

const outputBox = document.createElement("div");
outputBox.style = "border: 1px solid black;"
outputBox.textContent = outputText;



container.appendChild(outputBox);
container.appendChild(rockButton);
container.appendChild(paperButton);
container.appendChild(scissorsButton);
