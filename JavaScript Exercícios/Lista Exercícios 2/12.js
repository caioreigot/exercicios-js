/*
removerPropriedade({a: 1, b: 2}, "a") // retornará {b: 2}
removerPropriedade({
id: 20,
nome: "caneta",
descricao: "Não preenchido"
}, "descricao") // retornará {id: 20, nome: "caneta"}
*/

const removerPropriedade = (objeto, chave) => {
    objetoTemp = objeto;
    delete objetoTemp[chave];
    return objetoTemp;
}

console.log(removerPropriedade({a: 1, b: 2}, "a"));

let objeto = {
    id: 20,
    nome: "caneta",
    descricao: "Não preenchido"
};

console.log(removerPropriedade(objeto, "descricao"));

console.log(Object.is(removerPropriedade(objeto, "descricao"), objeto)); // true
