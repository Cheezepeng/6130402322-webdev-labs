const http = require('http')
const port = 8000

var request1 = require("request");
let list =""

request1.get("https://krunapon.github.io/google/call-kk-restaurants.json", (error, response, body) => {
    if (error){
        return console.dir(error);
    }
    var result = JSON.parse(body);
    var results = result.results;
    const head = "Restaurants in Khon Kaen"
    console.log(head);
    var i = 0;
    for(name of results){
        i++;
        list += `<li>${name.name}</li>`
        
    } 
})



const server = http.createServer((req, res) =>{
    res.statusCode = 200
    res.setHeader('Content-Type','text/html; charset=utf-8');
    res.setHeader('content-Language', 'th')
    

    res.end(`<h1>Restaurant in Khonkaen</h1><ol>${list}</ol>`)
})
server.listen(port, ()=>{
    console.log(`${port}`)
})
