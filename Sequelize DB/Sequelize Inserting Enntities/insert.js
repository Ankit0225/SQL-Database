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
    },
});

const task = async () => {
 try {
   await db.sync()
//    Insert a student


  await Student.create({
      name: 'Some Person',
      age: 20,
      city: 'Paris'
  })
 } catch (e) {
     console.error(e);
 }
}
task();
