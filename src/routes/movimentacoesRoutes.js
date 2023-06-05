import { Router } from "express"
import MovimentacaoController from "../controllers/movimentacaoController.js"

const { getAll, getMovimentacao, getAllByEquipamento, getAllByYear, createMovimentacao, updateMovimentacao, deleteMovimentacao } = MovimentacaoController

const router = Router()

router
    .get("/movimentacoes", getAll)
    .get("/movimentacoes/:id_movimentacao", getMovimentacao)
    .get("/movimentacoes/equipamentos/:id_equipamento", getAllByEquipamento)
    .get("/movimentacoes/dashboard/:year", getAllByYear)
    .post("/movimentacoes", createMovimentacao)
    .put("/movimentacoes/:id_movimentacao", updateMovimentacao)
    .delete("/movimentacoes/:id_movimentacao", deleteMovimentacao)

export default router