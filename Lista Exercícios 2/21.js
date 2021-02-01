/*
menorNumero([10, 5, 35, 65]) // retornará 5
menorNumero([5, -15, 50, 3]) // retornará -15
*/

const menorNumero = (arrayDeNumeros = []) => {
    let atualMenorNumeroEncontrado = arrayDeNumeros[0];

    for (let i = 0; i < arrayDeNumeros.length; i++) {
        if (arrayDeNumeros[i] < atualMenorNumeroEncontrado)
            atualMenorNumeroEncontrado = arrayDeNumeros[i];
    }

    return atualMenorNumeroEncontrado;
}

console.log(menorNumero([10, 5, 35, 65]));
console.log(menorNumero([5, -15, 50, 3]));