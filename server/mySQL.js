//This will be the database file
.
var React = require('react');
var ReactDOM = require('react-dom');

var mysql = require('mysql');
var express = require('express');
var app = express();

var fs = require('fs');

var connection = mysql.createConnection({
    host     : 'PETE',
    user     : 'root',
    password : ' ',
    database : 'node'
});

connection.connect();

app.post('/users', function(req, res) {

    var user = req.body;

    var query = connection.query('INSERT INTO signup SET ?', user,  function(err, result) {

    });
    res.end('Success');
});
