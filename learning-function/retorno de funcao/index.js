function calcularMedia(a, b){
    const media = (a + 2)/2;
    return media;
}

const resultado = calcularMedia(7,2);

console.log(resultado);

function criarProduto(nome, preco){
    const produto={
        nome,
        preco, //preco: preco
        estoque: 1        
    }
    return produto;
}

const notebook = criarProduto("alienware", "15.000,00");

console.log(notebook);
console.log(criarProduto("alienware", "15.000,00"));

function areaRetangular(base, altura){
    return base*altura;
}

function areaQuadrada(lado){
    return areaRetangular(lado,lado);
}

// console.log(areaRetangular(3,5));

// console.log(areaQuadrada(9));

function  ola(){
    let texto = "...";
    return texto;
    texto = "Olá, mundo!";
    console.log(texto);
}

console.log(ola());

function maioridade(idade){    
    if (idade < 18){
        return "Você é de menor " + idade;
    } else {
        return "Você é de maior " + idade;
    }
}
console.log(maioridade(200));
console.log(maioridade(2));