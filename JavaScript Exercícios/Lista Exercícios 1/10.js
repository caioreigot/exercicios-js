/* 
* Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
* ou false. 
*/

const divisivelPorTres = (n) => (n % 3 == 0 && n != 0);

// Testes
console.log(divisivelPorTres(6)); // true
console.log(divisivelPorTres(0)); // false
console.log(divisivelPorTres(-3)); // true