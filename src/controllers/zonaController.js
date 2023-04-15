import Zona from "../models/zona.js"

const ZonaController = {
    getAll: async (_, res) => {
        const zonas = await Zona.findAll()
        return res.status(200).json(zonas)
    },

    getZona: async (req, res) => {
        const { id_zona } = req.params

        try{
            const zona = await Zona.findByPk(id_zona)
            return res.status(200).json(zona)
        }catch(error){
            console.log(error)
            return res.status(500).json({message: `Ocorreu um erro ao tentar buscar a zona, contate a equipe de suporte.`})
        }
    },

    createZona: async(req, res) => {
        const { nome, descricao } = req.body
        const zonaDTO = { nome, descricao }

        try{
            const newZona = await Zona.create(zonaDTO)
            return res.status(201).json(newZona)
        }catch(error){
            console.log(error)
            return res.status(500).json({message: 'Ocorreu um erro ao criar a zona, contate a equipe de suporte.'})
        }
    },

    updateZona: async(req, res) => {
        const { id_zona } = req.params
        const { nome, descricao } = req.body
        const zonaDTO = { nome, descricao }

        try{
            const updatedZona = await Zona.update(zonaDTO, {where: { id_zona }, returning: true})
            return res.status(204).json(updatedZona)
        }catch(error){
            console.log(error)
            return res.status(500).json({message: 'Ocorreu um erro ao atualizar a zona, contate a equipe de suporte.'})
        }
    },

    deleteZona: async(req, res) => {
        const { id_zona } = req.params

        try{
            const deletedZona = await Zona.destroy({where: { id_zona }})
            return res.status(204).json(deletedZona)
        }catch(error){
            console.log(error)
            return res.status(500).json({message: `Ocorreu um erro ao tentar deletar a zona, contate a equipe de suporte.`})
        }
    }
}

export default ZonaController