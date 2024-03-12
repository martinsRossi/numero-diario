alert("Boas vindas ao nosso site!");
let nome = "Lua"
let idade = 25;
let numeroDeVendas = 50;
let saldoDisponivel = 1000;

alert("Erro! Preencha todos os campos");

let mensagemDeErro = "Erro! Preencha todos os campos";

alert(mensagemDeErro);

let nomeUsuario = prompt("Qual o seu nome?");
console.log ("O nome do usuário é: " + nomeUsuario);

let idadeUsuario = prompt("Qual é sua idade?");
console.log ("A idade do usuário é: " + idadeUsuario);

if (idadeUsuario >= 18) {
    alert("Pode tirar a habilitação");
} else {
    alert("Muito novo para dirigir");
}
