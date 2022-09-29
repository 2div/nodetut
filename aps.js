const http = require('http');

const server = http.createServer((req,res) => {
    if (req.url === '/') {
        res.end('Welcome to the home page')
    }
    if (req.url === '/about') {
        res.end('welcome to about page')
    }

    res.end(`
        <h1>Oope Page not avaliable</h1>
        <a href="/">Go home page</a>
        `)
})

server.listen(5000)