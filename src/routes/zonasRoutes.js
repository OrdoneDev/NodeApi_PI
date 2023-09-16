import { Router } from "express"
import verifyToken from "../middlewares/verifyToken.js"
import ZonaController from "../controllers/zonaController.js"

const { getAll, getZona, createZona, updateZona, deleteZona } = ZonaController

const router = Router()

router
    .get("/zonas", verifyToken, getAll)
    .get("/zonas/:id_zona", verifyToken, getZona)
    .post("/zonas", verifyToken, createZona)
    .put("/zonas/:id_zona", verifyToken, updateZona)
    .delete("/zonas/:id_zona", verifyToken, deleteZona)

export default router