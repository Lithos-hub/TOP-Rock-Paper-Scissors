//THE ODIN PROJECT JAVASCRIPT FOUNDATIONS
//PROJECT 1

// computer randomly selects one of three option Math.floor(Math.random()* 3)

function getComputerChoice() {
  const computerNumber = Math.round(Math.random() * 2);

  switch (computerNumber) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
  }
}

// ask for player selection (case-insensitive)

function getPlayerChoice() {
  const playerChoice = prompt(
    "Choose your weapon: Rock, Paper or Scissors?"
  ).toLocaleLowerCase();
  return playerChoice;
}

// play a round comparing computer vs player selection and return who is the winner.

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log("Tie");
    alert("Tie");
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    console.log("You Win! Rock beats Scissor");
    alert("You Win! Rock beats Scissor");
    playerScore++;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    console.log("You Win! Paper beats Rock");
    alert("You Win! Paper beats Rock");
    playerScore++;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    console.log("You Win! Scissors beats Paper");
    alert("You Win! Scissors beats Paper");
    playerScore++;
  } else {
    console.log(`You Lose! ${computerSelection} beats ${playerSelection} `);
    alert(`You Lose! ${computerSelection} beats ${playerSelection} `);
    computerScore++;
  }
}

// play 5 rounds where the score are kept and reports the winner or loser at the end.

function game() {
  let endgameMessage = "";
  //loop for 5 games, track round and wins
  for (let i = 0; i < 5; i++) {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    console.log("Player win totals: " + playerScore);
    console.log("Computer win totals: " + computerScore);

    //Play round
    playRound(playerSelection, computerSelection);

    // function playRound(playerSelection, computerSelection) {
    //   if (playerSelection === computerSelection) {
    //     return alert("Tie");
    //   } else if (playerSelection == "rock" && computerSelection == "scissors") {
    //     playerScore++;
    //     return alert("You Win! Rock beats Scissor");
    //   } else if (playerSelection == "paper" && computerSelection == "rock") {
    //     playerScore++;
    //     return alert("You Win! Paper beats Rock");
    //   } else if (
    //     playerSelection == "scissors" &&
    //     computerSelection == "paper"
    //   ) {
    //     playerScore++;
    //     return alert("You Win! Scissors beats Paper");
    //   } else {
    //     computerScore++;
    //     return alert(
    //       `You Lose! ${computerSelection} beats ${playerSelection} `
    //     );
    //   }
    // }
  }
  // determine who won the five round set
  if (playerScore > computerScore) {
    endgameMessage = "The five game winner is YOU!";
  } else if (playerScore === computerScore) {
    endgameMessage = "TIE! You and the computer have the same points!";
  } else {
    endgameMessage = "You lose! The computer wins this time!";
  }

  // console.log("End game! " + endgameMessage); // => Do the same, but it is a "old school" way
  console.log(`End game! ${endgameMessage}`); // => Do the same, but it is a more modern way
}

game();
