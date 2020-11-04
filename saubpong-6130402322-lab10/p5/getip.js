const { response } = require("express");
var express = require('express');
var app = express();
var request1 = require("request");
request1.get("https://httpbin.org/ip", (error, response, body) =>{
    if (error){
        return console.dir(error);
    }
    var result = JSON.parse(body);
    var ip = result.origin;

    app.get('/ip', function (req, res){
        res.send({ip: ip});
    })
    app.post('/ip', function (req, res){
        res.send("You request with POST method but cannot set up IP address\n");
    })
});

app.listen(3000);
