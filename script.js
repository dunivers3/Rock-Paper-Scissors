//HOW TO PLAY ROCK PAPER SCISSORS

    //ROCK BEATS SCISSORS
    //SCISSORS BEATS PAPER
    //PAPER BEATS ROCK


var score = {
    player: 0,
    computer: 0
};


//Main play function
function game(){
    let playerSelection = prompt("What is your choice? ", "Rock, Paper or Scissors?");
    playerSelection = playerSelection.toUpperCase();
    let computerSelection = computerPlay();
    computerSelection = computerSelection.toUpperCase();

    let winner = winnerSelector(playerSelection, computerSelection);

    // console.log(playerSelection);
    // console.log(computerSelection);
    // console.log(winner)
}

//Computer play. It returns Rock Paper or Scissors
function computerPlay(){
    let randomChoices = [
        "Rock",
        "Paper",
        "Scissors"
    ];
    randomChoices = randomChoices[Math.floor(Math.random()*randomChoices.length)];
    return randomChoices;

}

//Function that determines the winner
function winnerSelector(plyS, cmpS){
    if(plyS === cmpS){
        console.log("Rock Paper Scissors");        
    }else if (plyS === "ROCK"){
        if (cmpS === "SCISSORS"){
            score.player ++;
            return ("Player");
        }else {
            score.computer ++;
            return ("Computer");
        }
    }else if (plyS === "SCISSORS"){
        if (cmpS === "PAPER"){
            score.player ++;
            return ("Player");
        }else {
            score.computer ++;
            return ("Computer");
        }
    }else {
        if (cmpS === "ROCK"){
            score.player ++;
            return ("Player");
        }else {
            score.computer ++;
            return ("Computer");
        }
    }
}







// Announce winner
function winnerIs(){
    if (score.player == score.computer){
        console.log("Well, thats a tie. You won " + score.player + " times, and Computer won " + score.computer + " times!");
    }else if (score.player > score.computer){
        console.log("Player wins! You beat the Computer " + score.player + " times! ");
    }else {
        console.log("Computer wins! You got crushed " + score.computer + " times!");
    }
}


//Repeat the game fo 5 turns

for (i=1; i <=5; i++){
    game();
}

winnerIs();
