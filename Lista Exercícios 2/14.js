/*
objetoParaArray({
nome: "Maria",
profissao: "Desenvolvedora de software"
}) // irá retornar [["nome", "Maria"], ["profissao", "Desenvolvedora de Software"]]

objetoParaArray({
codigo: 11111,
preco: 12000
}) // irá retornar [["codigo", 11111], ["preco", 12000]]
*/

const objetoParaArray = (objeto) => {
    let arrayPai = [];

    for (var chave in objeto)
        arrayPai.push([chave, objeto[chave]]);
    
    return arrayPai;
}

console.log(objetoParaArray({
    nome: "Maria",
    profissao: "Desenvolvedora de software"
}));

console.log(objetoParaArray({
    codigo: 11111,
    preco: 12000
}));