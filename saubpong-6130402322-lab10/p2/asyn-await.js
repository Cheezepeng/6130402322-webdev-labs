const status = response => {
    if (response.status >= 200 && response.status < 300){
        return Promise.resolve(response)
    }
    return Promise.reject(new Error(response.statusText))
}

const json = response => response.json()
const fetch = require("node-fetch")
fetch('https://api.github.com/users')
.then(json)
.then(users => users.forEach(element => {
    fetch('https://api.github.com/users' + element.login)
   .then(json) 
   .then(user => console.log({login:element.login,name:user.name}))
}))

