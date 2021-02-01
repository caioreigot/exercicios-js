/*
segundoMaior([12, 16, 1, 5]) // retornará 12
segundoMaior([8, 4, 5, 6]) // retornará 6
*/

const segundoMaior = (array = []) => {
    let arraySemRepeticoes = [];

    for (let i = 0; i < array.length; i++)
        if (!arraySemRepeticoes.includes(array[i]))
            arraySemRepeticoes.push(array[i]);

    let arrayOutput = arraySemRepeticoes.sort((a, b) => a - b);
    let segundoMaiorNumero = arrayOutput[arrayOutput.length - 2];
    return segundoMaiorNumero;
}

console.log(segundoMaior([12, 16, 1, 5]));
console.log(segundoMaior([8, 4, 5, 6]));