/*
 * Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de
 * modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o
 * conceito B e de 9,0 a 10,0 o conceito A.
*/

const rateStudent = (array) => {
    array.forEach((number) => {
        if (number < 0 || number > 10) {
            console.log(`Nota ${number}: Inválida.`);
        } else {
            if (number <= 4.9)
                console.log(`Nota ${number}: Conceito D.`);
            else if (number >= 5 && number <= 6.9)
                console.log(`Nota ${number}: Conceito C.`);
            else if (number >= 7 && number <= 8.9)
                console.log(`Nota ${number}: Conceito B.`);
            else if (number >= 9 && number <= 10)
                console.log(`Nota ${number}: Conceito A.`);
        }
    });
}

// Testes
rateStudent([1, 4.9, 8, 10]);
console.log('---------------------');
rateStudent([-1, -2, 5.1, 12]);
