import { Router } from "express"
import EquipamentoController from "../controllers/equipamentoController.js"

const { getAll, getEquipamento, createEquipamento, updateEquipamento, deleteEquipamento } = EquipamentoController

const router = Router()

router
    .get("/equipamentos", getAll)
    .get("/equipamentos/:id", getEquipamento)
    .post("/equipamentos", createEquipamento)
    .put("/equipamentos/:id", updateEquipamento)
    .delete("/equipamentos/:id", deleteEquipamento)

export default router