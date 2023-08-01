const express = require('express')
const app = express()
const con = require('./src/database/connection')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const routesAsk = require('./src/routes/routesAsk')
const routesAnswer = require('./src/routes/routesAnswer')

app.use(routesAsk)
app.use(routesAnswer)

app.listen(3000, () => {
    console.log("Servidor rodando!")
})