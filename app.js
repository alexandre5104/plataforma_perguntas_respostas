const express = require('express')
const app = express()

const routesAsk = require('./src/routes/routesAsk')

app.use(routesAsk)

app.listen(3000, () => {
    console.log("Servidor rodando!")
})