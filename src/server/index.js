const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const axios = require('axios');
const creds = require('./creds.js');

const app = express();

const tokenHeader = {
  Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJjbGllbnRfaWQiOiJkZjI5NjJlNWFhNmNlMjk3OWY3ZjY5MGRhYzQzMTMzYmNlYzFlZTBhY2YxOWY1OGNlOTk1Mzc3ZDUwNGY1Mzk3IiwiZXhwIjoxNTA5OTIyMjM4fQ.ulrjQXB9iVcvDnnoQYzcNTjl2zd8suY_DEptjQwlwOk"
}

const ANALYZE_URL = 'https://api.skillsengine.com/v2/competencies/analyze';
const TEST_URL = 'https://api.skillsengine.com/api/test';
const TOKEN_URL = 'https://api.skillsengine.com/api/token';

app.use('/public', express.static(path.join(__dirname, '../public/')))

app.use(bodyParser.json())

//TODO: comment out and declare variable as null/undefined-- this token will only last 24 hours

// when server starts on your initial request, check to see if you have an access token, if not go get one, once you have one, go through the rest of the process


// var accessToken = "eyJhbGciOiJIUzI1NiJ9.eyJjbGllbnRfaWQiOiJkZjI5NjJlNWFhNmNlMjk3OWY3ZjY5MGRhYzQzMTMzYmNlYzFlZTBhY2YxOWY1OGNlOTk1Mzc3ZDUwNGY1Mzk3IiwiZXhwIjoxNTA5OTIyMjM4fQ.ulrjQXB9iVcvDnnoQYzcNTjl2zd8suY_DEptjQwlwOk";

app.get('/*', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
  //TODO: uncomment for new API_token (good for 24 hours)
})

app.post('/*', (req, res, next) => {

})

//assign incoming text to the data object to send to ANALYZE_URL
var input = {
  text: "reactJS angularJS, I love this, building API, test servers"
}

function analyzeText(data) {
  axios.post(ANALYZE_URL, data, {headers: tokenHeader})
  .then(res =>
    res.send(res.data.result.competencies_analysis.skills)
  )
  .catch(err => console.log(err))
}

function getNewAccessToken(credentials) {
  axios.post(TOKEN_URL, credentials)
  .then((res) => {
    tokenHeader.Authorization = "Bearer " + res.data.access_token;
    analyzeText(input);
    console.log('New access token retrieved.');
    }
  )
  .catch(err =>
    // console.log('Unable to get new access token.');
    console.log(err)
  )
}

//onChange, send GET request to TEST_URL--> WORKS!!!
function testToken(token) {
  axios.get(TEST_URL, {'headers': token})
  .then(response =>
    // console.log('TEST succeeded!');
    analyzeText(input)
  )
  .catch(err =>
    // console.log('TEST failed');
    getNewAccessToken(creds.creds)
  );
}

// testToken(tokenHeader);


app.listen(3000, function () {
  console.log('Listening on port 3000!')
})
