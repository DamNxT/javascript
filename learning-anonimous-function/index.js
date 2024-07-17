//Aqui está um exemplo de uma função comum
olaMundo();

function olaMundo(){
    console.log("Olá Mundo");
}



// Aqui está um exemplo de uma função anônima
//Funções anônimas não necessitam ser nomeadas e pode ser feitas através de variaveis
//Devem ser chamadas logo abaixo da criação da função anônima, caso contrário se for chamada igual o exemplo acima vai dar erro de execução
const oiMundo = function(){
    console.log("Oi Mundo");
}
oiMundo();
