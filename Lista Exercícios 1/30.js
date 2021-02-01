// Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.

const smallerLargerNumber = (array) => {
    let smaller = array[0]; let larger = array[0];

    array.forEach((number, index) => {
        if (number != array[0]) { // se não for o primeiro
            if (number < array[index - 1] && number < smaller)
                smaller = number;
            if (number > array[index - 1] && number > larger)
                larger = number;
        }
    });

    console.log(`Menor número: ${smaller}\nMaior número: ${larger}`);
}

// Testes
smallerLargerNumber([2, 3, 4, 10, 8]); // menor: 2 | maior: 10