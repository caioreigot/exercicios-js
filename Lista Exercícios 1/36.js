/*
 * Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
 * inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
 * elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
 * o valor do elemento for maior que 5.
*/

const arrayMult = (array, mult) => {
    let newArray = [];
    for (let i = 0; i < array.length; i++)
        newArray.push(array[i] * mult);
    
    return newArray;
}

const conditionalArrayMult = (array, mult) => {
    let newArray = [];
    for (let i = 0; i < array.length; i++)
        if (array[i] > 5)
            newArray.push(array[i] * mult);

    return newArray;
}

console.log(arrayMult([10, 20, 30, 0], 2)); // [ 20, 40, 60, 0 ]
console.log(conditionalArrayMult([1, 2, 3, 4, 5, 6, 7, 8], 2)); // [ 12, 14, 16 ]