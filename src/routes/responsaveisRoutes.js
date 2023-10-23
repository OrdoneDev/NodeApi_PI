import { Router } from "express"
import verifyToken from "../middlewares/verifyToken.js"
import ResponsavelController from "../controllers/responsavelController.js"

const { getAutenticacao, getAll, getResponsavel, createResponsavel, updateResponsavel, deleteResponsavel } = ResponsavelController

const router = Router()

router
    .get("/login", getAutenticacao)
    .get("/responsaveis", verifyToken, getAll)
    .get("/responsaveis/:id_responsavel", verifyToken, getResponsavel)
    .post("/login", getAutenticacao)
    .post("/responsaveis/:id_responsavel", verifyToken, getResponsavel)
    .post("/responsaveis", verifyToken, createResponsavel)
    .put("/responsaveis/:id_responsavel", verifyToken, updateResponsavel)
    .delete("/responsaveis/:id_responsavel", verifyToken, deleteResponsavel)

export default router