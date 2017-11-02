var express = require('express');
var bodyParser = require('body-parser');
var engines = require('consolidate');

var server = express();

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(express.static(__dirname + '/public'));

server.use("/index", express.static(__dirname + '/index.js'));
server.use("/compiled/client/App", express.static(__dirname + '/compiled/client/App.js'));

server.set('view engine', __dirname + '/public');
server.engine('html', require('ejs').renderFile);



server.get('/', function(req, res) {
  res.render('index.html');

});


server.listen(3000, function () {
  console.log('Listening on port 3000');
});

module.exports = server;
