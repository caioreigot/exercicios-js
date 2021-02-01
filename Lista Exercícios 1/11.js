/* As regras para o cálculo dos anos bissextos são as seguintes:
 * De 4 em 4 anos é ano bissexto;
 * De 100 em 100 anos não é ano bissexto;
 * De 400 em 400 anos é ano bissexto;
 * Prevalecem as últimas regras sobre as primeiras.
 * Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a
 * mensagem e retornando true ou false.
*/

const verificaBissexto = (ano) => {
    if (ano <= 0 || ano % 100 == 0) {
        console.log(`O ano de ${ano} não é bissexto.`);
        return false;
    }

    if (ano % 400 == 0) {
        console.log(`O ano de ${ano} é bissexto.`);
        return true;
    }

    if (ano % 4 == 0) {
        console.log(`O ano de ${ano} é bissexto.`);
        return true;
    } else {
        console.log(`O ano de ${ano} não é bissexto.`);
        return false;
    }
}

// Testes
verificaBissexto(0) // false
verificaBissexto(1004) // true
verificaBissexto(1017) // false
verificaBissexto(1008) // true
verificaBissexto(2020) // true
verificaBissexto(2024) // true

