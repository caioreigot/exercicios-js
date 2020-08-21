/*
 * Escreva duas funções que leia um array que contenha arrays de inteiros, 
 * e retorne um array com os menores inteiros de cada um, e a outra
 * retorne uma variável com o menor inteiro entre todos os arrays.
*/

const smallestIntsArray = (array) => {
    const smallestIntegers = [];
    
    array.forEach((array) => {
        let smallestOfArray = null;
        // iterando por cada array dentro do array "pai"
        array.forEach((num, index) => {
            if (num === array[0]) {
                smallestOfArray = num; // o 1 do array é o menor, até compara-lo com os outros
            }
            else {
                if (num < array[index - 1] && num < smallestOfArray) {
                    smallestOfArray = num;
                }
            }
        })
        smallestIntegers.push(smallestOfArray)
    })
    
    return smallestIntegers;

}

const smallestIntArray = (array) => {
    let smallestParentArray = array[0][0]; // menor do array "pai"

    array.forEach((array) => {
        // iterando por cada array dentro do array "pai"
        array.forEach((num, index) => {
            if (num === array[0]) {}
            else {
                if (num < array[index - 1] && num < smallestParentArray) {
                    smallestParentArray = num;
                }
            }
        })
    })

    return smallestParentArray;

}

console.log(smallestIntsArray( [ [2, 1, 3], [6, 5, 4], [7, 8, 9] ] )); // [ 1, 4, 7 ]
console.log(smallestIntsArray( [ [0.2, 1, 3], [6, 3.4, 4], [7, 8, 9] ] )); // [ 0.2, 3.4, 7 ]

console.log(smallestIntArray( [ [2, 1, 3], [6, 5, 4], [7, 8, 9] ] )); // 1
console.log(smallestIntArray( [ [2, 5, 3], [6, 5, 4], [7, 0.5, 9] ] )); // 0.5
