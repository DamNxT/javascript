let select = document.querySelector("select");

let paragrafo = document.querySelector("p");

select.addEventListener("change", selecaoHeroi)

function selecaoHeroi() {
    let escolha = select.value;

    if (escolha === "batman"){
        paragrafo.textContent = "Batman é um herói muito rico";
    } else if (escolha === "superMan"){
        paragrafo.textContent = "Super Man é um herói forte";
    } else if (escolha === "aquaman"){
        paragrafo.textContent = "Aquaman é um herói da água";
    } else {
        paragrafo.textContent = "Flash é um herói muito rápido";
    }
}