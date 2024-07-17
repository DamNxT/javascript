let velocidade = 100

while (velocidade > 0 ){
    alert(" O carro está a: " + velocidade + "Km")
    velocidade -= 20
    alert(" Diminuindo a 20 Km")

    if(velocidade ===40){
        break
    }
}

alert("O carro parou")