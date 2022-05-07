/* 
 * Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
 * Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
 * Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
 * ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
 * triângulo).
*/

function tipoTriangulo(a, b, c) {
    if (a === b && a === c && b === c)
        console.log('Equilátero');
    if (a === b && a !== c || a === c && a !== b || b === c && b !== a)
        console.log('Isósceles');
    if (a !== b && a !== c && b !== c)
        console.log('Escaleno');
}

// Exemplo de equilátero
tipoTriangulo(5, 5, 5);

// Exemplo de isósceles
tipoTriangulo(4, 2, 4);

// Exemplo de escaleno
tipoTriangulo(4, 5, 6);