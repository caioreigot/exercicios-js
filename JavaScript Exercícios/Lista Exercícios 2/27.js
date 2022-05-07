/*
removerVogais("Cod3r") // retornará "Cd3r"
removerVogais("Fundamentos") // retornará "Fndmnts"
*/

const vogais = ["a", "e", "i", "o", "u"];

const removerVogais = (string = "") => {
    let stringOutput = "";
    for (let i = 0; i < string.length; i++) {
        let palavra = string[i];
        
        if (vogais.includes(palavra))
            continue;
        else
            stringOutput += palavra;
    }
    return stringOutput;
}

console.log(removerVogais("Cod3r"));
console.log(removerVogais("Fundamentos"));