/*
 * Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
 * crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
 * quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.
*/

// o growth é a taxa de crescimento em centimetros por ano, não em porcentagem.
const chieldSize = (cm1, growth1, cm2, growth2) => {
    if (cm1 == cm2) {
        if (growth1 > growth2) {
            return "A primeira criança ultrapassará o tamanho da segunda em 1 ano.";
        }
        else if (growth1 < growth2) {
            return "A segunda criança ultrapassará o tamanho da primeira em 1 ano.";
        }
        else {
            return "As duas vão ter o mesmo tamanho sempre.";
        }
    }
    
    if (cm1 < cm2 && growth1 < growth2) {
        return "A primeira criança não ultrapassará o tamanho da segunda.";
    }
    else if (cm2 < cm1 && growth2 < growth1) {
        return "A segunda criança não ultrapassará o tamanho da primeira.";
    } else { // caso não tenham o mesmo tamanho, e a taxa da criança menor for maior que a taxa da maior (podendo assim chegar ao tamanho da outra)
        
        let smallerChild = cm1 < cm2 ? cm1 : cm2; // se cm1 < cm2, atribua a "smallerChild" o cm1, else: cm2
        let tallerChild = (smallerChild == cm1) ? cm2 : cm1; // se smallerChild for a primeira (cm1), atribua a segunda (cm2), else: cm1
        let yearsCount = 0;

        if (smallerChild == cm1) {

            // loop responsável por calcular a idade que a primeira criança ultrapassará a segunda criança
            while (smallerChild != tallerChild) {
                smallerChild += growth1;
                tallerChild += growth2;
                yearsCount++;
            }
            return `Em ${yearsCount} anos, a primeira criança ultrapassará a segunda.`;
            
        } else if (smallerChild == cm2) {

                // loop responsável por calcular a idade que a segunda criança ultrapassará a primeira criança
                while (smallerChild != tallerChild) {
                    smallerChild += growth2;
                    tallerChild += growth1;
                    yearsCount++;
                }
                return `Em ${yearsCount} anos, a segunda criança ultrapassará a primeira.`;
        }
    }
}

// Testes
console.log(chieldSize(150, 5, 170, 1)); // 5 anos para a primeira ultrapassar a segunda
console.log(chieldSize(150, 1, 120, 2)); // 30 anos para a segunda ultrapassar a primeira