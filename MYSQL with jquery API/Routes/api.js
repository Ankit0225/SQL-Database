const route = require('express').Router()

const db = require('../db')

route.get('/person/' ,(req,res) => {
//    Send an array of all the persons 

 db.getAllPersons()
 .then((person) => res.send(person))
 .catch((err) => res.send({error: err}))
})

route.post('/person/',(req,res) => {
//    Adding the new person

db.addNewPerson(req.body.name, req.body.age, req.body.city)
.then(() => res.redirect('/api/person/'))  //Checking all the data 
.catch((err) => res.send({error: err}))
})


exports = module.exports ={
    route
}