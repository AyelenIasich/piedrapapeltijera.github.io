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