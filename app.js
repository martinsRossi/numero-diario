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

if (chute == numeroSecreto) {
    alert(`Isso ai! Voce descobriu o numero secreto ${numeroSecreto}`);
} else {
    alert("Voce errou :(");
}