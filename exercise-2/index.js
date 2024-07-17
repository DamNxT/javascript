const nameVehicle = prompt("Coloque o nome de um veículo")
const vel= prompt("Digite uma velocidade para carro")
const vehicle2 = prompt("Coloque o nome de outro veículo")
const vel2 = prompt("Digite uma velocidade para o segundo carro")
const velAux = parseFloat(vel)
const velAuxVehicle2 = parseFloat(vel2)

alert(
    " O veículo " + nameVehicle +
    " \nestá em uma velocidade de: " + velAux + "KM" +
    " O segundo veículo " + vehicle2 + 
    "\n está em uma velocidade de: " + velAuxVehicle2 + "KM"
)

if  (velAux > velAuxVehicle2){
    alert("\nO veículo " + nameVehicle + " está mais rápido do que " +
    vehicle2
    )
} else if (velAuxVehicle2>velAux){
    alert("\nO veículo " + vehicle2 + " está mais rápido do que o " + nameVehicle)
} else{
    alert( nameVehicle + " e " + vehicle2 + " Possuem velocidades iguais ")
}

