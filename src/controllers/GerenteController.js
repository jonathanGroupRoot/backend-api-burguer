const Gerente = require('../models/Gerente');

module.exports = {
    async index(req,res) {
        const gerente = await Gerente.findAll({
            include: {association: 'colaborador'}
        });
        return res.json(gerente);
    },
    async store(req,res) {
        const { geren_id } = req.params;
        const { cargo, ativo, identificador } = req.body;

        const gerente = await Gerente.create({cargo,ativo,identificador,geren_id});
        return res.json(gerente);
    },
    async update(req,res) {
        const { geren_id } = req.params;
        const { cargo, ativo, identificador } = req.body;
        const gerente = await Gerente.findByPk(geren_id);
        gerente.update({cargo, ativo, identificador});
        return res.json({sucess: 'Atualizado'});
    },
    async delete(req,res) {
        const { geren_id } = req.params;
        const gerente = (await Gerente.findByPk(geren_id)).destroy();
        return res.json({sucess: 'Deletado'});
    }
}