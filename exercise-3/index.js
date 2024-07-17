alert("Bem vindo ao conversor de medidas! ")

const vMetros = parseFloat(prompt("Digite um valor em metros"))
const medidas = prompt("milímetro(mm) \n centímetro(cm) \n decímetro(dm) \n decâmetro(dam) \n hectômetro(hm) \n quilômetro(km)")


switch (medidas){
    case "mm", "milímetro":
        alert("O resultado é " + (vMetros*1000) + " mm")
        break
    case "cm", "centímetro":
        alert("O resultado é " + (vMetros * 100) + " cm" )
        break        
    case "dm", "decímetro":
        alert("O resultado é " + (vMetros*10) + " dm" )
        break
    case "dam", "decâmetro":
        alert("O resultado é em dam" + (vMetros/10) + " dam" )
        break
    case "hm", "hectômetro":
        alert("O resultado é em hm" + (vMetros/100) + " hm" )
        break
    case "km", "quilômetro":
        alert("O resultado é " + (vMetros/1000) + " km" )
        break
    default:
        alert("Opção inválida")
}