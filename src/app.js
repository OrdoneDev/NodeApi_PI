import express from "express"
import https from "https"
import { options } from "./config/certificados.js"
import { initDatabase } from "./config/database.js"
import routes from "./routes/index.js"
import * as dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()

initDatabase()

const app = express()

app.use((_, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods", 'GET,OPTIONS,PUT,POST,DELETE')
    res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers")
    app.use(cors())
    next()
})

https.createServer(options, app).listen(3000)

routes(app)

export default app