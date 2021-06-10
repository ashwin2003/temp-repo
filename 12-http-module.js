// const http = require('http');

// const server = http.createServer ((req, res)=> { 
//     //req is used for incoming requests.
//     res.write("Welcome to our Home page");
//     res.end()
// })

// server.listen(5000)

// If you will run only this code then you will not be exited automatically from the terminal as we are using a server which is always looking for requests. And when we will open http://localhost:5000/ we will see "Welcome to our Home page" written there.



const http = require('http');

const server = http.createServer ((req, res)=> { 
    if(req.url === '/') {
        res.end("Welcome to our Home page");
    }
    if(req.url ==='/about') {
        res.end("Here is the About page.")
    }
    res.end(
        `<h1>Oops!</h1>
        <p>No such page</p>
        <a href="/" >Back to Home</a>`
    )
})

server.listen(5000)