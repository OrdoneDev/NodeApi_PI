import { Router } from "express"
import ResponsavelController from "../controllers/responsavelController.js"

const { getAll, getResponsavel, createResponsavel, updateResponsavel, deleteResponsavel } = ResponsavelController

const router = Router()

router
    .get("/responsaveis", getAll)
    .get("/responsaveis/:id", getResponsavel)
    .post("/responsaveis", createResponsavel)
    .put("/responsaveis/:id", updateResponsavel)
    .delete("/responsaveis/:id", deleteResponsavel)

export default router