import express from "express"
import { initDatabase } from "./database.js"
import routes from "./routes/index.js"
import * as dotenv from 'dotenv'

dotenv.config()

initDatabase()

const app = express()
app.use(express.json())

routes(app)

export default app
