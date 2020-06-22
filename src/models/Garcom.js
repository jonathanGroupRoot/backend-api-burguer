const { Model, DataTypes } = require('sequelize');

class Garcom extends Model {
    static init(sequelize) {
        super.init({
            cargo: DataTypes.STRING,
            categoria: DataTypes.STRING,
            identificador: DataTypes.INTEGER,
            ativo: DataTypes.BOOLEAN,
            
        },{
            sequelize,
            tableName: 'garcom',
        })
    }
    
    static associate(models) {
        this.belongsTo(models.Colaborador, {foreignKey: 'colaborador_id', as: 'colaborador'});
        this.hasOne(models.Pedido, {foreignKey: 'garcom_id', as: 'pedido'});
    }
}
module.exports = Garcom;