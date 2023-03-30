import { Router } from "express"
import MovimentacaoController from "../controllers/movimentacaoController.js"

const { getAll, getMovimentacao, createMovimentacao, updateMovimentacao, deleteMovimentacao } = MovimentacaoController

const router = Router()

router
    .get("/movimentacoes", getAll)
    .get("/movimentacoes/:id", getMovimentacao)
    .post("/movimentacoes", createMovimentacao)
    .put("/movimentacoes/:id", updateMovimentacao)
    .delete("/movimentacoes/:id", deleteMovimentacao)

export default router