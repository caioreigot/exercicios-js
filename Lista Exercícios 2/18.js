/*
despesasTotais([
{nome: "Jornal online", categoria: "Informação", preco: 89.99},
{nome: "Cinema", categoria: "Entretenimento", preco: 150}
]) // retornará 239.99

despesasTotais([
{nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99},
{nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.90}
]) // retornará 34599.89
*/

const despesasTotais = (arrayDeObjetos = []) => {
    let despesa = 0;

    for (let i = 0; i < arrayDeObjetos.length; i++) {
        let objetoAtual = arrayDeObjetos[i];
        despesa += objetoAtual["preco"];
    }
    
    return despesa;
}

console.log(despesasTotais([
    {nome: "Jornal online", categoria: "Informação", preco: 89.99},
    {nome: "Cinema", categoria: "Entretenimento", preco: 150}
])) // retornará 239.99
    
console.log(despesasTotais([
{nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99},
{nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.90}
])) // retornará 34599.89