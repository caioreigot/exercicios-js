const express = require('express');
const app = express();
const porta = 3003;

const bancoDeDados = require('./bancoDeDados.js');

/* Pra qualquer requisição ao servidor, o código vai obrigatoriamente
passar por este middleware, e se no corpo da requisição houver um
padrão chamado "urlencoded", será feito um parse para objeto */
app.use(express.urlencoded({ extended: true }));

app.get('/produtos', (req, res, next) => {
  console.log('Middleware 1...');
  next();
});

app.get('/produtos', (req, res, next) => {
  console.log('Middleware 2...');
  res.send(bancoDeDados.getProdutos());
});

app.get('/produtos/:id', (req, res, next) => {
  res.send(bancoDeDados.getProduto(req.params.id));
});

app.post('/produtos', (req, res, next) => {
  const produto = bancoDeDados.salvarProduto({
    nome: req.body.nome,
    preco: req.body.preco
  });

  res.send(produto); // JSON
});

app.put('/produtos/:id', (req, res, next) => {
  const produto = bancoDeDados.salvarProduto({
    id: req.params.id,
    nome: req.body.nome,
    preco: req.body.preco
  });

  res.send(produto); // JSON
});

app.delete('/produtos/:id', (req, res, next) => {
  const produto = bancoDeDados.excluirProdutos(req.params.id);
  res.send(produto); // JSON
});

app.listen(porta, () => {
  console.log(`Servidor executando na porta ${porta}.`)
});