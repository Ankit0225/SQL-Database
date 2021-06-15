const express = require('express')
const app = express()
const path =  require('path')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.set("view engine", "hbs")

app.use('/pages', require('./Routes/pages').route)
app.use('/api', require('./Routes/api').route)
app.use('/', express.static(path.join(__dirname, 'public')))

app.listen(8888, ()=> {
    console.log('Server Started On http://localhost:8888/');
})