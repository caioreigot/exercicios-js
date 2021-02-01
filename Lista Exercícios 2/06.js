/*
inverso(true) // retornará false
inverso("6") // retornará "booleano ou número esperados, mas o parâmetro é do tipo string"
inverso(-2000) // retornará 2000
inverso("programação") // retornará "booleano ou números esperado, mas o parâmetro é do tipo string"
*/

const inverso = (valor) => {
    if (typeof(valor) == "boolean")
        return !valor;
    // Não é necessário usar o else if porque há um return em cada if
    if (typeof(valor) == "number")
        return -valor;

    if (typeof(valor) == "string")
        return "booleano ou número esperados, mas o parâmetro é do tipo string";
}

console.log(inverso(true));
console.log(inverso("6"));
console.log(inverso(-2000));
console.log(inverso("programação"));