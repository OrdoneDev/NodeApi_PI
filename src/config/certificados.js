import fs from 'fs'

export const certificadosConfig = {
    key: fs.readFileSync("src/SSL/certificado.key"),
    cert: fs.readFileSync("src/SSL/certificado.cert")
}