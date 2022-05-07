/* 
 * Um homem decidiu ir à uma revenda comprar um carro. Ele deseja comprar um carro hatch, e a revenda
 * possui, além de carros hatch, sedans, motocicletas e caminhonetes. Utilizando uma estrutura switch, caso o
 * comprador queira o hatch, retorne: “Compra efetuada com sucesso”. Nas outras opções, retorne: “Tem certeza
 * que não prefere este modelo?”. Caso seja especificado um modelo que não está disponível, retorne no console:
 * “Não trabalhamos com este tipo de automóvel aqui”
*/

const carResale = (automobile) => {
    switch (automobile) {
        case "hatch":
            return 'Compra efetuada com sucesso';
        
        case "sedans":
        case "motocicletas":
        case "caminhonetes":
            return 'Tem certeza que não prefere este modelo?';

        default:
            return 'Não trabalhamos com este tipo de automóvel aqui';
    }
}

// Testes
console.log(carResale('hatch'));
console.log(carResale('sedans'));
console.log(carResale('motocicletas'));
console.log(carResale('caminhonetes'));
console.log(carResale('bicicleta'));
