import { Router } from "express"
import ResponsavelController from "../controllers/responsavelController.js"

const { getAll, getResponsavel, createResponsavel, updateResponsavel, deleteResponsavel } = ResponsavelController

const router = Router()

router
    .get("/responsaveis", getAll)
    .get("/responsaveis/:id_responsavel", getResponsavel)
    .post("/responsaveis", createResponsavel)
    .put("/responsaveis/:id_responsavel", updateResponsavel)
    .delete("/responsaveis/:id_responsavel", deleteResponsavel)

export default router