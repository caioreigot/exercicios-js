/*
 * O cardápio de uma lanchonete é o seguinte:
 *
 *   __________________________________________
 *   | Código  Descrição do Produto    Preço  |
 *   |----------------------------------------|
 *   |  100      Cachorro Quente      R$ 3,00 |
 *   |----------------------------------------|
 *   |  200     Hambúrguer Simples    R$ 4,00 |
 *   |----------------------------------------|
 *   |  300       Cheeseburguer       R$ 5,50 |
 *   |----------------------------------------|
 *   |  400           Bauru           R$ 7,50 |
 *   |----------------------------------------|
 *   |  500        Refrigerante       R$ 3,50 |
 *   |----------------------------------------|
 *   |  600           Suco            R$ 2,80 |
 *   |----------------------------------------|
 *   |________________________________________|
 *
 * Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
 * a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
 * comando switch. Crie um caso default para produto não existente.
 *
*/

const foodPrice = (foodId, foodAmount) => {
    switch (foodId) {
        case 100:
            var priceOfOrder = (foodAmount * 3).toFixed(2);
            console.log(`Seu pedido: ${foodAmount} cachorro(s) quente(s).\nValor: R$ ${priceOfOrder} reais`);
            return priceOfOrder;
        case 200:
            var priceOfOrder = (foodAmount * 4).toFixed(2);
            console.log(`Seu pedido: ${foodAmount} hambúrguer(es) simples.\nValor: R$ ${priceOfOrder} reais`);
            return priceOfOrder;
        case 300:
            var priceOfOrder = (foodAmount * 5.50).toFixed(2);
            console.log(`Seu pedido: ${foodAmount} cheeseburguer(es).\nValor: R$ ${priceOfOrder} reais`);
            return priceOfOrder;
        case 400:
            var priceOfOrder = (foodAmount * 7.50).toFixed(2);
            console.log(`Seu pedido: ${foodAmount} bauru(s).\nValor: R$ ${priceOfOrder} reais`);
            return priceOfOrder;
        case 500:
            var priceOfOrder = (foodAmount * 3.50).toFixed(2);
            console.log(`Seu pedido: ${foodAmount} refrigerante(s).\nValor: R$ ${priceOfOrder} reais`);
            return priceOfOrder;
        case 600:
            var priceOfOrder = (foodAmount * 2.80).toFixed(2);
            console.log(`Seu pedido: ${foodAmount} suco(s).\nValor: R$ ${priceOfOrder} reais`);
            return priceOfOrder;
    }
}

// Testes
foodPrice(100, 3);
foodPrice(200, 2);
foodPrice(300, 2);
foodPrice(400, 3);
foodPrice(500, 2);
foodPrice(600, 3);
