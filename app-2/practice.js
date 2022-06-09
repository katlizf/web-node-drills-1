//require module

// Save the result of the createServer() method in a variable named server.

// Call the server's listen() method with the port number 3001.

const server = require('http').createServer()

server.listen(3001, '127.0.0.1', () => {
    console.log('Listening js')
})