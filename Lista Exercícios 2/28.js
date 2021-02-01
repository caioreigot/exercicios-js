/*
inverter({ a: 1, b: 2, c: 3}) // retornará { 1: "a", 2: "b", 3: "c"}
*/

const inverter = (objeto = {}) => {
    let objetoOutput = {};
    for (let i = 0; i < Object.keys(objeto).length; i++) {
        let chaveAtual = Object.entries(objeto)[i][0];
        let valorAtual = Object.entries(objeto)[i][1];
        
        objetoOutput[valorAtual] = chaveAtual;
    }
    return objetoOutput;
}

console.log(inverter({ a: 1, b: 2, c: 3}));