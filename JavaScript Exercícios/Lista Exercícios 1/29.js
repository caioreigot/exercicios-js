/*
 * Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
 * deste vetor estão no intervalo [10, 20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
 * deles estão fora do intervalo, escrevendo estas informações.
*/

const countInterval = (array) => {
    let inInterval = 0; let outOfInterval = 0;
    array.forEach((number) => {
        if (number >= 10 && number <= 20)
            inInterval++;
        else
            outOfInterval++;
    });

    if (outOfInterval == 0) outOfInterval = 'nenhum';
    if (inInterval == 0) inInterval = 'nenhum';
    
    console.log(`No intervalo de [10, 20]: ${inInterval} número` + (inInterval > 1 ? 's' : '') + '.');
    console.log(`Fora do intervalo: ${outOfInterval} número` + (outOfInterval > 1 ? 's' : '') + '.');
}

// Testes
countInterval([20, 10]); // no intervalo: 2 números. | fora do intervalo: nenhum número.
countInterval([10, 45, 65]); // no intervalo: 1 número. | fora do intervalo: 2 números.