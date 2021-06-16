const Sequelize = require('sequelize')
const DataTypes = Sequelize.DataTypes

const db = new Sequelize('sampledb', 'sampleuser', 'samplepass', {
    host: 'localhost',
    dialect: 'mysql'

})

const Man = db.define('man',{
    name:DataTypes.STRING(70),
    age: DataTypes.INTEGER(10),
    city: DataTypes.STRING(100)
});

db.sync()
.then(() => console.log('Database Synced'))
.catch(console.error)