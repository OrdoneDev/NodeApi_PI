import app from "./src/app.js"

const port = process.env.HTTP_PORT || 3000

app.listen(port, () => console.log(`Servidor online http://localhost:${port}/`))