import { Router } from "express"
import verifyToken from "../middlewares/verifyToken.js"
import EquipamentoController from "../controllers/equipamentoController.js"

const { getAll, getEquipamento, createEquipamento, updateEquipamento, deleteEquipamento } = EquipamentoController

const router = Router()

router
    .get("/equipamentos", verifyToken, getAll)
    .get("/equipamentos/:id_equipamento", verifyToken, getEquipamento)
    .post("/equipamentos", verifyToken, createEquipamento)
    .put("/equipamentos/:id_equipamento", verifyToken, updateEquipamento)
    .delete("/equipamentos/:id_equipamento", verifyToken, deleteEquipamento)

export default router