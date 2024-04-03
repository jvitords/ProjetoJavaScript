const nome_turista = prompt("E ai turista! Qual seu nome? ");
let cidades = "";
let contagem = parseFloat(0);

let continuar = prompt("Você vistou alguma cidade? (Sim/Não)");

while (continuar == "sim") {
  let cidade = prompt("Qual é o nome da cidade visitada? ");
  cidades += "\n - " + cidade + "\n";
  contagem++;
  continuar = prompt("Você visitou mais alguma cidade? ");
}

alert(
  "Turista: " +
    nome_turista +
    "\nQuantidade de cidades: " +
    contagem +
    "\nCidades visitadas: \n" +
    cidades
);
