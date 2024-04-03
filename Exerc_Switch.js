const medida_escolhida = prompt(
  "Qual a sua medida escolhida? \nMilímetro(mm) \nCentímetro(cm) \nDecímetro(dm) \nDecamêtro(dam) \nHectômetro(hm) \nQuilômetro(km)"
);
const valor_escolhido = parseFloat(prompt("Qual o valor escolhido? "));

milimetro = valor_escolhido * 1000;
centimetro = valor_escolhido * 100;
decimetro = valor_escolhido * 10;
decametro = valor_escolhido / 10;
hectometro = valor_escolhido / 100;
quilometro = valor_escolhido / 1000;

switch (medida_escolhida) {
  case "Milímetro":
    alert(valor_escolhido + " metros, equivale a " + milimetro + " milímetros");
    break;
  case "centimetro":
    alert(
      valor_escolhido + " metros, equivale a " + centimetro + " centimetros"
    );
    break;
  case "decímetro":
    alert(valor_escolhido + " metros, equivale a " + decimetro + " decímetros");
    break;
  case "decametro":
    alert(valor_escolhido + " metros, equivale a " + decametro + " decãmetros");
    break;
  case "hectometro":
    alert(
      valor_escolhido + " metros, equivale a " + hectometro + " hectômetros"
    );
    break;
  case "quilometro":
    alert(
      valor_escolhido + " metros, equivale a " + quilometro + " quilômetros"
    );
    break;
  default:
    alert("Escolha entre as opções que demos.");
}
