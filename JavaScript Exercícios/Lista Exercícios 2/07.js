const estaEntre = (n, min, max, inclusive = false) => {
    let maiorQueMinimo = (inclusive && n == min) || n > min;
    let menorQueMaximo = (inclusive && n == max) || n < max;
    return (maiorQueMinimo && menorQueMaximo);
}

console.log(estaEntre(20, 5, 20, false));
console.log(estaEntre(5, 5, 20, true));
console.log(estaEntre(8, 5, 20));