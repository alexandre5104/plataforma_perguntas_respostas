const RepositoryAnswer = require('../model/RepositoryAnswer')

function selectAll(request, response) {

    RepositoryAnswer.selectAll((err, data) => {
        if (err) throw err
        response.json(data)
    })

}

function selectById(request, response) {

    let id = request.params.id
    RepositoryAnswer.selectById(id, (err, data) => {
        if (err) throw err
        response.json(data)
    })

}

function insert(request, response) {

    let id_ask = request.params.id

    console.log(id_ask)
    const answer = {
        "description": request.body.description
    }

    RepositoryAnswer.insert(answer, id_ask, (err, data) => {
        if (err) throw err;
        response.json(data)
    })
}

function update(request, response) {

    let id = request.params.id

    const answer = {
        "description": request.body.description
    }

    RepositoryAnswer.update(id, answer, (err, data) => {
        if (err) throw err
        response.json(data)
    })

}

module.exports = { selectAll, selectById, insert, update }
