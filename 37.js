/*
 * Escreva duas funções, uma para progressão aritmética e a outra para progressão geométrica, que recebam
 * como parâmetros um número n (número de termo), a1 (o primeiro termo) e r (a razão). Escreva os n termos,
 * bem como a soma dos elementos.
*/

const arithmeticProgression = (n, a1, r) => {
    let sumAp = null;
    for (let i = 0; i < n; i++) {
        console.log(`n${i + 1}: ${a1 + r * i}`);
        sumAp += a1 + r * i;
    }
    console.log(`Soma dos termos da PA: ${sumAp}`);
}

function geometricProgression (n, a1, r) {
    let sumGp = null;
    for (let i = 0; i < n; i++) {
        console.log(`n${i + 1}: ${a1 * (r ** i)}`);
        sumGp += a1 * (r ** i);
    }
    console.log(`Soma dos termos da PG: ${sumGp}`)
}

arithmeticProgression(10, 10, 15)
console.log('')
geometricProgression(10, 5, 3)