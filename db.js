const { dbConfig } = require('./config');
// get the client
const mysql = require('mysql2');
const util = require('util');
 
// create the connection to database
const connection = mysql.createConnection({
  host: dbConfig.host,
  user: dbConfig.user,
  password: dbConfig.password,
  database: dbConfig.database
});

connection.query = util.promisify(connection.query);

module.exports = connection;