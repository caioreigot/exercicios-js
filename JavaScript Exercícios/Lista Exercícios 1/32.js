// Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.

const arithmeticAverage = (array) => {
    let sumValues = 0; let lengthArray = array.length;
    array.forEach((number) => {
        sumValues += number;
    });
    return sumValues / lengthArray;
}

// Testes
console.log(arithmeticAverage([100, 0])); // 50
console.log(arithmeticAverage([0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100])); // 50
console.log(arithmeticAverage([10, 20])); // 15
console.log(arithmeticAverage([-5, 10])); // 15