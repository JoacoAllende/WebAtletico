const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'basededatospruebatorneo'
});

mysqlConnection.connect(function(err){
    if (err){
        console.log(err);
        return;
    } else {
        console.log('db is connected');
    }
}); 

module.exports = mysqlConnection;

/*
const {promisify} = require("util");

const { database } = require('./keys');


const mysqlConnection = mysql.createPool(database);

mysqlConnection.getConnection((err, connection) => {
    if (err) {
      if (err.code === 'PROTOCOL_CONNECTION_LOST') {
        console.error('Database connection was closed.');
      }
      if (err.code === 'ER_CON_COUNT_ERROR') {
        console.error('Database has to many connections');
      }
      if (err.code === 'ECONNREFUSED') {
        console.error('Database connection was refused');
      }
      
    }
  
    if (connection){
      connection.release();
      console.log('DB is connected');
    } 
    
  
    return;
  });
*/

//mysqlConnection.query =  promisify(mysqlConnection.query);