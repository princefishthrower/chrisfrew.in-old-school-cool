// strict
'use strict';

// requires
var fs = require('fs');
var http = require('http');
var https = require('https');
var express = require('express');
var path = require('path');
var cors = require('cors');


// other vars to be defined
var app, server;

app = express();

// allow cross origin
app.use(cors())

// statically server everything in the public folder
app.use(express.static('public'));
app.get('/', function (req,res) {
	res.sendFile(path.join(__dirname + '/dist/index.html')); // serve our static index.html
});

server = http.createServer(app);

// listening ports
server.listen(8082);
