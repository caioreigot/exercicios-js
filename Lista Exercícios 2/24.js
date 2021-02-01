/*
contarPalavras("Sou uma frase") // retornará 3
contarPalavras("Me divirto aprendendo a programar") // retornará 5
*/

const contarPalavras = (texto = "") => {
    let numeroPalavras = 0;
    for (let i = 0; i < texto.length; i++) {
        palavra = texto[i];

        if (i == 0)
            numeroPalavras++;
        
        if (palavra == " ")
            numeroPalavras++;
    }
    return numeroPalavras;
}

console.log(contarPalavras("Sou uma frase"));
console.log(contarPalavras("Me divirto aprendendo a programar"));