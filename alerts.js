export function alertTie() {
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

  
export function alertLoser() {
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
  

  export function alertWinner() {
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

