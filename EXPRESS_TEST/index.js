const express = require('express');
const bodyParser = require('body-parser');

const { mongoose } = require('./db.js');
// require db

const cors = require('cors')
const path = require('path');
const api = require('./routes/api');
// require paths

var keywordController = require('./controllers/keywordController.js');
var githubController = require('./controllers/githubController.js');
// connect to these controllers

var app = express();
// declare express

app.use(express.static(path.join(__dirname, 'dist')));
// declare with path

app.use(bodyParser.json());
// declare with json

app.use('/api', api);
// use with api route

app.listen(3000, () => console.log('Server started at port : 3000'));
// access port, & print this

app.use('/keywords', keywordController);
// route with urls

app = express();
// use with express

//CORS middleware
var allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', 'https://jobs.github.com/positions.json?description=python&location=sf&full_time=true');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    // set headers
    next();
}
console.log(allowCrossDomain)
// print in console output

var http = require('http');
var url = require('url');
var fs = require('fs');
var server;

server = http.createServer(function (req, res) {
    // your normal server code
    var path = url.parse(req.url).pathname;
    fs.readFile(__dirname + path, function (err, data) {
        if (err) {
            return send404(res);
        }
        res.writeHead(200, { 'Content-Type': path == 'json.js' ? 'text/javascript' : 'text/html' });
        res.write(data, 'utf8');
        res.end();
    });
}),
    app = express();

app.all("/api/*", function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
    return next();
    console.log("headers access : " + header)
});
app.use("/js", express.static(__dirname + '/js'));
// set headers