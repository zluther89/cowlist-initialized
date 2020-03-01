const mysql = require("mysql");

const mysqlConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "cows"
});
mysqlConnection.connect();

module.exports = mysqlConnection;
