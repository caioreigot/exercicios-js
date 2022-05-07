/* 
 * Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
 * primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
 * retornará o valor da aplicação sob o regime de juros compostos.
*/

const montanteSimples = (c, i, t) => {
    // Juros simples = Capital x taxa de juros x tempo de aplicação.
    // Montante sob regime de juros simples = C . (1 + i . t)
    let montante = c * (1 + i * t);
    let resultado = `R$${montante.toFixed(2)}`;
    return resultado;
}

const montanteComposto = (c, i, t) => {
    // Montante sob regime de juros compostos = C (1 + i)^n
    let montante = c * ((1 + i) ** t);
    let resultado = `R$${montante.toFixed(2)}`;
    return resultado;
}

console.log(montanteSimples(1200, 0.02, 15)); // R$1560.00
console.log(montanteComposto(2000, 0.10, 4)); // R$2928.20