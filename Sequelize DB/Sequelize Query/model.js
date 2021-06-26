const Sequelize = require('sequelize')
const DataTypes = Sequelize.DataTypes

const db = new Sequelize('sampledb', 'sampleuser', 'samplepass', {
    host: 'localhost',
    dialect: 'mysql'

})

const Student = db.define('Student',{
    name: {
        type: DataTypes.STRING(40),
        allowNull: false
    },
    age: {
        type: DataTypes.INTEGER(2),
        allowNull: false,
        default: -1
    },
    city: {
        type: DataTypes.STRING(40),
        allowNull: false
    },
});

module.exports = {
    db,Student
}