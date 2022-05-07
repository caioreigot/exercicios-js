/*
checarAnoBissexto(2020) // retornará true
checarAnoBissexto(2100) // retornará false, pois é múltiplo de 100 e não é múltiplo de 400
*/

const checarAnoBissexto = (ano) => {
    let por4 = (ano % 4);

    if (por4 != 0)
        return false;
    if (por4 == 0 && ((ano % 100 == 0 && ano % 400 == 0) || ano % 100 != 0))
        return true;
    else if (ano % 100 == 0 && ano % 400 == 0)
        return true;
    
    return false;
}

console.log(checarAnoBissexto(2020));
console.log(checarAnoBissexto(2100));

