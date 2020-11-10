var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.static('img'));

app.get('/1view', function(req, res){
    res.render('1view',{
    name: "Saubpong   Maneechak",
    picture:"peng.jpg",
    Companies1:"Microsoft",
    url1:'https://www.microsoft.com/',
    
    });
});





app.listen(3000);