const express = require('express')
const path = require('path')
const {Center,Course,Season, Batch} = require('./role/model')

const app = express()

app.set('view engine', 'hbs')
app.set('views', path.resolve(__dirname, './views'))

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/code', async (req, res) => {

  try {
      const centers = await Center.findAll()
      const courses = await Course.findAll()
      const seasons = await Season.findAll()
      // const years = [2021,2022,2023,2024,2025]

    res.render('code', {
        centers, courses, seasons, //years
    })

  } catch (err) {
      console.error(err);
  }
    
})

app.post('/code', async (req, res) => {

  let generatecode = ''
  generatecode += req.body.course
  generatecode += req.body.center
  // generatecode += req.body.years.substr(2)
  generatecode += req.body.season
  generatecode += req.body.course
  generatecode += req.body.batchno

  try {
   const XYZ = await Batch.create({
      code: generatecode,
      // year = req.body.year,
      centerId: req.body.center,
      seasonId: req.body.season,
      courseId: req.body.center,
      start: Date.parse(req.body.start),
      end: Date.parse(req.body.end)
    })

    res.send(XYZ.code)
    console.log(XYZ);
  } catch (g) {
    console.error(g);
  }
})

app.get('/batch', async (req,res) => {
  try {
    
   const batches = await Batch.findAll({
     include: ['Course, Season, Center']
   })

   res.render('batch', {batches})
  } catch (err) {
    console.error(err);
  }
})
module.exports = {
    app
}