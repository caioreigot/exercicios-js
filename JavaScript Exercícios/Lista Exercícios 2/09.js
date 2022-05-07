/*
repetir("código", 2) // retornará ["código", "código"]
repetir(7, 3) // retornará [7, 7, 7]
*/

const repetir = (varDeRepeticao, repeticoes) => {
    let array = [];
    
    for (let i = 0; i < repeticoes; i++)
        array.push(varDeRepeticao);
    
    return array;
}

console.log(repetir("código", 2));
console.log(repetir(7, 3));