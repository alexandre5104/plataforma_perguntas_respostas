const express = require('express')
const routesAsk = express.Router()

routesAsk.get('/', (request, response) =>{
    response.send("Rota get executando!")
})

module.exports = routesAsk