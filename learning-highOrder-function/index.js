//uma funcao está sendo declarada junto com os parametros e até então é indentificada como um tambem
function calcular (a, b, operacao)  {
    console.log("realizando uma operacao")
/*logo abaixo estamos dizendo que o parametro operacao é na verdade outra funcao e vai receber outros parametros,
 não necessáriamente precisa ser os mesmos definidos anteriormente*/
    const resultado = operacao(a, b)
    return resultado
}

function somar (x, y) {
    console.log("realizando uma soma")    
    return x + y
}
// operacao muda para a funcao somar
console.log(calcular(3, 5, somar))

console.log(calcular (8, 4, function (x, y) {
    console.log("realizando uma subtracao")
    return x - y
}))

function exibirElemento(elemento, indice, array){
    console.log({
        elemento,
        indice,
        array
    })
}

const lista = ["Maça", "Laranja", "Limão", "Banana"]
for(let i = 0; i < lista.length; i++) {
        exibirElemento(lista[i], i, lista)
}

lista.forEach(exibirElemento)

lista.forEach(function (elemento, indice, array){
    console.log([
        elemento,
        indice,
        array
    ])
})

