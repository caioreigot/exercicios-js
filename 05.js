/*
 * Lidar com números em JavaScript pode dar muita dor de cabeça. Você já viu o que acontece quando faz o
 * seguinte comando no console: console.log(0.1 + 0.2); O resultado será: 0.30000000000000004. Outra coisa
 * importante de observar, é o fato que o ponto é utilizado no lugar da vírgula e vice versa. Com isso, vamos fazer
 * um exercício simples para mostrar dinheiro sempre da forma correta. Desenvolva uma função JavaScript para
 * que ela receba um valor como 0.30000000000000004 e retorne R$0,30 (observe a vírgula e o ponto).
*/

function imprimirValor(valor) {
    let valorReais = `R$ ${valor.toFixed(2).toString().replace(".", ",")}`
    console.log(valorReais)
}


// Testes
imprimirValor(0.1 + 0.2) // R$0,30
imprimirValor(2.30000000000000004) // R$2,30
imprimirValor(100.50) // R$100,50
imprimirValor(0.01) // R$0.01
imprimirValor(0.015) // R$0.01
imprimirValor(0.00) // R$0.00