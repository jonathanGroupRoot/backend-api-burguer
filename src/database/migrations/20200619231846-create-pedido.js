'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  
    return queryInterface.createTable('pedido', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      cardapio_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'cardapio', key: 'id'},
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      garcom_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'garcom', key: 'id'},
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      numero_mesa: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      quantidade_pessoas: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      quantidade_pedido: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      observacoes: {
        type: Sequelize.STRING,
        allowNull: true,
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

    return queryInterface.dropTable('pedido');
  }
};
