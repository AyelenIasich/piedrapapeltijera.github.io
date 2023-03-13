function numeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// general variables

const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtn");

let player;
let computer;
let result;

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
    // resultText.textContent = checkWinner();
    checkWinner()

  })
);

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

function checkWinner() {
  if (player == computer) {
    return "Empate";
  } else if (player == "piedra" && computer == "tijera") {
    // resultText.style.backgroundColor = "#5dc460";
    // resultText.style.color = "#fff";
    // return "Ganaste";

    Swal.fire({
      title: 'GANASTE!!!',
      width: 600,
      timer: 5000,
position:'bottom',
      padding: '1em',
      color: '#716add',
      // imageUrl: 'assets/cat-nyan-cat.gif',
      // background: '#fff url(/images/trees.png)',
      backdrop: `
        rgba(0,0,123,0.4)
        url("assets/cat-nyan-cat.gif")
        left top
        no-repeat
      `
    })
  } else if (player == "papel" && computer == "piedra") {
    resultText.style.backgroundColor = "#5dc460";
    resultText.style.color = "#fff";

    return "Ganaste";
  } else if (player == "tijera" && computer == "papel") {
    resultText.style.backgroundColor = "#5dc460";
    resultText.style.color = "#fff";
    return "Ganaste";
  } else {
    resultText.style.backgroundColor = "#e2504c";
        resultText.style.color = "#fff";
    return "Perdiste";
  }
}

let images = ["assets/papelChoose.png", "assets/piedraChoose.png", "assets/tijeraChoose.png"];

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


