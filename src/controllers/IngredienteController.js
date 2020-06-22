const Ingrediente = require('../models/Ingrediente');
const Cardapio = require('../models/Cardapio');

module.exports = {
    async index(req,res) {
        // const { ingrediente_id } = req.params;
        
        const cardapio = await Cardapio.findAll( {
            include: {association: 'ingredientes' }
        });
        return res.json(cardapio);
    },

    async store(req,res) {
        const { cardapio_id } = req.params;
        const { nome_do_produto, ingredientes, quantidade, unidade_de_medida, ativo } = req.body;

        const ingrediente = await Ingrediente.create({nome_do_produto, ingredientes, quantidade, unidade_de_medida,ativo, cardapio_id});
        return res.json(ingrediente);
    },
    async update(req,res) {
        const { ingrediente_id } = req.params;

        const { nome_do_produto, ingredientes, quantidade, unidade_de_medida, ativo } = req.body;

        const ingrediente = await Ingrediente.findByPk(ingrediente_id);
        ingrediente.update({nome_do_produto,ingredientes,quantidade,unidade_de_medida,ativo});
        return res.json({sucess: 'Atualizado'});
    },

    async delete(req,res) {
        const { ingrediente_id } = req.params;
        const ingrediente = (await Ingrediente.findByPk(ingrediente_id)).destroy();
        return res.json({sucess: 'Deletado'});
    }
}