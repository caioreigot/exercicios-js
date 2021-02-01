/* 
 * Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
 * considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos
 * de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com
 * idade acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130
*/

const priceHealthPlan = (age) => {
    var priceByAge = 0;

    if (age < 10)
        priceByAge += 80;
    else if (age < 30)
        priceByAge += 50;
    else if (age < 60)
        priceByAge += 95;
    else if (age >= 60)
        priceByAge += 130;

    // Caso a função seja chamada vazia, não irá retornar 100
    if (priceByAge != 0) {
        var price = 100 + priceByAge;
        return price;
    } else
        console.log('Idade inválida.')
}

console.log(priceHealthPlan(5));
console.log(priceHealthPlan(16));
console.log(priceHealthPlan(36));
console.log(priceHealthPlan(50));
console.log(priceHealthPlan(72));

