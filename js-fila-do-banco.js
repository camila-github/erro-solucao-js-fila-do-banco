//SOLUCAO 1
//leitura da primeira entrada de dados, referente ao total de casos
var totalCasos = gets();
//o estrutura de repetição FOR() será executada de acordo com o total de casos
for (var i = 0; i < totalCasos; i++) {
    //leitura da segunda entrada de dados, referente o total de clientes
    var totalClientes = gets();
    //leitura da terceira entrada de dados (string unica), referente as senhas dos clientes
    var senhas = gets();
    //as senhas serão separadas e armazenadas em um array
    var filaOriginal = senhas.split(" ");
    /*as senhas serão ordenadas em ordem crescente (uso do sort()) e 
    depois  listado em ordem decrescente (uso do reverse())*/
    var filaOrdenada = senhas.split(" ").sort((a, b) => a - b).reverse();
    //o loop é para verificar os clientes que nao precisaram trocar de lugar mesmo após a fila ser reordenada
    var x = 0;
    var contador = 0;
    while (x < totalClientes) {
        if (filaOriginal[x] == filaOrdenada[x]) contador++;
        x++;
    }
    console.log(contador);
}


//SOLUÇÃO 2 - Resumido
//leitura da primeira entrada de dados, referente ao total de casos
totalCasos = gets();
//o loop será executada de acordo com o total de casos (contagen decrescente)
while ((totalCasos--)) {
    //leitura da segunda entrada de dados, referente o total de clientes
    totalClientes = gets();
    //leitura da terceira entrada de dados (string unica), referente as senhas dos clientes
    senhas = gets();
    //as senhas serão separadas e armazenadas em um array, mantendo a ordem original
    filaOriginal = senhas.split(" ");
    /*as senhas serão ordenadas em ordem crescente (uso do sort()) e 
    depois  listado em ordem decrescente (uso do reverse())*/
    var filaOrdenada = senhas.split(" ").sort((a, b) => a - b).reverse();
    /*O filter() é para verificar os clientes que nao precisaram trocar de lugar, mesmo após 
    a fila ter sido reordenada. Será comparado a lista de senha original, com a lista de senhas 
    que foram reordenadas. O retorno será a senha que nao teve a troca de posição, como o retorno 
    do filter será em formato de array, o length mostrará a quantidae de senhas que não trocaram de posição*/
    console.log((filaOriginal.filter((value, index) => value === filaOrdenada[index])).length);
}