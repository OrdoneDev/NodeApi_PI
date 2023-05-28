import Responsavel from "../models/responsavel.js"

const ResponsavelController = {
    getAll: async (_, res) => {
        const responsaveis = await Responsavel.findAll()
        return res.status(200).json(responsaveis)
    },

    getResponsavel: async (req, res) => {
        const { id_responsavel } = req.params

        try{
            const responsavel = await Responsavel.findByPk(id_responsavel)
            return res.status(200).json(responsavel)
        }catch(error){
            console.log(error)
            return res.status(500).json({message: `Ocorreu um erro ao tentar buscar o responsavel, contate a equipe de suporte.`})
        }
    },

    createResponsavel: async(req, res) => {
        const { nome, cargo, setor, login, senha, email  } = req.body
        const responsavelDTO = { nome, cargo, setor, login, senha, email }

        try{
            const newResponsavel = await Responsavel.create(responsavelDTO)
            return res.status(201).json(newResponsavel)
        }catch(error){
            console.log(error)
            return res.status(500).json({message: 'Ocorreu um erro ao criar o responsavel, contate a equipe de suporte.'})
        }
    },

    updateResponsavel: async(req, res) => {
        const { id_responsavel } = req.params
        const { nome, cargo, setor, login, senha, email } = req.body
        const responsavelDTO = { nome, cargo, setor, login, senha, email }

        try{
            const updatedResponsavel = await Responsavel.update(responsavelDTO, {where: { id_responsavel }, returning: true})
            return res.status(204).json(updatedResponsavel)
        }catch(error){
            console.log(error)
            return res.status(500).json({message: 'Ocorreu um erro ao atualizar o responsavel, contate a equipe de suporte.'})
        }
    },

    deleteResponsavel: async(req, res) => {
        const { id_responsavel } = req.params

        try{
            const deletedResponsavel = await Responsavel.destroy({where: { id_responsavel }})
            return res.status(204).json(deletedResponsavel)
        }catch(error){
            console.log(error)
            return res.status(500).json({message: `Ocorreu um erro ao tentar deletar o responsavel, contate a equipe de suporte.`})
        }
    }
}

export default ResponsavelController