const Sequelize = require('sequelize')
const DataTypes = Sequelize.DataTypes

const db = new Sequelize('sampledb', 'sampleuser', 'samplepass', {
    host: 'localhost',
    dialect: 'mysql'

})

const Student = db.define('Student',{
    name: {
        type: DataTypes.STRING(70),
        allowNull: false
    },
    age: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
        default: -1
    },
    city: {
        type:DataTypes.STRING(100),
        allowNull: false 
    }
});

db.sync({alter: true})
.then(() => console.log('Database Synced'))
.catch(console.error)