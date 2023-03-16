import {
  alertTie,
  alertWinner,
  alertLoser,
} from "./alerts.js";

// Function to generate a random number
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// General variables

const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const choiceBtns = document.querySelectorAll(".choiceBtn");
const counterPlayer = document.querySelector("#counterPlayer");
const computerVictories = document.querySelector("#computerVictories");

let player;
let computer;
let countPlayer = 0;
let computerVictory = 0;

let images = [
  "assets/papelChoose.png",
  "assets/piedraChoose.png",
  "assets/tijeraChoose.png",
];

function disabledButtons(choiceBtns) {
  choiceBtns.forEach((b) => {
    b.disabled = true;
  });
}
function ableButtons() {
  choiceBtns.forEach((b) => {
    b.disabled = false;
  });
}

choiceBtns.forEach((button) =>
  button.addEventListener("click", () => {
    disabledButtons(choiceBtns);
    player = button.value;
    computerTurn();
    playerText.textContent = `${player}`;
    let playerChoosen = eleccionPlayer(player);
    playerPicked.src = images[playerChoosen];
    computerText.textContent = `${computer}`;
    let computerChoosen = eleccionPlayer(computer);
    computerPicked.src = images[computerChoosen];
    checkWinner(player, computer);
    setTimeout(ableButtons, 750);
  })
);



// Computer choice

function computerTurn() {
  const randNum = randomNumber(1, 3);
  switch (randNum) {
    case 1:
      computer = "piedra";
      break;
    case 2:
      computer = "papel";
      break;
    case 3:
      computer = "tijera";
      break;
  }
}

// Who wins

function checkWinner(player, computer) {
  if (player == computer) {
    setTimeout(alertTie, 750);
  } else if (player == "piedra" && computer == "tijera") {
    increaseWinnerPlayer();
    playerWin(countPlayer);
  } else if (player == "papel" && computer == "piedra") {
    increaseWinnerPlayer();
    playerWin(countPlayer);
  } else if (player == "tijera" && computer == "papel") {
    increaseWinnerPlayer();
    playerWin(countPlayer);
  } else {
    increaseWinnerComputer();
    computerWin(computerVictory);
  }
}

function computerWin(computerVictory) {
  if (computerVictory == 3) {
    setTimeout(bigLoser, 750);
  } else {
    setTimeout(alertLoser, 750);
  }
}

function playerWin(countPlayer) {
  if (countPlayer == 3) {
    setTimeout(winnerChampion, 750);
  } else {
    setTimeout(alertWinner, 750);
  }
}



function eleccionPlayer(player) {
  let resultado;
  if (player == "piedra") {
    resultado = 1;
  } else if (player == "tijera") {
    resultado = 2;
  } else if (player == "papel") {
    resultado = 0;
  }
  return resultado;
}

function increaseWinnerPlayer() {
  countPlayer++;
  counterPlayer.textContent = countPlayer;
}

function increaseWinnerComputer() {
  computerVictory++;
  computerVictories.textContent = computerVictory;
}

// 
 function bigLoser() {
  Swal.fire({
    title: "LOSER",
    text: "Perdiste 3 de 5.",
    width: 500,
    position: "bottom",
    padding: "1em",

    confirmButtonText: "Volver a jugar",
    color: "#716add",
    backdrop: `
    rgba(0,0,123,0.7)
      url("assets/computerWIN.png")
      center
      no-repeat
    `,
    allowOutsideClick: false,
  }).then((result) => {
    if (result.isConfirmed) {
      restartGame();
    }
  });
  
}


 function winnerChampion() {
  Swal.fire({
    title: "CRACK",
    text: "Felicitaciones ganaste 3 de 5",
    width: 500,
    position: "bottom",
    padding: "1em",

    confirmButtonText: "Volver a jugar",

    color: "#716add",
    backdrop: `
    rgba(0,0,123,0.7)
      url("assets/Winner.png")
      center
      no-repeat
    `,
    allowOutsideClick: false,
  }).then((result) => {
    if (result.isConfirmed) {
      restartGame();
    }
  });
}


 function restartGame() {
  countPlayer = 0;
  computerVictory = 0;
  counterPlayer.textContent = countPlayer;
  computerVictories.textContent = computerVictory;
  playerPicked.src = "assets/guessing.png";
  computerPicked.src = "assets/guessing-compu.png";
  playerText.textContent = "Jugador";
  computerText.textContent = "Meshi";
}


