import { certificadosConfig } from "./src/config/certificados.js"
import app from "./src/app.js"
import https from "https"

const port = process.env.HTTP_PORT || 3000

https.createServer(certificadosConfig, app).listen(port)