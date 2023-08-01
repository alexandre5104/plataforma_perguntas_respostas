const express = require('express')
const app = express()

app.get('/', (request, response) =>{
    response.send("Minha primeira rota de teste")
})

app.listen(3000, () =>{
    console.log("Servidor rodando!")
})