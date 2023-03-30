import Movimentacao from "../models/movimentacao.js"

const MovimentacaoController = {
    getAll: async (_, res) => {
        const movimentacoes = await Movimentacao.findAll()
        return res.status(200).json(movimentacoes)
    },

    getMovimentacao: async (req, res) => {
        const { id } = req.params

        try{
            const movimentacao = await Movimentacao.findByPk(id)
            return res.status(200).json(movimentacao)
        }catch(error){
            console.log(error)
            return res.status(500).json({message: `Ocorreu um erro ao tentar buscar a movimentacao, contate a equipe de suporte.`})
        }
    },

    createMovimentacao: async(req, res) => {
        const { id_equipamento, id_zona, id_responsavel, data_entrada, status, quantidade, observacao } = req.body
        const movimentacaoDTO = { id_equipamento, id_zona, id_responsavel, data_entrada, status, quantidade, observacao}

        try{
            const newMovimentacao = await Movimentacao.create(movimentacaoDTO)
            return res.status(201).json(newMovimentacao)
        }catch(error){
            console.log(error)
            return res.status(500).json({message: 'Ocorreu um erro ao criar a movimentacao, contate a equipe de suporte.'})
        }
    },

    updateMovimentacao: async(req, res) => {
        const { id } = req.params
        const { id_equipamento, id_zona, id_responsavel, data_entrada, status, quantidade, observacao } = req.body
        const movimentacaoDTO = { id_equipamento, id_zona, id_responsavel, data_entrada, status, quantidade, observacao }

        try{
            const updatedMovimentacao = await Movimentacao.update(movimentacaoDTO, {where: { id }, returning: true})
            return res.status(204).json(updatedMovimentacao)
        }catch(error){
            console.log(error)
            return res.status(500).json({message: 'Ocorreu um erro ao atualizar a movimentacao, contate a equipe de suporte.'})
        }
    },

    deleteMovimentacao: async(req, res) => {
        const { id } = req.params

        try{
            const deletedMovimentacao = await Movimentacao.destroy({where: { id }})
            return res.status(204).json(deletedMovimentacao)
        }catch(error){
            console.log(error)
            return res.status(500).json({message: `Ocorreu um erro ao tentar deletar a movimentacao, contate a equipe de suporte.`})
        }
    }
}

export default MovimentacaoController