// server.js

var express = require('express');
var session = require('express-session');
var path = require('path');
var bodyParser = require('body-parser');
var router = require('./src/routers/ctrouter');

const {hostport} = require('./src/config/config');

var app = express();

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

// use router defined into /src/routers/router
app.use('/',router);

// set the view engine to ejs
app.set('views', path.join(__dirname, '/src/views'));
app.set('view engine', 'ejs');

app.listen(hostport);
//console.log('Host działa na porcie: ${hostport}');
console.log(`Host działa na porcie: ${hostport}`);