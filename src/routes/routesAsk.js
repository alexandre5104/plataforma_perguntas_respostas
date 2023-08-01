const express = require('express')
const routesAsk = express.Router()
const controllerAsk = require('../controller/controllerAsk')

routesAsk.get('/ask', controllerAsk.selectAll)

routesAsk.get('/ask/:id', controllerAsk.selectById)

routesAsk.delete('/ask/:id', controllerAsk.deleta)

routesAsk.post('/ask', controllerAsk.insert)

routesAsk.put('/ask/:id', controllerAsk.update)

module.exports = routesAsk