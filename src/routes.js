const  express = require('express');
const routes = express.Router();

const CardapioController = require('./controllers/CardapioController');
const IngredienteController = require('./controllers/IngredienteController');
const ColaboradorController = require('./controllers/ColaboradorController');
const GarcomController = require('./controllers/GarcomController');
const FunCaixaController = require('./controllers/FunCaixaController');
const GerenteController = require('./controllers/GerenteController');
const CozinheiroController = require('./controllers/CozinheiroController');
const PedidoController = require('./controllers/PedidoController');



//Rota Cardapio
routes.get('/listarCardapio', CardapioController.index);
routes.post('/cadastrarCardapio', CardapioController.store);
routes.put('/atualizarCardapio/:cardapio_id', CardapioController.update);
routes.delete('/deletarCardapio/:cardapio_id', CardapioController.delete);

//Rota Ingrediente
routes.get('/listarIngredientes', IngredienteController.index);
routes.post('/cardapio/:cardapio_id/ingredientes', IngredienteController.store);
routes.put('/atualizarIngrediente/:ingrediente_id', IngredienteController.update);
routes.delete('/deletarIngredientes/:ingrediente_id', IngredienteController.delete);

//Rota Colaborador
routes.get('/listarColaborador', ColaboradorController.index);
routes.post('/colaborador', ColaboradorController.store);
routes.put('/atualizarColaborador/:colaborador_id', ColaboradorController.update);
routes.delete('/deletarColaborador/:colaborador_id', ColaboradorController.delete);

//Rota Garçom
routes.get('/listarGarcom', GarcomController.index);
routes.post('/cadastrarGarcom/:colaborador_id/', GarcomController.store);
routes.put('/atualizarGarcom/:garcom_id', GarcomController.update);
routes.delete('/deletarGarcom/:garcom_id', GarcomController.delete);

//Rota FunCaixa
routes.get('/listarFunCaixa', FunCaixaController.index);
routes.post('/cadastrarCaixa/:colab_id', FunCaixaController.store);
routes.put('/atualizarFunCaixa/:funcaixa_id', FunCaixaController.update);
routes.delete('/deletarFunCaixa/:colab_id', FunCaixaController.delete);

//Rota Gerente
routes.get('/listarGerente', GerenteController.index);
routes.post('/cadastrarGerente/:geren_id', GerenteController.store);
routes.put('/atualizarGerente/:geren_id', GerenteController.update);
routes.delete('/deletarGerente/:geren_id', GerenteController.delete);

//Rota Cozinheiro
routes.get('/listarCozinheiro', CozinheiroController.index);
routes.post('/cadastrarCozinheiro/:cozinheiro_id', CozinheiroController.store);
routes.put('/atualizarCozinheiro/:cozinheiro_id', CozinheiroController.update);
routes.delete('/deletarCozinheiro/:cozinheiro_id', CozinheiroController.delete);

//Rota Pedido
routes.get('/listarPedido', PedidoController.index);
routes.post('/cadastrarPedido/:cardapio_id/:garcom_id', PedidoController.store);
routes.put('/atualizarPedidos/:id/:cardapio_id', PedidoController.update);
routes.delete('/deletarPedido/:id', PedidoController.delete);
module.exports = routes;