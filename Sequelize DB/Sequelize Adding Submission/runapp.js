const {db} = require('./role/model')

const {app} = require('./server')

const start = async () => {
    try {

       await db.sync();
      
       app.listen(2222, () => {
           console.log('Server Started On http://localhost:2222');
       })
    } catch (err) {
        console.error(err);
    }
}

start()