const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, '../client')))

app.use((req, res) => {
    res.send(404).send('This is not the page you are looking for...')
})

app.listen(3000, () => {
    console.log('Server listening on port 3000')
})