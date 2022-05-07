/*
receberSomenteOsParesDeIndicesPares([1, 2, 3, 4]) // retornará []
receberSomenteOsParesDeIndicesPares([10, 70, 22, 43]) // retornará [10, 22]
*/

const receberSomenteOsParesDeIndicesPares = (array = []) => {
    let arrayComPares = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0 && i % 2 == 0)
            arrayComPares.push(array[i]);
    }

    return arrayComPares;
}

console.log(receberSomenteOsParesDeIndicesPares([1, 2, 3, 4]));
console.log(receberSomenteOsParesDeIndicesPares([10, 70, 22, 43]));