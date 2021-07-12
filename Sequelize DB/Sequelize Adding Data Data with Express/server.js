const express = require('express')
const path = require('path')
const {Center,Course,Season} = require('./role/model')

const app = express()

app.set('view engine', 'hbs')
app.set('views', path.resolve(__dirname, './views'))

app.get('/index', async (req, res) => {

  try {
      const centers = await Center.findAll()
      const courses = await Course.findAll()
      const seasons = await Season.findAll()
      const years = [2021,2022,2023,2024,2025]

    res.render('index', {
        centers, courses, seasons, years
    })

  } catch (err) {
      console.error(err);
  }
    
})

module.exports = {
    app
}