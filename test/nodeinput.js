const { Server } = require('http')
const hostname = '127.0.0.1'
const port = 8000


const readline  = require('readline').createInterface({
    input:process.stdin,
    output:process.stdout
})

readline.question('What is your name?', name =>{
    console.log('Hi ' + name +'!')
    readline.close()
})

server.listen(port, hostname, () =>{
    console.log("Dog is running at http://" + hostname + ":" + port + "/")})