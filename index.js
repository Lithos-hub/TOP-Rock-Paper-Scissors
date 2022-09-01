// rock paper scissors Game

// computer randomly selects one of three option Math.floor(Math.random()* 3)
const computerChoiceSection = document.querySelector("#computer__choice");
const roundCounterSection = document.querySelector("#round__counter");
const playerScoreSection = document.querySelector("#score__counter");

let playerScore = 0;
let computerScore = 0;
let roundCounter = 0;

const generateComputerSelection = () => {
  const computerNumber = Math.round(Math.random() * 2);

  const options = {
    0: "rock",
    1: "paper",
    2: "scissors",
  };

  return options[computerNumber];
};

const showTie = (playerSelection, computerSelection) => {
  computerChoiceSection.innerHTML = `
  <h1>Computer uses ${computerSelection}</h1>
  <h2 class="text-blue">Tie! You selected ${playerSelection} and the computer ${computerSelection}<h2>
    `;
};
const showWin = (playerSelection, computerSelection) => {
  playerScore++;
  computerChoiceSection.innerHTML = `
  <h1>Computer uses ${computerSelection}</h1>
  <h2 class="text-green">You win! ${playerSelection} beats ${computerSelection}</h2>
    `;
};
const showLose = (playerSelection, computerSelection) => {
  computerScore++;
  computerChoiceSection.innerHTML = `
  <h1>Computer uses ${computerSelection}</h1>
    <h2 class="text-red">You lose! ${computerSelection} beats ${playerSelection}</h2>
    `;
};

const setPlayerSelection = (selection) => {
  if (roundCounter < 5) {
    const computerSelection = generateComputerSelection();
    if (selection === computerSelection) {
      showTie(selection, computerSelection);
    } else if (
      (selection === "rock" && computerSelection === "scissors") ||
      (selection === "paper" && computerSelection === "rock") ||
      (selection === "scissors" && computerSelection === "paper")
    ) {
      showWin(selection, computerSelection);
    } else {
      showLose(selection, computerSelection);
    }
    roundCounter++;
    roundCounterSection.innerHTML = `<h1>Round ${roundCounter}</h1>`;
    playerScoreSection.innerHTML = `<h1>Your score: ${playerScore}</h1>`;
  } else {
    let message =
      playerScore > computerScore
        ? `You win with ${playerScore} points!`
        : `You lose! Player score: ${playerScore}. Computer score: ${computerScore}`;
    alert(`Game finished! ${message}`);

    playerScoreSection.innerHTML = `
      <button id="restart__btn" onclick="restartGame()">Restart game</button>
  `;
  }
};

const restartGame = () => location.reload();

// play 5 rounds where the score are kept and reports the winner or loser at the end.
