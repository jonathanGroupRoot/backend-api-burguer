const Cardapio = require('../models/Cardapio');
const Ingrediente = require('../models/Ingrediente');

module.exports = {
    async index(req,res) {
         
        const cardapio = await Cardapio.findAll( {
            include: {association: 'ingredientes' }
        });
        return res.json(cardapio);
    },

    async store(req,res) {
        try {
            const { nome, preco, caloria, categoria, serve, foto, ativo } = req.body;

            const cardapio = await Cardapio.create({nome,preco,caloria,categoria,serve,foto,ativo});
            return res.status(200).json({sucess: 'Cadastrado'});
        }catch(error) {
            return res.status(400).json({Error: error});
        }
       
    },

    async update(req,res) {
        const { cardapio_id } = req.params;

        const { nome,preco,caloria,categoria,serve,foto,ativo } = req.body; 
        const cardapio = await Cardapio.findByPk(cardapio_id);
        cardapio.update({nome,preco,caloria,categoria,serve,foto,ativo});
        return res.json({sucess: 'Atualizado'});
    },

    async delete(req,res) {
        const { cardapio_id } = req.params;
        const cardapio = (await Cardapio.findByPk(cardapio_id)).destroy();
        return res.json({sucess: 'Deletado'});
    }
}