'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.createTable('funcaixa', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      colab_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'colaborador', key: 'id'},
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      cargo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      ativo: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      identificador: {
        type: Sequelize.INTEGER,
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

    return queryInterface.dropTable('funcaixa');
  }
};
