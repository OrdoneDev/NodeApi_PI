import express from "express"
import equipamentos from "./equipamentosRoutes.js"
import movimentacoes from "./movimentacoesRoutes.js"
import responsaveis from "./responsaveisRoutes.js"
import tipos from "./tiposRoutes.js"
import zonas from "./zonasRoutes.js"

const routes = (app) => {
    app.route("/").get((_, res) => res.status(200).send({titulo: "API Online"}))

    app.use(
        express.json(),
        equipamentos,
        movimentacoes,
        responsaveis,
        tipos,
        zonas
    )
}

export default routes