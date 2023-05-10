import express from "express"
import { initDatabase } from "./config/database.js"
import routes from "./routes/index.js"
import * as dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()

initDatabase()

const app = express()

app.use((_, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE')
    app.use(cors())
    next()
})

routes(app)

export default app