'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  
    return queryInterface.createTable('cardapio', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      preco: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      caloria: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      categoria: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      serve: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      foto: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      ativo: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      }


    });
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.dropTable('cardapio');

  }
};
