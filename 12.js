/* 
 * Faça um algoritmo que calcule o fatorial de um número.
 * Exemplo: 6! = 6 . 5 . 4 . 3 . 2 . 1 = 720
*/ 

const calcularFatorial = (n) => {
    var fatorial = n;
    for (let i = n; i > 1; i--) {
        fatorial = fatorial * (i - 1);
    }
    return fatorial;
}

// Testes
console.log(calcularFatorial(6)); // 720
console.log(calcularFatorial(10)); // 3628800