/*
contarCaractere("r", "A sorte favorece os audazes") // retornará 2
contarCaractere("c", "Conhece-te a ti mesmo") // retornará 1
*/

const contarCaractere = (char = "", frase = "") => {
    let contador = 0;
    for (let i = 0; i < frase.length; i++) {
        palavraDaFrase = frase[i];

        if (char == palavraDaFrase)
            contador++;
    }
    return contador;
}

console.log(contarCaractere("r", "A sorte favorece os audazes"));
console.log(contarCaractere("c", "Conhece-te a ti mesmo"));