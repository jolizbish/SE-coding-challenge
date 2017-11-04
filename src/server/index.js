const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
// const axios = require('axios')

const app = express()

const SERVER_URL = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyAsc823zMjgiOy9b1beWBvKUmysOVYRqu4&type=real_estate_agency&radius=16000&location='

app.use('/public', express.static(path.join(__dirname, '../public/')))

app.use(bodyParser.json())



app.get('/*', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../client/index.html'))
})


app.listen(3000, function () {
  console.log('Listening on port 3000!')
})
