/*
simboloMais(2) // retornará "++"
simboloMais(4) // retornará "++++"
*/

const simboloMais = (quantidade) => {
    let simbolosMais = "";
    for (let i = 0; i < quantidade; i++) {
        simbolosMais += "+";
    }
    return simbolosMais;
}

console.log(simboloMais(2));
console.log(simboloMais(4));