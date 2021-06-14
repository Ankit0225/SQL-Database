const express = require('express')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.set("View Engine", "hbs")

app.listen(8888, ()=> {
    console.log('Server Started On http://localhost:8888/');
})