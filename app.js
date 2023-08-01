const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const routesAsk = require('./src/routes/routesAsk')

app.use(routesAsk)

app.listen(3000, () => {
    console.log("Servidor rodando!")
})