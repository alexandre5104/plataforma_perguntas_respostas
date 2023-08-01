const express = require('express')
const routesAsk = express.Router()
routesAsk.get('/ask', (request, response))

routesAsk.get('/ask/:id', (request, response))

routesAsk.post('/ask', (request, response))

routesAsk.put('/ask/:id', (request, response))

routesAsk.delete('/ask/:id', (request, response))

module.exports = routesAsk