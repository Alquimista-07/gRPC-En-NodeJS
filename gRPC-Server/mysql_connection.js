var mysql      = require('mysql');

var mysqlConnection = mysql.createConnection({
  host     : '0.0.0.0',
  user     : 'root',
  password : 'root',
  database : 'so1_ejemplo'
});

mysqlConnection.connect(function (err){
    if(err){
        console.log('Error al conectarse a la base de datos!!!... ',err);
    } else {
        console.log('Conexión con la base de datos exitosa!!!...');
    }
});

module.exports = mysqlConnection;