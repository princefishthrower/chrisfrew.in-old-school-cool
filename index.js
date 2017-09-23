// strict
'use strict';

// requires
var fs = require('fs');
var http = require('http');
var https = require('https');
var express = require('express');
var path = require('path');


// other vars to be defined
var app, server;

app = express();

// allow cross origin
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
});

app.use(express.static('public')); // statically server everything in the public folder
app.get('/', function (req,res) {
	res.sendFile(path.join(__dirname + '/dist/index.html')); // serve our static index.html
});

server = http.createServer(app);

// listening ports
server.listen(8082);
