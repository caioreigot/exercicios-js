/*
filtrarPorQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 2) // retornará [38, 10, 11]
filtrarPorQuantidadeDeDigitos([5, 9, 1, 125, 11], 1) // retornará [5, 9, 1]
*/

const filtrarPorQuantidadeDeDigitos = (array = [], quantidadeDigitos = 1) => {
    let arrayOutput = [];
    
    for (let i = 0; i < array.length; i++)
        if (array[i].toString().length == quantidadeDigitos)
            arrayOutput.push(array[i]);

    return arrayOutput;
}

console.log(filtrarPorQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 2));
console.log(filtrarPorQuantidadeDeDigitos([5, 9, 1, 125, 11], 1));