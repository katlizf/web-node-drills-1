//import module
import addTwoFunction from '../app-3/addTwoFunction.js'

import functions from '../app-3/functions.js'
const {minusOne, timesThree, ageText} = functions

// Save the result of the createServer() method in a variable named server.

// Call the server's listen() method with the port number 3001.

import http from 'http'

const server = http.createServer()

server.listen(3001, '127.0.0.1', () => {
    console.log('Listening mjs')
})

console.log(addTwoFunction(2))

console.log(minusOne(5))
console.log(timesThree(5))
console.log(ageText(5))