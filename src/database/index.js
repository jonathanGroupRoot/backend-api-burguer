const Sequelize = require('sequelize');
const dbconfig = require('../config/database');

const Cardapio = require('../models/Cardapio');
const Ingrediente = require('../models/Ingrediente');
const Colaborador = require('../models/Colaborador');
const Garcom = require('../models/Garcom');
const FunCaixa = require('../models/FunCaixa');
const Gerente = require('../models/Gerente');
const Cozinheiro = require('../models/Cozinheiro');
const Pedido = require('../models/Pedido');

//Inicializar Conexão
const connection = new Sequelize(dbconfig);

Cardapio.init(connection);
Ingrediente.init(connection);
Colaborador.init(connection);
Garcom.init(connection);
FunCaixa.init(connection);
Gerente.init(connection);
Cozinheiro.init(connection);
Pedido.init(connection);



Cardapio.associate(connection.models);
Ingrediente.associate(connection.models);
Colaborador.associate(connection.models);
Garcom.associate(connection.models);
FunCaixa.associate(connection.models);
Gerente.associate(connection.models);
Cozinheiro.associate(connection.models);
Pedido.associate(connection.models);



// try {
//     connection.authenticate();
//     console.log('Banco de dados conectado');
// }catch(error) {
//     console.log('Erro ao conectar no banco de dados');
// }

module.exports = connection;