//import module

// Save the result of the createServer() method in a variable named server.

// Call the server's listen() method with the port number 3001.

import http from 'http'

const server = http.createServer()

server.listen(3001, '127.0.0.1', () => {
    console.log('Listening mjs')
})