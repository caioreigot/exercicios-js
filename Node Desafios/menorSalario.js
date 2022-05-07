/* Desafio: exibir a mulher chinesa com o menor salário dos
funcionários que estão no json */

const axios = require('axios');
const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';

axios.get(url).then(response => {
  const data = response.data;
  
  const chinesas = data.filter(funcionario => {
    return (funcionario.genero === 'F' && funcionario.pais === 'China');
  });

  let chinesaMenorSalario = chinesas.reduce(
    (funcionario, funcionarioAtual) => {
      return funcionario.salario < funcionarioAtual.salario 
        ? funcionario 
        : funcionarioAtual
  });

  console.log(chinesaMenorSalario);
});