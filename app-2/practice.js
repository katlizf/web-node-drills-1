//require module
const addTwoFunction = require('../app-3/addTwoFunction')

const {minusOne} = require('../app-3/functions')
const {timesThree} = require('../app-3/functions')
const {ageText} = require('../app-3/functions')
// Save the result of the createServer() method in a variable named server.

// Call the server's listen() method with the port number 3001.

const server = require('http').createServer()

server.listen(3001, '127.0.0.1', () => {
    console.log('Listening js')
})

console.log(addTwoFunction(2))

console.log(minusOne(5))
console.log(timesThree(5))
console.log(ageText(5))