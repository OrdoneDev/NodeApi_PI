import { Router } from "express"
import EquipamentoController from "../controllers/equipamentoController.js"

const { getAll, getEquipamento, createEquipamento, updateEquipamento, deleteEquipamento } = EquipamentoController

const router = Router()

router
    .get("/equipamentos", getAll)
    .get("/equipamentos/:id_equipamento", getEquipamento)
    .post("/equipamentos", createEquipamento)
    .put("/equipamentos/:id_equipamento", updateEquipamento)
    .delete("/equipamentos/:id_equipamento", deleteEquipamento)

export default router