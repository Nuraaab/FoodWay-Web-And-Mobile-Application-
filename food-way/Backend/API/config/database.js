var mysql=require('mysql');
var connection = mysql.createConnection({
    host:"localhost",
    database:"testdb",
    user:"root",
    password:"password",
});

module.exports = connection;