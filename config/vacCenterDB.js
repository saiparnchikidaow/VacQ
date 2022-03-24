const mysql = require("mysql");

var connection = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Ex.123456",
  database: "vacCenter",
});

module.exports = connection;
