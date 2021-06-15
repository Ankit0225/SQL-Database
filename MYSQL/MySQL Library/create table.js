const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'myuser',
    password: 'testdata',
    database: 'testdb'
})

connection.query(
   `CREATE TABLE IF NOT EXISTS persons (
       id INTEGER AUTO_INCREMENT PRIMARY KEY,
       name VARCHAR(50) NOT NULL,
       age INTEGER NOT NULL,
       city VARCHAR(40)
   )`,
   function(err, results) {
       if (err) {
           console.log(err)
       } else {
           console.log("Table Created successfully")
       }
       connection.close();   
   }
)