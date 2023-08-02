const express = require('express')
const routesAnswer = express.Router()
const controllerAnswer = require('../controller/controllerAnswer')

routesAnswer.get('/answer', controllerAnswer.selectAll)

routesAnswer.get('/answer/:id', controllerAnswer.selectById)

routesAnswer.post('/answer/:id', controllerAnswer.insert)

routesAnswer.put('/answer/:id', controllerAnswer.update)

routesAnswer.get('/answer/ask/:id_ask', controllerAnswer.selectByIdAsk)

module.exports = routesAnswer