/*
 * Escreva duas funções que leia um array que contenha arrays de inteiros, 
 * e retorne um array com os menores inteiros de cada um, e a outra
 * retorne uma variável com o menor inteiro entre todos os arrays.
*/

const smallestIntsArray = (array) => {
    const smallestIntegers = [];
    
    array.forEach((array) => {
        let smallestOfArray = array[0];

        array.forEach((num) => {
            if (num < smallestOfArray)
                smallestOfArray = num;
        })

        smallestIntegers.push(smallestOfArray)
    })
    
    return smallestIntegers;

}

const smallestIntArray = (array) => {
    let smallestParentArray = array[0][0];

    array.forEach((array) => {
        array.forEach((num, index) => {
            if (num < smallestParentArray)
                smallestParentArray = num;
        })
    })

    return smallestParentArray;

}

console.log(smallestIntsArray( [ [2, 1, 3], [6, 5, 4], [7, 8, 9] ] )); // [ 1, 4, 7 ]
console.log(smallestIntsArray( [ [0.2, 1, 3], [6, 3.4, 4], [7, 8, 9] ] )); // [ 0.2, 3.4, 7 ]

console.log(smallestIntArray( [ [2, 1, 3], [6, 5, 4], [7, 8, 9] ] )); // 1
console.log(smallestIntArray( [ [2, 5, 3], [6, 5, 4], [7, 0.5, 9] ] )); // 0.5