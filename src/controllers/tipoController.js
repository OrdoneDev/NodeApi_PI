import Tipo from "../models/tipo.js"

const TipoController = {
    getAll: async (_, res) => {
        const tipos = await Tipo.findAll()
        return res.status(200).json(tipos)
    },

    getTipo: async (req, res) => {
        const { id_tipo } = req.params

        try{
            const tipo = await Tipo.findByPk(id_tipo)
            return res.status(200).json(tipo)
        }catch(error){
            console.log(error)
            return res.status(500).json({message: `Ocorreu um erro ao tentar buscar o tipo, contate a equipe de suporte.`})
        }
    },
    
    createTipo: async(req, res) => {
        const { nome } = req.body
        const tipoDTO = { nome }

        try{
            const newTipo = await Tipo.create(tipoDTO)
            return res.status(201).json(newTipo)
        }catch(error){
            console.log(error)
            return res.status(500).json({message: 'Ocorreu um erro ao criar o tipo, contate a equipe de suporte.'})
        }
    },

    updateTipo: async(req, res) => {
        const { id_tipo } = req.params
        const { nome } = req.body
        const tipoDTO = { nome }

        try{
            const updatedTipo = await Tipo.update(tipoDTO, {where: { id_tipo }, returning: true})
            return res.status(204).json(updatedTipo)
        }catch(error){
            console.log(error)
            return res.status(500).json({message: 'Ocorreu um erro ao atualizar o tipo, contate a equipe de suporte.'})
        }
    },

    deleteTipo: async(req, res) => {
        const { id_tipo } = req.params

        try{
            const deletedTipo = await Tipo.destroy({where: { id_tipo }})
            return res.status(204).json(deletedTipo)
        }catch(error){
            console.log(error)
            return res.status(500).json({message: `Ocorreu um erro ao tentar deletar o tipo, contate a equipe de suporte.`})
        }
    }
}

export default TipoController