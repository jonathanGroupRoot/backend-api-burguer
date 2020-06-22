const { Model, DataTypes } = require('sequelize');

class Ingrediente extends Model {
    static init(sequelize) {
        super.init({
            nome_do_produto: DataTypes.STRING,
            ingredientes: DataTypes.STRING,
            quantidade: DataTypes.INTEGER,
            unidade_de_medida: DataTypes.INTEGER,
            ativo: DataTypes.BOOLEAN,
        }, {
            sequelize,
            tableName: 'ingredientes',
        })
    }
    static associate(models) {
        this.belongsTo(models.Cardapio, {foreignKey: 'cardapio_id', as: 'cardapio'});
    }
}
module.exports = Ingrediente;