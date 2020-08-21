/* 
 * Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
 * e imprime a quantidade no console.
*/

const howManyNegatives = (array) => {
    let arrayNegativeNumbers = 0; 
    array.forEach((number) => {
        if (number < 0) {
            arrayNegativeNumbers++;
        }
    })
    console.log(`Números negativos no vetor: ${arrayNegativeNumbers}`);
}

// Testes
howManyNegatives([-4, -3, -2, -1, 0, 1, 2, 3, 4]); // 4