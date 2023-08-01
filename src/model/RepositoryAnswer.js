const con = require('../database/connection')

function selectAll(result) {
    con.query('SELECT * FROM answer', (err, res) => {
        if (err) {
            result(err, null)
            return
        }
        result(null, res)
    })
}

function insert(answer, id_ask, result) {
    con.query('INSERT INTO answer (description, id_ask) VALUES (?, ?)', [answer.description, id_ask], (err, res) => {
        if (err, null) {
            console.log(err)
            result(err, null)
            return
        }
        result(null, { id: res.id, description: res.description })
        console.log(res)
    })
}

function selectById(id, result) {
    con.query(`SELECT * FROM answer WHERE id = ${id}`, (err, res) => {
        if (err) {
            result(err, null)
            return
        }

        if (res.length) {
            result(null, res[0]);
            return;
        }
        result({ kind: "not_found" }, null);
    })
}

function update(id, answer, result) {
    con.query(`UPDATE answer SET description = ? WHERE id = ${id}`, [answer.description], (err, res) => {
        if (err, null) {
            result(err, null)
            return
        }
        result(null, { id: res.id, description: res.description })
    })
}

module.exports = { selectAll, insert, selectById, update }