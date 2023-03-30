import { Router } from "express"
import TipoController from "../controllers/tipoController.js"

const { getAll, getTipo, createTipo, updateTipo, deleteTipo } = TipoController

const router = Router()

router
    .get("/tipos", getAll)
    .get("/tipos/:id", getTipo)
    .post("/tipos", createTipo)
    .put("/tipos/:id", updateTipo)
    .delete("/tipos/:id", deleteTipo)

export default router