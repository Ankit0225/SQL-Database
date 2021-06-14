const mysql = require('mysql2')


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'myuser',
    password: 'testdata',
    database: 'testdb'
})

connection.query(
    `SELECT * FROM persons`,
    function(err, rows, cols) {
       if (err) {
           console.log(err);
       } else {
           console.log(rows);
           console.log(cols);
       }
       connection.end();
    }   
)