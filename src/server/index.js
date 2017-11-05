const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const axios = require('axios');
const creds = require('./creds.js');
const querystring = require('querystring');

const app = express();

const tokenHeader = {
  "Content-Type": "application/x-www-form-urlencoded",
  Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJjbGllbnRfaWQiOiJkZjI5NjJlNWFhNmNlMjk3OWY3ZjY5MGRhYzQzMTMzYmNlYzFlZTBhY2YxOWY1OGNlOTk1Mzc3ZDUwNGY1Mzk3IiwiZXhwIjoxNTA5OTIyMjM4fQ.ulrjQXB9iVcvDnnoQYzcNTjl2zd8suY_DEptjQwlwOk"
}

const ANALYZE_URL = 'https://api.skillsengine.com/v2/competencies/analyze';
const TEST_URL = 'https://api.skillsengine.com/api/test';
const TOKEN_URL = 'https://api.skillsengine.com/api/token';

app.use('/public', express.static(path.join(__dirname, '../public/')))

app.use(bodyParser.json())

app.get('/*', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
})


app.post('/', (req, res, next) => {
  return testToken(tokenHeader, req.body)
  .then(response => {
    console.log(response.data.result.competencies_analysis.skills);
    res.send(response.data.result.competencies_analysis.skills);
  })
    .catch(err => console.log(err));
})



function analyzeText(data) {
  console.log('data:', data);
  return axios.post(ANALYZE_URL, querystring.stringify(data), {headers: tokenHeader});
}

function getNewAccessToken(credentials, data) {
  return axios.post(TOKEN_URL, credentials)
  .then((res) => {
    tokenHeader.Authorization = "Bearer " + res.data.access_token;
    console.log('New access token retrieved.');
    return analyzeText(data);
    }
  )
  .catch(err =>
    console.log(err)
  )
}

function testToken(token, data) {
  return axios.get(TEST_URL, {'headers': token})
  .then(response =>{
    console.log('TEST succeeded!');
    return analyzeText(data);
  })
  .catch(err => {
    console.log('TEST failed');
    return getNewAccessToken(creds.creds, data);
  });
}


app.listen(3000, function () {
  console.log('Listening on port 3000!')
})
