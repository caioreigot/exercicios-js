/*
 * Escreva uma função que receba dois parâmetros, início e fim. Essa função deve imprimir todos os números
 * ímpares que estão entre esses valores. Por padrão os valores devem ser 0 para início e 100 para fim. Atente
 * para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor
*/

const oddNumbersBetween = (start = 0, end = 100) => {
    // tratamentos
    if (end < start) {
        let temp = start;
        start = end;
        end = temp;
    }
    // imprimindo todos números ímpares
    for (let i = start; i <= end; i++) {
        if (i % 2 != 0) {
            console.log(i);
        }
    }
}

// Testes
oddNumbersBetween(1, 10); // 1, 3, 5, 7, 9
oddNumbersBetween(1, 11); // 1, 3, 5, 7, 9, 11