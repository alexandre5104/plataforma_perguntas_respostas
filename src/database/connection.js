const mysql = require('mysql')

var con = mysql.createConnection({

   database:"perguntas_respostasbd",
   password:"",
   user:"root",
   host:"localhost"

})

con.connect((err) => {

    if (err) throw err;
    console.log("Conectado")
})