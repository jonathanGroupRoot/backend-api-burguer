const { Model, DataTypes } = require('sequelize');

class Pedido extends Model {
    static init(sequelize) {
        super.init({
            numero_mesa: DataTypes.INTEGER,
            quantidade_pessoas: DataTypes.INTEGER,
            quantidade_pedido: DataTypes.INTEGER,
            observacoes: DataTypes.STRING,
        }, {
            sequelize,
            tableName: 'pedido'
        })
    }
    static associate(models) {
        this.belongsTo(models.Cardapio, {foreignKey: 'cardapio_id', as: 'cardapio'});
        this.belongsTo(models.Garcom, {foreignKey:'garcom_id', as: 'garcom'});
    }
    
}

module.exports = Pedido;