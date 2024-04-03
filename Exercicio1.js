/*
const nome = prompt("Digite seu nome: ");
const sobrenome = prompt("Qual seu sobrenome? ");
const campo_estudo = prompt("Qual seu campo de estudo? ");
const ano_nascimento = prompt("Em que ano nasceu? ");

alert(
  "Recruta cadastrado com sucesso!\n" +
    "Nome completo: " +
    nome +
    " " +
    sobrenome +
    " \n" +
    "Campo de estudos: " +
    campo_estudo +
    "\n" +
    "Idade: " +
    (2022 - ano_nascimento)
);
*/

const x = prompt("Digite o primeiro número: ");
const y = prompt("Digite o segundo número: ");

const num1 = parseFloat(x);
const num2 = parseFloat(y);

const soma = num1 + num2;
const subtracao = num1 - num2;
const multiplicacao = num1 * num2;
const divisao = num1 / num2;

alert(
  "Resultados:\n" +
    "\n Soma: " +
    soma +
    "\n Subtração: " +
    subtracao +
    "\n Multiplicação: " +
    multiplicacao +
    "\n Divisão: " +
    divisao
);
