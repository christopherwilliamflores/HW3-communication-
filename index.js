const { application } = require('express');

var express = require('express');
var app = express();


var mysql = require('mysql');
var cors = require('cors');

app.use(cors());


app.get('/members', getMembers);

function getMembers(req,res){
    //Step 0 : Definir la conexion a la BD 
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'christopher',
        password: '5426212' ,
        database: 'restaurant'
    });
    //Step 1 : Establecer la conexion
    connection.connect();
    //Step 2 : Mandar el query
    var myQuery =  " SELECT nombreplato, precio " +
                   " FROM menu;";

    connection.query(myQuery, function(error, results, fields){
        //Ya tengon el resultado del query en 'results'

        //Step 3 : Procesar el resultado de la BD   
        res.send(results);
        //Step 4: Cerrar la conexion
        connection.end();
    });

}

app.listen(3000, function(){
    console.log("Server started in port 3000!")
})

