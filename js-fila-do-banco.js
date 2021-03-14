//SOLUCAO 1
let numeroDeCasos = gets();
while (numeroDeCasos--) {
    const totalClientes = gets();
    const senhas = gets();
    const filaOriginal = senhas.split(" ");
    const filaOrdenada = senhas.split(" ").sort((a, b) => a - b).reverse();
    console.log((filaOriginal.filter((elemAtual, indexAtual) => elemAtual === filaOrdenada[indexAtual])).length);
}


//SOLUCAO 2
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