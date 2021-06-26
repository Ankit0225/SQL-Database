const {db, Student} = require('./model')

const task = async () => {
  try {

    await db.sync()

    const students = await Student.findAll(`
      where age:  
    `);
    students.forEach(student => console.log(`
    name: ${student.dataValues.name} \t age: ${student.dataValues.age} \t 
    city: ${student.dataValues.city} `))

   } catch (g) {
      console.error(g);
  }
}

task();
