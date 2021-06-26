
const {db, Student} = require('./model')

const task = async () => {
    try {
      await db.sync()
      
      //    Insert a student
   
    for(let i = 0;i < 30; i++){

        await Student.create({
            name: (['Tom','Dev','Baburao','Naam',
            'Ram','Shyam','Lokesh','Harsh','Utkarsh','Aditya'])[parseInt(Math.random() * 10)],
            age: 10 + parseInt(Math.random() * 10),
            city: (['Amsterdam','Banglore','Calicut',
            'Dockyard','Europe','France','Georgia',
            'India','Japan','London','Mexico'])[parseInt(Math.random() * 10)],
        })
        
    }

    
   } catch (g) {
        console.error(g);
    }
}

task();
   