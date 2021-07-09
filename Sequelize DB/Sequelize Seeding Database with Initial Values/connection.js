const Sequelize = require('sequelize')

const db = new Sequelize('sampledb', 'sampleuser', 'samplepass', {
    host: 'localhost',
    dialect: 'mysql'

})
db
 .authenticate()
 .then(()  => {
     console.log('Connection has been established');
 })
 .catch(err => {
    console.error('Unable to Connect Database', err);
 });