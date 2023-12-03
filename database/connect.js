var mysql = require('mysql2');
    
var conn = mysql.createConnection({
 host: "ba0a4injihadtbrgblrr-mysql.services.clever-cloud.com",
 user: "ullrzjgknbnmhltm",
 password: "FAxaAzLHTTw37HTJOdud",
 database: "ba0a4injihadtbrgblrr"
});
conn.connect();
module.exports = conn;
