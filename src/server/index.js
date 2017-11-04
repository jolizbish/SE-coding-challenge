const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const axios = require('axios');

const app = express();

const API_URL = 'https://api.skillsengine.com/v2/competencies/analyze';

app.use('/public', express.static(path.join(__dirname, '../public/')))

app.use(bodyParser.json())


app.get('/*', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../client/index.html'))
})

app.post('/*', (req, res, next) => {
  axios(`${API_URL}${req.body.text}`)
  .then(result => {
    res.send(result.competencies_analysis.skills)
  })
  .catch(err => {
    res.send('Something went wrong.')
  })
})

app.listen(3000, function () {
  console.log('Listening on port 3000!')
})
