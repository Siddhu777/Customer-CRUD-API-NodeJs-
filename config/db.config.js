const mysql = require('mysql')

//create connection
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test'
});
conn.connect(function(error){
    if(error) throw error;
    console.log('Database Connected succesfully');
})

module.exports = conn;
