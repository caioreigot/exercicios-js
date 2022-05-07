/*
funcaoDaSorte(10) // retornará "Parabéns! O número sorteado foi o 10"
funcaoDaSorte(5) // retornará "Que pena! O número sorteado foi o 3"
funcaoDaSorte(5) // retornará "Que pena! O número sorteado foi o 1"
*/

const funcaoDaSorte = (numeroEscolhido) => {
    if (1 > numeroEscolhido || 10 < numeroEscolhido) 
        return "Número fornecido precisa ser de 1 a 10!";

    let min = 1;
    let max = 10;

    let numeroAleatorio = (Math.random() * (max - min) + min).toFixed(0);
    
    let acertouNumero = (numeroEscolhido == numeroAleatorio);

    if (acertouNumero)
        return "Parabéns! O número sorteado foi o " + numeroAleatorio;
    else
        return "Que pena! O número sorteado foi o " + numeroAleatorio;
}

console.log(funcaoDaSorte(10));
console.log(funcaoDaSorte(5));
console.log(funcaoDaSorte(5));
