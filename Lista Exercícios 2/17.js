/*
somarNumeros([10, 10, 10]) // retornará 30
somarNumeros([15, 15, 15, 15]) // retornará 60
*/

const somarNumeros = (array) => {
    let soma = 0;
    for (let i = 0; i < array.length; i++) {
        soma += array[i];
    }

    return soma;
}

console.log(somarNumeros([10, 10, 10]));
console.log(somarNumeros([15, 15, 15, 15]));