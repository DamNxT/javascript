const n1 = prompt("Digite um número");
const n2 = prompt("Digite outro número");

const soma = parseFloat(n1) + parseFloat(n2);
const subtracao = parseFloat(n1) - parseFloat(n2);
const multiplicacao = parseFloat(n1) * parseFloat(n2);
const divisao = parseFloat(n1) / parseFloat(n2);

alert(
    "\nA soma desses dois números é: " + soma +
    "\nA subtração desses dois números é: " + subtracao +
    "\nA multiplição desses dois números é: " + multiplicacao +
    "\nA divisão desses dois números é: " + divisao
)