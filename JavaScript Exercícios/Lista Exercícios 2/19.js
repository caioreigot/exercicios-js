/*
calcularMedia([0, 10]) // retornará 5
calcularMedia([1, 2, 3, 4, 5]) // retornará 3
*/

const calcularMedia = (arrayDeNumeros = []) => {
    let somaDosNumeros = 0;
    for (let i = 0; i < arrayDeNumeros.length; i++) {
        somaDosNumeros += arrayDeNumeros[i];
    }
    let media = (somaDosNumeros / arrayDeNumeros.length);
    return media;
}

console.log(calcularMedia([0, 10]));
console.log(calcularMedia([1, 2, 3, 4, 5]));