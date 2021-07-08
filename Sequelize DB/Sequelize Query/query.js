const {db, Student} = require('./model')

const task = async () => {
  try {

    await db.sync()

    const students = await Student.findAll({
    //  what you what to find write here
      /*  //  Example: 
      where: {
        age: {
        $or: {  //or operator
          $lt: 12,  //  lt =less than
          $gt: 19      // gt = greater than
          
        }
      }
    },
       order: [
          ['name', 'ASC'],
          ['age', 'DESC']
       ] */ 
      //  By writing these you will get all related datas 
    });
    students.forEach(student => console.log(`
    name: ${student.dataValues.name} \t age: ${student.dataValues.age} \t 
    city: ${student.dataValues.city} `))

   } catch (g) {
      console.error(g);
  }
}

task();
