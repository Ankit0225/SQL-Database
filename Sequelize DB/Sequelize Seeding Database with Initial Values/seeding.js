const {db, Center, Season, Batch, Course, Teacher} = require('./model')

const seed = async() => {
    try {
      

        db.sync({alter: true})

            await Center.buildCreate([
            {id: 'DN', name: 'Baburao' , city: 'Delhi'},
            {id: 'DN', name: 'Priya' , city: 'Delhi'},
            {id: 'LON', name: 'Chaitanya' , city: 'London'},
            {id: 'TOK', name: 'Gauti' , city: 'Tokyo'},
            {id: 'MEL', name: 'Blazr' , city: 'Delhi'},
            {id: 'SYN', name: 'Online' , city: 'Syndey'}
        ],{

            ignoreDuplicates: true
        }
        )
    }
    catch (err){

        console.log(err);
    }
}

seed();