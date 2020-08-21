// Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.

const howManyPairs = (array) => {
    let numbOfPairs = 0;
    array.forEach(numero => {
        if (numero % 2 == 0 && numero != 0) {
            numbOfPairs += 1;
        }
    })
    console.log(`Há ${numbOfPairs} número(s) pares no array.`);
}

// Testes
howManyPairs([1, 2, 3, 4, 5, 6, 7, 8]); // 4
howManyPairs([0, 1, 3, 5]); // 0
howManyPairs([0, 252, 982, 1004, -24]); // 4