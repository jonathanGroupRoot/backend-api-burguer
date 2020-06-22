const Cozinheiro = require('../models/Cozinheiro');

module.exports = {
    async index(req,res) {
        const cozinheiro = await Cozinheiro.findAll({
            include: {association: 'colaborador'}
        });
        return res.json(cozinheiro);
    },
    async store(req,res) {
        const { cozinheiro_id } = req.params;
        const { cargo,especialidades,ativo,identificador } = req.body;
        const cozinheiro = await Cozinheiro.create({cargo,especialidades,ativo,identificador, cozinheiro_id});
        return res.json(cozinheiro);
    },
    async update(req,res) {
        const  { cozinheiro_id } = req.params;
        const { cargo,especialidades,ativo,identificador } = req.body;
        const cozinheiro = await Cozinheiro.findByPk(cozinheiro_id);
        cozinheiro.update({cargo,especialidades,ativo,identificador});
        return res.json({sucess: 'Atualizado'});
    },
    async delete(req,res) {
        const { cozinheiro_id } = req.params;
        const cozinheiro = (await Cozinheiro.findByPk(cozinheiro_id)).destroy();
        return res.json({sucess: 'Deletado'});
    }
}