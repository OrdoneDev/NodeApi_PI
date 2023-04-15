import { Router } from "express"
import TipoController from "../controllers/tipoController.js"

const { getAll, getTipo, createTipo, updateTipo, deleteTipo } = TipoController

const router = Router()

router
    .get("/tipos", getAll)
    .get("/tipos/:id_tipo", getTipo)
    .post("/tipos", createTipo)
    .put("/tipos/:id_tipo", updateTipo)
    .delete("/tipos/:id_tipo", deleteTipo)

export default router