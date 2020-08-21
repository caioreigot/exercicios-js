/* 
 * Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
 * e o resto da divisão destes dois valores.
*/

function dividir(x, y) {
    divisao = x / y
    resto = x % y
    console.log(`Divisão = ${Math.trunc(divisao)}`)
    console.log(`Resto da divisão = ${resto}`)
}

// Testes
dividir(6, 2) // 3, sobra 0
dividir(7, 2) // 3, sobra 1
dividir(10, 20) // 0, sobra 10