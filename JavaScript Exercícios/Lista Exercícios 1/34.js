/*
 * Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
 * todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras.
*/

const isAnagram = (str1, str2) => {
    /*
     * Ideia: armazenar o ASCII ('str'.charCodeAt()) de cada letra (com o .toLowerCase()) em um array,
     * depois usar o .sort para organizar os dois igualmente e compara-los.
    */

    let arrayStr1 = [];
    let arrayStr2 = [];

    for (i in str1)
        arrayStr1.push(str1[i].toLowerCase().charCodeAt());

    for (i in str2)
        arrayStr2.push(str2[i].toLowerCase().charCodeAt());

    arrayStr1.sort(); arrayStr2.sort();

    return (arrayStr1.toString() === arrayStr2.toString());
}

// Testes
console.log(isAnagram('caio', 'oiac')); // true
console.log(isAnagram('caio', 'iaco')); // true
console.log(isAnagram('aBc', 'bca')); // true
console.log(isAnagram('abca', 'bca')); // false
console.log(isAnagram('abc', 'bcab')); // false
