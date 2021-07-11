const {db, Center, Season, Batch, Course, Teacher} = require('./model')

const seed = async() => {
    try {
      

        db.sync({alter: true})

            await Center.bulkCreate([
            {id: 'DN', name: 'Baburao' , city: 'Delhi'},
            {id: 'DN', name: 'Priya' , city: 'Delhi'},
            {id: 'LON', name: 'Chaitanya' , city: 'London'},
            {id: 'TOK', name: 'Gauti' , city: 'Tokyo'},
            {id: 'MEL', name: 'Blaze' , city: 'Delhi'},
            {id: 'SYN', name: 'Online' , city: 'Syndey'}
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
        await Batch.bulkCreate([
          {id: ''}
        ],{
            ignoreDuplicates: true
        })
    }
    catch (err){

        console.log(err);
    }
}

seed();