const { Model, DataTypes } = require('sequelize');

class Colaborador extends Model {
    static init(sequelize) {
        super.init({
            nome: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: {
                        msg: "Esse campo não pode ser vazio!",
                    },
                    len: {
                        args: [4,20],
                        msg: "Esse campo deve ter entre 4 e 20 caracteres",
                    }
                }
            },
            data_de_nascimento: DataTypes.DATE,
            cpf: DataTypes.STRING,
            telefone: DataTypes.STRING,
            email: DataTypes.STRING,
            endereco: DataTypes.STRING,
            cep: DataTypes.STRING,
            sexo: DataTypes.BOOLEAN,

        },{
            sequelize,
            tableName: 'colaborador',
        })
    }
    static associate(models) {
        this.hasOne(models.Garcom, {foreignKey: 'colaborador_id', as: 'garcom'});
        this.hasOne(models.FunCaixa, {foreignKey: 'colab_id', as: 'caixa'});
        this.hasOne(models.Gerente, {foreignKey: 'geren_id', as: 'gerente'});
        this.hasOne(models.Cozinheiro, {foreignKey: 'cozinheiro_id', as: 'cozinheiro'});
    }
}
module.exports = Colaborador;