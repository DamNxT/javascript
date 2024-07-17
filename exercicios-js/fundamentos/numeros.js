const peso1 = 1.0;
const peso2 = Number('2.0');
// Bom de se utilizar para saber qual o tipo do numero se é inteiro, float e etc

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
// *Está função Number.isInteger é usada para dizer se o número é inteiro retornando valor true ou false

const avaliacao1 = 9.871
const avaliacao2 = 6.871
const total = avaliacao1*peso1 + avaliacao2*peso2
const media = total/ (peso1 + peso2)

console.log(media.toFixed(2))
console.log(media.toString(2))
