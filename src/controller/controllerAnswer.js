const repositoryAnswer = require('../model/RepositoryAnswer')

function selectAll(request, response) {
    repositoryAnswer.selectAll((err, data) => {
        if (err) throw err
        response.json(data)
    })
}

function selectById(request, response) {
    let id = request.params.id
    repositoryAnswer.selectById(id, (err, data) => {
        if (err) throw err
        response.json(data)
    })
}

function insert(request, response) {

    let id_ask = request.params.id
    const answer = {
        "description": request.body.description
    }

    repositoryAnswer.insert(answer, id_ask, (err, data) => {
        if (err) throw err;
        response.json(data)
    })
}

function update(request, response) {

    let id = request.params.id
    const answer = {
        "description": request.body.description
    }

    repositoryAnswer.update(id, answer, (err, data) => {
        if (err) throw err
        response.json(data)
    })
}

function selectByIdAsk(request, response) {
    let id_ask = request.params.id_ask
    console.log(id_ask)
    repositoryAnswer.selectByIdAsk(id_ask, (err, data) =>{
        if (err) throw err;
        response.json(data)
    })
}

module.exports = { selectAll, selectById, insert, update, selectByIdAsk }
