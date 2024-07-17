function dobro(x){
    alert("O dobro de " + x + " é " + (x*2))
}

// dobro(7);
// dobro(5);

function dizerOla(nome = "mundo"){
    alert("Olá, " + nome + "!");
}
// dizerOla("Danilo");
// dizerOla();

function soma(a,b){
    alert("Resultado da soma é " + (a+b));
}

// soma(7,6);
// soma(1,1);

function criarUsuario(nome, email, senha, tipo="admin"){
    const usuario = {
        nome, //mesmo que nome: nome
        email,
        senha,
        tipo
    }
    console.log(usuario);
}

criarUsuario("Danilo", "danilo@teste", 1234);
criarUsuario("danilo@teste", "danilo", 1234)