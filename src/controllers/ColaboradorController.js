const Colaborador = require('../models/Colaborador');

module.exports = {
    async index(req,res) {
        const colaborador = await Colaborador.findAll();
        return res.json(colaborador);
    },

    async store(req,res) {
        try {
            const { nome, data_de_nascimento, cpf, telefone, email, endereco, cep, sexo } = req.body;

            const colaborador = await Colaborador.create({nome, data_de_nascimento, cpf, telefone, email, endereco, cep, sexo});
            return res.status(200).json(colaborador);

        }catch(error) {
            return res.status(400).json({Error: error});
        }
    
    },
    
    async update(req,res) {
        const { colaborador_id } = req.params;
        const { nome,data_de_nascimento,cpf,telefone,email,endereco,cep,sexo } = req.body;
        
        const colaborador = await Colaborador.findByPk(colaborador_id);
        colaborador.update({ nome,data_de_nascimento,cpf,telefone,email,endereco,cep,sexo });
        return res.json({sucess: 'Atualizado'});
    },
    
    async delete(req,res) {
        const { colaborador_id } = req.params;

        const colaborador = (await Colaborador.findByPk(colaborador_id)).destroy();
        return res.json({sucess: 'Deletado'});
    }

}