/*
areaDoTriangulo(10, 15) // retornará 75.00
areaDoTriangulo(7, 9) // retornará 31.50
areaDoTriangulo(9.25, 13.1) // retornará 60.59

2 parâmetros (base, altura)
Obs: a fórmula para calcular a área de um triângulo é (base x altura) / 2
*/

const areaDoTriangulo = (base, altura) => {
    let areaDoTriangulo = (base * altura) / 2;
    areaDoTriangulo = areaDoTriangulo.toFixed(2);
    return areaDoTriangulo;
}

console.log(areaDoTriangulo(10, 15));
console.log(areaDoTriangulo(7, 9));
console.log(areaDoTriangulo(9.25, 13.1));
