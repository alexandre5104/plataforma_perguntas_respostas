const mysql = require('mysql')

var con = mysql.createConnection({

    database: "perguntas_respostasbd",
    password: "",
    user: "root",
    host: "localhost"

})

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});

module.exports = con