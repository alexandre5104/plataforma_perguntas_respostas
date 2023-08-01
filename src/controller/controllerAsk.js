const con = require('../database/connection')
const repositoryAsk = require('../model/RepositoryAsk')

function selectAll(request, response) {

    repositoryAsk.selectAll((err, data) => {
        if (err) throw err
        response.json(data)
    })

}

function selectById(request, response) {

    let id = request.params.id
    repositoryAsk.selectById(id, (err, data) => {
        if (err) throw err
        response.json(data)
    })

}

function deleta(request, response) {

    let id = parseInt(request.params.id)
    repositoryAsk.deleta(id, (err, data) => {

        if (err) {
            console.log(err)
        }
        response.json(data)
    })
}

function insert(request, response) {

    const ask = {
        "title": request.body.title,
        "description": request.body.description
    }

    repositoryAsk.insert(ask, (err, data) => {
        if (err) throw err;
        response.json(data)
    })
}

function update(request, response) {

    let id = request.params.id

    const ask = {
        "title": request.body.title,
        "description": request.body.description
    }

    repositoryAsk.update(id, ask, (err, data) => {
        if (err) throw err
        response.json(data)
    })

}

module.exports = { selectAll, selectById, deleta, insert, update }

