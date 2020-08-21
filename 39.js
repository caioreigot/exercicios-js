/*
 * Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o
 * primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente.
 * Faça a troca sem utilizar uma variável auxiliar.
*/

let vetorA = [1, 2, 3];
let vetorB = [4, 5, 6];

const swapArray = (array1, array2) => {
    if (array1.length == array2.length) {
        for (let i = 0; i < array1.length; i++) {
            array1[i] = array1[i] + array2[i]
            array2[i] = array1[i] - array2[i]
            array1[i] = array1[i] - array2[i]
        }
    } else {
        return "Os arrays não possuem o mesmo tamanho.";
    }
}

// Testes
swapArray(vetorA, vetorB);
console.log(vetorA); // [ 4, 5, 6 ]
console.log(vetorB); // [ 1, 2, 3 ]
