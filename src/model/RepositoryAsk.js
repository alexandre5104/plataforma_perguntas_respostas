const con = require('../database/connection')

function selectAll(result) {

    con.query('SELECT * FROM ask', (err, res) => {

        if (err) {
            result(err, null)
            return
        }

        result(null, res)
    })

}

function insert(ask, result) {
    con.query('INSERT INTO ask (title, description) VALUES (?, ?)', [ask.title, ask.description], (err, res) => {
        if (err, null) {
            result(err, null)
            return
        }
        result(null, { id: res.id, title: res.title })
    })
}

function selectById(id, result) {

    con.query(`SELECT * FROM ask WHERE id = ${id}`, (err, res) => {

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

function deleta(id, result) {

    con.query(`DELETE FROM ask WHERE id = ?`, [id], (err, res) => {

        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
            result({ kind: "not_found" }, null);
            return;
        }

        console.log("deletedo ask com id: ", id);
        result(null, res);
    })
}

function update(id, ask, result) {
    con.query(`UPDATE ask SET title = ? , description = ? WHERE id = ${id}`, [ask.title, ask.description], (err, res) => {
        if (err, null) {
            result(err, null)
            return
        }
        result(null, { id: res.id, title: res.title })
    })
}

module.exports = { selectAll, insert, selectById, deleta, update }