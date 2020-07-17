const path = require('path')
const express = require('express')
const aylien = require('aylien_textapi');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();

const api = new aylien({
  id: process.env.API_ID,
  key: process.env.API_KEY
});

const url = 'https://api.aylien.com/api/v1/sentiment'

const app = express()
const port = 8080

// app.use(express.static('dist'))
app.use(express.static('src/client'))
app.use(cors())

// console.log(__dirname)

app.listen(port, () => {
    console.log(`Running on localhost: ${port}`)
})

app.get('/', (req, res) => {
    // res.send('dist/index.html')
    res.send(path.resolve('src/client/views/index.html'))
})

app.post('/post', async(req, res) => {
  try {
    const data = req.body
    console.log('trying: ', data);
    // console.log('trying: ', req);
    // api.sentiment({
    //   url: data
    // }, function(e, r) {
    //   if (e === null) {
    //     console.log('Response: ', r);
    //     // res.send(r);
    //   } else {
    //     console.log('bad url...probably', e);
    //   }
    // })
  } catch(e) {
    console.log('post error fm server: ', e);
  }
})
