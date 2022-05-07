/*
 * Obs: este exercício não existe no curso, foi elaborado por mim
 *
 * Escreva duas funções que recebam um array de arrays, que contenham números.
 * A primeira função deve retornar apenas um array com os menores números entre os arrays do array passado como parâmetro
 * Exemplo => Entrada: [ [1, 2], [3, 4] ] Saída: [ 1, 3 ]
 * 
 * A outra função deve retornar um único número, sendo o menor número entre todos os arrays do array passado como parâmetro
 * Exemplo => Entrada: [ [5, 3], [2, 4] ] Saída: 2
*/

const smallestIntsArray = (array) => {
    const smallestIntegers = [];
    
    array.forEach((array) => {
        let smallestOfArray = array[0];

        array.forEach((num) => {
            if (num < smallestOfArray)
                smallestOfArray = num;
        });

        smallestIntegers.push(smallestOfArray)
    });
    
    return smallestIntegers;
}

const smallestIntArray = (array) => {
    let smallestParentArray = array[0][0];

    array.forEach((array) => {
        array.forEach((num, index) => {
            if (num < smallestParentArray)
                smallestParentArray = num;
        });
    });

    return smallestParentArray;
}

console.log(smallestIntsArray( [ [2, 1, 3], [6, 5, 4], [7, 8, 9] ] )); // [ 1, 4, 7 ]
console.log(smallestIntsArray( [ [0.2, 1, 3], [6, 3.4, 4], [7, 8, 9] ] )); // [ 0.2, 3.4, 7 ]

console.log(smallestIntArray( [ [2, 1, 3], [6, 5, 4], [7, 8, 9] ] )); // 1
console.log(smallestIntArray( [ [2, 5, 3], [6, 5, 4], [7, 0.5, 9] ] )); // 0.5
