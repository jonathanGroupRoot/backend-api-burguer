const { Model, DataTypes } = require('sequelize');

class Cozinheiro extends Model {
    static init(sequelize){
        super.init({
            cargo: DataTypes.STRING,
            especialidades: DataTypes.STRING,
            ativo: DataTypes.BOOLEAN,
            identificador: DataTypes.INTEGER,
        },{
            sequelize,
            tableName: 'cozinheiro',
        })
    }
    static associate(models) {
        this.belongsTo(models.Colaborador, {foreignKey: 'cozinheiro_id', as: 'colaborador'});
    }
}
module.exports = Cozinheiro;