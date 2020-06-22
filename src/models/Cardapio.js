const { Model, DataTypes } = require('sequelize');

class Cardapio extends Model {
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
            preco: {
                type: DataTypes.INTEGER,
                allowNull: false,
                validate: {
                    notEmpty: {
                        msg: "Esse campo não pode ser vazio!",
                    },
                    isInt: {
                        msg: "Esse campo só aceita caracteres númericos!",
                    }
                }
            },           
            caloria: {
                type: DataTypes.FLOAT,
                allowNull: false,
                validate: {
                    notEmpty: {
                        msg: "Esse campo não pode ser vazio!",
                    },
                    isFloat: {
                        msg: 'Esse campo só aceita caracteres númericos!',
                    },
                },
            },
            categoria: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: {
                        msg: "Esse campo não pode ser vazio!",
                    },
                    isAlpha: {
                        msg: "Esse campo só permite letras"
                    },
                    max: {
                        args: [100],
                        msg: "Máximo 100 caracteres",
                    },
                    min: {
                        args: [3],
                        msg: "Mínimo 3 caracteres",
                    }
                },
                
            },
            serve: {
                type: DataTypes.INTEGER,
                allowNull: false,
                validate: {
                    notEmpty: {
                        msg: "Esse campo não pode ser vazio!",
                    },
                    isInt: {
                        msg: 'Esse campo só aceita caracteres númericos!',
                    },
                },
                
            },
            foto: DataTypes.STRING,
            ativo: DataTypes.BOOLEAN,
        },
        {
            sequelize,
            tableName: 'cardapio',

        })
    }
    static associate(models) {
        this.hasMany(models.Ingrediente, {foreignKey: 'cardapio_id', as: 'ingredientes'});
        this.hasOne(models.Pedido, {foreignKey: 'cardapio_id', as: 'pedido'});
    }
}
module.exports = Cardapio;