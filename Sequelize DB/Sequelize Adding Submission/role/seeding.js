const {db, Center, Season, Batch, Course, Teacher} = require('./model')

const seeding = async() => {
    try {
      

        db.sync({alter: true})

            await Center.bulkCreate([
            {id: 'DN', name: 'Delhi' , city: 'Delhi'},
            {id: 'DN', name: 'Delhi' , city: 'Delhi'},
            {id: 'LON', name: 'London' , city: 'London'},
            {id: 'TOK', name: 'Tokyo' , city: 'Tokyo'},
            {id: 'MEL', name: 'Melboune' , city: 'Delhi'},
            {id: 'SYN', name: 'Syndey' , city: 'Syndey'}
        ],{

            ignoreDuplicates: true
        })

        await Season.bulkCreate([
           {id: 'S', name: 'Summer' },
           {id: 'M', name: 'Monsoon' },
           {id: 'W', name: 'Winter' },
           {id: 'A', name: 'Autumn' },
           {id: 'S', name: 'Spring' },
           {id: 'R', name: 'Rain' }
        ],{
            ignoreDuplicates: true
        })
        await Course.bulkCreate([
           {id: 'WD', name: 'Web Development' },
           {id: 'AD', name: 'Android Development' },
           {id: 'ML', name: 'Machine Learning' },
           {id: 'AI', name: 'Artifical Intelligence' },
           {id: 'IB', name: 'Interview BootCamp' }
        ],{
            ignoreDuplicates: true
        })
        // await Batch.bulkCreate([
        //   {id: ''}
        // ],{
        //     ignoreDuplicates: true
        // })
        // await Teacher.bulkCreate([
        //     {name: 'Baburao'},
        //     {name: 'Chaitanya'},
        //     {name: 'Gaurav'},
        //     {name: 'Gautam'},
        //     {name: 'Akhil'},
        //     {name: 'Baburao'}
        // ],{
        //     ignoreDuplicates: true
        // })
    }
    catch (err){

        console.log(err);
    }
}

seeding();