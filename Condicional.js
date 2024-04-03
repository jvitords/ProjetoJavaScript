const carro1 = prompt("Qual o modelo do carro? ");
const velocidade1 = prompt("Qual a velocidade do " + carro1 + "?");
const carro2 = prompt("Qual o modelo do outro carro? ");
const velocidade2 = prompt("Qual a velocidade do " + carro2 + "?");

const vel1 = parseFloat(velocidade1);
const vel2 = parseFloat(velocidade2);

if (vel1 > vel2) {
  console.log("O " + carro1 + " é mais rápido que o " + carro2);
} else if (vel2 > vel1) {
  console.log("O " + carro2 + " é mais rápido que o " + carro1);
} else if (vel1 == vel2) {
  console.log("A velocidade do " + carro1 + " e do " + carro2 + " são iguais.");
}
