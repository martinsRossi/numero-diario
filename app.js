alert("Bem vindo ao jogo de adivinhação!");

// function getRandomArbitrary(min, max) {
//     return Math.random() * (max - min) + min;
//   }

let numeroSecreto = 5;
let numeroLimite = 10;
let jogadasPermitidas = 10;
let tentativas = jogadasPermitidas;

for (var i = 0; i = numeroSecreto; i++){
    alert("Você tem " + tentativas + " vezes para tentar");
    let chute = prompt("Escolha um número entre 1 e " + numeroLimite + ".");
    
    // if (i == jogadasPermitidas) {
    //     alert("Infelizmente, você perdeu :(. Tente novamente.")
    // }
    if (chute >= 30) {
        alert("Você digitou um número maior do que o permitido: (" + numeroLimite + "). Digite outra vez");
    } else {
    if (numeroSecreto < chute) {
        alert("O numero é menor!");
        i++;
        tentativas = jogadasPermitidas - i;
        
      } else if (numeroSecreto > chute) {
        alert("O numero é maior!");
        i++;
        tentativas = jogadasPermitidas - i;
      } else {
        break
      }
    }
  }

