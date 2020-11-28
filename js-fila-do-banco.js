//SOLUCAO 1
var totalCasos = gets();
for (var i = 0; i < totalCasos; i++) {
    var totalClientes = gets();
    var senhas = gets();
    var filaOriginal = senhas.split(" ");
    var filaOrdenada = senhas.split(" ").sort((a, b) => a - b).reverse();

    var x = 0;
    var contador = 0;
    while (x < totalClientes) {
        if (filaOriginal[x] == filaOrdenada[x]) contador++;
        x++;
    }
    console.log(contador);
}


//SOLUCAO 2 - Resumido
totalCasos = gets();
while ((totalCasos--)) {
    totalClientes = gets();
    senhas = gets();
    filaOriginal = senhas.split(" ");

    var filaOrdenada = senhas.split(" ").sort((a, b) => a - b).reverse();
    console.log((filaOriginal.filter((value, index) => value === filaOrdenada[index])).length);
}