const path = require('path')
const express = require('express')
const aylien = require('aylien_textapi');
const dotenv = require('dotenv');
dotenv.config();

const api = new aylien({
  id: process.env.API_ID,
  key: process.env.API_KEY
});

const app = express()
const port = 8080

// app.use(express.static('dist'))
app.use(express.static('src/client'))

console.log(__dirname)

app.get('/', (req, res) => {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

app.listen(port, () => {
    console.log(`Running on localhost: ${port}`)
})
