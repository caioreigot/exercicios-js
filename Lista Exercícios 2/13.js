/*
filtrarNumeros(["Javascript", 1, "3", "Web", 20]) // retornará [1, 20]
filtrarNumeros(["a", "c"]) // retornará []
*/

const filtrarNumeros = (array) => {
    let arrayComNumeros = [];
    
    array.forEach((element) => {
        if (Number.isInteger(element))
            arrayComNumeros.push(element);
    });

    return arrayComNumeros;
}

console.log(filtrarNumeros(["Javascript", 1, "3", "Web", 20]));
console.log(filtrarNumeros(["a", "c"]));