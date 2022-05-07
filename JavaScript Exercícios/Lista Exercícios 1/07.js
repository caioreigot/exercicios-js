/* 
 * Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto,
 * elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três
 * parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,
 * -5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
 * que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
 * “Delta é negativo”.
*/

function calcularBhaskara(ax2, bx, c) {
    // ver se os parâmetros contem o "x" ou foram passados diretos como "a", "b", e "c"
    let ax2ContemX, bxContemX, a, b;

    for (i in ax2)
        if (ax2[i] == "x") ax2ContemX = true;

    for (i in bx)
        if (bx[i] == "x") bxContemX = true;

    if (ax2ContemX) {
        a = "";
        
        // Armazenando em "a" todos os números de "ax2" antes do "x"
        for (i in ax2) {
            if (ax2[i] === "x")
                break;
            
            a = a + ax2[i];
        }
    } else
        b = bx;
    
    if (bxContemX) {
        b = "";
        // Armazenando em "b" todos os números de "bx" antes do "x"
        for (i in bx) {
            if (bx[i] === "x")
                break;
            
            b = b + bx[i];
        }
    } else
        a = ax2;

    const delta = (b ** 2) - (4 * a * c);
    
    if (delta < 0)
        console.log(`Delta é negativo: ${delta}`)
    else {
        // Calculando o x1 e x2
        const resultados = [];

        const x1 = (-b + (delta ** 0.5)) / 2 * a;
        const x2 = (-b - (delta ** 0.5)) / 2 * a;
        
        resultados.push(x1, x2);
        console.log(resultados);
    }
}

// Testando com dois tipos de parâmetros
calcularBhaskara("3x²", "20x", 12)
calcularBhaskara(3, 20, 12)

// Delta é negativo
calcularBhaskara("3x²", "10x", 12)
calcularBhaskara(3, 10, 12)




