/*
 * Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
 * para um determinado valor informado pelo usuário, considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
 * Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
 * informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 
 * 
 * Input: 18.00
 * 
 * Output: 
 * 1 nota(s) de R$ 10. 
 * 1 nota(s) de R$ 5. 
 * 3 nota(s) de R$ 1
 * 
*/

const administerChange = (change) => {
    console.log(`Processando troco para R$${change.toFixed(2)}...`);

    var amount = change;

    // Notas pedidas no exercício
    var billsOf100 = Math.trunc(amount / 100); amount -= billsOf100 * 100;
    var billsOf50 = Math.trunc(amount / 50); amount -= billsOf50 * 50;
    var billsOf10 = Math.trunc(amount / 10); amount -= billsOf10 * 10;
    var billsOf5 = Math.trunc(amount / 5); amount -= billsOf5 * 5;
    var billsOf1 = Math.trunc(amount / 1); amount -= billsOf1 * 1;
    
    if (billsOf100 != 0) console.log(`${billsOf100} nota(s) de R$ 100.`);
    if (billsOf50 != 0) console.log(`${billsOf50} nota(s) de R$ 50.`);
    if (billsOf10 != 0) console.log(`${billsOf10} nota(s) de R$ 10.`);
    if (billsOf5 != 0) console.log(`${billsOf5} nota(s) de R$ 5.`);
    if (billsOf1 != 0) console.log(`${billsOf1} nota(s) de R$ 1.`);
    console.log('Processo encerrado.');
}

// Testes
administerChange(18)
administerChange(1)
administerChange(112)
administerChange(1000)
