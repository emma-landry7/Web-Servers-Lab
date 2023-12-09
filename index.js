const express = require('express')
const app = express()
const port = 3000
const port2 = 3001

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/test', (req, res) => {
    res.send('This is a test')
})

app.listen(port, () => {
    // app.get('/test', (req, res) => {
    //     res.send('This is a test')
    // })
    console.log(`App listening at http://localhost:${port}`)
})

app.listen(port2, () => {
    console.log(`App listening at http://localhost:3001`)
})
