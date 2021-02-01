/*
 * Utilizando a estrutura do Switch faça um programa que simule uma calculadora básica. O programa recebe
 * como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores
 * numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e
 * 3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas.
*/

const calculate = (x, op, y) => {
    switch (op) {
        case '+':
            console.log(`Resultado da soma: ${x + y}`);
            return (x + y);
        case '-':
            console.log(`Resultado da subtração: ${x - y}`);
            return (x - y);
        case '*':
            console.log(`Resultado da multiplicação: ${x * y}`);
            return (x * y);
        case '/':
            console.log(`Resultado da divisão: ${x / y}`);
            return (x / y);
        default:
            break;
    }
}

// Testes
calculate(2, '+', 3); // 5
calculate(200, '+', 55); // 255
calculate(10, '-', 5); // 5
calculate(5, '-', 10); // -5 
calculate(5, '*', 10); // 50
calculate(5, '*', 0.10); // 0.5
calculate(5, '/', 0.10); // 50
calculate(1, '/', 2); // 0.5