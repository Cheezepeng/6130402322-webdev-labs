var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
var app = express();

app.get('/', function(req, res){
    res.render('form');
});

app.set('view engine', 'pug');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));

app.use(upload.array());
app.use(express.static('public'));

app.post('/', function(req, res){
    console.log(req.body);
    res.send(`<b>${req.body.name}</b>` + ' used these following skills: ' + `<b>${req.body.skill}</b>` + ' while doing internship at ' + `<b>${req.body.intern}</b>`)
});

app.listen(3000);