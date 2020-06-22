const FunCaixa = require('../models/FunCaixa');
const Colaborador = require('../models/Colaborador');

module.exports = {
    async index(req,res) {
        const funcaixa = await FunCaixa.findAll({
            include: {association: 'colaborador'}
        });
        return res.json(funcaixa);
    },

    async store(req,res) {
        const { colab_id } = req.params;
        const { cargo,ativo,identificador,} = req.body;

        const funCaixa = await FunCaixa.create({cargo,ativo,identificador,colab_id});
        return res.json(funCaixa);
    },

    async update(req,res) {
        const { funcaixa_id } = req.params;
        const { cargo, ativo, identificador} = req.body;
        const funcaixa = await FunCaixa.findByPk(funcaixa_id);
        funcaixa.update({ cargo, ativo, identificador});
        return res.json({sucess: 'Atualizado'});
    },

    async delete(req,res) {
        const { colab_id } = req.params;
        const funCaixa = (await Colaborador.findByPk(colab_id)).destroy();
        return res.json({sucess: 'Deletado'});
    }
}