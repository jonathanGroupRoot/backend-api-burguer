const { Model, DataTypes } = require('sequelize');

class FunCaixa extends Model {
    static init(sequelize) {
        super.init({
            cargo: DataTypes.STRING,
            ativo: DataTypes.BOOLEAN,
            identificador: DataTypes.INTEGER,
        }, {
            sequelize,
            tableName: 'funcaixa'
        });
    }
    static associate(models) {
        this.belongsTo(models.Colaborador, {foreignKey: 'colab_id', as: 'colaborador'});
    }
}

module.exports = FunCaixa;