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
    checkWinner();
  })
);

function checkWinner() {
    if (player == computer) {
      return "Empate";
    } else if (player == "piedra" && computer == "tijera") {
      resultText.style.backgroundColor = "#5dc460";
      resultText.style.color = "#fff";
      return "Ganaste";
  
     
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