const atacante = prompt("Coloque o nome do seu personagem")
const poderDeAtaque = parseFloat(prompt(" Coloque o poder do personagem"))

const defensor= prompt("Coloque o nome do inimigo")
let pontosDeVida = parseFloat(prompt("Pontos de vida :"))
const poderDeDefesa = parseFloat(prompt("Qual é o poder de defesa do inimigo"))
const possuiEscudo = prompt("Ele possui um escudo? (Sim/Não)")

let danoCausado=0

if(poderDeAtaque > poderDeDefesa && possuiEscudo === "Não"){
    danoCausado = poderDeAtaque - poderDeDefesa
} else if(poderDeAtaque > poderDeDefesa && possuiEscudo === "Sim"){
    danoCausado = (poderDeAtaque - poderDeDefesa)/2
}

pontosDeVida -= danoCausado

alert(atacante + " causou " + danoCausado + " pontos de dano em " + defensor)
alert(
    atacante + "\nPoder de ataque: " + poderDeAtaque + " \n\n " +
    defensor + "\nPontos de vida: " + pontosDeVida + " \nPoder de defesa: " +
    poderDeDefesa + "\nPossui escudo " + possuiEscudo
)