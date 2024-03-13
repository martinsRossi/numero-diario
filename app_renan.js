alert("Bem vindo ao jogo de adivinhação!");

// function getRandomArbitrary(min, max) {
//     return Math.random() * (max - min) + min;
//   }

let numeroSecreto = 5;
var numeroLimite = 10;
var jogadasPermitidas = 10;
var tentativas = 0;
var jogadasRestantes = jogadasPermitidas - tentativas;
var chute;


// for (var i = 0; i = numeroSecreto; i++){
//     alert("Você tem " + tentativas + " vezes para tentar");
//     let chute = prompt("Escolha um número entre 1 e " + numeroLimite + ".");
    
//     // if (i == jogadasPermitidas) {
//     //     alert("Infelizmente, você perdeu :(. Tente novamente.")
//     // }
//     if (chute >= 30) {
//         alert("Você digitou um número maior do que o permitido: (" + numeroLimite + "). Digite outra vez");
//     } else {
//     if (numeroSecreto < chute) {
//         alert("O numero é menor!");
//         i++;
//         tentativas = jogadasPermitidas - i;
        
//       } else if (numeroSecreto > chute) {
//         alert("O numero é maior!");
//         i++;
//         tentativas = jogadasPermitidas - i;
//       } else {
//         break
//       }
//     }
//   }

function verificaTentativa () {
if (jogadasRestantes == 0) {
  alert("Você atingiu o numero máximo de tentativas!")
  return false;
} else {
  tentativas++;
  if (jogadasRestantes == 1 ) {
    alert("Você possui mais" + jogadasRestantes + "tentativas." )
  } else {
    alert("Você possui mais" + jogadasRestantes + "tentativa." )
  }
  return true;
}
}

function validaChuteLimite (){
  if (chute > numeroLimite) {
    alert("Você digitou um número maior do que o permitido: (" + numeroLimite + "). Digite outra vez")
    return false
  } else {
    return true
  }
}



// for () {
  
// }

