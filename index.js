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
    playerText.textContent = `Jugador: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = checkWinner();
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
  }else if(player == "piedra" && computer == "tijera"){
    return "Ganaste" 
  }else if(player == "papel" && computer == "piedra"){
    return "Ganaste"
  } else if(player == "tijera" && computer == "papel"){
    return  "Ganaste"
  }else{
    return "Perdiste" 
  }
}


// if (pc == jugador) {
//   alert("Empate");
// } else if (jugador == 1 && pc == 3) {
//   alert("Ganaste");
// } else if (jugador == 2 && pc == 1) {
//   alert("Ganaste");
// } else if (jugador == 3 && pc == 1) {
//   alert("Ganaste");
// } else {
//   alert("Perdiste");
// }

// jugador = prompt("Elige: 1 para piedra, 2 para papel, 3 para tijera");

// switch (jugador) {
//   case "1":
//     alert("Elegiste piedra");
//     break;
//   case "2":
//     alert("Elegiste papel");
//     break;
//   case "3":
//     alert("Elegiste tijera");
//     break;
//   default:
//     alert("Elegiste caca");
// }

// switch (pc) {
//   case 1:
//     alert(" Pc elige piedra");
//     break;
//   case 2:
//     alert(" Pc elige  papel");
//     break;
//   case 3:
//     alert(" Pc elige  tijera");
//     break;
//   default:
//     alert(" Pc elige  caca");
// }

// if (pc == jugador) {
//   alert("Empate");
// } else if (jugador == 1 && pc == 3) {
//   alert("Ganaste");
// } else if (jugador == 2 && pc == 1) {
//   alert("Ganaste");
// } else if (jugador == 3 && pc == 1) {
//   alert("Ganaste");
// } else {
//   alert("Perdiste");
// }
