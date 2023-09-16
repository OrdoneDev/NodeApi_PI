import { Router } from "express"
import verifyToken from "../middlewares/verifyToken.js"
import TipoController from "../controllers/tipoController.js"

const { getAll, getTipo, createTipo, updateTipo, deleteTipo } = TipoController

const router = Router()

router
    .get("/tipos", verifyToken, getAll)
    .get("/tipos/:id_tipo", verifyToken, getTipo)
    .post("/tipos", verifyToken, createTipo)
    .put("/tipos/:id_tipo", verifyToken, updateTipo)
    .delete("/tipos/:id_tipo", verifyToken, deleteTipo)

export default router