const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '0361',
    database: 'myhub_db'
});

module.exports = connection;