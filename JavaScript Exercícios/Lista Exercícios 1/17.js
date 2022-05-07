/*
 * Um funcionário irá receber um aumento de acordo com o seu plano de
 * trabalho, de acordo com a tabela abaixo:
 *        ____________________
 *        |------------------|
 *        | Plano  | Aumento |
 *        |------------------|
 *        |   A    |   10%   |
 *        |------------------|
 *        |   B    |   15%   |
 *        |------------------|
 *        |   C    |   20%   |
 *        |------------------|
 *        |__________________|
 *
 * Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
 * novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.
*/

const calculateIncrease = (workPlan, currentWage) => {

    if (currentWage < 0) {
        console.log('Salário inválido.');
    } else {
        switch (workPlan.toLowerCase()) {
            case 'a':
                var newSalary = currentWage * 1.10;
                console.log(`Novo salário: ${newSalary}`);
                return newSalary;
            
            case 'b':
                var newSalary = currentWage * 1.15;
                console.log(`Novo salário: ${newSalary}`);
                return newSalary;
    
            case 'c':
                var newSalary = currentWage * 1.20;
                console.log(`Novo salário: ${newSalary}`);
                return newSalary;
    
            default:
                console.log('Plano inválido.')
                break;
        }
    }
    
}

// Testes
calculateIncrease('a', 1000); // 1100
calculateIncrease('b', 1000); // 1150
calculateIncrease('c', 1000); // 1200
calculateIncrease('a', -500); // "Salário inválido."
