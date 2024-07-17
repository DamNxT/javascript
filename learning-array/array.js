const listaDeCompras = ["Açucar", false]
console.log(listaDeCompras)

listaDeCompras[0] = "Arroz"
listaDeCompras[1] = "Feijão"

console.log (listaDeCompras)
/////////////////////////////////////////////

//ADICIONAR ELEMENTOS
const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"]
//PUSH SERVE PARA ADICIONAR ELEMENTOS NO FINAL DO ARRAY
let tamanho = arr.push("Boromir")
console.log(arr)
console.log(tamanho)

// arr.push("Legolas")

console.log(arr)

//UNSHIT SERVE PARA ADICIONAR ELEMENTOS NO INÍCIO DO ARRAY
tamanho = arr.unshift("pano")
console.log(arr)
console.log(tamanho)

//REMOVER ELEMENTOS
//POP => REMOVE O ÚLTIMO ELEMENTO DO ARRAY
let ultimoElemento = arr.pop()
console.log(arr)
console.log(ultimoElemento)

//REMOVER ELEMENTOS NO COMEÇO DO ARRAY

ultimoElemento = arr.shift()
console.log(arr)
console.log(ultimoElemento)


//PESQUISAR POR UM ELEMENTO
//INCLUDES
const inclui = arr.includes("Gandalf")
console.log(inclui)

//INDEXOF => PARA SABER QUAL O ÍNDICE DESSE ELEMENTO

const posicao = arr.indexOf("Legolas") 
console.log(posicao)

//CORTAR E CONCATENAR
//SLICE => CRIA UMA CÓPIA DE UMA PARTE DO ARRAY, COMO SE ESTIVESSE CORTANDO UM PEDAÇO

const hobbits = arr.slice(0, 4)
console.log(hobbits)
