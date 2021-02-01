/* 
 * Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
 * multiplicação e divisão desses valores.
*/

function operacoes(x, y) {
    let stringComOperacoes = "";

    stringComOperacoes += `Números: ${x}, ${y}`;
    stringComOperacoes += "\n" + `Soma = ${x + y}`;
    stringComOperacoes += "\n" + `Subtração = ${x - y}`;
    stringComOperacoes += "\n" + `Multiplicação = ${x * y}`;

    console.log(stringComOperacoes);
}

operacoes(1, 2);