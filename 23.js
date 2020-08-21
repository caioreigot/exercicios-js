/*
 * Escreva um algoritmo que leia o código de um aluno e suas três grades. Calcule a média ponderada do
 * aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
 * aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
 * "REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.
*/

const calculateFinalGrade = (studentId, grade1, grade2, grade3) => {
    
    let grades = [];

    grades.push(grade1);
    grades.push(grade2);
    grades.push(grade3);
    grades.sort().reverse();

    let finalAverage = (grades[0] * 4 + grades[1] * 3 + grades[2] * 3) / 10
    console.log(`ID do aluno: ${studentId}.\nNotas: ${grade1}, ${grade2}, ${grade3}.\nStatus: ${finalAverage < 5 ? 'Reprovado.' : 'Aprovado.'}`)
}

calculateFinalGrade(123, 2.8, 6, 3.5);