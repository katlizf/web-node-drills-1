const fs = require('fs')

fs.appendFile('./app-4/text.txt', 'Hello World', err => {
    if (err) {
        console.log(err)
    } else {
        console.log('Success!')
    }
})

fs.readFile('./app-4/text.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log(err)
    } else {
        console.log(data)
    }
})

fs.writeFile('./app-4/text.txt', 'Other string', 'utf-8', err => {
    if (err) {
        console.log(err)
    } else {
        console.log('File has been written')
    }
})

fs.rename('./app-4/text.txt', './app-4/newText.txt', () => {
    console.log('File renamed')
})

fs.unlink('./app-4/newText.txt', () => {
    console.log("File deleted")
})