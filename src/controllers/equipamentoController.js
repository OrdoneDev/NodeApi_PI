import Equipamento from "../models/equipamento.js"

const EquipamentoController = {
    getAll: async (_, res) => {
        const equipamentos = await Equipamento.findAll()
        return res.status(200).json(equipamentos)
    },

    getEquipamento: async (req, res) => {
        const { id } = req.params

        try{
            const equipamento = await Equipamento.findByPk(id)
            return res.status(200).json(equipamento)
        }catch(error){
            console.log(error)
            return res.status(500).json({message: `Ocorreu um erro ao tentar buscar o equipamento, contate a equipe de suporte.`})
        }
    },

    createEquipamento: async(req, res) => {
        const { id_tipo, nome, descricao, unidade_medida, codigo_sap } = req.body
        const equipamentoDTO = { id_tipo, nome, descricao, unidade_medida, codigo_sap}

        try{
            const newEquipamento = await Equipamento.create(equipamentoDTO)
            return res.status(201).json(newEquipamento)
        }catch(error){
            console.log(error)
            return res.status(500).json({message: 'Ocorreu um erro ao criar o equipamento, contate a equipe de suporte.'})
        }
    },

    updateEquipamento: async(req, res) => {
        const { id } = req.params
        const { id_tipo, nome, descricao, unidade_medida, codigo_sap } = req.body
        const equipamentoDTO = { id_tipo, nome, descricao, unidade_medida, codigo_sap }

        try{
            const updatedEquipamento = await Equipamento.update(equipamentoDTO, {where: { id }, returning: true})
            return res.status(204).json(updatedEquipamento)
        }catch(error){
            console.log(error)
            return res.status(500).json({message: 'Ocorreu um erro ao atualizar o equipamento, contate a equipe de suporte.'})
        }
    },

    deleteEquipamento: async(req, res) => {
        const { id } = req.params

        try{
            const deletedEquipemento = await Equipamento.destroy({where: { id }})
            return res.status(204).json(deletedEquipemento)
        }catch(error){
            console.log(error)
            return res.status(500).json({message: `Ocorreu um erro ao tentar deletar o equipamento, contate a equipe de suporte.`})
        }
    }
}

export default EquipamentoController