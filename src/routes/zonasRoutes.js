import { Router } from "express"
import ZonaController from "../controllers/zonaController.js"

const { getAll, getZona, createZona, updateZona, deleteZona } = ZonaController

const router = Router()

router
    .get("/zonas", getAll)
    .get("/zonas/:id", getZona)
    .post("/zonas", createZona)
    .put("/zonas/:id", updateZona)
    .delete("/zonas/:id", deleteZona)

export default router