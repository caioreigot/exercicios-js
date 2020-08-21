/* 
* Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
* ou false. 
*/

function divisivelPorTres(n) {
    if (n % 3 == 0 && n != 0) {
        return true
    } else {
        return false
    }
}

// Testes
console.log(divisivelPorTres(6)) // true
console.log(divisivelPorTres(0)) // false
console.log(divisivelPorTres(-3)) // true