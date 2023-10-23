import { Router } from "express"
import verifyToken from "../middlewares/verifyToken.js"
import MovimentacaoController from "../controllers/movimentacaoController.js"

const { getAll, getMovimentacao, getAllByEquipamento, getAllByYear, createMovimentacao, updateMovimentacao, deleteMovimentacao } = MovimentacaoController

const router = Router()

router
    .get("/movimentacoes", verifyToken, getAll)
    .get("/movimentacoes/:id_movimentacao", verifyToken, getMovimentacao)
    .get("/movimentacoes/equipamentos/:id_equipamento", verifyToken, getAllByEquipamento)
    .get("/movimentacoes/dashboard/:year", verifyToken, getAllByYear)
    .post("/movimentacoes/equipamentos/:id_equipamento", verifyToken, getAllByEquipamento)
    .post("/movimentacoes/:id_movimentacao", verifyToken, getMovimentacao)
    .post("/movimentacoes", verifyToken, createMovimentacao)
    .put("/movimentacoes/:id_movimentacao", verifyToken, updateMovimentacao)
    .delete("/movimentacoes/:id_movimentacao", verifyToken, deleteMovimentacao)

export default router