/*
 * Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
 * dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.
*/

const sortDay = (day) => {
    switch (day) {
        case 1:
            console.log(`Dia ${day} é: fim de semana.`);
            break;
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            console.log(`Dia ${day} é: dia útil.`);
            break;
        case 7:
            console.log(`Dia ${day} é: fim de semana.`);
            break;
        default: 
            console.log("Dia inválido, use apenas números de 1 a 7.");
    }
}

// Testes
sortDay(1);
sortDay(2);
sortDay(3);
sortDay(4);
sortDay(5);
sortDay(6);
sortDay(7);
sortDay(0);
