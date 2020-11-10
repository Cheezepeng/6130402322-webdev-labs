// var express = require('express');
// var app = express();

// var things = require('./things.js')

// app.get('/:id/', function(req, res){
//     res.send("This specified id is "+ req.param.id);
// });

// app.get('/:id/:name', function(req, res){
//     res.send('This specified id is'+ req.param.id +'and name is: '
//     +req.param.name);
// });

// /*app.get('/things', things);*/

// app.listen(3000);

var express = require('express');
var app = express();

var things = require('./things.js')

app.get('/:id', function(req, res) {
  res.send('The id you specified is ' + req.params.id);
});

app.get('/:id/:name', function(req, res) {
  res.send('The specified id is ' + req.params.id + 
  ' and name is ' + req.params.name);
});

app.listen(3000);