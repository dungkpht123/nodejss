var mysql = require('mysql2');
    
var conn = mysql.createConnection({
 host: "localhost",
 user: "root",
 password: "123456",
 database: "nodejsck"
});
conn.connect();
module.exports = conn;