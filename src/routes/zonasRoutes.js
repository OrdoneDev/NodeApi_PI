import { Router } from "express"
import ZonaController from "../controllers/zonaController.js"

const { getAll, getZona, createZona, updateZona, deleteZona } = ZonaController

const router = Router()

router
    .get("/zonas", getAll)
    .get("/zonas/:id_zona", getZona)
    .post("/zonas", createZona)
    .put("/zonas/:id_zona", updateZona)
    .delete("/zonas/:id_zona", deleteZona)

export default router