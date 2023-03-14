function numeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// general variables

const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtn");
const counterPlayer = document.querySelector("#counterPlayer");
const computerVictories = document.querySelector("#computerVictories");

let player;
let computer;
let result;
let countPlayer = 0;
let computerVictory = 0;

choiceBtns.forEach((button) =>
  button.addEventListener("click", () => {
    player = button.value;
    computerTurn();
    playerText.textContent = `${player}`;
    let playerChoosen = eleccionPlayer(player);
    playerPicked.src = images[playerChoosen];
    computerText.textContent = `${computer}`;
    let computerChoosen = eleccionPlayer(computer);
    computerPicked.src = images[computerChoosen];
    checkWinner();
  })
);

// Computer Election
function computerTurn() {
  const randNum = numeroAleatorio(1, 3);
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

// Saber quien gana

function checkWinner() {
  if (player == computer) {
    setTimeout(alertTie, 500);
    // alertTie();
  } else if (player == "piedra" && computer == "tijera") {
    increaseWinnerPlayer();
    playerWin();
  } else if (player == "papel" && computer == "piedra") {
    // alertWinner();
    increaseWinnerPlayer();
    playerWin();
  } else if (player == "tijera" && computer == "papel") {
    increaseWinnerPlayer();
    playerWin();
    // alertWinner();
  } else {
    increaseWinnerComputer();
    computerWin();
    // alertLoser();
  }
}

function computerWin() {
  if (computerVictory == 3) {
    setTimeout(bigLoser, 500);
  } else {
    setTimeout(alertLoser, 500);
  }
}

function playerWin() {
  if (countPlayer == 3) {
    setTimeout(winnerChampion, 500);
  } else {
    setTimeout(alertWinner, 500);
  }
}

let images = [
  "assets/papelChoose.png",
  "assets/piedraChoose.png",
  "assets/tijeraChoose.png",
];

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

function alertWinner() {
  Swal.fire({
    title: "GANASTE!!!",
    text: "Nadie puede contra vos",
    width: 500,
    position: "bottom",
    timer: 5000,
    padding: "1em",
    confirmButtonText: "Continuar",
    color: "#716add",
    backdrop: `
      rgba(0,0,123,0.4)
      url("assets/cat-nyan-cat.gif")
      center
      no-repeat
    `,
  });
}

function alertLoser() {
  Swal.fire({
    title: "PERDISTE!!!",
    text: "No eres rival para mi!!!",
    width: 500,
    position: "bottom",
    timer: 5000,
    padding: "1em",
    confirmButtonText: "Continuar",
    color: "#716add",
    backdrop: `
    rgba(0,0,123,0.4)
    url("assets/loser.png")
    center
    no-repeat
  `,
  });
}
function alertTie() {
  Swal.fire({
    title: "EMPATE",
    text: "Se que puedes hacerlo mejor",
    width: 500,
    position: "bottom",
    timer: 5000,
    padding: "1em",
    confirmButtonText: "Continuar",
    color: "#716add",
    backdrop: `
      rgba(0,0,123,0.4)
      url("assets/tie.png")
      center
      no-repeat
    `,
  });
}

function increaseWinnerPlayer() {
  countPlayer++;
  counterPlayer.textContent = countPlayer;
}

function increaseWinnerComputer() {
  computerVictory++;
  computerVictories.textContent = computerVictory;
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
  }).then((result) => {
    if (result.isConfirmed) {
      restartGame();
    }
  });
}

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
  playerText.textContent = 'Jugador';
  computerText.textContent = 'Meshi';
}
