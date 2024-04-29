const mysql = require("mysql2");

const connection = mysql.createConnection({
    host : 'localhost',
    user :'root',
    password : '',
    database : 'kuliah'
});

connection.connect(error => {
    if (error) throw error;
    console.log("Database sudah terhubung")
});

module.exports = connection