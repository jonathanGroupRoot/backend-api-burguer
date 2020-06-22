const Garcom = require('../models/Garcom');
const Colaborador = require('../models/Colaborador');

module.exports = {

    async index(req,res) {
        const garcom = await Garcom.findAll({
            include: {association: 'colaborador'}
        });
        return res.json(garcom);
    },
    async store(req,res) {
        try {
            const { colaborador_id } = req.params;

            const { cargo, categoria, ativo, identificador } = req.body;
    
            const garcom = await Garcom.create({ cargo, categoria, ativo, identificador, colaborador_id });
            return res.json(garcom);  

        }catch(error) {
            return res.json(error);
        }
      

    },

    async update(req,res) {
        const { garcom_id } = req.params;
        const { cargo,categoria,identificador,ativo } = req.body;
        const garcom  = await Garcom.findByPk(garcom_id);
        garcom.update({cargo,categoria,identificador,ativo});
        return res.json({sucess: 'Atualizado'});
    },

    async delete(req,res) {
        const { garcom_id } = req.params;
        const garcom = (await Colaborador.findByPk(garcom_id)).destroy();
        return res.json({sucess: 'Deletado'});
    }
}