import { Router } from "express"
import MovimentacaoController from "../controllers/movimentacaoController.js"

const { getAll, getMovimentacao, createMovimentacao, updateMovimentacao, deleteMovimentacao } = MovimentacaoController

const router = Router()

router
    .get("/movimentacoes", getAll)
    .get("/movimentacoes/:id_movimentacao", getMovimentacao)
    .post("/movimentacoes", createMovimentacao)
    .put("/movimentacoes/:id_movimentacao", updateMovimentacao)
    .delete("/movimentacoes/:id_movimentacao", deleteMovimentacao)

export default router