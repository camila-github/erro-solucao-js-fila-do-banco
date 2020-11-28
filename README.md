## Treinamento Digital Innovation One - Exercicio - Fila do banco

O exercicio publicado é referente ao treinamento do BOOTCAMP - Desenvolvedor NodeJS - Ordenação e Filtro em JavaScript.
(https://digitalinnovation.one)

#### Descrição do Desafio:

O banco que você trabalha sempre tem problemas para organizar as filas de atendimento dos clientes.
Após uma reunião com a gerência ficou decidido que os clientes ao chegar na agência receberão uma senha numérica em seu aparelho de celular via sms e que a ordem da fila será dada não pela ordem de chegada, mas sim pelo número recebido via sms. Sendo, aqueles com número maior deverão ser atendidos primeiro.
Então, dada a ordem de chegada dos clientes reordene a fila de acordo com o número recebido via sms, e diga quantos clientes não precisaram trocar de lugar nessa reordenação.


#### Entrada:

A primeira linha contém um inteiro N, indicando o número de casos de teste a seguir.
Cada caso de teste inicia com um inteiro M (1 ≤ M ≤ 1000), indicando o número de clientes. Em seguida haverá M inteiros distintos Pi (1 ≤ Pi ≤ 1000), onde o i-ésimo inteiro indica o número recebido via sms do i-ésimo cliente.
Os inteiros acima são dados em ordem de chegada, ou seja, o primeiro inteiro diz respeito ao primeiro cliente a chegar na fila, o segundo inteiro diz respeito ao segundo cliente, e assim sucessivamente.


#### Saída:

Para cada caso de teste imprima uma linha, contendo um inteiro, indicando o número de clientes que não precisaram trocar de lugar mesmo após a fila ser reordenada.

Exemplos de Entrada  | Exemplos de Saída
------------- | -------------
3 | 1
3 | 0
100 80 90 | 4
4 |
100 120 30 50 |
4 |
100 90 30 25 |

```javascript
//SOLUCAO 1
//leitura da primeira entrada de dados, referente ao total de casos*/
var totalCasos = gets();
/*o estrutura de repetição FOR() será executada de acordo com o total de casos*/
for (var i = 0; i < totalCasos; i++) {
    /*leitura da segunda entrada de dados, referente o total de clientes*/
    var totalClientes = gets();
    /*leitura da terceira entrada de dados (string unica), referente as senhas dos clientes*/
    var senhas = gets();
    /*as senhas serão separadas e armazenadas em um array*/
    var filaOriginal = senhas.split(" ");
    /*as senhas serão ordenadas em ordem crescente (uso do sort()) e 
    depois  listado em ordem decrescente (uso do reverse())*/
    var filaOrdenada = senhas.split(" ").sort((a, b) => a - b).reverse();
    /*o loop é para verificar os clientes que nao precisaram trocar de lugar mesmo após a fila ser reordenada*/
    var x = 0;
    var contador = 0;
    while (x < totalClientes) {
        if (filaOriginal[x] == filaOrdenada[x]) contador++;
        x++;
    }
    console.log(contador);
}


//SOLUCAO 2 - Resumido
/*leitura da primeira entrada de dados, referente ao total de casos*/
totalCasos = gets();
/*o loop será executada de acordo com o total de casos (contagen decrescente)*/
while ((totalCasos--)) {
    /*leitura da segunda entrada de dados, referente o total de clientes*/
    totalClientes = gets();
    /*leitura da terceira entrada de dados (string unica), referente as senhas dos clientes*/
    senhas = gets();
    /*as senhas serão separadas e armazenadas em um array, mantendo a ordem original*/
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
```