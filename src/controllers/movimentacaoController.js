import Movimentacao from "../models/movimentacao.js"
import Equipamento from "../models/equipamento.js"
import Zona from "../models/zona.js"
import Responsavel from "../models/responsavel.js"
import sequelize from "../config/database.js"
import { QueryTypes } from "sequelize"

const MovimentacaoController = {
    getAll: async (_, res) => {
        const movimentacoes = await Movimentacao.findAll({
            include: [
                {
                    attributes: ['id_tipo', 'nome', 'descricao', 'unidade_medida', 'codigo_sap', 'prioridade'],
                    model: Equipamento
                },
                {
                    attributes: ['nome', 'descricao'],
                    model: Zona
                },
                {
                    attributes: ['nome', 'cargo', 'setor'],
                    model: Responsavel
                }
            ],
            order: [
                [Equipamento, 'prioridade', 'DESC'],
                ['data_entrada', 'ASC']
            ]
        })

        return res.status(200).json(movimentacoes)
    },

    getAllByEquipamento: async (req, res) => {
        const { id_equipamento } = req.params

        const movimentacoes = await Movimentacao.findAll({
            where: { id_equipamento: id_equipamento },
            include: [
                {
                    attributes: ['id_tipo', 'nome', 'descricao', 'unidade_medida', 'codigo_sap', 'prioridade'],
                    model: Equipamento
                },
                {
                    attributes: ['nome', 'descricao'],
                    model: Zona
                },
                {
                    attributes: ['nome', 'cargo', 'setor'],
                    model: Responsavel
                }
            ],
            order: [
                [Equipamento, 'prioridade', 'DESC'],
                ['data_entrada', 'ASC']
            ]
        })

        return res.status(200).json(movimentacoes)
    },

    getAllByYear: async (req, res) => {
        const { year } = req.params

        console.log(year)

        const movimentacoes = await
            sequelize.query(
                'SELECT data_entrada, data_saida FROM movimentacaos WHERE strftime("%Y", data_entrada) = :data_entrada',
                {
                    replacements: {data_entrada: year},
                    type: QueryTypes.SELECT
                }
            )

        return res.status(200).json(movimentacoes)
    },

    getMovimentacao: async (req, res) => {
        const { id_movimentacao } = req.params

        try{
            const movimentacao = await Movimentacao.findOne({
                where: {id_movimentacao: id_movimentacao},
                include: [
                    {
                        attributes: ['id_tipo', 'nome', 'descricao', 'unidade_medida', 'codigo_sap', 'prioridade'],
                        model: Equipamento
                    },
                    {
                        attributes: ['nome', 'descricao'],
                        model: Zona
                    },
                    {
                        attributes: ['nome', 'cargo', 'setor'],
                        model: Responsavel
                    }
                ],
                order: [
                    [Equipamento, 'prioridade', 'DESC'],
                    ['data_entrada', 'ASC']
                ]
            })

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
        const { id_movimentacao } = req.params
        const { id_equipamento, id_zona, id_responsavel, data_entrada, status, quantidade, observacao } = req.body
        const movimentacaoDTO = { id_equipamento, id_zona, id_responsavel, data_entrada, status, quantidade, observacao }

        try{
            const updatedMovimentacao = await Movimentacao.update(movimentacaoDTO, {where: { id_movimentacao }, returning: true})
            return res.status(204).json(updatedMovimentacao)
        }catch(error){
            console.log(error)
            return res.status(500).json({message: 'Ocorreu um erro ao atualizar a movimentacao, contate a equipe de suporte.'})
        }
    },

    deleteMovimentacao: async(req, res) => {
        const { id_movimentacao } = req.params

        try{
            const deletedMovimentacao = await Movimentacao.destroy({where: { id_movimentacao }})
            return res.status(204).json(deletedMovimentacao)
        }catch(error){
            console.log(error)
            return res.status(500).json({message: `Ocorreu um erro ao tentar deletar a movimentacao, contate a equipe de suporte.`})
        }
    }
}

export default MovimentacaoController