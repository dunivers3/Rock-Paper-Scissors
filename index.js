let scorecard = {
    player: 0,
    computer: 0
};

const rockBtn = document.getElementById("rock_btn");
const paperBtn = document.getElementById("paper_btn");
const scissorsBtn = document.getElementById("scissor_btn");
let winnerEl = document.getElementById("winner_el");


rockBtn.addEventListener("click", function(){
    selectWinner("ROCK", computerPlay());
})
paperBtn.addEventListener("click", function() {
    selectWinner("PAPER", computerPlay());
} );
scissorsBtn.addEventListener("click", function() {
    selectWinner("SCISSORS", computerPlay());
} );



//Computer play. It returns Rock Paper or Scissors when computer plays
function computerPlay(){
    let randomChoices = [
        "ROCK",
        "PAPER",
        "SCISSORS"
    ];
    randomChoices = randomChoices[Math.floor(Math.random()*randomChoices.length)];
    return randomChoices;
}

//Function to determines the winner depending on either of the choice on the two players
function selectWinner(playerChoice, computerChoice){
    if(playerChoice === computerChoice){
        winnerEl.textContent = `TIE!`;
        scoreTab();
    }else if (playerChoice === "ROCK"){
        if (computerChoice === "SCISSORS"){
            scorecard.player ++;
            winnerEl.textContent = `Rock beats scissors!`;
            getWinner();
        }else {                     //Computer chose paper. playerChoice can only be rock
            scorecard.computer ++;
            winnerEl.textContent = `Paper beats rock!`;
            getWinner();
        }
    }else if (playerChoice === "SCISSORS"){
        if (computerChoice === "PAPER"){
            scorecard.player ++;
            winnerEl.textContent = `Scissors beats paper!`;
            getWinner();
        }else {                     //Computer chose rock. playerChoice can only be scissors
            scorecard.computer ++;
            winnerEl.textContent = `Rock beats scissors!`;
            getWinner();
        }
    }else {
        if (computerChoice === "ROCK"){
            scorecard.player ++;
            winnerEl.textContent = `Paper beats rock!`;
            getWinner();
        }else {                     //Computer chose scissors. playerChoice can only be paper
            scorecard.computer ++;
            winnerEl.textContent = `Scissors beats paper!`;
            getWinner();
        }
    }
}

// Announce winner
function getWinner(){
    if (scorecard.player === 5 || scorecard.computer === 5){
        if(scorecard.player > scorecard.computer){
            winnerEl.textContent = "Player wins! You beat the Computer " + scorecard.player + " times! ";
            scorecard.player = 0;
        }else{
            winnerEl.textContent = "Computer wins! You beat the Player " + scorecard.computer + " times! ";
            scorecard.computer = 0;
        }
    }else {
        scoreTab();
    }
}

function scoreTab(){
    if(scorecard.player > scorecard.computer){
        winnerEl.textContent += ` Score: Player-${scorecard.player}, Computer-${scorecard.computer}`
    } else {
        winnerEl.textContent += ` Score: Computer-${scorecard.computer}, Player-${scorecard.player}`
    }
}