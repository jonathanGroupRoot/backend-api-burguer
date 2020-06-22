const { Model, DataTypes } = require('sequelize');

class Gerente extends Model {
    static init(sequelize) {
        super.init({
            cargo: DataTypes.STRING,
            ativo: DataTypes.BOOLEAN,
            identificador: DataTypes.INTEGER,
        }, {
            sequelize,
            tableName: 'gerente',
        });
    }
    static associate(models) {
        this.belongsTo(models.Colaborador, {foreignKey: 'geren_id', as: 'colaborador'});
    }
}

module.exports = Gerente;