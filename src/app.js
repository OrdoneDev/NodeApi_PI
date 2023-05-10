import express from "express"
import { initDatabase } from "./config/database.js"
import routes from "./routes/index.js"
import * as dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()

initDatabase()

const app = express()
app.use(cors())

routes(app)

export default app