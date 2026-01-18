// randomly returns rock, paper, or scissors.
let humanScore = 0;
let computerScore = 0;
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    return (choice === 0) ? "Rock" : (choice === 1) ? "Paper" : "Scissors";
}

// plays a round of rock, paper, and scissors.
function playRound(hChoice) {

    let computerChoice = getComputerChoice();
    let humanChoice = hChoice;

    // winner, loser, and tied message
    const winner = `You win! ${humanChoice} beats ${computerChoice}!`;
    const loser = `You lost lol. ${computerChoice} beats ${humanChoice}.`;
    const tied = `A tie. You both chose ${computerChoice}!`;
    let message;

    switch (humanChoice.toLowerCase()) {
        case "rock":
            if (computerChoice === "Rock") {
                message = tied;
            } else if (computerChoice === "Paper") {
                message = loser;
                computerScore++;
            } else {
                message = winner;
                humanScore++;
            }
            break;
        case "paper":
            if (computerChoice === "Rock") {
                message = winner;
                humanScore++;
            } else if (computerChoice === "Paper") {
                message = tied;
            } else {
                message = loser;
                computerScore++;
            }
            break;
        case "scissors":
            if (computerChoice === "Rock") {
                message = loser;
                computerScore++;
            } else if (computerChoice === "Paper") {
                message = winner;
                humanScore++;
            } else {
                message = tied;
            }
            break;
        default:
            console.log("What are you doing? That isn't a choice.");
            break;
    }

    // Add each round's message
    let resBox = document.querySelector(".game-logs");
    let resMessage = document.createElement("h3");
    resMessage.textContent = message;
    resBox.appendChild(resMessage);

    // Update the running score
    let userScore = document.querySelector("#user-score");
    let compScore = document.querySelector("#computer-score");
    userScore.textContent = `User: ${humanScore}`;
    compScore.textContent = `Computer: ${computerScore}`;

    if (computerScore === 5 || userScore === 5) {
        let winner = (computerScore === 5) ? "Too bad. You lost against a machine lol." : "Bro chill its just a game";

        let playAgain = document.createElement("button");
        playAgain.textContent = "Play again!";
        playAgain.classList.add("playAgain");
        playAgain.addEventListener("click", () => {
            window.location.href = window.location.href;
        })

        let end = document.querySelector(".final-result");
        end.textContent = winner;
        end.appendChild(playAgain);

    }
}

// function to play
const userChoiceList = document.querySelectorAll("button");
userChoiceList.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.textContent);
        button.blur();
    })
});