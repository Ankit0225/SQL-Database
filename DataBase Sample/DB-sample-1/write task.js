const Sequelize = require('sequelize')

const db = new Sequelize({
    host: 'localhost',
    dialect: 'mysql',
    database: 'sampledb3',
    username: 'sampleuser3',
    password: 'samplepass3' // For reference Generally not required
})

// task is my Model
const Task = db.define('task', {
    id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: Sequelize.DataTypes.STRING(100),
        allowNull: false

    },
    done: {
        type: Sequelize.DataTypes.BOOLEAN,
        defaultValue: false
    }
})

// db.authenticate()

async function task () {
    // await db.sync({force: true}) database clear please do not use it
    await db.sync()

  await  Task.create({title: 'Some Task to be Done'})

  await Task.bulkCreate([
      {title: 'This is Task 1'},
      {title: 'This is Task 2'},
      {title: 'This is Task 3'},
      {title: 'This is Task 4'},
      {title: 'This is Task 5'},
      {title: 'This is Task 6'}
  ],{
    ignoreDuplicates: true
})
//   I want to Read My Database So I will do 

const tasks = await Task.findAll()
console.log('tasks found = ', tasks.length);

tasks.forEach(element => {
    console.log(`${element.id} \t ${element.done} \t ${element.title}`);
});
}
task()