/*
receberPrimeiroEUltimoElemento([7,14,"olá"]) // retornará [7, "olá"]
receberPrimeiroEUltimoElemento([-100, "aplicativo", 16]) // retornará [-100, 16]
*/

// Sem array
const receberPrimeiroEUltimoElementoSemArray = (...args) => {
    let array = [];
    array.push(args[0]);
    array.push(args[args.length - 1]);
    return array;
}

// Com array
const receberPrimeiroEUltimoElementoComArray = (array) => {
    let tempArray = [];
    tempArray.push(array[0]);
    tempArray.push(array[array.length - 1]);
    return tempArray;
}

console.log(receberPrimeiroEUltimoElementoSemArray(-100, "aplicativo", 16));
console.log(receberPrimeiroEUltimoElementoComArray([-100, "aplicativo", 16]));