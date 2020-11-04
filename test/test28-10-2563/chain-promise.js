const status = response => {
    if (response.status >= 200 && response.status < 300){
        return Promise.resolve(response)
    }
    return Promise.reject(new Error(response.statusText))
}

const json = response => response.json()
const fetch = require("node-fetch")
fetch('http://api.github.com/users/Cheezepeng')
.then(status)
.then(json)
.then(data =>{
    console.log('Request succeeded with JSON response',data)
})
.catch(error =>{
    console.log('Requese failed',error)
})