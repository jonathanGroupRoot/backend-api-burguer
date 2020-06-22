'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
 
    return queryInterface.createTable('ingredientes', {
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
      nome_do_produto: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      ingredientes: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      quantidade: {
        type: Sequelize.INTEGER,

      },
      unidade_de_medida: {
        type: Sequelize.STRING,
        allowNull: false
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
 
    return queryInterface.dropTable('ingredientes');
  
  }
};
