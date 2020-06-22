const Pedido = require('../models/Pedido');

module.exports = {
    async index(req,res) {
        const pedido = await Pedido.findAll({
            include: {association: 'cardapio'}
        })
        return res.json(pedido);
    },
    async store(req,res) {
        const { cardapio_id } = req.params;
        const { garcom_id } = req.params;
        const { numero_mesa, quantidade_pessoas, quantidade_pedido, observacoes } = req.body;
        const pedido =  await Pedido.create({numero_mesa,quantidade_pessoas,quantidade_pedido,observacoes,cardapio_id,garcom_id});
        return res.json(pedido);
    },
    async update(req,res) {
        const {id} = req.params;
        const {cardapio_id} = req.params;
        const {numero_mesa, quantidade_pessoas,quantidade_pedido,observacoes} = req.body;
        const pedido = await Pedido.findByPk(id);
        pedido.update({numero_mesa,quantidade_pessoas,quantidade_pedido,observacoes,cardapio_id});
        return res.json({sucess: 'Atualizado'});
    },
    async delete(req,res) {
        const {id} = req.params;
        const pedido = await (await Pedido.findByPk(id)).destroy();
        return res.json({sucess: 'Deletado'});
    }
}